p = "physique_moyen_p5.js"
s = open(p, encoding="utf-8").read()
fixes = [
    ('45 W correspond à une soustraction (230 − 5 = 225, puis erreur), ce qui est faux.',
     '45 W ne correspond à aucune opération correcte avec 230 V et 5 A.'),
    ('0,025 C correspond à t ÷ ... ce n\'est pas le produit I × t.',
     '0,025 C correspond à une division de l\'intensité par le temps, ce qui est faux.'),
]
for old, new in fixes:
    assert s.count(old) == 1, "Pa jwenn: " + old[:40]
    s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
