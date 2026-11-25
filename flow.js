// IMFA QUIZ - Ekran yo: yon sèl ekran aktif alafwa
const SCREEN_IDS = ["welcome", "authScreen", "selection", "partsScreen", "quiz", "result", "classmatesScreen", "adminScreen"];

function showScreen(id) {
  SCREEN_IDS.forEach(x => {
    const el = document.getElementById(x);
    if (el) el.classList.toggle("hidden", x !== id);
  });
}

// Ranpli lis matyè yo (sa ki te vid la)
function renderSubjects() {
  const box = document.getElementById("subjects");
  if (!box || typeof subjects === "undefined") return;
  box.innerHTML = "";
  subjects.forEach(s => {
    const d = document.createElement("div");
    d.className = "subject";
    d.textContent = s;
    d.onclick = () => chooseSubject(s);
    box.appendChild(d);
  });
}

// Kache chwa nivo a (Débutant / Niveau de difficulté)
function hideLevelChoice() {
  const sel = document.getElementById("level");
  if (sel) sel.style.display = "none";
  document.querySelectorAll("h1,h2,h3,p,label,span,div").forEach(e => {
    if (e.children.length === 0 && /niveau de difficult/i.test(e.textContent)) {
      e.style.display = "none";
    }
  });
}

window.start = function () {
  showScreen("authScreen");
};

document.addEventListener("DOMContentLoaded", () => {
  showScreen("welcome");
  hideLevelChoice();
  renderSubjects();
});
