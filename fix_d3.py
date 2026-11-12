import sys
p = "physique_difficile_p3.js"
s = open(p, encoding="utf-8").read()
fixes = [
    ("Elle chauffe moins fort que une casserole ordinaire",
     "Elle chauffe moins fort qu'une casserole ordinaire"),
    ("La vapeur ne est pas attirée vers les aliments, elle reste enfermée et augmente la pression.",
     "La vapeur n'est pas attirée vers les aliments, elle reste enfermée et augmente la pression."),
    ("Le frottement s'oppose au mouvement et se soustrait.",
     "Le frottement s'oppose au mouvement, il se soustrait."),
]
for old, new in fixes:
    if s.count(old) != 1:
        print("Pa jwenn (ka deja korije):", old[:50])
        continue
    s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
