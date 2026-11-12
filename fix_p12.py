p = "physique_moyen_p12.js"
s = open(p, encoding="utf-8").read()
old = "0,6 km/h correspond à 1 h 12 min écrit en heures décimales sans bonne conversion, puis divisé au mauvais endroit."
new = "0,6 km/h ne correspond pas à la conversion de 1 h 12 min en heures, qui vaut 1,2 h."
assert s.count(old) == 1, "Pa jwenn liy PHY-487"
s = s.replace(old, new)
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
