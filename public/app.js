const schedule = {
  1: {
    date: "2026-10-08",
    day: "Jueves 8",
    concept: "Distinción",
    palette: ["#13131e","#0000e5","#ff4200","#eaeaea"],
    items: [
      ["13:00","Inicio de acreditaciones","Accesos / registro"],
      ["13:00","Apertura Espacio TTL + espacio gastronómico","Espacios generales"],
      ["15:45","Apertura puertas CDO","CDO"],
      ["16:00–18:00","Casa de Oración","Pabellón Amarillo"],
      ["17:00","Apertura de puertas Auditorio principal","Auditorio"],
      ["18:30","Inicio · Adoración","Auditorio principal"],
      ["19:30","Plenaria 1 · Introducción SINERGIA","Auditorio principal"],
      ["20:00","Plenaria 2 · Asher y David","Auditorio principal"],
      ["21:30","Ministración final","Auditorio principal"],
      ["22:00","Anuncios y cierre","Auditorio principal"]
    ]
  },
  2: {
    date: "2026-10-09",
    day: "Viernes 9",
    concept: "Encuentro",
    palette: ["#00003d","#2741ad","#ff3754","#ffebef"],
    items: [
      ["07:00–09:00","Casa de Oración","Pabellón Amarillo"],
      ["08:00","Apertura de puertas Auditorio","Auditorio principal"],
      ["09:00","Inicio · Adoración","Auditorio principal"],
      ["10:00","Plenaria 3 · Mariano Sennewald","Auditorio principal"],
      ["11:15","Break",""],
      ["11:30","Plenaria 4 · Mesa de Comunión TTL","Auditorio principal"],
      ["12:30","Anuncios","Auditorio principal"],
      ["13:00","Cierre bloque mañana · Almuerzo",""],
      ["13:30","Casa de Oración","Pabellón Amarillo"],
      ["16:00","Salas simultáneas · Bloque 1","A+I · Gran Comisión · Iglesia Gloriosa · Evangelio Completo","placeholder"],
      ["17:00","Salas simultáneas · Bloque 2","A+I · Gran Comisión · Iglesia Gloriosa · Evangelio Completo","placeholder"],
      ["18:00–19:00","Casa de Oración","Pabellón Amarillo"],
      ["18:30","Apertura puertas Auditorio principal","Auditorio principal"],
      ["19:00","Inicio · Adoración","Auditorio principal"],
      ["20:00","Plenaria 5 · Heidi Baker","Auditorio principal"],
      ["21:30","Ministración","Auditorio principal"],
      ["22:00","Anuncios y cierre","Auditorio principal"]
    ]
  },
  3: {
    date: "2026-10-10",
    day: "Sábado 10",
    concept: "Integración",
    palette: ["#00009e","#a566ff","#ff6d95","#ffeed7"],
    items: [
      ["07:00–09:00","Casa de Oración","Pabellón Amarillo"],
      ["08:00","Apertura de puertas","Auditorio principal"],
      ["09:00","Adoración","Auditorio principal"],
      ["10:00","Plenaria 6 · Michael Miller","Auditorio principal"],
      ["11:15","Break",""],
      ["11:30","Plenaria 7 · Heidi Baker","Auditorio principal"],
      ["12:30","Anuncios · Ofrenda","Auditorio principal"],
      ["13:00","Cierre bloque mañana",""],
      ["13:30","Casa de Oración","Pabellón Amarillo"],
      ["16:00","Salas simultáneas · Bloque 1","A+I · Gran Comisión · Iglesia Gloriosa · Evangelio Completo"],
      ["17:00","Salas simultáneas · Bloque 2","A+I · Gran Comisión · Iglesia Gloriosa · Evangelio Completo"],
      ["18:00","Break",""],
      ["18:00–19:00","Casa de Oración","Pabellón Amarillo"],
      ["18:30","Apertura de puertas Auditorio","Auditorio principal"],
      ["19:00","Adoración","Auditorio principal"],
      ["20:00","Plenaria 8 · Asher Intrater","Auditorio principal"],
      ["21:00","Plenaria 9 · Mesa de comunión","Auditorio principal"],
      ["22:30","Cierre","Auditorio principal"]
    ]
  }
};

