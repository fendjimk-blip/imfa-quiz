p = "index.html"
s = open(p, encoding="utf-8").read()
old = '<script src="solo.js"></script>'
if s.count(old) != 1:
    raise SystemExit("Erè: solo.js pa jwenn yon sèl fwa")
files = [
    "physique_facile_p1.js", "physique_facile_p2.js", "physique_facile_p3.js",
    "physique_facile_p4.js", "physique_facile_p5.js", "physique_facile_p6.js",
    "physique_moyen_p1.js", "physique_moyen_p2.js", "physique_moyen_p3.js",
    "physique_moyen_p4.js",
]
new = "".join('<script src="%s"></script>\n' % f for f in files if ('src="%s"' % f) not in s) + old
s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Patch fini.")
