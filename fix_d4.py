import re
p = "physique_difficile_p4.js"
s = open(p, encoding="utf-8").read()

NEW_575 = '''  { id: "PHY-575", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une résistance de 10 Ω est alimentée sous 20 V pendant 30 s. Quelle quantité de chaleur est dégagée ?",
    a: ["1 200 J", "600 J", "6 000 J", "60 J"], correct: 0,
    explications: [
      "Correct. P = U² / R = 20² / 10 = 40 W, puis E = P × t = 40 × 30 = 1 200 J.",
      "600 J correspond à U × t, sans tenir compte de la résistance.",
      "6 000 J correspond à une erreur d'un facteur 5 sur l'énergie.",
      "60 J correspond à une erreur sur la puissance et sur la durée."
    ] },
'''

NEW_577 = '''  { id: "PHY-577", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un solide de masse 300 g a un volume de 60 cm³. Va-t-il flotter sur l'eau (ρ_eau = 1 g/cm³) ?",
    a: ["Non, il coule, car sa masse volumique est de 5 g/cm³", "Oui, il flotte, car sa masse volumique est de 0,2 g/cm³", "Oui, il flotte, car sa masse volumique est de 5 g/cm³", "Non, il coule, car sa masse volumique est de 0,2 g/cm³"], correct: 0,
    explications: [
      "Correct. ρ = m / V = 300 / 60 = 5 g/cm³. Comme 5 > 1, le solide est plus dense que l'eau et il coule.",
      "La masse volumique n'est pas 0,2 g/cm³. Et un solide plus dense que l'eau ne flotte pas.",
      "Un solide de 5 g/cm³ est plus dense que l'eau, il ne peut donc pas flotter.",
      "La masse volumique n'est pas 0,2 g/cm³, ce résultat correspond à V / m, l'inverse de la formule."
    ] },
'''

NEW_580 = '''  { id: "PHY-580", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 5 kg glisse sans frottement le long d'une pente de 5 m de haut, en partant du repos (g = 10 m/s²). Quelle est sa vitesse en bas de la pente ?",
    a: ["10 m/s", "50 m/s", "5 m/s", "25 m/s"], correct: 0,
    explications: [
      "Correct. Conservation de l'énergie : v² = 2 × g × h = 2 × 10 × 5 = 100, donc v = 10 m/s.",
      "50 m/s correspond à g × h, il manque le facteur 2 et la racine carrée.",
      "5 m/s correspond à la hauteur seule, ce qui n'est pas la formule.",
      "25 m/s correspond à h², ce qui n'est pas la formule de la vitesse."
    ] }
'''

def replace_block(text, pid, nxt, new):
    pat = re.compile(r'  \{ id: "' + pid + r'".*?(?=' + nxt + ')', re.S)
    found = pat.findall(text)
    if len(found) != 1:
        raise SystemExit("Erè: " + pid + " jwenn " + str(len(found)) + " fwa")
    return pat.sub(lambda m: new, text, count=1)

s = replace_block(s, "PHY-575", r'  \{ id: "PHY-576"', NEW_575)
s = replace_block(s, "PHY-577", r'  \{ id: "PHY-578"', NEW_577)
s = replace_block(s, "PHY-580", r'\n\];', NEW_580)

open(p, "w", encoding="utf-8").write(s)
print("Korije fini: PHY-575, PHY-577, PHY-580.")