const shotPlan = {
  1: {
    close:"22:00",
    editing: [
      ["13:00–16:30","Mica","Ingest + PREVIA / primeras selecciones"],
      ["16:30–20:00","Berenice","Apertura + people + worship"],
      ["20:00–22:00","Mica","Asher + cierre + selects finales"]
    ],
    blocks: [
      {
        time:"13:00–14:30",
        event:"Acreditación + llegadas",
        zone:"Accesos / Exteriores",
        priority:"Crítica",
        capture:["Llegadas y saludos","Credenciales / pulseras / manos","General + medio + detalle","Clips verticales 9:16","Grupos y expectativa"],
        feeds:["PREVIA Y ACREDITACIÓN · REEL 9:16"],
        crew:"Berenice + Mariana · Jesús roaming",
        handoff:"Primer handoff 14:15 → Mica · entrega 16:00",
        edit:"Mica · turno 13:00–16:30"
      },
      {
        time:"14:30–16:00",
        event:"Espacio TTL + exteriores",
        zone:"Espacio TTL / gastronómico / circulación",
        priority:"Alta",
        capture:["Stands + branding","Interacción real","Comida / mesas / circulación","Fotos grupales","Vertical + 4:5"],
        feeds:["LLEGADA, APERTURA, WORSHIP · CARRUSEL 4:5","RECAP · banco de recursos"],
        crew:"Berenice + Mariana · Jesús supervisa",
        handoff:"Selección exterior antes de 16:30",
        edit:"Mica continúa · Berenice entra a edición 16:30"
      },
      {
        time:"15:45–18:00",
        event:"CDO + apertura Auditorio",
        zone:"CDO / Auditorio",
        priority:"Alta",
        capture:["Oración y quietud","Personas + manos + detalles","Auditorio vacío / montaje","Puertas abriendo","Primer ingreso de audiencia"],
        feeds:["LLEGADA, APERTURA, WORSHIP · CARRUSEL","FIN DÍA 1 · archivo"],
        crew:"Juan + Nadia en CDO · Santiago + Nati Auditorio · Jesús roaming",
        handoff:"CDO 17:15 · apertura Auditorio 18:00",
        edit:"Berenice · turno 16:30–20:00"
      },
      {
        time:"18:30–19:30",
        event:"Adoración",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Músicos individuales + banda","People worship / reacciones","Wide de sala","Manos / instrumentos / pantallas","Clips 9:16 + fotos 4:5"],
        feeds:["LLEGADA, APERTURA, WORSHIP · CARRUSEL","RECAP · REEL"],
        crew:"Santiago + Nati · Mariana people · Jesús supervisión",
        handoff:"Primeras favoritas 19:10",
        edit:"Berenice · turno 16:30–20:00"
      },
      {
        time:"19:30–20:30",
        event:"Introducción + Asher / David",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Speaker frontal / perfil","Gestos + manos","Plano medio + cerrado + wide","Reacción de audiencia","Vertical limpio para reel"],
        feeds:["ASHER · REEL 1:1","FIN DÍA 1 · CARRUSEL","RECAP"],
        crew:"Santiago principal · Nati secundaria · Jesús roaming",
        handoff:"Asher selects 20:05 → edición · entrega 20:30",
        edit:"Berenice hasta 20:00 → Mica releva hasta cierre"
      },
      {
        time:"20:30–22:00",
        event:"Ministración + cierre",
        zone:"Auditorio / people",
        priority:"Crítica",
        capture:["Altar / oración con respeto","Lágrimas / abrazos / ministración","Servidores trabajando","Planos generales de cierre","Últimos detalles / branding"],
        feeds:["FIN DÍA 1 · CARRUSEL","RECAP · REEL"],
        crew:"Santiago + Nati · Juan + Nadia people · Mariana detalles · Jesús supervisa",
        handoff:"Cierre selects 21:30 · handoff final 22:00",
        edit:"Mica · turno 20:00–22:00"
      }
    ]
  },
  2: {
    close:"22:00",
    editing: [
      ["07:00–10:30","Mica","Ingest CDO + worship / entrega 11:00"],
      ["10:30–14:00","Berenice","Mariano + mañana / carrusel 13:00"],
      ["14:00–17:30","Mica","TTL + preparación talleres"],
      ["17:30–21:00","Berenice","Talleres + worship + Heidi"],
      ["21:00–22:00","Mica","Cierre + handoff final"]
    ],
    blocks: [
      {
        time:"07:00–09:00",
        event:"Casa de Oración + apertura",
        zone:"CDO / accesos",
        priority:"Media",
        capture:["Oración + grupos","Detalles del espacio","Llegadas tempranas","Silencio / atmósfera","Verticales de recurso"],
        feeds:["RECAP · banco","TURNO MAÑANA / archivo"],
        crew:"Juan + Nadia · Jesús roaming",
        handoff:"CDO selects 08:45",
        edit:"Mica · turno 07:00–10:30"
      },
      {
        time:"09:00–10:00",
        event:"Worship mañana",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Banda + cantantes","People worship","Wide + medio + detalle","Clips 16:9 y verticales","Reacciones"],
        feeds:["WORSHIP · REEL 16:9","PRIMERA PARTE · CARRUSEL"],
        crew:"Santiago + Nati · Berenice + Mariana people",
        handoff:"Worship 10:00 → edición · entrega 11:00",
        edit:"Mica recibe material en vivo"
      },
      {
        time:"10:00–11:15",
        event:"Mariano Sennewald",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Speaker limpio","Gestos + expresiones","Wide con pantallas","Audiencia escuchando","Vertical / 4:5"],
        feeds:["MARIANO · REEL 4:5","PRIMERA PARTE · CARRUSEL"],
        crew:"Santiago + Nati · Jesús roaming",
        handoff:"Primer selects 10:45 · entrega 11:30",
        edit:"Mica hasta 10:30 → Berenice releva"
      },
      {
        time:"11:30–13:00",
        event:"Mesa de Comunión TTL + anuncios",
        zone:"Auditorio principal",
        priority:"Alta",
        capture:["Mesa completa","Interacciones / risas / escucha","Detalles de comunión","General de audiencia","Cierre del turno mañana"],
        feeds:["PRIMERA PARTE · CARRUSEL FOTOS / CLIPS"],
        crew:"Santiago + Nati · Mariana people · Jesús supervisa",
        handoff:"Handoff continuo 12:10–12:40 · entrega 13:00",
        edit:"Berenice · turno 10:30–14:00"
      },
      {
        time:"13:00–15:45",
        event:"Almuerzo + Espacio TTL + CDO",
        zone:"Exteriores / TTL / CDO",
        priority:"Alta",
        capture:["Comunidad / mesas / conversaciones","Stands + productos","Activaciones","Retratos / grupos","CDO + detalles"],
        feeds:["ESPACIO TTL · REEL 9:16","RECAP","SERVIDORES / archivo"],
        crew:"Mariana + Jesús TTL · Juan + Nadia CDO · Berenice vuelve 14:00",
        handoff:"TTL selects 15:30",
        edit:"Mica · turno 14:00–17:30"
      },
      {
        time:"16:00–18:00",
        event:"Talleres simultáneos",
        zone:"Salas A+I / Gran Comisión / Iglesia Gloriosa / Evangelio Completo",
        priority:"Crítica",
        capture:["1 general por sala","Speaker por sala","Audiencia + interacción","Detalle / branding","Clips cortos verticales"],
        feeds:["TALLERES · CARRUSEL FOTOS / CLIPS"],
        crew:"Santiago + Nati + Berenice + Jesús por salas · Juan/Nadia apoyo · Mariana people",
        handoff:"Cada sala envía selección antes de 17:20 · entrega 18:00",
        edit:"Mica hasta 17:30 → Berenice entra a edición"
      },
      {
        time:"18:30–20:00",
        event:"Puertas + Worship noche",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Entrada + expectativa","Banda / músicos","People worship","Wide + crowd","Vertical 9:16"],
        feeds:["WORSHIP · REEL 9:16","FIN VIERNES · CARRUSEL","RECAP"],
        crew:"Santiago + Nati · Mariana people · Jesús supervisión",
        handoff:"Worship selects 19:20 · entrega 20:00",
        edit:"Berenice · turno 17:30–21:00"
      },
      {
        time:"20:00–21:30",
        event:"Heidi Baker + ministración",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Speaker frontal / perfil","Gestos + emoción","Reacciones","Ministración / altar","Wide de sala"],
        feeds:["HEIDI · REEL 1:1","FIN VIERNES · CARRUSEL","RECAP"],
        crew:"Santiago + Nati · Juan/Nadia people · Jesús roaming",
        handoff:"Heidi selects 20:35 · cierre 21:15",
        edit:"Berenice hasta 21:00 → Mica releva hasta cierre"
      },
      {
        time:"21:30–22:00",
        event:"Cierre viernes",
        zone:"Auditorio / salidas",
        priority:"Alta",
        capture:["Cierre + anuncios","Abrazos / salidas","Últimos grupos","Servidores","Plano final de sala"],
        feeds:["FIN VIERNES · CARRUSEL","RECAP · REEL"],
        crew:"Berenice vuelve a captura · Santiago + Nati · Jesús supervisa",
        handoff:"Handoff final 22:00",
        edit:"Mica · turno final 21:00–22:00"
      }
    ]
  },
  3: {
    close:"22:30",
    editing: [
      ["07:00–10:30","Mica","Ingest CDO + worship / Miller"],
      ["10:30–14:00","Berenice","Miller + Heidi + turno mañana"],
      ["14:00–17:30","Mica","Servidores + TTL + talleres"],
      ["17:30–21:00","Berenice","Talleres + worship + Asher"],
      ["21:00–22:30","Mica","Mesa de comunión + cierre final"]
    ],
    blocks: [
      {
        time:"07:00–09:00",
        event:"Casa de Oración + apertura",
        zone:"CDO / accesos",
        priority:"Media",
        capture:["Oración + comunidad","Llegadas","Detalles de espacio","Servidores tempranos","Verticales de recurso"],
        feeds:["RECAP FINAL · banco","SERVIDORES · CARRUSEL"],
        crew:"Juan + Nadia · Jesús roaming",
        handoff:"Primer handoff 08:45",
        edit:"Mica · turno 07:00–10:30"
      },
      {
        time:"09:00–10:00",
        event:"Worship mañana",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Músicos + banda","People worship","Wide / crowd","Detalles de instrumentos","Vertical + 1:1"],
        feeds:["WORSHIP · REEL 1:1","TURNO MAÑANA · CARRUSEL"],
        crew:"Santiago + Nati · Berenice/Mariana people",
        handoff:"Worship selects 09:50",
        edit:"Mica recibe material"
      },
      {
        time:"10:00–11:15",
        event:"Michael Miller",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Speaker cerrado / medio / wide","Gestos","Audiencia","Pantallas / contexto","4:5 limpio"],
        feeds:["MILLER · REEL 4:5","TURNO MAÑANA · CARRUSEL"],
        crew:"Santiago + Nati · Jesús roaming",
        handoff:"Miller selects 10:35 · entrega 11:00",
        edit:"Mica hasta 10:30 → Berenice releva"
      },
      {
        time:"11:30–13:00",
        event:"Heidi Baker + anuncios",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Speaker + expresiones","Audiencia / emoción","General sala","Detalles de escenario","Momentos de oración"],
        feeds:["HEIDI · REEL 9:16","TURNO MAÑANA · CARRUSEL"],
        crew:"Santiago + Nati · Mariana people · Jesús supervisa",
        handoff:"Heidi + mañana antes de 12:30 · carrusel 13:00",
        edit:"Berenice · turno 10:30–14:00"
      },
      {
        time:"13:00–15:45",
        event:"Almuerzo + servidores + Espacio TTL",
        zone:"Exteriores / TTL / backstage",
        priority:"Alta",
        capture:["Servidores en acción","Hospitalidad / producción","Mesas + comunidad","Stands / merch","Retratos y grupos"],
        feeds:["SERVIDORES · CARRUSEL FOTOS","RECAP FINAL"],
        crew:"Berenice vuelve 14:00 + Mariana · Jesús roaming · Juan/Nadia apoyo",
        handoff:"Servidores selects 16:30 · entrega 19:00",
        edit:"Mica · turno 14:00–17:30"
      },
      {
        time:"16:00–18:00",
        event:"Talleres simultáneos",
        zone:"Salas simultáneas",
        priority:"Crítica",
        capture:["General por sala","Speaker por sala","Audiencia + preguntas","Detalles / branding","Clips verticales"],
        feeds:["TALLERES · CARRUSEL FOTOS / CLIPS"],
        crew:"Santiago + Nati + Berenice + Jesús por salas · Juan/Nadia apoyo",
        handoff:"Selección por sala 17:15 · entrega 18:00",
        edit:"Mica hasta 17:30 → Berenice releva"
      },
      {
        time:"18:30–20:00",
        event:"Puertas + Worship noche",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Entrada / expectativa","Worship banda","People worship","Wide / crowd","1:1 limpio + vertical"],
        feeds:["WORSHIP · REEL 1:1","FIN SÁBADO · CARRUSEL","RECAP FINAL"],
        crew:"Santiago + Nati · Mariana people · Jesús supervisión",
        handoff:"Worship selects 19:20 · entrega 20:00",
        edit:"Berenice · turno 17:30–21:00"
      },
      {
        time:"20:00–21:00",
        event:"Asher Intrater",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Speaker frontal / perfil","Gestos","Audiencia","Wide con escenario","Vertical limpio"],
        feeds:["ASHER · REEL","FIN SÁBADO · CARRUSEL"],
        crew:"Santiago + Nati · Jesús roaming",
        handoff:"Asher selects 20:35 · entrega 21:00",
        edit:"Berenice recibe selects"
      },
      {
        time:"21:00–22:30",
        event:"Mesa de comunión + cierre",
        zone:"Auditorio principal",
        priority:"Crítica",
        capture:["Mesa completa","Comunión + interacción","Cierre emocional","Foto final / crowd","Servidores + backstage final"],
        feeds:["FIN SÁBADO · CARRUSEL","RECAP FINAL · REEL"],
        crew:"Santiago + Nati · Berenice vuelve 21:00 · Juan/Nadia people · Jesús supervisa",
        handoff:"Fin sábado 21:35 · cierre final 22:30",
        edit:"Mica · turno final 21:00–22:30"
      }
    ]
  }
};

