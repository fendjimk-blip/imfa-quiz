p = "physique_moyen_p7.js"
s = open(p, encoding="utf-8").read()
fixes = [
    ("150 J correspond à g × h × ... sans la masse, ce qui est faux.",
     "150 J ne correspond à aucun calcul correct avec ces valeurs."),
    ("22,5 km/h correspond à d × ... ce n'est pas le bon calcul avec 30 min.",
     "22,5 km/h ne correspond pas au calcul avec 45 km et 30 min."),
]
for old, new in fixes:
    assert s.count(old) == 1, "Pa jwenn: " + old[:40]
    s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
