import re
files = ["questions.js", "questions_niveau2.js", "questions_niveau1_suite.js"]
pat = re.compile(r'\s*\{\s*id:\s*"CHM-\d{3}"[^{}]*\},?', re.S)
for f in files:
    s = open(f, encoding="utf-8").read()
    s2, n = pat.subn("", s)
    open(f, "w", encoding="utf-8").write(s2)
    print(f, "retire", n, "kesyon CHM")
