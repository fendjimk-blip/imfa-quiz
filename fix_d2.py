p = "physique_difficile_p2.js"
s = open(p, encoding="utf-8").read()
fixes = [
    ("Le fil épais ne absorbe pas la chaleur de façon à réduire l'échauffement du fil fin.",
     "Le fil épais n'absorbe pas la chaleur du fil fin, ce n'est pas la cause de l'échauffement."),
    ("La gravité ne augmente pas en altitude, elle diminue légèrement.",
     "La gravité n'augmente pas en altitude, elle diminue légèrement."),
    ("Le fusible ne augmente pas le courant, il le limite.",
     "Le fusible n'augmente pas le courant, il le limite."),
    ("L'air ne explique pas la différence de poids, la Lune a presque pas d'air.",
     "L'air n'explique pas la différence de poids, la Lune a presque pas d'air."),
    ("Un miroir ne absorbe pas toute la lumière, il la renvoie.",
     "Un miroir n'absorbe pas toute la lumière, il la renvoie."),
]
for old, new in fixes:
    assert s.count(old) == 1, "Pa jwenn: " + old[:50]
    s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
