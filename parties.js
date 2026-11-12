// IMFA QUIZ - Pati pa matyè: 5 kesyon chak, 3/5 pou debloke pati ki vin apre
const PARTY_SIZE = 5;
const STORE_KEY = "imfa_pati_v1";
const LEVELS = { 1: "FACILE", 2: "FACILE", 3: "MOYEN", 4: "DIFFICILE", 5: "DIFFICILE" };

let curSubject = "";
let curPart = 0;
let partsList = [];

function passMin(n) { return Math.ceil(n * 0.6); }

function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveProgress(p) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
}

function buildParts(subject) {
  const qs = getAllQuestions()
    .filter(q => q.matiere === subject)
    .sort((a, b) => a.difficulte - b.difficulte || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  const parts = [];
  for (let i = 0; i < qs.length; i += PARTY_SIZE) parts.push(qs.slice(i, i + PARTY_SIZE));
  return parts;
}

function showOnly(id) {
  ["welcome", "selection", "partsScreen", "quiz", "result"].forEach(x => {
    const el = document.getElementById(x);
    if (el) el.classList.toggle("hidden", x !== id);
  });
}

function ensurePartsScreen() {
  let el = document.getElementById("partsScreen");
  if (!el) {
    el = document.createElement("section");
    el.id = "partsScreen";
    el.className = "card hidden";
    document.getElementById("selection").after(el);
  }
  return el;
}

function showParts(subject) {
  if (subject) curSubject = subject;
  partsList = buildParts(curSubject);
  const best = loadProgress()[curSubject] || {};
  const el = ensurePartsScreen();
  el.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = curSubject;
  el.appendChild(title);

  const info = document.createElement("p");
  info.textContent = "Chak pati gen 5 kesyon. Ou bezwen 3/5 pou debloke pati ki vin apre.";
  el.appendChild(info);

  let lastLevel = "";
  partsList.forEach((chunk, i) => {
    const lv = LEVELS[chunk[0].difficulte] || "";
    if (lv !== lastLevel) {
      const h = document.createElement("h3");
      h.textContent = "Nivo " + lv;
      el.appendChild(h);
      lastLevel = lv;
    }

    const need = passMin(chunk.length);
    const prevOk = i === 0 ||
      (best[i - 1] !== undefined && best[i - 1] >= passMin(partsList[i - 1].length));

    const btn = document.createElement("button");
    btn.className = "subject";
    if (!prevOk) {
      btn.textContent = "🔒 Pati " + (i + 1);
      btn.disabled = true;
      btn.style.opacity = "0.5";
    } else if (best[i] !== undefined) {
      btn.textContent = (best[i] >= need ? "✅ " : "🔁 ") + "Pati " + (i + 1) +
        " (" + best[i] + "/" + chunk.length + ")";
      btn.onclick = () => startPart(i);
    } else {
      btn.textContent = "Pati " + (i + 1);
      btn.onclick = () => startPart(i);
    }
    el.appendChild(btn);
  });

  const back = document.createElement("button");
  back.textContent = "⬅ Retounen nan matyè yo";
  back.onclick = () => showOnly("selection");
  el.appendChild(back);

  showOnly("partsScreen");
}

function startPart(i) {
  curPart = i;
  currentQuestions = partsList[i].slice();
  index = 0;
  score = 0;
  document.getElementById("currentSubject").textContent = curSubject + " — Pati " + (i + 1);
  document.getElementById("currentLevel").textContent = LEVELS[partsList[i][0].difficulte] || "";
  showOnly("quiz");
  showQuestion();
}

function chooseSubject(subject) {
  showParts(subject);
}

function nextQuestion() {
  index++;
  if (index < currentQuestions.length) showQuestion();
  else finishQuiz();
}

function finishQuiz() {
  clearInterval(timer);
  const total = currentQuestions.length;
  const need = passMin(total);
  const passed = score >= need;

  const prog = loadProgress();
  prog[curSubject] = prog[curSubject] || {};
  prog[curSubject][curPart] = Math.max(prog[curSubject][curPart] || 0, score);
  saveProgress(prog);

  const hasNext = curPart + 1 < partsList.length;
  let msg;
  if (!passed) msg = "❌ Ou bezwen " + need + "/" + total + " pou pase. Eseye ankò.";
  else if (hasNext) msg = "✅ Pati sa a pase ! Pati " + (curPart + 2) + " debloke.";
  else msg = "🏆 Ou fini tout pati yo pou " + curSubject + " !";

  showOnly("result");
  document.getElementById("finalScore").innerHTML =
    "<strong>" + playerName + "</strong><br>" +
    "Pati " + (curPart + 1) + " — " + curSubject + "<br>" +
    "Bonnes réponses : " + score + " / " + total + "<br><br>" + msg;

  const btn = document.querySelector("#result button");
  if (btn) {
    btn.textContent = "Retounen nan pati yo";
    btn.onclick = () => showParts();
  }
}
