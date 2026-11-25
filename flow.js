// IMFA QUIZ - Ekran yo: Commencer → koneksyon → matyè → pati → kesyon
function showWelcomeOnly() {
  ["selection", "partsScreen", "quiz", "result", "authScreen", "classmatesScreen", "adminScreen"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.add("hidden");
  });
  document.getElementById("welcome").classList.remove("hidden");
}

function hideLevelChoice() {
  const sel = document.getElementById("level");
  if (sel) {
    sel.style.display = "none";
    const lab = sel.previousElementSibling;
    if (lab && /niveau|difficult/i.test(lab.textContent)) lab.style.display = "none";
  }
  document.querySelectorAll("h1,h2,h3,p,label,span,div").forEach(e => {
    if (e.children.length === 0 && /niveau de difficult/i.test(e.textContent)) {
      e.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showWelcomeOnly();
  hideLevelChoice();
  window.start = function () {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("authScreen").classList.remove("hidden");
  };
});