const EVENT_TZ = "America/Argentina/Cordoba";
const TEAM_DATA_URL = "/data/team.json";
const PUBLISHING_DATA_URL = "/data/publishing.json";
const PUBLISHING_API_URL = "/api/publishing";
const ADMIN_SESSION_KEY = "sinergia-admin-session";
const PUBLISHING_REFRESH_MS = 10000;
const SOCIAL_STATUS_OPTIONS = ["Sin comenzar","En producción","En revisión","Aprobado","Listo","Programado","Publicado"];
let publishingRows = [];
let selectedSocialDay = "2026-10-08";
let selectedShotDay = 1;
let adminToken = sessionStorage.getItem(ADMIN_SESSION_KEY) || "";
let adminSessionActive = false;
let publishingUpdateInFlight = false;
let latestTeamMembers = [];
const TEAM_REFRESH_MS = 10000;
let lastTeamPayloadHash = "";
let teamRefreshTimer = null;

function initials(name){
  return String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0,2)
    .map(part => part[0]?.toUpperCase() || "")
    .join("");
}

function isPointOfContact(member){
  const role = String(member.role || "").toLowerCase();
  return role.includes("encargado") || role.includes("coordinación") || role.includes("coordinador");
}

function teamCard(member){
  const contactPoint = isPointOfContact(member);
  const roleLabel = member.role ? `${member.role} · ${member.area}` : member.area;
  const description = member.responsibility
    ? member.responsibility
    : contactPoint
      ? `Punto de contacto del área de ${member.area}.`
      : `Integrante del equipo de ${member.area}.`;

  return `
    <article class="team-card ${contactPoint ? "is-contact-point" : ""}">
      <div class="team-card-top">
        <div class="team-avatar">${initials(member.name)}</div>
        ${contactPoint ? '<span class="contact-badge"><i></i>Punto de contacto</span>' : ""}
      </div>
      <h3>${member.name}</h3>
      <div class="team-role">${roleLabel}</div>
      <p>${description}</p>
      <div class="contact">${String(member.status).toLowerCase() === "activo" ? "Activo" : member.status || ""}</div>
    </article>`;
}

function renderTeamGroups(members){
  const areaOrder = ["Fotografía","Media","Video","RRSS","Diseño"];
  const grouped = new Map();

  members.forEach(member => {
    const area = member.area || "Otros";
    if (!grouped.has(area)) grouped.set(area, []);
    grouped.get(area).push(member);
  });

  const orderedAreas = [
    ...areaOrder.filter(area => grouped.has(area)),
    ...[...grouped.keys()].filter(area => !areaOrder.includes(area)).sort()
  ];

  return orderedAreas.map((area, areaIndex) => {
    const areaMembers = grouped.get(area) || [];
    const contacts = areaMembers.filter(isPointOfContact);
    const contactText = contacts.length
      ? `${contacts.length} ${contacts.length === 1 ? "punto de contacto" : "puntos de contacto"}`
      : "Sin punto de contacto definido";

    return `
      <section class="team-area ${areaIndex === 0 ? "is-primary-area" : ""}">
        <header class="team-area-head">
          <div>
            <span class="team-area-index">${String(areaIndex + 1).padStart(2,"0")}</span>
            <h3>${area}</h3>
          </div>
          <div class="team-area-meta">
            <span>${areaMembers.length} ${areaMembers.length === 1 ? "persona" : "personas"}</span>
            <span class="${contacts.length ? "has-contact" : ""}">${contactText}</span>
          </div>
        </header>
        <div class="team-grid">
          ${areaMembers.map(teamCard).join("")}
        </div>
      </section>`;
  }).join("");
}

function setSyncUI(state, label){
  const status = document.querySelector("#syncStatus");
  const btns = [document.querySelector("#refreshDataBtn"), document.querySelector("#teamRefreshBtn")].filter(Boolean);
  if (status){
    status.dataset.state = state;
    const text = status.querySelector("span");
    if (text) text.textContent = label;
  }
  btns.forEach(btn => {
    btn.disabled = state === "loading";
    btn.classList.toggle("is-loading", state === "loading");
  });
}

async function refreshTeamData({manual = false} = {}){
  setSyncUI("loading", manual ? "Actualizando…" : "Sincronizando…");
  try{
    const response = await fetch(`${TEAM_DATA_URL}?t=${Date.now()}`, {cache:"no-store"});
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const payload = await response.json();

    const members = Array.isArray(payload.members)
      ? payload.members
          .filter(m => String(m.status).toLowerCase() === "activo" && !m.is_placeholder)
          .sort((a,b) => Number(a.display_order || 0) - Number(b.display_order || 0))
      : [];

    const grid = document.querySelector("#teamGrid");
    const count = document.querySelector("#teamCount");
    const syncTime = document.querySelector("#teamSyncTime");

    if (grid && members.length){
      const hash = JSON.stringify(members);
      if (hash !== lastTeamPayloadHash){
        grid.innerHTML = renderTeamGroups(members);
        lastTeamPayloadHash = hash;
      }
    }

    latestTeamMembers = members;
    if (publishingRows.length) renderSocialPlan();

    const areas = new Set(members.map(member => member.area).filter(Boolean));
    if (count) count.textContent = `${members.length} integrantes · ${areas.size} áreas`;
    if (syncTime){
      syncTime.textContent = `Última consulta · ${new Intl.DateTimeFormat("es-AR", {
        hour:"2-digit", minute:"2-digit", second:"2-digit", hour12:false
      }).format(new Date())}`;
    }
    setSyncUI("ok", "Actualizado");
  }catch(error){
    console.warn("No se pudo actualizar TEAM:", error);
    const syncTime = document.querySelector("#teamSyncTime");
    if (syncTime) syncTime.textContent = "No se pudo actualizar · usando última versión";
    setSyncUI("error", "Sin conexión");
  }
}

function startTeamAutoRefresh(){
  if (teamRefreshTimer) clearInterval(teamRefreshTimer);
  refreshTeamData();
  teamRefreshTimer = setInterval(() => refreshTeamData(), TEAM_REFRESH_MS);
}

document.querySelector("#refreshDataBtn")?.addEventListener("click", () => refreshTeamData({manual:true}));
document.querySelector("#teamRefreshBtn")?.addEventListener("click", () => refreshTeamData({manual:true}));
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) refreshTeamData();
});


const agendaTabButtons = [...document.querySelectorAll("[data-agenda-tab]")];
const agendaPanels = [...document.querySelectorAll("[data-agenda-panel]")];

function setAgendaTab(tab){
  agendaTabButtons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.agendaTab === tab));
  agendaPanels.forEach(panel => panel.classList.toggle("is-active", panel.dataset.agendaPanel === tab));
  if (tab === "social"){
    setSocialDay(schedule[selectedDay]?.date || selectedSocialDay, {render:false});
    if (!publishingRows.length) refreshPublishingData();
    else renderSocialPlan();
  } else if (tab === "shotlist"){
    setShotDay(socialDayNumber(selectedSocialDay) || selectedDay, {render:false});
    renderShotPlan();
  } else {
    document.body.dataset.day = selectedDay;
  }
}

agendaTabButtons.forEach(btn => btn.addEventListener("click", () => setAgendaTab(btn.dataset.agendaTab)));

