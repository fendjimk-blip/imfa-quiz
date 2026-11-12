import glob, re

def key(f):
    n = int(re.search(r'p(\d+)\.js$', f).group(1))
    return (0 if "facile" in f else 1, n)

files = sorted(glob.glob("physique_*.js"), key=key)
names = []
for f in files:
    m = re.search(r'const\s+(PHYSIQUE_\w+)\s*=\s*\[', open(f, encoding="utf-8").read())
    if not m:
        raise SystemExit("Erè: pa jwenn tablo nan " + f)
    names.append(m.group(1))

# 1. index.html: retire ansyen liy fizik yo, epi mete yo tout anvan solo.js
html = open("index.html", encoding="utf-8").read()
html = re.sub(r'<script src="physique_[^"]*"></script>\n?', '', html)
tags = "".join('<script src="%s"></script>\n' % f for f in files)
if html.count('<script src="solo.js"></script>') != 1:
    raise SystemExit("Erè: solo.js pa jwenn yon sèl fwa nan index.html")
html = html.replace('<script src="solo.js"></script>', tags + '<script src="solo.js"></script>')
open("index.html", "w", encoding="utf-8").write(html)

# 2. solo.js: rekonstwi lis kesyon an ak tout tablo fizik yo
guards = "".join('    typeof %s !== "undefined" ? %s : [],\n' % (n, n) for n in names)
solo = '''// IMFA QUIZ - Mòd Solo
const MAX_LEVEL = 5;

function getAllQuestions() {
  const lists = [
    typeof QUESTIONS !== "undefined" ? QUESTIONS : [],
    typeof QUESTIONS_NIVEAU2 !== "undefined" ? QUESTIONS_NIVEAU2 : [],
    typeof QUESTIONS_NIVEAU1_SUITE !== "undefined" ? QUESTIONS_NIVEAU1_SUITE : [],
''' + guards + '''  ];
  return lists.flat().map(q => ({
    ...q,
    explanation: q.explanation || (q.explications ? q.explications[q.correct] : "")
  }));
}

let soloUsed = new Set();
let soloLevel = 1;
let soloSubject = "";

function soloStart(subject) {
  soloSubject = subject;
  soloLevel = 1;
  soloUsed = new Set();
  return soloPickQuestion();
}

function soloPickQuestion() {
  for (let lv = soloLevel; lv <= MAX_LEVEL; lv++) {
    const pool = getAllQuestions().filter(q =>
      q.matiere === soloSubject && q.difficulte === lv && !soloUsed.has(q.id)
    );
    if (pool.length > 0) {
      soloLevel = lv;
      const q = pool[Math.floor(Math.random() * pool.length)];
      soloUsed.add(q.id);
      return q;
    }
  }
  return null;
}

function soloNext() {
  soloLevel = Math.min(soloLevel + 1, MAX_LEVEL);
  return soloPickQuestion();
}
'''
open("solo.js", "w", encoding="utf-8").write(solo)
print("Fini:", len(files), "fichye fizik konekte")
