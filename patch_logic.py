# 1. solo.js: ranplase lojik la (lis kesyon an rete menm jan an)
p = "solo.js"
s = open(p, encoding="utf-8").read()
marker = "let soloUsed = new Set();"
if s.count(marker) != 1:
    raise SystemExit("Erè: solo.js pa gen mak la")

NEW_SOLO = r"""let soloUsed = new Set();
let soloLevel = 1;
let soloSubject = "";
let partAnswered = 0;
let partCorrect = 0;
let soloSeen = 0;
const PART_SIZE = 5;
const PASS_MIN = 3;

function soloStart(subject) {
  soloSubject = subject;
  soloLevel = 1;
  soloUsed = new Set();
  partAnswered = 0;
  partCorrect = 0;
  soloSeen = 0;
  return soloDraw();
}

function soloDraw() {
  const pool = getAllQuestions().filter(q =>
    q.matiere === soloSubject && q.difficulte === soloLevel && !soloUsed.has(q.id)
  );
  if (pool.length === 0) return null;
  const q = pool[Math.floor(Math.random() * pool.length)];
  soloUsed.add(q.id);
  return q;
}

function soloAfterAnswer(wasCorrect) {
  partAnswered++;
  if (wasCorrect) partCorrect++;

  if (partAnswered < PART_SIZE) {
    const q = soloDraw();
    if (q) return { status: "continue", q: q };
    return { status: "finished", summary: { level: soloLevel, correct: partCorrect, total: partAnswered, passed: false } };
  }

  const passed = partCorrect >= PASS_MIN;
  const summary = { level: soloLevel, correct: partCorrect, total: PART_SIZE, passed: passed };
  partAnswered = 0;
  partCorrect = 0;

  if (passed) {
    if (soloLevel >= MAX_LEVEL) return { status: "finished", summary: summary };
    soloLevel++;
  }
  const q = soloDraw();
  if (!q) return { status: "finished", summary: summary };
  return { status: passed ? "part_passed" : "part_failed", summary: summary, q: q };
}
"""
s = s[:s.index(marker)] + NEW_SOLO
open(p, "w", encoding="utf-8").write(s)

# 2. index.html: ranplase nextQuestion
h = "index.html"
src = open(h, encoding="utf-8").read()
start, end = "function nextQuestion() {", "function finishQuiz() {"
if src.count(start) != 1 or src.count(end) != 1:
    raise SystemExit("Erè: nextQuestion oswa finishQuiz pa jwenn yon sèl fwa")

NEW_NEXT = r"""function nextQuestion() {
    const wasCorrect = score > soloSeen;
    soloSeen = score;
    const r = soloAfterAnswer(wasCorrect);

    if (r.status === "finished") {
        finishQuiz();
        return;
    }
    if (r.status !== "continue") {
        const s = r.summary;
        alert(s.passed
            ? "Bravo ! Nivo " + s.level + " pase (" + s.correct + "/" + s.total + ")."
            : "Nivo " + s.level + " : " + s.correct + "/" + s.total + ". Il faut 3/5 pour passer. Nouvel essai.");
    }
    currentQuestions.push(r.q);
    index++;
    showQuestion();
}

"""
i, j = src.index(start), src.index(end)
src = src[:i] + NEW_NEXT + src[j:]
open(h, "w", encoding="utf-8").write(src)
print("Lojik Solo mete ajou.")