function escapeHtml(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function socialOwnerName(row){
  const format = String(row?.format || "").toLowerCase();
  if (format.includes("reel")) return "Santi Almonacid";
  return "Aaron García";
}

function socialDateLabel(date){
  if (!date) return "Sin fecha";
  const labels = {
    "2026-10-08":"Jueves 8",
    "2026-10-09":"Viernes 9",
    "2026-10-10":"Sábado 10"
  };
  return labels[date] || date;
}

const SOCIAL_DAY_META = {
  "2026-10-08": {index:"01", name:"Jueves 8", concept:"Distinción"},
  "2026-10-09": {index:"02", name:"Viernes 9", concept:"Encuentro"},
  "2026-10-10": {index:"03", name:"Sábado 10", concept:"Integración"},
  "unscheduled": {index:"04", name:"Sin fecha", concept:"Pendiente"}
};

function socialDayMeta(date){
  return SOCIAL_DAY_META[date || "unscheduled"] || {
    index:"—",
    name:socialDateLabel(date),
    concept:"Publicaciones"
  };
}

function socialDayNumber(date){
  return {"2026-10-08":1,"2026-10-09":2,"2026-10-10":3}[date] || 1;
}

function setSocialDay(date, {render = true} = {}){
  if (!SOCIAL_DAY_META[date]) return;
  selectedSocialDay = date;
  const dayNumber = socialDayNumber(date);
  const meta = socialDayMeta(date);
  document.body.dataset.day = dayNumber;

  document.querySelectorAll("[data-social-day]").forEach(button => {
    button.classList.toggle("is-active", button.dataset.socialDay === date);
  });

  const number = document.querySelector("#socialDayNumber");
  const name = document.querySelector("#socialDayName");
  const concept = document.querySelector("#socialDayConcept");
  const palette = document.querySelector("#socialDayPalette");
  if (number) number.textContent = meta.index;
  if (name) name.textContent = meta.name;
  if (concept) concept.textContent = meta.concept;
  if (palette) palette.innerHTML = schedule[dayNumber].palette.map(color => `<span style="background:${color}"></span>`).join("");

  if (render && publishingRows.length) renderSocialPlan();
}

function socialFormatKind(format){
  const value = String(format || "").toLowerCase();
  if (value.includes("reel")) return "reel";
  if (value.includes("carrusel") || value.includes("carousel")) return "carousel";
  if (value.includes("story") || value.includes("historia")) return "story";
  if (value.includes("foto") || value.includes("photo")) return "photo";
  return "other";
}

function socialAspectRatio(format){
  const match = String(format || "").match(/\b\d{1,2}:\d{1,2}\b/);
  return match ? match[0] : "";
}

function socialDeadlineMinutes(row){
  const value = row.deadline_time || row.planned_time || "";
  const match = String(value).match(/(\d{1,2}):(\d{2})/);
  return match ? Number(match[1]) * 60 + Number(match[2]) : 9999;
}

function socialSortRows(rows){
  const dateOrder = {"2026-10-08":1,"2026-10-09":2,"2026-10-10":3};
  return [...rows].sort((a,b) => {
    const da = dateOrder[a.planned_date] || 99;
    const db = dateOrder[b.planned_date] || 99;
    if (da !== db) return da - db;
    const ta = socialDeadlineMinutes(a);
    const tb = socialDeadlineMinutes(b);
    if (ta !== tb) return ta - tb;
    return String(a.publishing_id || "").localeCompare(String(b.publishing_id || ""));
  });
}

function fillSocialFilter(id, rows, key, fallback){
  const select = document.querySelector(id);
  if (!select) return;
  const current = select.value;
  const values = [...new Set(rows.map(row => row[key]).filter(Boolean))].sort();
  select.innerHTML = `<option value="all">${fallback}</option>${values.map(v => `<option value="${escapeHtml(v)}">${escapeHtml(v)}</option>`).join("")}`;
  if ([...select.options].some(o => o.value === current)) select.value = current;
}

function socialStatusControl(row, statusValue){
  const normalized = String(statusValue || "Sin comenzar").toLowerCase();
  if (!adminSessionActive){
    return `<span class="social-status-chip" data-status="${escapeHtml(normalized)}">${escapeHtml(statusValue || "Sin comenzar")}</span>`;
  }
  const options = SOCIAL_STATUS_OPTIONS.map(option => {
    const selected = option.toLowerCase() === normalized ? " selected" : "";
    return `<option value="${escapeHtml(option)}"${selected}>${escapeHtml(option)}</option>`;
  }).join("");
  return `
    <label class="social-status-editor">
      <span class="sr-only">Estado de ${escapeHtml(row.title || row.publishing_id)}</span>
      <select class="social-status-select" data-publishing-id="${escapeHtml(row.publishing_id)}" data-status="${escapeHtml(normalized)}" aria-label="Cambiar estado de ${escapeHtml(row.title || row.publishing_id)}">
        ${options}
      </select>
      <small class="social-save-state" data-save-state="${escapeHtml(row.publishing_id)}"></small>
    </label>`;
}

function socialFilteredRows(){
  const platform = document.querySelector("#socialPlatformFilter")?.value || "all";
  const format = document.querySelector("#socialFormatFilter")?.value || "all";
  const status = document.querySelector("#socialStatusFilter")?.value || "all";

  return publishingRows.filter(row => {
    return row.planned_date === selectedSocialDay
      && (platform === "all" || row.platform === platform)
      && (format === "all" || row.format === format)
      && (status === "all" || row.status === status);
  });
}

function renderSocialPlan(){
  const list = document.querySelector("#socialPlanList");
  if (!list) return;

  const dayRows = publishingRows.filter(row => row.planned_date === selectedSocialDay);
  fillSocialFilter("#socialPlatformFilter", dayRows, "platform", "Todas");
  fillSocialFilter("#socialFormatFilter", dayRows, "format", "Todos");
  fillSocialFilter("#socialStatusFilter", dayRows, "status", "Todos");

  setSocialDay(selectedSocialDay, {render:false});

  const count = document.querySelector("#socialPlanCount");
  if (count) count.textContent = `${dayRows.length} ${dayRows.length === 1 ? "pieza" : "piezas"}`;

  const rows = socialSortRows(socialFilteredRows());
  if (!rows.length){
    list.innerHTML = '<div class="social-plan-empty">No hay publicaciones para esta jornada.</div>';
    return;
  }

  list.innerHTML = rows.map(row => {
    const statusValue = String(row.status || "Sin comenzar");
    const time = row.deadline_time || row.planned_time || "—";
    const rawNote = row.notes || "";
    const isReferenceUrl = /^https?:\/\//i.test(rawNote);
    const noteMarkup = isReferenceUrl
      ? `Referencia visual disponible · <a href="${escapeHtml(rawNote)}" target="_blank" rel="noopener noreferrer">Ver referencia ↗</a>`
      : escapeHtml(rawNote || row.copy_text || "Sin notas adicionales.");
    const formatLabel = row.format || "Sin formato";
    const formatKind = socialFormatKind(formatLabel);

    return `
      <article class="social-timeline-item ${row.is_placeholder ? "is-placeholder" : ""}" data-format-kind="${formatKind}">
        <div class="social-timeline-time">
          <strong>${escapeHtml(time)}</strong>
          <span>Entrega</span>
        </div>

        <div class="social-timeline-main">
          <div class="social-timeline-title-line">
            <h4>${escapeHtml(row.title || "Pieza sin título")}</h4>
            <span class="social-format-badge">${escapeHtml(formatLabel)}</span>
          </div>
          <p>${noteMarkup}</p>
          ${row.platform || row.schedule_id ? `
            <div class="social-plan-tags">
              ${row.platform ? `<span>${escapeHtml(row.platform)}</span>` : ""}
              ${row.schedule_id ? `<span>${escapeHtml(row.schedule_id)}</span>` : ""}
            </div>` : ""}
        </div>

        <div class="social-timeline-side">
          <div class="social-plan-owner">
            <strong>${escapeHtml(socialOwnerName(row))}</strong>
            <span>Responsable</span>
          </div>
          <div class="social-plan-status">
            ${socialStatusControl(row, statusValue)}
          </div>
        </div>
      </article>`;
  }).join("");
}

function setShotDay(day, {render = true} = {}){
  const numericDay = Number(day);
  if (!shotPlan[numericDay]) return;
  selectedShotDay = numericDay;
  const data = schedule[numericDay];
  document.body.dataset.day = numericDay;

  document.querySelectorAll("[data-shot-day]").forEach(button => {
    button.classList.toggle("is-active", Number(button.dataset.shotDay) === numericDay);
  });

  const number = document.querySelector("#shotDayNumber");
  const name = document.querySelector("#shotDayName");
  const concept = document.querySelector("#shotDayConcept");
  const palette = document.querySelector("#shotDayPalette");
  if (number) number.textContent = String(numericDay).padStart(2,"0");
  if (name) name.textContent = data.day;
  if (concept) concept.textContent = data.concept;
  if (palette) palette.innerHTML = data.palette.map(color => `<span style="background:${color}"></span>`).join("");

  if (render) renderShotPlan();
}

function shotCrewAssignments(crew){
  return String(crew || "")
    .split("·")
    .map(part => part.trim())
    .filter(Boolean)
    .map(segment => {
      let names = segment;
      let role = "Captura";
      let note = "";

      const rules = [
        [/\s+por salas$/i, "Por salas"],
        [/\s+en CDO$/i, "CDO"],
        [/\s+Auditorio$/i, "Auditorio"],
        [/\s+TTL$/i, "Espacio TTL"],
        [/\s+people$/i, "People"],
        [/\s+detalles$/i, "Detalles"],
        [/\s+apoyo$/i, "Apoyo"],
        [/\s+roaming$/i, "Supervisión · roaming"],
        [/\s+supervisi[oó]n$/i, "Supervisión"],
        [/\s+supervisa$/i, "Supervisión"],
        [/\s+principal$/i, "Principal"],
        [/\s+secundaria$/i, "Secundaria"]
      ];

      for (const [pattern, label] of rules){
        if (pattern.test(names)){
          names = names.replace(pattern,"").trim();
          role = label;
          break;
        }
      }

      const returnMatch = names.match(/\b(vuelve(?:\s+a captura)?(?:\s+\d{1,2}:\d{2})?)/i);
      if (returnMatch){
        note = returnMatch[1].replace(/^vuelve/i,"Vuelve");
        names = names.replace(returnMatch[0],"").replace(/\s+/g," ").trim();
      }

      const people = names
        .replaceAll("/"," + ")
        .split("+")
        .map(name => name.trim())
        .filter(Boolean);

      return {people, role, note};
    });
}

function renderShotCrew(crew){
  const assignments = shotCrewAssignments(crew);
  const peopleCount = new Set(assignments.flatMap(item => item.people)).size;

  return `
    <div class="shot-team-head">
      <span class="shot-ops-label">Equipo asignado</span>
      <small>${peopleCount} ${peopleCount === 1 ? "persona" : "personas"}</small>
    </div>
    <div class="shot-team-list">
      ${assignments.map(assignment => {
        const supervision = assignment.role.toLowerCase().includes("supervisión");
        return `
          <div class="shot-team-assignment ${supervision ? "is-supervision" : ""}">
            <div class="shot-team-avatars" aria-hidden="true">
              ${assignment.people.map(name => `<span>${escapeHtml(initials(name))}</span>`).join("")}
            </div>
            <div class="shot-team-copy">
              <strong>${assignment.people.map(escapeHtml).join(" + ")}</strong>
              <span>${escapeHtml(assignment.role)}${assignment.note ? ` · ${escapeHtml(assignment.note)}` : ""}</span>
            </div>
          </div>`;
      }).join("")}
    </div>`;
}

const SHOT_DAY_INTENT = {
  1: {
    label:"Distinción",
    line:"Mostrar que SINERGIA tiene una identidad propia: intención, carácter, belleza y detalles que hacen que este encuentro se sienta distinto."
  },
  2: {
    label:"Encuentro",
    line:"Priorizar vínculos reales. La imagen tiene que hacer sentir que las personas no solo asistieron: se encontraron, compartieron y fueron parte."
  },
  3: {
    label:"Integración",
    line:"Contar cómo muchas partes distintas funcionan como un solo cuerpo: escenario, servidores, comunidad, oración, talleres y espacios conectados."
  }
};

function shotBriefProfile(block){
  const event = String(block.event || "").toLowerCase();

  if (event.includes("acreditación") || event.includes("llegadas")){
    return {
      intent:"Contar el primer encuentro con SINERGIA: expectativa, bienvenida y energía de llegada.",
      visual:["Mezclar generales que ubiquen + medios de interacción + detalles de credenciales y manos.","Buscar capas con señalética, branding o gente entrando en primer plano.","Priorizar verticales limpios y secuencias que funcionen como apertura de historia."],
      moments:["Primer saludo entre personas.","Entrega de credencial o pulsera.","Grupos llegando juntos y reacción al entrar.","Servidores recibiendo y orientando."],
      avoid:["Filas sin contexto que parezcan trámite.","Personas aisladas mirando a cámara salvo que sea intencional.","Fondos vacíos o desordenados que no sitúen el evento."]
    };
  }

  if (event.includes("espacio ttl") || event.includes("almuerzo") || event.includes("servidores")){
    return {
      intent:"Mostrar comunidad fuera del escenario: conversación, servicio, marcas, descanso y vida compartida.",
      visual:["Trabajar escenas con varias capas y personas interactuando.","Alternar planos de ambiente con detalles de mesas, productos, manos y branding.","Buscar fotos que se sientan vivas, no catálogo de stands."],
      moments:["Conversaciones y risas reales.","Servidores resolviendo, ayudando o preparando.","Interacción con stands y productos.","Retratos/grupos espontáneos durante la pausa."],
      avoid:["Stands vacíos como única cobertura.","Fotos de comida sin personas o contexto.","Interrumpir conversaciones para forzar poses constantemente."]
    };
  }

  if (event.includes("casa de oración") || event.includes("cdo")){
    return {
      intent:"Transmitir intimidad, presencia y quietud sin invadir el momento de oración.",
      visual:["Trabajar a distancia y con lentes largos cuando el momento sea sensible.","Buscar manos, siluetas, grupos pequeños, luz y espacio negativo.","Usar capas, puertas o elementos arquitectónicos para dar profundidad."],
      moments:["Personas orando juntas.","Silencio, espera y concentración.","Detalles de Biblias, manos y rostros en contexto.","Transiciones de gente entrando o saliendo del espacio."],
      avoid:["Primerísimos planos vulnerables sin necesidad.","Flash o intervenciones que rompan la atmósfera.","Convertir un momento íntimo en una escena posada."]
    };
  }

  if (event.includes("worship") || event.includes("adoración")){
    return {
      intent:"Hacer sentir la energía del worship y, al mismo tiempo, la respuesta humana de la sala.",
      visual:["Construir secuencia: wide de sala → músicos → people worship → detalle.","Buscar diagonales de luces, manos, instrumentos y pantallas para crear capas.","Capturar vertical y horizontal; cuidar especialmente fondos detrás de músicos y personas."],
      moments:["Entrada fuerte de una canción.","Manos levantadas y canto colectivo.","Interacción entre músicos.","Reacciones genuinas de la audiencia."],
      avoid:["Quedarse toda la canción en el escenario.","Repetir únicamente planos cerrados de cantantes.","Fotografías donde las pantallas corten cabezas o compitan con el sujeto."]
    };
  }

  if (event.includes("talleres")){
    return {
      intent:"Demostrar simultaneidad y diversidad: varias conversaciones distintas ocurriendo al mismo tiempo dentro de un mismo propósito.",
      visual:["En cada sala obtener mínimo: general + speaker + audiencia + interacción + detalle.","Mantener una lógica visual similar entre salas para que el carrusel sea coherente.","Priorizar identificación de cada espacio sin depender de texto posterior."],
      moments:["Speaker interactuando con asistentes.","Preguntas o participación.","Risas, escucha activa y notas.","Detalles propios que diferencien cada taller."],
      avoid:["Salir de una sala sin un plano general claro.","Cubrir demasiado una sala y dejar otra sin backup.","Fotos del speaker sin ninguna evidencia de audiencia."]
    };
  }

  if (event.includes("mesa") || event.includes("comunión")){
    return {
      intent:"Mostrar unidad, conversación y comunión: distintas voces compartiendo una misma mesa y una misma misión.",
      visual:["Buscar composiciones de dos o más personas en relación.","Combinar mesa completa con reacciones, manos y detalles.","Usar foregrounds para dar sensación de estar dentro de la conversación."],
      moments:["Escucha entre participantes.","Risas o gestos compartidos.","Comunión, manos y elementos de mesa.","Reacción del auditorio a lo que sucede."],
      avoid:["Serie completa de retratos individuales sin interacción.","Ángulos donde micrófonos u objetos tapen rostros.","Perder el contexto de mesa y comunidad."]
    };
  }

  if (event.includes("ministración") || event.includes("cierre")){
    return {
      intent:"Cerrar la historia desde la emoción y la respuesta de las personas, con sensibilidad y respeto.",
      visual:["Trabajar desde periferia antes de acercarse.","Alternar generales emocionales con gestos y detalles discretos.","Buscar servidores acompañando, abrazos y capas de personas."],
      moments:["Oración y acompañamiento.","Abrazos después de la ministración.","Últimas canciones o palabras.","Sala respirando después del momento fuerte."],
      avoid:["Exponer vulnerabilidad de forma invasiva.","Fotografiar demasiado cerca a alguien llorando.","Convertir la ministración en una búsqueda agresiva de impacto."]
    };
  }

  if (event.includes("apertura")){
    return {
      intent:"Mostrar transición: el espacio vacío cobra vida y la expectativa se convierte en encuentro.",
      visual:["Antes/después: auditorio preparado y luego entrando gente.","Puertas, señalética, primeros pasos y primeros planos de sala.","Usar simetría y escala para mostrar magnitud."],
      moments:["Apertura literal de puertas.","Primeras filas ocupándose.","Equipo terminando detalles.","Primer wide con audiencia entrando."],
      avoid:["Solo fotografiar el lugar vacío.","Perder la transformación entre montaje y público.","Encuadres inclinados o desprolijos en arquitecturas."]
    };
  }

  // Speakers / plenaries are the default for named sessions.
  return {
    intent:"Construir una historia del mensaje: presencia del orador, contenido, reacción de la audiencia y escala del momento.",
    visual:["Asegurar frontal, perfil, plano medio, cerrado y wide con escenario.","Buscar gestos limpios y expresiones fuertes, dejando aire para uso editorial.","Intercalar audiencia escuchando para que el mensaje tenga contrapunto humano."],
    moments:["Gestos o frases de énfasis.","Pausa / escucha del auditorio.","Interacción con escenario o pantalla.","Respuesta emocional o colectiva de la sala."],
    avoid:["Cien variaciones del mismo ángulo.","Micrófonos tapando boca u ojos cuando se pueda anticipar.","Pantallas con expresiones poco favorecedoras detrás del speaker."]
  };
}

function shotBriefListHtml(items){
  return (items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("");
}

function openShotBrief(day, index){
  const plan = shotPlan[day];
  const block = plan?.blocks?.[index];
  const modal = document.querySelector("#shotBriefModal");
  if (!block || !modal) return;

  const dayIntent = SHOT_DAY_INTENT[day] || SHOT_DAY_INTENT[1];
  const profile = shotBriefProfile(block);
  const combinedIntent = `${dayIntent.line} En este bloque: ${profile.intent}`;

  const eyebrow = document.querySelector("#shotBriefEyebrow");
  const title = document.querySelector("#shotBriefTitle");
  const meta = document.querySelector("#shotBriefMeta");
  const intent = document.querySelector("#shotBriefIntent");
  const must = document.querySelector("#shotBriefMust");
  const visual = document.querySelector("#shotBriefVisual");
  const moments = document.querySelector("#shotBriefMoments");
  const avoid = document.querySelector("#shotBriefAvoid");
  const feeds = document.querySelector("#shotBriefFeeds");
  const handoff = document.querySelector("#shotBriefHandoff");
  const edit = document.querySelector("#shotBriefEdit");

  if (eyebrow) eyebrow.textContent = `SHOT BRIEF · ${schedule[day].day} · ${dayIntent.label}`;
  if (title) title.textContent = block.event;
  if (meta) meta.textContent = `${block.time} · ${block.zone} · Prioridad ${block.priority}`;
  if (intent) intent.textContent = combinedIntent;
  if (must) must.innerHTML = shotBriefListHtml(block.capture);
  if (visual) visual.innerHTML = shotBriefListHtml(profile.visual);
  if (moments) moments.innerHTML = shotBriefListHtml(profile.moments);
  if (avoid) avoid.innerHTML = shotBriefListHtml(profile.avoid);
  if (feeds) feeds.innerHTML = block.feeds.map(feed => `<span>${escapeHtml(feed)}</span>`).join("");
  if (handoff) handoff.innerHTML = `<b>Handoff</b> · ${escapeHtml(block.handoff)}`;
  if (edit) edit.innerHTML = `<b>Edición</b> · ${escapeHtml(block.edit)}`;

  modal.hidden = false;
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("shot-brief-open");
  setTimeout(() => modal.querySelector(".shot-brief-close")?.focus(), 20);
}

function closeShotBrief(){
  const modal = document.querySelector("#shotBriefModal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("shot-brief-open");
}

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-shot-brief]");
  if (trigger){
    openShotBrief(Number(trigger.dataset.shotBriefDay), Number(trigger.dataset.shotBriefIndex));
    return;
  }
  if (event.target.closest("[data-shot-brief-close]")) closeShotBrief();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.querySelector("#shotBriefModal")?.hidden) closeShotBrief();
});

