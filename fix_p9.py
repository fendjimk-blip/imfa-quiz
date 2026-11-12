import re
p = "physique_facile_p9.js"
s = open(p, encoding="utf-8").read()

new263 = r"""  { id: "PHY-263", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un son aigu ?",
    a: ["Un son à faible fréquence", "Un son à fréquence élevée", "Un son qui ne vibre pas", "Un son produit sans matière"], correct: 1,
    explications: [
      "Une faible fréquence correspond à un son grave.",
      "Correct. Un son aigu correspond à une fréquence élevée.",
      "Tout son est produit par une vibration.",
      "Un son ne peut pas être produit sans matière pour vibrer."
    ] },
"""

new271 = r"""  { id: "PHY-271", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de centimètres y a-t-il dans un mètre ?",
    a: ["10", "100", "1 000", "10 000"], correct: 1,
    explications: [
      "10 centimètres ne font pas un mètre.",
      "Correct. Un mètre vaut 100 centimètres.",
      "1 000 correspond au nombre de millimètres dans un mètre.",
      "10 000 ne correspond à aucune conversion usuelle du mètre."
    ] },
"""

s, n1 = re.subn(r'  \{ id: "PHY-263".*?(?=  \{ id: "PHY-264")', lambda m: new263, s, flags=re.S)
s, n2 = re.subn(r'  \{ id: "PHY-271".*?(?=  \{ id: "PHY-272")', lambda m: new271, s, flags=re.S)
if n1 != 1 or n2 != 1:
    raise SystemExit("Erè: pa jwenn blòk PHY-263 oswa PHY-271")
open(p, "w", encoding="utf-8").write(s)
print("Korije fini.")
