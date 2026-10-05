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

const EVENT_TZ = "America/Argentina/Cordoba";
const TEAM_DATA_URL = "/data/team.json";
const PUBLISHING_DATA_URL = "/data/publishing.json";
const PUBLISHING_API_URL = "/api/publishing";
const ADMIN_SESSION_KEY = "sinergia-admin-session";
const PUBLISHING_REFRESH_MS = 10000;
const SOCIAL_STATUS_OPTIONS = ["Sin comenzar","En producción","En revisión","Aprobado","Listo","Programado","Publicado"];
let publishingRows = [];
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
  if (tab === "social" && !publishingRows.length) refreshPublishingData();
}

agendaTabButtons.forEach(btn => btn.addEventListener("click", () => setAgendaTab(btn.dataset.agendaTab)));

function escapeHtml(value){
  return String(value ?? "")
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;");
}

function socialOwnerName(ownerId){
  const member = latestTeamMembers.find(m => m.member_id === ownerId);
  if (member) return member.name;
  if (!ownerId || String(ownerId).startsWith("TEAM-DEMO")) return "Por asignar";
  return ownerId;
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
  const day = document.querySelector("#socialDayFilter")?.value || "all";
  const platform = document.querySelector("#socialPlatformFilter")?.value || "all";
  const format = document.querySelector("#socialFormatFilter")?.value || "all";
  const status = document.querySelector("#socialStatusFilter")?.value || "all";

  return publishingRows.filter(row => {
    const dayOk = day === "all"
      || (day === "unscheduled" ? !row.planned_date : row.planned_date === day);
    return dayOk
      && (platform === "all" || row.platform === platform)
      && (format === "all" || row.format === format)
      && (status === "all" || row.status === status);
  });
}

function renderSocialPlan(){
  const list = document.querySelector("#socialPlanList");
  if (!list) return;

  fillSocialFilter("#socialPlatformFilter", publishingRows, "platform", "Todas");
  fillSocialFilter("#socialFormatFilter", publishingRows, "format", "Todos");
  fillSocialFilter("#socialStatusFilter", publishingRows, "status", "Todos");

  const total = publishingRows.length;
  const ready = publishingRows.filter(r => ["listo","programado"].includes(String(r.status).toLowerCase())).length;
  const published = publishingRows.filter(r => String(r.status).toLowerCase() === "publicado").length;
  const pending = publishingRows.filter(r => ["placeholder","borrador","sin comenzar",""].includes(String(r.status || "").toLowerCase())).length;
  document.querySelector("#socialKpiTotal").textContent = total;
  document.querySelector("#socialKpiReady").textContent = ready;
  document.querySelector("#socialKpiPublished").textContent = published;
  document.querySelector("#socialKpiPending").textContent = pending;
  document.querySelector("#socialPlanCount").textContent = `${total} ${total === 1 ? "pieza" : "piezas"}`;

  const rows = socialFilteredRows();
  if (!rows.length){
    list.innerHTML = '<div class="social-plan-empty">No hay publicaciones que coincidan con estos filtros.</div>';
    return;
  }

  list.innerHTML = rows.map(row => {
    const statusValue = String(row.status || "Sin comenzar");
    const status = statusValue.toLowerCase();
    const time = row.deadline_time || row.planned_time || "Hora límite pendiente";
    const rawNote = row.notes || "";
    const isReferenceUrl = /^https?:\/\//i.test(rawNote);
    const note = isReferenceUrl ? "Referencia visual disponible" : (rawNote || (row.copy_text ? row.copy_text : "Sin notas adicionales."));
    return `
      <article class="social-plan-item ${row.is_placeholder ? "is-placeholder" : ""}">
        <div class="social-plan-when">
          <strong>${escapeHtml(socialDateLabel(row.planned_date))}</strong>
          <span>Hora límite · ${escapeHtml(time)}</span>
        </div>
        <div class="social-plan-main">
          <h4>${escapeHtml(row.title || "Pieza sin título")}</h4>
          <p>${escapeHtml(note)}${isReferenceUrl ? ` · <a href="${escapeHtml(rawNote)}" target="_blank" rel="noopener noreferrer">Ver referencia</a>` : ""}</p>
          <div class="social-plan-tags">
            ${row.platform ? `<span>${escapeHtml(row.platform)}</span>` : ""}
            ${row.format ? `<span>${escapeHtml(row.format)}</span>` : ""}
            ${row.schedule_id ? `<span>${escapeHtml(row.schedule_id)}</span>` : ""}
          </div>
        </div>
        <div class="social-plan-owner">
          <strong>${escapeHtml(socialOwnerName(row.owner_id))}</strong>
          <span>Responsable</span>
        </div>
        <div class="social-plan-status">
          ${socialStatusControl(row, statusValue)}
        </div>
      </article>`;
  }).join("");
}

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

["#socialDayFilter","#socialPlatformFilter","#socialFormatFilter","#socialStatusFilter"].forEach(selector => {
  document.querySelector(selector)?.addEventListener("change", renderSocialPlan);
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

function setView(id){
  views.forEach(view => view.classList.toggle("is-active", view.id === id));
  navButtons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.view === id));
  window.scrollTo({top:0,behavior:"smooth"});
}

navButtons.forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => setView(el.dataset.go)));

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
  document.querySelectorAll(".day-btn").forEach(btn => btn.classList.toggle("is-active", Number(btn.dataset.day) === Number(day)));
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

document.querySelectorAll(".day-btn").forEach(btn => btn.addEventListener("click", () => renderDay(Number(btn.dataset.day))));

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

renderDay(selectCurrentDay());
refreshClockDrivenUI();
setInterval(refreshClockDrivenUI, 30000);
startTeamAutoRefresh();
verifyAdminSession();
refreshPublishingData();
setInterval(() => {
  if (!publishingUpdateInFlight) refreshPublishingData({silent:true});
}, PUBLISHING_REFRESH_MS);