function renderShotPlan(){
  const container = document.querySelector("#shotOpsList");
  const shifts = document.querySelector("#shotEditingShifts");
  if (!container || !shifts) return;

  const plan = shotPlan[selectedShotDay];
  const count = document.querySelector("#shotBlockCount");
  const headline = document.querySelector("#shotEditingHeadline");
  if (count) count.textContent = `${plan.blocks.length} bloques`;
  if (headline) headline.textContent = `Edición hasta cierre · ${plan.close}`;

  shifts.innerHTML = plan.editing.map(([time, editor, task]) => `
    <span class="shot-edit-shift" title="${escapeHtml(task)}">
      <strong>${escapeHtml(time)}</strong>
      <span>${escapeHtml(editor)}</span>
    </span>`
  ).join("");

  container.innerHTML = plan.blocks.map((block, index) => {
    const priorityClass = String(block.priority || "").toLowerCase().includes("crítica") ? "is-critical" : "";
    return `
      <article class="shot-ops-item ${priorityClass}">
        <div class="shot-ops-time">
          <strong>${escapeHtml(block.time)}</strong>
          <span>${escapeHtml(block.priority)}</span>
        </div>

        <div class="shot-ops-main">
          <div class="shot-ops-title">
            <span class="shot-ops-index">${String(index + 1).padStart(2,"0")}</span>
            <div class="shot-ops-title-copy">
              <h4>${escapeHtml(block.event)}</h4>
              <small>${escapeHtml(block.zone)}</small>
            </div>
            <button class="shot-brief-trigger" type="button" data-shot-brief data-shot-brief-day="${selectedShotDay}" data-shot-brief-index="${index}">
              Ver brief
              <span aria-hidden="true">↗</span>
            </button>
          </div>

          <div class="shot-capture-block">
            <span class="shot-ops-label">Capturar</span>
            <div class="shot-capture-list">
              ${block.capture.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
            </div>
          </div>

          <div class="shot-feeds">
            <span class="shot-ops-label">Para</span>
            <div>${block.feeds.map(feed => `<strong>${escapeHtml(feed)}</strong>`).join("")}</div>
          </div>

          <div class="shot-block-meta">
            <span><b>Handoff</b> · ${escapeHtml(block.handoff)}</span>
            <span><b>Edición</b> · ${escapeHtml(block.edit)}</span>
          </div>
        </div>

        <aside class="shot-ops-side">
          ${renderShotCrew(block.crew)}
        </aside>
      </article>`;
  }).join("");
}

