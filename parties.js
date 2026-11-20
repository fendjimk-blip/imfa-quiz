// IMFA QUIZ - Pati pa matyè: 5 kesyon chak
// Sekans ki repete: 3 FACILE, 3 MOYEN, 2 DIFFICILE
const PARTY_SIZE = 5;
const STORE_KEY = "imfa_pati_v1";
const CYCLE = [1, 1, 1, 3, 3, 3, 4, 4];
const LEVEL_NAME = { 1: "FACILE", 2: "FACILE", 3: "MOYEN", 4: "DIFFICILE", 5: "DIFFICILE" };

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
  const pools = { 1: [], 3: [], 4: [] };
  getAllQuestions()
    .filter(q => q.matiere === subject && pools[q.difficulte])
    .forEach(q => pools[q.difficulte].push(q));
  Object.keys(pools).forEach(k =>
    pools[k].sort((a, b) => (a.id < b.id ? -1 : a.id > b.id ? 1 : 0)));

  const parts = [];
  let slot = 0;
  while (true) {
    let lv = CYCLE[slot % CYCLE.length];
    slot++;
    if (pools[lv].length === 0) {
      const alt = [1, 3, 4].find(x => pools[x].length > 0);
      if (alt === undefined) break;
      lv = alt;
    }
    const questions = pools[lv].splice(0, PARTY_SIZE);
    parts.push({ questions: questions, level: lv });
  }
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

  partsList.forEach((part, i) => {
    const need = passMin(part.questions.length);
    const prevOk = i === 0 ||
      (best[i - 1] !== undefined && best[i - 1] >= passMin(partsList[i - 1].questions.length));
    const name = "Pati " + (i + 1) + " — " + LEVEL_NAME[part.level];

    const btn = document.createElement("button");
    btn.className = "subject";
    if (!prevOk) {
      btn.textContent = "🔒 " + name;
      btn.disabled = true;
      btn.style.opacity = "0.5";
    } else {
      if (best[i] !== undefined) {
        btn.textContent = (best[i] >= need ? "✅ " : "🔁 ") + name +
          " (" + best[i] + "/" + part.questions.length + ")";
      } else {
        btn.textContent = name;
      }
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
  currentQuestions = partsList[i].questions.slice();
  index = 0;
  score = 0;
  document.getElementById("currentSubject").textContent = curSubject + " — Pati " + (i + 1);
  document.getElementById("currentLevel").textContent = LEVEL_NAME[partsList[i].level] || "";
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
