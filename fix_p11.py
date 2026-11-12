p = "physique_moyen_p11.js"
s = open(p, encoding="utf-8").read()
fixes = [
    ("48 m/s² vient d'une soustraction (42 + 6 ne donne pas 48, mais la formule demande une division).",
     "48 m/s² ne correspond à aucun calcul correct avec ces valeurs."),
    ("15 m/s correspond à v₀ + a + ... sans multiplier l'accélération par le temps.",
     "15 m/s ne tient pas compte de la durée pendant laquelle l'accélération agit."),
]
for old, new in fixes:
    assert s.count(old) == 1, "Pa jwenn: " + old[:40]
    s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