document.querySelectorAll("[data-shot-day]").forEach(button => {
  button.addEventListener("click", () => setShotDay(Number(button.dataset.shotDay)));
});

async function fetchPublishingPayload(){
  try{
    const response = await fetch(`${PUBLISHING_API_URL}?t=${Date.now()}`, {cache:"no-store"});
    if (response.ok) return await response.json();
  }catch(error){
    console.warn("API PUBLISHING no disponible, usando fallback local:", error);
  }
  const fallback = await fetch(`${PUBLISHING_DATA_URL}?t=${Date.now()}`, {cache:"no-store"});
  if (!fallback.ok) throw new Error(`HTTP ${fallback.status}`);
  return fallback.json();
}

async function refreshPublishingData({silent = false} = {}){
  const button = document.querySelector("#publishingRefreshBtn");
  if (!silent) button?.classList.add("is-loading");
  if (button && !silent) button.disabled = true;
  try{
    const payload = await fetchPublishingPayload();
    publishingRows = Array.isArray(payload.items) ? payload.items : [];
    renderSocialPlan();
  }catch(error){
    console.warn("No se pudo actualizar PUBLISHING:", error);
    const list = document.querySelector("#socialPlanList");
    if (list && !publishingRows.length) list.innerHTML = '<div class="social-plan-empty">No se pudo cargar el Social Media Plan.</div>';
  }finally{
    if (!silent) button?.classList.remove("is-loading");
    if (button && !silent) button.disabled = false;
  }
}

function setAuthError(message = ""){
  const error = document.querySelector("#authError");
  if (error) error.textContent = message;
}

function showSaveToast(message, tone = "ok"){
  const toast = document.querySelector("#saveToast");
  if (!toast) return;
  toast.textContent = message;
  toast.dataset.tone = tone;
  toast.classList.add("is-visible");
  clearTimeout(showSaveToast.timer);
  showSaveToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function openAuthModal(){
  const modal = document.querySelector("#authModal");
  if (!modal) return;
  modal.hidden = false;
  modal.setAttribute("aria-hidden","false");
  document.body.classList.add("auth-open");
  setAuthError("");
  setTimeout(() => document.querySelector("#authPassword")?.focus(), 30);
}

function closeAuthModal(){
  const modal = document.querySelector("#authModal");
  if (!modal) return;
  modal.hidden = true;
  modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("auth-open");
  setAuthError("");
}

function updateEditModeUI(){
  document.body.classList.toggle("is-edit-mode", adminSessionActive);
  const button = document.querySelector("#editModeBtn");
  const label = document.querySelector("#editModeLabel");
  if (button){
    button.classList.toggle("is-active", adminSessionActive);
    button.setAttribute("aria-label", adminSessionActive ? "Salir del modo edición" : "Ingresar al modo edición");
  }
  if (label) label.textContent = adminSessionActive ? "Salir" : "Editar";
  if (publishingRows.length) renderSocialPlan();
}

function clearAdminSession({toast = false} = {}){
  adminToken = "";
  adminSessionActive = false;
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  updateEditModeUI();
  if (toast) showSaveToast("Modo edición cerrado");
}

async function verifyAdminSession(){
  if (!adminToken){
    adminSessionActive = false;
    updateEditModeUI();
    return false;
  }
  try{
    const response = await fetch("/api/session", {headers:{Authorization:`Bearer ${adminToken}`},cache:"no-store"});
    if (!response.ok) throw new Error("Sesión inválida");
    adminSessionActive = true;
    updateEditModeUI();
    return true;
  }catch(error){
    clearAdminSession();
    return false;
  }
}

async function loginAdmin(username, password){
  const response = await fetch("/api/login", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({username,password})
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "No se pudo iniciar sesión.");
  adminToken = payload.token || "";
  if (!adminToken) throw new Error("El servidor no devolvió una sesión válida.");
  sessionStorage.setItem(ADMIN_SESSION_KEY, adminToken);
  adminSessionActive = true;
  updateEditModeUI();
}

async function updatePublishingStatus(publishingId, nextStatus, select){
  if (!adminSessionActive || !adminToken){ openAuthModal(); return; }
  const row = publishingRows.find(item => item.publishing_id === publishingId);
  const previousStatus = row?.status || "Sin comenzar";
  const state = document.querySelector(`[data-save-state="${CSS.escape(publishingId)}"]`);
  publishingUpdateInFlight = true;
  if (select) select.disabled = true;
  if (state) state.textContent = "Guardando…";
  try{
    const response = await fetch("/api/publishing/status", {
      method:"POST",
      headers:{"Content-Type":"application/json",Authorization:`Bearer ${adminToken}`},
      body:JSON.stringify({publishing_id:publishingId,status:nextStatus})
    });
    const payload = await response.json().catch(() => ({}));
    if (response.status === 401){
      clearAdminSession();
      openAuthModal();
      throw new Error("La sesión venció. Ingresa nuevamente.");
    }
    if (!response.ok) throw new Error(payload.error || "No se pudo guardar el estado.");
    if (row){
      row.status = payload.item?.status || nextStatus;
      row.updated_at = payload.item?.updated_at || "";
      row.updated_by = payload.item?.updated_by || "sinergia";
    }
    renderSocialPlan();
    showSaveToast("Estado guardado");
  }catch(error){
    if (row) row.status = previousStatus;
    if (select){ select.value = previousStatus; select.disabled = false; }
    if (state) state.textContent = "Error al guardar";
    showSaveToast(error.message || "No se pudo guardar","error");
  }finally{
    publishingUpdateInFlight = false;
  }
}

document.querySelector("#editModeBtn")?.addEventListener("click", () => {
  if (adminSessionActive) clearAdminSession({toast:true});
  else openAuthModal();
});
document.querySelectorAll("[data-auth-close]").forEach(button => button.addEventListener("click", closeAuthModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && !document.querySelector("#authModal")?.hidden) closeAuthModal();
});
document.querySelector("#authForm")?.addEventListener("submit", async event => {
  event.preventDefault();
  const submit = document.querySelector("#authSubmitBtn");
  const username = document.querySelector("#authUsername")?.value.trim() || "";
  const password = document.querySelector("#authPassword")?.value || "";
  setAuthError("");
  if (submit){ submit.disabled = true; submit.textContent = "Ingresando…"; }
  try{
    await loginAdmin(username,password);
    const passwordInput = document.querySelector("#authPassword");
    if (passwordInput) passwordInput.value = "";
    closeAuthModal();
    showSaveToast("Modo edición activado");
  }catch(error){
    setAuthError(error.message || "Usuario o contraseña incorrectos.");
  }finally{
    if (submit){ submit.disabled = false; submit.textContent = "Ingresar y editar"; }
  }
});
document.querySelector("#socialPlanList")?.addEventListener("change", event => {
  const select = event.target.closest(".social-status-select");
  if (!select) return;
  select.dataset.status = select.value.toLowerCase();
  updatePublishingStatus(select.dataset.publishingId,select.value,select);
});

