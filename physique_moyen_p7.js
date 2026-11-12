// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 7 (PHY-371 a PHY-390)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P7 = [
  { id: "PHY-371", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 90 km/h pendant 2 h. Quelle distance parcourt-elle ?",
    a: ["45 km", "180 km", "88 km", "360 km"], correct: 1,
    explications: [
      "45 km correspond à 90 ÷ 2, ce qui n'est pas la formule de la distance.",
      "Correct. d = v × t = 90 × 2 = 180 km.",
      "88 km ne correspond à aucun calcul correct avec ces valeurs.",
      "360 km correspond à 90 × 4, ce qui est faux."
    ] },
  { id: "PHY-372", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 8 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,8 N", "80 N", "18 N", "800 N"], correct: 1,
    explications: [
      "0,8 N correspond à une division de la masse par g, ce qui est faux.",
      "Correct. P = m × g = 8 × 10 = 80 N.",
      "18 N correspond à une addition (8 + 10), ce qui est faux.",
      "800 N correspond à 8 × 100, ce qui n'est pas la formule."
    ] },
  { id: "PHY-373", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 90 N agit sur une masse de 15 kg. Quelle est l'accélération ?",
    a: ["1 350 m/s²", "6 m/s²", "0,17 m/s²", "105 m/s²"], correct: 1,
    explications: [
      "1 350 m/s² correspond à F × m, ce qui est faux.",
      "Correct. a = F / m = 90 / 15 = 6 m/s².",
      "0,17 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "105 m/s² correspond à 90 + 15, ce qui est faux."
    ] },
  { id: "PHY-374", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 24 V est appliquée à une résistance de 8 Ω. Quelle est l'intensité du courant ?",
    a: ["192 A", "3 A", "0,33 A", "32 A"], correct: 1,
    explications: [
      "192 A correspond à U × R, c'est une multiplication, ce qui est faux.",
      "Correct. I = U / R = 24 / 8 = 3 A.",
      "0,33 A correspond à R / U, c'est l'inverse de la formule.",
      "32 A correspond à 24 + 8, ce qui est faux."
    ] },
  { id: "PHY-375", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 6 kg se déplace à 4 m/s. Quelle est son énergie cinétique ?",
    a: ["24 J", "48 J", "96 J", "12 J"], correct: 1,
    explications: [
      "24 J correspond à m × v (6 × 4), ce qui n'est pas la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 6 × 16 = 48 J.",
      "96 J oublie le facteur ½ dans la formule.",
      "12 J correspond à ½ × m × v, il manque le carré de la vitesse."
    ] },
  { id: "PHY-376", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 4 kg est posé à 15 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["60 J", "600 J", "150 J", "190 J"], correct: 1,
    explications: [
      "60 J correspond à m × h (4 × 15), il manque g.",
      "Correct. Ep = m × g × h = 4 × 10 × 15 = 600 J.",
      "150 J ne correspond à aucun calcul correct avec ces valeurs.",
      "190 J correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-377", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 300 N s'exerce perpendiculairement sur une surface de 1,5 m². Quelle est la pression ?",
    a: ["450 Pa", "200 Pa", "0,005 Pa", "1 500 Pa"], correct: 1,
    explications: [
      "450 Pa correspond à F × S (300 × 1,5), ce qui est faux.",
      "Correct. P = F / S = 300 / 1,5 = 200 Pa.",
      "0,005 Pa correspond à S / F, c'est l'inverse de la formule.",
      "1 500 Pa correspond à une erreur de calcul sur la surface."
    ] },
  { id: "PHY-378", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 10 A. Quelle est sa puissance ?",
    a: ["240 W", "2 300 W", "23 W", "2 330 W"], correct: 1,
    explications: [
      "240 W correspond à une addition (230 + 10), ce qui est faux.",
      "Correct. P = U × I = 230 × 10 = 2 300 W.",
      "23 W correspond à une division erronée (230 ÷ 10), ce qui est faux.",
      "2 330 W correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-379", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 1 500 W fonctionne pendant 30 min. Quelle énergie consomme-t-il ?",
    a: ["750 kWh", "0,75 kWh", "45 kWh", "0,5 kWh"], correct: 1,
    explications: [
      "750 kWh oublie de convertir les watts en kilowatts et les minutes en heures.",
      "Correct. 1 500 W = 1,5 kW et 30 min = 0,5 h, donc E = 1,5 × 0,5 = 0,75 kWh.",
      "45 kWh correspond à une erreur de multiplication, ce qui est faux.",
      "0,5 kWh correspond à la durée en heures, sans multiplier par la puissance."
    ] },
  { id: "PHY-380", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 1,5 kg et un volume de 750 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "1 125 g/cm³", "2 250 g/cm³"], correct: 1,
    explications: [
      "0,5 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 1 500 g / 750 cm³ = 2 g/cm³.",
      "1 125 g/cm³ correspond à une multiplication, ce qui est faux.",
      "2 250 g/cm³ correspond à une erreur sur la conversion de la masse."
    ] },
  { id: "PHY-381", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore se propage à 340 m/s et a une fréquence de 680 Hz. Quelle est sa longueur d'onde ?",
    a: ["0,5 m", "2 m", "340 m", "0,002 m"], correct: 0,
    explications: [
      "Correct. λ = v / f = 340 / 680 = 0,5 m.",
      "2 m correspond à f / v, c'est l'inverse de la formule.",
      "340 m correspond à la vitesse, il faut la diviser par la fréquence.",
      "0,002 m ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-382", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 60 C traverse un fil en 12 s. Quelle est l'intensité du courant ?",
    a: ["720 A", "5 A", "0,2 A", "48 C"], correct: 1,
    explications: [
      "720 A correspond à Q × t, ce qui est faux.",
      "Correct. I = Q / t = 60 / 12 = 5 A.",
      "0,2 A correspond à t / Q, c'est l'inverse de la formule.",
      "48 C correspond à une soustraction (60 − 12), ce qui est faux."
    ] },
  { id: "PHY-383", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 15 Ω et 25 Ω sont branchées en série. Quelle est la résistance totale ?",
    a: ["10 Ω", "375 Ω", "40 Ω", "1,67 Ω"], correct: 2,
    explications: [
      "10 Ω correspond à une soustraction (25 − 15), ce qui est faux en série.",
      "375 Ω correspond à une multiplication, ce qui est faux pour un montage en série.",
      "Correct. En série, on additionne : 15 + 25 = 40 Ω.",
      "1,67 Ω correspond à une formule de montage en parallèle, ce qui est faux ici."
    ] },
  { id: "PHY-384", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture passe de 0 à 30 m/s en 6 s. Quelle est son accélération ?",
    a: ["180 m/s²", "5 m/s²", "0,2 m/s²", "36 m/s²"], correct: 1,
    explications: [
      "180 m/s² correspond à Δv × Δt, ce qui est faux.",
      "Correct. a = Δv / Δt = 30 / 6 = 5 m/s².",
      "0,2 m/s² correspond à Δt / Δv, c'est l'inverse de la formule.",
      "36 m/s² correspond à 6 × 6, ce qui est faux."
    ] },
  { id: "PHY-385", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 2 kg d'eau de 20 °C à 45 °C ? (c = 4 180 J/(kg·°C))",
    a: ["8 360 J", "209 000 J", "104 500 J", "4 180 J"], correct: 1,
    explications: [
      "8 360 J correspond à m × c, il manque la variation de température.",
      "Correct. Q = m × c × ΔT = 2 × 4 180 × 25 = 209 000 J.",
      "104 500 J correspond à une erreur sur ΔT (12,5 °C au lieu de 25 °C).",
      "4 180 J correspond à la chaleur massique seule, pour 1 kg et 1 °C."
    ] },
  { id: "PHY-386", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un son fait un aller-retour de 680 m en 2 s. Quelle est sa vitesse ?",
    a: ["1 360 m/s", "340 m/s", "170 m/s", "0,003 m/s"], correct: 1,
    explications: [
      "1 360 m/s correspond à 680 × 2, ce qui est faux.",
      "Correct. v = d / t = 680 / 2 = 340 m/s.",
      "170 m/s correspond à une division par 4, ce qui est faux.",
      "0,003 m/s correspond à t / d, c'est l'inverse de la formule."
    ] },
  { id: "PHY-387", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une moto parcourt 45 km en 30 min. Quelle est sa vitesse moyenne ?",
    a: ["22,5 km/h", "90 km/h", "1,5 km/h", "45 km/h"], correct: 1,
    explications: [
      "22,5 km/h ne correspond pas au calcul avec 45 km et 30 min.",
      "Correct. 30 min = 0,5 h, donc v = 45 / 0,5 = 90 km/h.",
      "1,5 km/h correspond à une erreur de calcul sur le temps.",
      "45 km/h correspond à la distance seule, sans division par le temps."
    ] },
  { id: "PHY-388", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force constante de 25 N déplace un objet sur 8 m, dans la même direction. Quel est le travail de la force ?",
    a: ["33 J", "200 J", "3,1 J", "17 J"], correct: 1,
    explications: [
      "33 J correspond à une addition (25 + 8), ce qui est faux.",
      "Correct. W = F × d = 25 × 8 = 200 J.",
      "3,1 J correspond à une division (25 ÷ 8), ce qui est faux.",
      "17 J correspond à une soustraction (25 − 8), ce qui est faux."
    ] },
  { id: "PHY-389", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un moteur fournit 3 600 J d'énergie en 60 s. Quelle est sa puissance ?",
    a: ["216 000 W", "60 W", "3 540 W", "0,017 W"], correct: 1,
    explications: [
      "216 000 W correspond à 3 600 × 60, ce qui est faux.",
      "Correct. P = E / t = 3 600 / 60 = 60 W.",
      "3 540 W correspond à une soustraction (3 600 − 60), ce qui est faux.",
      "0,017 W correspond à t / E, c'est l'inverse de la formule."
    ] },
  { id: "PHY-390", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une pierre a une masse de 5 kg et un volume de 2 litres. Quelle est sa masse volumique en kg/m³ ?",
    a: ["0,0004 kg/m³", "2 500 kg/m³", "10 000 kg/m³", "2 005 kg/m³"], correct: 1,
    explications: [
      "0,0004 kg/m³ correspond à une erreur de conversion du volume.",
      "Correct. 2 litres = 0,002 m³, donc ρ = 5 / 0,002 = 2 500 kg/m³.",
      "10 000 kg/m³ correspond à une erreur sur la conversion du volume.",
      "2 005 kg/m³ correspond à une addition, ce qui est faux."
    ] }
];
