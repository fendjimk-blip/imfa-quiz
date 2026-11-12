import re

# 1. index.html: fichye Chimie a dwe chaje anvan solo.js
h = open("index.html", encoding="utf-8").read()
tag = '<script src="chimie_facile_p1.js"></script>'
if tag not in h:
    if h.count('<script src="solo.js"></script>') != 1:
        raise SystemExit("Erè: solo.js pa jwenn yon sèl fwa nan index.html")
    h = h.replace('<script src="solo.js"></script>', tag + '\n<script src="solo.js"></script>')
    print("index.html: ajoute chimie_facile_p1.js")
else:
    print("index.html: chimie_facile_p1.js deja la")

# 2. index.html: Chimie dwe nan lis matyè yo
m = re.search(r'const subjects = \[(.*?)\];', h, re.S)
if m and '"Chimie"' not in m.group(1):
    h = h.replace('const subjects = [', 'const subjects = [\n    "Chimie",', 1)
    print("index.html: ajoute Chimie nan subjects")
elif m:
    print("index.html: Chimie deja nan subjects")
else:
    print("Avètisman: pa jwenn 'const subjects' nan index.html")
open("index.html", "w", encoding="utf-8").write(h)

# 3. solo.js: lis kesyon an dwe gen CHIMIE_FACILE_P1
s = open("solo.js", encoding="utf-8").read()
guard = '    typeof CHIMIE_FACILE_P1 !== "undefined" ? CHIMIE_FACILE_P1 : [],\n'
if "CHIMIE_FACILE_P1" not in s:
    if s.count("  ];\n  return lists") != 1:
        raise SystemExit("Erè: pa jwenn fen lis getAllQuestions nan solo.js")
    s = s.replace("  ];\n  return lists", guard + "  ];\n  return lists", 1)
    open("solo.js", "w", encoding="utf-8").write(s)
    print("solo.js: ajoute CHIMIE_FACILE_P1")
else:
    print("solo.js: CHIMIE_FACILE_P1 deja la")