["#socialPlatformFilter","#socialFormatFilter","#socialStatusFilter"].forEach(selector => {
  document.querySelector(selector)?.addEventListener("change", renderSocialPlan);
});

document.querySelectorAll("[data-social-day]").forEach(button => {
  button.addEventListener("click", () => setSocialDay(button.dataset.socialDay));
});

document.querySelector("#socialClearFilters")?.addEventListener("click", () => {
  ["#socialPlatformFilter","#socialFormatFilter","#socialStatusFilter"].forEach(selector => {
    const select = document.querySelector(selector);
    if (select) select.value = "all";
  });
  renderSocialPlan();
});

document.querySelector("#publishingRefreshBtn")?.addEventListener("click", refreshPublishingData);

function initShotListFilter(){
  const grid = document.querySelector("#coverageShotGrid");
  const filter = document.querySelector("#shotCategoryFilter");
  const summary = document.querySelector("#shotFilterSummary");
  if (!grid || !filter) return;

  const cards = [...grid.querySelectorAll(".coverage-shot-card")];

  cards
    .sort((a,b) => {
      const groupA = a.dataset.shotGroup === "core" ? 0 : 1;
      const groupB = b.dataset.shotGroup === "core" ? 0 : 1;
      if (groupA !== groupB) return groupA - groupB;
      const numA = Number(a.querySelector(".shot-card-head > span")?.textContent || 999);
      const numB = Number(b.querySelector(".shot-card-head > span")?.textContent || 999);
      return numA - numB;
    })
    .forEach(card => grid.appendChild(card));

  cards.forEach((card,index) => {
    const number = card.querySelector(".shot-card-head > span");
    if (number) number.textContent = String(index + 1).padStart(2,"0");
  });

  const render = () => {
    const value = filter.value;
    let visible = 0;
    cards.forEach(card => {
      const group = card.dataset.shotGroup || "other";
      const show = value === "all" || value === group;
      card.hidden = !show;
      if (show) visible += 1;
    });

    const coreCount = cards.filter(card => card.dataset.shotGroup === "core").length;
    const otherCount = cards.length - coreCount;
    if (summary){
      summary.textContent = value === "core"
        ? `${coreCount} CORE`
        : value === "other"
          ? `${otherCount} OTROS`
          : `${coreCount} CORE · ${otherCount} OTROS · CORE primero`;
    }
    grid.dataset.filter = value;
    grid.setAttribute("aria-label", `Shot list · ${visible} elementos visibles`);
  };

  filter.addEventListener("change", render);
  render();
}

initShotListFilter();

const navButtons = [...document.querySelectorAll("[data-view]")];
const views = [...document.querySelectorAll(".view")];
let selectedDay = 1;

function releaseNavigationLocks(){
  // Any navigation action should always restore a usable document state.
  document.body.classList.remove("auth-open","shot-brief-open");
  document.body.style.removeProperty("overflow");
  document.documentElement.style.removeProperty("overflow");

  const authModal = document.querySelector("#authModal");
  if (authModal){
    authModal.hidden = true;
    authModal.setAttribute("aria-hidden","true");
  }

  const shotBriefModal = document.querySelector("#shotBriefModal");
  if (shotBriefModal){
    shotBriefModal.hidden = true;
    shotBriefModal.setAttribute("aria-hidden","true");
  }

  // Prevent a stale focused control inside a hidden overlay from trapping keyboard/mobile input.
  const active = document.activeElement;
  if (active && active !== document.body && typeof active.blur === "function") active.blur();
}

function setView(id, {scroll = true} = {}){
  const target = views.find(view => view.id === id);
  if (!target) return false;

  releaseNavigationLocks();

  views.forEach(view => {
    const active = view === target;
    view.classList.toggle("is-active", active);
    view.setAttribute("aria-hidden", active ? "false" : "true");
  });

  navButtons.forEach(btn => {
    const active = btn.dataset.view === id;
    btn.classList.toggle("is-active", active);
    if (active) btn.setAttribute("aria-current","page");
    else btn.removeAttribute("aria-current");
  });

  document.body.dataset.currentView = id;

  // This is a SPA-style view switch. Never leave a "#" URL behind.
  if (window.location.hash){
    history.replaceState(history.state, "", window.location.pathname + window.location.search);
  }

  if (scroll) window.scrollTo({top:0,left:0,behavior:"auto"});
  return true;
}

function handleInternalNavigation(event){
  const control = event.currentTarget;
  const id = control.dataset.view || control.dataset.go;
  if (!id) return;

  // Anchors such as the logo have a fallback href, but normal clicks stay inside the app.
  if (event.cancelable) event.preventDefault();
  setView(id);
}

navButtons.forEach(btn => btn.addEventListener("click", handleInternalNavigation));
document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", handleInternalNavigation));

// Recover gracefully from old/bookmarked "#"-style URLs.
window.addEventListener("hashchange", () => {
  if (window.location.hash === "#" || window.location.hash === "#home"){
    setView("home", {scroll:false});
  }
});

function parseClock(value){
  const match = String(value).match(/(\d{1,2}):(\d{2})/);
  if (!match) return null;
  return Number(match[1]) * 60 + Number(match[2]);
}

function explicitEnd(value){
  const parts = String(value).split(/[–-]/);
  if (parts.length < 2) return null;
  return parseClock(parts[1]);
}

function argentinaNow(){
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: EVENT_TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map(p => [p.type, p.value]));
  const date = `${values.year}-${values.month}-${values.day}`;
  const minutes = Number(values.hour) * 60 + Number(values.minute);
  return {
    date,
    minutes,
    seconds: Number(values.second),
    clock: `${values.hour}:${values.minute}`
  };
}

function getItemWindows(day){
  const items = schedule[day].items;
  const starts = items.map(item => parseClock(item[0]));

  return items.map((item, index) => {
    const start = starts[index];
    const rangedEnd = explicitEnd(item[0]);
    const nextStrictStart = starts.find((candidate, candidateIndex) => candidateIndex > index && candidate > start);
    const end = rangedEnd ?? nextStrictStart ?? Math.min(start + 60, 24 * 60);
    return {start, end};
  });
}

function getDayRelation(day, now){
  const target = schedule[day].date;
  if (now.date < target) return "future";
  if (now.date > target) return "past";
  return "today";
}

function getLiveState(day, now = argentinaNow()){
  const relation = getDayRelation(day, now);
  const windows = getItemWindows(day);
  const current = [];
  let nextIndex = -1;

  if (relation === "today"){
    windows.forEach((window, index) => {
      if (now.minutes >= window.start && now.minutes < window.end) current.push(index);
    });
    nextIndex = windows.findIndex(window => window.start > now.minutes);
  } else if (relation === "future"){
    nextIndex = 0;
  }

  return {relation, windows, current, nextIndex};
}

