const STATUS_OPTIONS = ["Sin comenzar","En producción","En revisión","Aprobado","Listo","Programado","Publicado"];
const SESSION_TTL_MS = 6 * 60 * 60 * 1000;
const ADMIN_USER = "sinergia";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try {
      if (url.pathname === "/api/login") return login(request, env);
      if (url.pathname === "/api/session") return session(request, env);
      if (url.pathname === "/api/publishing") return publishing(request, env);
      if (url.pathname === "/api/publishing/status") return updateStatus(request, env);
      return json({ok:false,error:"Endpoint no encontrado."},404);
    } catch (error) {
      console.error(error);
      return json({ok:false,error:"Error interno del servidor."},500);
    }
  }
};

async function login(request, env) {
  if (request.method !== "POST") return json({ok:false,error:"Método no permitido."},405);
  if (!env.ADMIN_PASSWORD || !env.SESSION_SECRET) return json({ok:false,error:"Edición todavía no configurada."},503);
  const body = await readJson(request);
  const okUser = await same(String(body.username || ""), ADMIN_USER);
  const okPass = await same(String(body.password || ""), String(env.ADMIN_PASSWORD));
  if (!okUser || !okPass) return json({ok:false,error:"Usuario o contraseña incorrectos."},401);
  const token = await sign({sub:ADMIN_USER,exp:Date.now()+SESSION_TTL_MS}, env.SESSION_SECRET);
  return json({ok:true,token,user:ADMIN_USER,expires_in:SESSION_TTL_MS/1000});
}

async function session(request, env) {
  if (request.method !== "GET") return json({ok:false,error:"Método no permitido."},405);
  const s = await auth(request, env);
  return s ? json({ok:true,user:s.sub,exp:s.exp}) : json({ok:false,error:"Sesión inválida o vencida."},401);
}

async function publishing(request, env) {
  if (request.method !== "GET") return json({ok:false,error:"Método no permitido."},405);
  const payload = await callSheet(env,{action:"getPublishing"});
  return json(payload,payload.ok === false ? 502 : 200);
}

async function updateStatus(request, env) {
  if (request.method !== "POST") return json({ok:false,error:"Método no permitido."},405);
  const s = await auth(request, env);
  if (!s) return json({ok:false,error:"Sesión inválida o vencida."},401);
  const body = await readJson(request);
  const id = String(body.publishing_id || "").trim();
  const status = String(body.status || "").trim();
  if (!/^PUB-[A-Z]{3}-\d{3}$/i.test(id)) return json({ok:false,error:"ID inválido."},400);
  if (!STATUS_OPTIONS.includes(status)) return json({ok:false,error:"Estado no permitido."},400);
  const payload = await callSheet(env,{action:"updateStatus",publishing_id:id,status,updated_by:s.sub});
  return json(payload,payload.ok === false ? 502 : 200);
}

async function callSheet(env, data) {
  if (!env.APPS_SCRIPT_URL || !env.APPS_SCRIPT_SECRET) return {ok:false,error:"Conexión con Google Sheets no configurada."};
  const response = await fetch(env.APPS_SCRIPT_URL,{
    method:"POST",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify({...data,secret:env.APPS_SCRIPT_SECRET}),
    redirect:"follow"
  });
  const raw = await response.text();
  let payload;
  try { payload = JSON.parse(raw); } catch { throw new Error("Respuesta inválida de Google Sheets."); }
  if (!response.ok) return {ok:false,error:payload.error || "Error al conectar con Google Sheets."};
  return payload;
}

async function auth(request, env) {
  if (!env.SESSION_SECRET) return null;
  const m = (request.headers.get("Authorization") || "").match(/^Bearer\s+(.+)$/i);
  if (!m) return null;
  return verify(m[1],env.SESSION_SECRET);
}

async function sign(data, secret) {
  const payload = b64url(new TextEncoder().encode(JSON.stringify(data)));
  const sig = await hmac(payload,secret);
  return payload+"."+sig;
}

async function verify(token, secret) {
  const [payload,sig,...rest] = String(token || "").split(".");
  if (!payload || !sig || rest.length) return null;
  const expected = await hmac(payload,secret);
  if (!(await same(sig,expected))) return null;
  try {
    const data = JSON.parse(new TextDecoder().decode(fromB64url(payload)));
    if (!data.sub || !data.exp || Date.now() >= Number(data.exp)) return null;
    return data;
  } catch { return null; }
}

async function hmac(value, secret) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw",enc.encode(secret),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
  return b64url(new Uint8Array(await crypto.subtle.sign("HMAC",key,enc.encode(value))));
}

async function same(a,b) {
  const enc = new TextEncoder();
  const [ha,hb] = await Promise.all([crypto.subtle.digest("SHA-256",enc.encode(a)),crypto.subtle.digest("SHA-256",enc.encode(b))]);
  const aa = new Uint8Array(ha), bb = new Uint8Array(hb);
  let diff = 0;
  for (let i=0;i<aa.length;i++) diff |= aa[i]^bb[i];
  return diff === 0;
}

function b64url(bytes) {
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");
}
function fromB64url(v) {
  const s = v.replace(/-/g,"+").replace(/_/g,"/")+"=".repeat((4-v.length%4)%4);
  const raw = atob(s);
  return Uint8Array.from(raw,c=>c.charCodeAt(0));
}
async function readJson(request) { try { return await request.json(); } catch { return {}; } }
function json(data,status=200) {
  return new Response(JSON.stringify(data),{status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
}
