// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 3 (PHY-136 a PHY-155)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P3 = [
  { id: "PHY-136", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un train parcourt 240 km en 3 h. Quelle est sa vitesse moyenne ?",
    a: ["60 km/h", "80 km/h", "720 km/h", "243 km/h"], correct: 1,
    explications: [
      "60 km/h donnerait 180 km en 3 h, ce qui ne correspond pas.",
      "Correct. v = d / t = 240 / 3 = 80 km/h.",
      "720 km/h correspond à une multiplication (240 × 3), ce qui est faux.",
      "243 km/h correspond à une addition (240 + 3), ce qui est faux."
    ] },
  { id: "PHY-137", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 4 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,4 N", "40 N", "14 N", "400 N"], correct: 1,
    explications: [
      "0,4 N correspond à une division, ce qui est faux.",
      "Correct. P = m × g = 4 × 10 = 40 N.",
      "14 N correspond à une addition (4 + 10), ce qui est faux.",
      "400 N correspond à 4 × 100, ce qui n'est pas le calcul du poids."
    ] },
  { id: "PHY-138", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 12 N agit sur un objet de 3 kg. Quelle est son accélération ?",
    a: ["36 m/s²", "4 m/s²", "0,25 m/s²", "15 m/s²"], correct: 1,
    explications: [
      "36 m/s² correspond à 12 × 3, ce qui est faux.",
      "Correct. a = F / m = 12 / 3 = 4 m/s².",
      "0,25 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "15 m/s² correspond à 12 + 3, ce qui est faux."
    ] },
  { id: "PHY-139", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une résistance de 8 Ω est alimentée sous 24 V. Quelle est l'intensité du courant ?",
    a: ["192 A", "3 A", "0,33 A", "32 A"], correct: 1,
    explications: [
      "192 A correspond à 24 × 8, ce qui est faux.",
      "Correct. I = U / R = 24 / 8 = 3 A.",
      "0,33 A correspond à R / U, c'est l'inverse de la formule.",
      "32 A correspond à 24 + 8, ce qui est faux."
    ] },
  { id: "PHY-140", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un moteur de 1 000 W fonctionne pendant 30 min. Quelle énergie consomme-t-il ?",
    a: ["500 kWh", "0,5 kWh", "30 kWh", "2 kWh"], correct: 1,
    explications: [
      "500 kWh oublie de convertir les watts en kilowatts et les minutes en heures.",
      "Correct. 1 000 W = 1 kW et 30 min = 0,5 h, donc E = 1 × 0,5 = 0,5 kWh.",
      "30 kWh oublie de convertir les minutes en heures.",
      "2 kWh correspond à une erreur sur la durée."
    ] },
  { id: "PHY-141", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 5 kg est posé à 4 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["20 J", "200 J", "9 J", "40 J"], correct: 1,
    explications: [
      "20 J correspond à m × h, il manque g.",
      "Correct. Ep = m × g × h = 5 × 10 × 4 = 200 J.",
      "9 J ne correspond à aucun calcul correct avec ces valeurs.",
      "40 J correspond à g × h, il manque la masse."
    ] },
  { id: "PHY-142", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un camion de 2 000 kg roule à 10 m/s. Quelle est son énergie cinétique ?",
    a: ["20 000 J", "100 000 J", "10 000 J", "200 000 J"], correct: 1,
    explications: [
      "20 000 J correspond à m × v, ce qui n'est pas la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 2 000 × 100 = 100 000 J.",
      "10 000 J oublie la masse dans le calcul.",
      "200 000 J oublie le facteur ½."
    ] },
  { id: "PHY-143", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet roule à 10 m/s et accélère à 2 m/s² pendant 5 s. Quelle est sa vitesse finale ?",
    a: ["12 m/s", "20 m/s", "30 m/s", "10 m/s"], correct: 1,
    explications: [
      "12 m/s correspond à 10 + 2, on a oublié la durée.",
      "Correct. v = v₀ + a × t = 10 + 2 × 5 = 20 m/s.",
      "30 m/s correspond à 10 + 2 × 10, ce qui est faux.",
      "10 m/s est la vitesse initiale, l'accélération la modifie."
    ] },
  { id: "PHY-144", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 50 N s'exerce perpendiculairement sur une surface de 0,25 m². Quelle est la pression ?",
    a: ["12,5 Pa", "200 Pa", "0,005 Pa", "50,25 Pa"], correct: 1,
    explications: [
      "12,5 Pa correspond à 50 × 0,25, ce qui est faux.",
      "Correct. P = F / S = 50 / 0,25 = 200 Pa.",
      "0,005 Pa correspond à S / F, c'est l'inverse de la formule.",
      "50,25 Pa correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-145", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un courant de 2 A circule pendant 10 min. Quelle charge électrique traverse le fil ?",
    a: ["1 200 C", "20 C", "120 C", "12 000 C"], correct: 0,
    explications: [
      "Correct. Q = I × t = 2 × 600 s = 1 200 C (10 min = 600 s).",
      "20 C correspond à 2 × 10, on a pris les minutes au lieu des secondes.",
      "120 C correspond à 2 × 60, ce qui est faux.",
      "12 000 C correspond à une erreur sur la conversion de la durée."
    ] },
  { id: "PHY-146", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un son se propage à 340 m/s et sa fréquence est de 340 Hz. Quelle est sa longueur d'onde ?",
    a: ["1 m", "340 m", "0,001 m", "680 m"], correct: 0,
    explications: [
      "Correct. λ = v / f = 340 / 340 = 1 m.",
      "340 m correspond à la vitesse, il faut la diviser par la fréquence.",
      "0,001 m correspond à f / v, c'est l'inverse de la formule.",
      "680 m correspond à 340 × 2, ce qui est faux."
    ] },
  { id: "PHY-147", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une bouilloire de 2 000 W fonctionne pendant 3 min. Quelle énergie consomme-t-elle ?",
    a: ["6 000 J", "360 000 J", "120 000 J", "3 600 J"], correct: 1,
    explications: [
      "6 000 J correspond à 2 000 × 3, on a oublié de convertir les minutes en secondes.",
      "Correct. E = P × t = 2 000 × 180 s = 360 000 J.",
      "120 000 J correspond à 2 000 × 60, ce qui est faux.",
      "3 600 J correspond à une erreur sur la conversion de la durée."
    ] },
  { id: "PHY-148", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux forces de 5 N et 3 N s'exercent sur un objet dans le même sens. Quelle est la force résultante ?",
    a: ["2 N", "8 N", "15 N", "1,67 N"], correct: 1,
    explications: [
      "2 N correspond à une soustraction, qui se fait quand les forces sont opposées.",
      "Correct. Dans le même sens, on additionne : 5 + 3 = 8 N.",
      "15 N correspond à une multiplication, ce qui est faux.",
      "1,67 N correspond à une division, ce qui est faux."
    ] },
  { id: "PHY-149", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux forces de 5 N et 3 N s'exercent sur un objet en sens opposés. Quelle est la force résultante ?",
    a: ["8 N", "2 N", "15 N", "0 N"], correct: 1,
    explications: [
      "8 N correspond à une addition, qui se fait quand les forces sont dans le même sens.",
      "Correct. En sens opposés, on soustrait : 5 − 3 = 2 N.",
      "15 N correspond à une multiplication, ce qui est faux.",
      "0 N serait le cas si les deux forces étaient égales."
    ] },
  { id: "PHY-150", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un bloc de bois a une masse de 60 g et un volume de 120 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "60 g/cm³", "180 g/cm³"], correct: 0,
    explications: [
      "Correct. ρ = m / V = 60 / 120 = 0,5 g/cm³.",
      "2 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "60 g/cm³ correspond à la masse seule, sans division par le volume.",
      "180 g/cm³ correspond à 60 + 120, ce qui est faux."
    ] },
  { id: "PHY-151", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une résistance de 2 Ω est traversée par un courant de 6 A. Quelle est la puissance dissipée ?",
    a: ["12 W", "72 W", "3 W", "432 W"], correct: 1,
    explications: [
      "12 W correspond à R × I, il manque le carré de l'intensité.",
      "Correct. P = R × I² = 2 × 6² = 2 × 36 = 72 W.",
      "3 W correspond à I / R, ce qui n'est pas la formule.",
      "432 W correspond à R × I³, ce qui est faux."
    ] },
  { id: "PHY-152", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un chariot passe de 0 à 15 m/s en 3 s. Quelle est son accélération ?",
    a: ["45 m/s²", "5 m/s²", "0,2 m/s²", "18 m/s²"], correct: 1,
    explications: [
      "45 m/s² correspond à 15 × 3, ce qui est faux.",
      "Correct. a = Δv / Δt = 15 / 3 = 5 m/s².",
      "0,2 m/s² correspond à Δt / Δv, c'est l'inverse de la formule.",
      "18 m/s² correspond à 15 + 3, ce qui est faux."
    ] },
  { id: "PHY-153", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un avion vole à 900 km/h pendant 2 h 30 min. Quelle distance parcourt-il ?",
    a: ["360 km", "2 250 km", "1 800 km", "450 km"], correct: 1,
    explications: [
      "360 km ne correspond pas à 900 km/h pendant 2,5 h.",
      "Correct. 2 h 30 min = 2,5 h, donc d = v × t = 900 × 2,5 = 2 250 km.",
      "1 800 km correspond à 900 × 2, on a oublié les 30 minutes.",
      "450 km correspond à 900 ÷ 2, ce qui n'est pas la formule."
    ] },
  { id: "PHY-154", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet se déplace à 4 m/s pendant 25 s. Quelle distance parcourt-il ?",
    a: ["6,25 m", "100 m", "29 m", "21 m"], correct: 1,
    explications: [
      "6,25 m correspond à 25 ÷ 4, c'est l'inverse de la formule.",
      "Correct. d = v × t = 4 × 25 = 100 m.",
      "29 m correspond à 4 + 25, ce qui est faux.",
      "21 m correspond à 25 − 4, ce qui est faux."
    ] },
  { id: "PHY-155", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 1 kg d'eau de 15 °C à 25 °C ? (c = 4 180 J/(kg·°C))",
    a: ["4 180 J", "41 800 J", "418 000 J", "250 J"], correct: 1,
    explications: [
      "4 180 J correspond à la chaleur massique seule, pour 1 °C.",
      "Correct. Q = m × c × ΔT = 1 × 4 180 × 10 = 41 800 J.",
      "418 000 J correspond à ΔT de 100 °C, ce qui ne correspond pas à l'énoncé.",
      "250 J correspond à 25 × 10, ce qui n'est pas la formule."
    ] }
];