function liveSummary(day, state, now){
  if (state.relation === "past"){
    return {
      label: "Jornada finalizada",
      title: schedule[day].day,
      detail: "Cronograma completado",
      tone: "done"
    };
  }

  if (state.relation === "future"){
    const first = schedule[day].items[0];
    return {
      label: "Próximo",
      title: first[1],
      detail: `${schedule[day].day} · ${first[0]}`,
      tone: "next"
    };
  }

  if (state.current.length){
    const titles = state.current.map(index => schedule[day].items[index][1]);
    return {
      label: state.current.length > 1 ? `AHORA · ${state.current.length} frentes activos` : "AHORA",
      title: state.current.length > 1 ? titles[0] : titles[0],
      detail: state.current.length > 1 ? `+${state.current.length - 1} simultáneo · ${now.clock}` : `${schedule[day].items[state.current[0]][2] || schedule[day].day} · ${now.clock}`,
      tone: "live"
    };
  }

  if (state.nextIndex >= 0){
    const next = schedule[day].items[state.nextIndex];
    return {
      label: "Próximo",
      title: next[1],
      detail: `${next[0]} · ${next[2] || schedule[day].day}`,
      tone: "next"
    };
  }

  return {
    label: "Cierre de jornada",
    title: schedule[day].day,
    detail: `Hora local · ${now.clock}`,
    tone: "done"
  };
}

function renderDay(day){
  selectedDay = day;
  const data = schedule[day];
  document.body.dataset.day = day;
  document.querySelectorAll("[data-day]").forEach(btn => btn.classList.toggle("is-active", Number(btn.dataset.day) === Number(day)));
  document.querySelector("#dayNumber").textContent = String(day).padStart(2,"0");
  document.querySelector("#dayName").textContent = data.day;
  document.querySelector("#dayConcept").textContent = data.concept;
  document.querySelector("#dayPalette").innerHTML = data.palette.map(c => `<span style="background:${c}"></span>`).join("");

  document.querySelector("#timeline").innerHTML = `
    <div class="schedule-livebar" id="scheduleLivebar">
      <div class="livebar-left">
        <span class="live-pulse" aria-hidden="true"></span>
        <div>
          <span class="livebar-kicker" id="livebarKicker">Sincronizado</span>
          <strong id="livebarTitle">Calculando cronograma…</strong>
        </div>
      </div>
      <div class="live-clock">
        <strong id="liveClock">--:--</strong>
        <span>Argentina</span>
      </div>
    </div>
    <div class="timeline-list">
      ${data.items.map((item, index) => {
        const isPlaceholder = item[3] === "placeholder";
        return `<article class="timeline-item ${isPlaceholder ? "placeholder" : ""}" data-index="${index}">
          <div class="timeline-time">${item[0]}</div>
          <div class="timeline-title">${item[1]}<small>${item[2] || "&nbsp;"}</small></div>
          <div class="timeline-role">${isPlaceholder ? '<span class="placeholder-tag">Detalle pendiente</span>' : 'Cobertura · por asignar'}</div>
          <div class="timeline-live-meta" aria-hidden="true"></div>
          <div class="timeline-progress" aria-hidden="true"><span></span></div>
        </article>`;
      }).join("")}
    </div>`;

  refreshTimelineLiveState();
}

document.querySelectorAll("[data-day]").forEach(btn => btn.addEventListener("click", () => renderDay(Number(btn.dataset.day))));

function refreshTimelineLiveState(){
  const now = argentinaNow();
  const state = getLiveState(selectedDay, now);
  const summary = liveSummary(selectedDay, state, now);
  const items = [...document.querySelectorAll("#timeline .timeline-item")];

  const livebar = document.querySelector("#scheduleLivebar");
  const kicker = document.querySelector("#livebarKicker");
  const title = document.querySelector("#livebarTitle");
  const clock = document.querySelector("#liveClock");

  if (livebar) livebar.dataset.tone = summary.tone;
  if (kicker) kicker.textContent = summary.label;
  if (title) title.textContent = summary.title;
  if (clock) clock.textContent = now.clock;

  items.forEach((el, index) => {
    const window = state.windows[index];
    const isCurrent = state.current.includes(index);
    const isPast = state.relation === "past" || (state.relation === "today" && now.minutes >= window.end);
    const isNext = index === state.nextIndex;

    el.classList.toggle("is-current", isCurrent);
    el.classList.toggle("is-past", isPast && !isCurrent);
    el.classList.toggle("is-next", isNext && !isCurrent);

    const meta = el.querySelector(".timeline-live-meta");
    const progress = el.querySelector(".timeline-progress span");

    if (meta){
      if (isCurrent){
        meta.innerHTML = '<span class="now-chip"><i></i> AHORA</span>';
      } else if (isNext){
        meta.innerHTML = '<span class="next-chip">SIGUE</span>';
      } else if (isPast){
        meta.innerHTML = '<span class="past-chip">OK</span>';
      } else {
        meta.innerHTML = "";
      }
    }

    if (progress){
      if (isCurrent){
        const duration = Math.max(window.end - window.start, 1);
        const pct = Math.min(100, Math.max(0, ((now.minutes + now.seconds / 60 - window.start) / duration) * 100));
        progress.style.width = `${pct}%`;
      } else {
        progress.style.width = "0%";
      }
    }
  });
}

function getConferenceDayFromDate(date){
  return Number(Object.keys(schedule).find(day => schedule[day].date === date)) || null;
}

function nextConferenceItem(now){
  for (const day of [1,2,3]){
    if (schedule[day].date < now.date) continue;
    const windows = getItemWindows(day);
    for (let i = 0; i < schedule[day].items.length; i++){
      if (schedule[day].date > now.date || windows[i].start > now.minutes){
        return {day, index:i};
      }
    }
  }
  return null;
}

function refreshHomeLiveState(){
  const now = argentinaNow();
  const day = getConferenceDayFromDate(now.date);
  const label = document.querySelector("#homeNowLabel");
  const title = document.querySelector("#homeNowTitle");
  const time = document.querySelector("#homeNowTime");
  const meta = document.querySelector("#homeNowMeta");
  if (!label || !title || !time || !meta) return;

  if (day){
    const state = getLiveState(day, now);
    const summary = liveSummary(day, state, now);
    label.textContent = summary.label;
    title.textContent = summary.title;

    if (state.current.length){
      const first = schedule[day].items[state.current[0]];
      time.innerHTML = `<i></i> ${schedule[day].day} · ${now.clock}`;
      meta.textContent = state.current.length > 1 ? `+${state.current.length - 1} frente simultáneo` : (first[2] || "En curso");
    } else if (state.nextIndex >= 0){
      const next = schedule[day].items[state.nextIndex];
      time.innerHTML = `<i></i> ${schedule[day].day} · ${next[0]}`;
      meta.textContent = next[2] || "Próximo bloque";
    } else {
      time.innerHTML = `<i></i> ${schedule[day].day}`;
      meta.textContent = "Jornada completada";
    }
    return;
  }

  const next = nextConferenceItem(now);
  if (next){
    const item = schedule[next.day].items[next.index];
    label.textContent = "Próximo hito";
    title.textContent = item[1];
    time.innerHTML = `<i></i> ${schedule[next.day].day} · ${item[0]}`;
    meta.textContent = item[2] || "Cronograma";
  } else {
    label.textContent = "SINERGIA 2026";
    title.textContent = "Conferencia finalizada";
    time.innerHTML = "<i></i> 08—10 OCT 2026";
    meta.textContent = "Cronograma completado";
  }
}

function updateCountdown(){
  const now = new Date();
  const start = new Date("2026-10-08T13:00:00-03:00");
  const end = new Date("2026-10-10T23:00:00-03:00");
  const label = document.querySelector("#countdownLabel");
  const value = document.querySelector("#countdownValue");
  if (!label || !value) return;

  if (now < start){
    const diff = start - now;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    label.textContent = "Para el inicio";
    value.textContent = days > 0 ? `${days}d ${hours}h` : `${hours}h`;
  } else if (now <= end){
    label.textContent = "Estado";
    value.textContent = "EN VIVO";
  } else {
    label.textContent = "Estado";
    value.textContent = "FINALIZADO";
  }
}

function selectCurrentDay(){
  const now = argentinaNow();
  const current = getConferenceDayFromDate(now.date);
  if (current) return current;
  if (now.date < schedule[1].date) return 1;
  return 3;
}

function refreshClockDrivenUI(){
  updateCountdown();
  refreshHomeLiveState();
  refreshTimelineLiveState();

  const now = argentinaNow();
  const currentDay = getConferenceDayFromDate(now.date);
  if (currentDay && selectedDay !== currentDay && !document.querySelector(".day-btn:hover")){
    // During the conference the initial load always follows the real day.
    // Manual day browsing is still respected after the user switches tabs.
  }
}

const initialAgendaDay = selectCurrentDay();
selectedDay = initialAgendaDay;
document.body.dataset.day = initialAgendaDay;
setSocialDay(schedule[initialAgendaDay].date, {render:false});
setShotDay(initialAgendaDay, {render:false});
renderShotPlan();
refreshClockDrivenUI();
setInterval(refreshClockDrivenUI, 30000);
startTeamAutoRefresh();
verifyAdminSession();
refreshPublishingData();
setInterval(() => {
  if (!publishingUpdateInFlight) refreshPublishingData({silent:true});
}, PUBLISHING_REFRESH_MS);
