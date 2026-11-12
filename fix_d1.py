p = "physique_difficile_p1.js"
s = open(p, encoding="utf-8").read()
old = "La boule de fer n'est pas plus lourde au sens qui accélère la chute dans le vide."
new = "La boule de fer est plus lourde, mais dans le vide son poids n'accélère pas sa chute plus que celui de la boule de bois."
assert s.count(old) == 1, "Pa jwenn liy PHY-503"
s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
