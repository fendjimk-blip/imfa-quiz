path = "physique_moyen_p4.js"
src = open(path, encoding="utf-8").read()

fixes = [
    ('12 kWh correspond à 60 × 5 / 25, ce qui est faux. On a oublié de convertir les watts en kilowatts.',
     '12 kWh ne correspond pas à ce calcul : 60 W × 5 h = 300 Wh = 0,3 kWh.'),
    ('100 J correspond à R × I × t / 2, ce qui n\'est pas la formule.',
     '100 J correspond à R × I × t = 5 × 2 × 10, ce qui oublie un facteur I. La formule correcte est E = R × I² × t.'),
    ('5 Ω est trop bas, la résistance totale est plus petite que 10 Ω mais pas la moitié exacte.',
     '5 Ω ne correspond pas au calcul : 1/R = 1/10 + 1/20 donne 6,67 Ω.'),
]

for old, new in fixes:
    if src.count(old) != 1:
        raise SystemExit("Pa jwenn yon sèl fwa: " + old[:50])
    src = src.replace(old, new)

open(path, "w", encoding="utf-8").write(src)
print("Korije fini.")
