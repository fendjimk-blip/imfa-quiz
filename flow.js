// IMFA QUIZ - Chemen prensipal: Commencer -> koneksyon -> matyè -> pati -> kesyon
const SCREEN_IDS = ["welcome", "authScreen", "selection", "partsScreen", "quiz", "result", "classmatesScreen", "adminScreen"];

const SUBJECTS_LIST = [
  "Chimie", "Physique", "Mathématiques", "Biologie", "Français",
  "Anglais", "Géographie", "Histoire - Secondaire", "Éducation civique",
  "Sociologie et éducation civique - Secondaire", "Économie - Secondaire"
];

function showScreen(id) {
  SCREEN_IDS.forEach(x => {
    const el = document.getElementById(x);
    if (el) el.classList.toggle("hidden", x !== id);
  });
}

function renderSubjects() {
  const box = document.getElementById("subjects");
  if (!box) return;
  box.innerHTML = "";
  SUBJECTS_LIST.forEach(s => {
    const d = document.createElement("div");
    d.className = "subject";
    d.textContent = s;
    d.onclick = () => chooseSubject(s);
    box.appendChild(d);
  });
}

function chooseSubject(s) {
  if (typeof getAllQuestions !== "function") {
    alert("Erè: kesyon yo pa chaje.");
    return;
  }
  const n = getAllQuestions().filter(q => q.matiere === s).length;
  if (n === 0) {
    alert("Pa gen kesyon pou " + s + " ankò.");
    return;
  }
  showParts(s);
}

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
