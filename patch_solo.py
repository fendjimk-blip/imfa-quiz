import sys

path = "index.html"
src = open(path, encoding="utf-8").read()

if "solo.js" in src:
    sys.exit("Patch la deja fèt, pa fè l de fwa.")

NEW_CHOOSE = '''function chooseSubject(subject) {
    selectedSubject = subject;
    const first = soloStart(subject);
    if (!first) {
        alert("Aucune question disponible.");
        return;
    }
    currentQuestions = [first];
    index = 0;
    score = 0;
    document.getElementById("currentSubject").textContent = subject;
    document.getElementById("currentLevel").textContent =
        document.getElementById("level").value;
    document.getElementById("selection").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
    showQuestion();
}

'''

NEW_NEXT = '''function nextQuestion() {
    const next = soloNext();
    if (!next) {
        finishQuiz();
        return;
    }
    currentQuestions.push(next);
    index++;
    showQuestion();
}

'''

SCRIPTS = '''<script src="questions.js"></script>
<script src="questions_niveau2.js"></script>
<script src="questions_niveau1_suite.js"></script>
<script src="solo.js"></script>
'''

def replace_block(text, start, end, new):
    if text.count(start) != 1 or text.count(end) != 1:
        sys.exit("Erè: '" + start + "' oswa '" + end + "' pa jwenn yon sèl fwa")
    i = text.index(start)
    j = text.index(end)
    if j < i:
        sys.exit("Erè: lòd fonksyon yo pa bon")
    return text[:i] + new + text[j:]

src = replace_block(src, "function chooseSubject(subject) {", "function showQuestion() {", NEW_CHOOSE)
src = replace_block(src, "function nextQuestion() {", "function finishQuiz() {", NEW_NEXT)

if src.count("<script>") != 1:
    sys.exit("Erè: pa jwenn yon sèl <script> prensipal")
src = src.replace("<script>", SCRIPTS + "<script>", 1)

open(path, "w", encoding="utf-8").write(src)
print("Patch fini.")
