const schedule = {
  1: {
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

const navButtons = [...document.querySelectorAll("[data-view]")];
const views = [...document.querySelectorAll(".view")];

function setView(id){
  views.forEach(view => view.classList.toggle("is-active", view.id === id));
  navButtons.forEach(btn => btn.classList.toggle("is-active", btn.dataset.view === id));
  window.scrollTo({top:0,behavior:"smooth"});
}

navButtons.forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => setView(el.dataset.go)));

function renderDay(day){
  const data = schedule[day];
  document.body.dataset.day = day;
  document.querySelectorAll(".day-btn").forEach(btn => btn.classList.toggle("is-active", Number(btn.dataset.day) === Number(day)));
  document.querySelector("#dayNumber").textContent = String(day).padStart(2,"0");
  document.querySelector("#dayName").textContent = data.day;
  document.querySelector("#dayConcept").textContent = data.concept;
  document.querySelector("#dayPalette").innerHTML = data.palette.map(c => `<span style="background:${c}"></span>`).join("");
  document.querySelector("#timeline").innerHTML = data.items.map(item => {
    const isPlaceholder = item[3] === "placeholder";
    return `<article class="timeline-item ${isPlaceholder ? "placeholder" : ""}">
      <div class="timeline-time">${item[0]}</div>
      <div class="timeline-title">${item[1]}<small>${item[2] || "&nbsp;"}</small></div>
      <div class="timeline-role">${isPlaceholder ? '<span class="placeholder-tag">Detalle pendiente</span>' : 'Cobertura · por asignar'}</div>
    </article>`;
  }).join("");
}

document.querySelectorAll(".day-btn").forEach(btn => btn.addEventListener("click", () => renderDay(Number(btn.dataset.day))));

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
  const today = new Date();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  if (month === 10 && date === 9) return 2;
  if (month === 10 && date >= 10) return 3;
  return 1;
}

renderDay(selectCurrentDay());
updateCountdown();
setInterval(updateCountdown, 60000);
