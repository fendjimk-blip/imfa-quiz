// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 6 (PHY-351 a PHY-370)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P6 = [
  { id: "PHY-351", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un train parcourt 300 km à la vitesse de 75 km/h. Combien de temps met-il ?",
    a: ["4 h", "225 h", "0,25 h", "375 h"], correct: 0,
    explications: [
      "Correct. t = d / v = 300 / 75 = 4 h.",
      "225 h correspond à 300 − 75, ce qui n'est pas la formule.",
      "0,25 h correspond à 75 ÷ 300, c'est l'inverse de la formule.",
      "375 h correspond à 300 + 75, ce qui est faux."
    ] },
  { id: "PHY-352", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 6 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,6 N", "60 N", "16 N", "600 N"], correct: 1,
    explications: [
      "0,6 N correspond à une division de la masse par g, ce qui est faux.",
      "Correct. P = m × g = 6 × 10 = 60 N.",
      "16 N correspond à une addition (6 + 10), ce qui est faux.",
      "600 N correspond à 6 × 100, ce qui n'est pas la formule."
    ] },
  { id: "PHY-353", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 45 N agit sur une masse de 9 kg. Quelle est l'accélération ?",
    a: ["405 m/s²", "0,2 m/s²", "5 m/s²", "54 m/s²"], correct: 2,
    explications: [
      "405 m/s² correspond à F × m, ce qui est faux.",
      "0,2 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 45 / 9 = 5 m/s².",
      "54 m/s² correspond à 45 + 9, ce qui est faux."
    ] },
  { id: "PHY-354", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 20 V est appliquée à une résistance de 5 Ω. Quelle est l'intensité du courant ?",
    a: ["100 A", "0,25 A", "4 A", "25 A"], correct: 2,
    explications: [
      "100 A correspond à U × R, c'est une multiplication, ce qui est faux.",
      "0,25 A correspond à R / U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 20 / 5 = 4 A.",
      "25 A correspond à 20 + 5, ce qui est faux."
    ] },
  { id: "PHY-355", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 3 kg se déplace à 4 m/s. Quelle est son énergie cinétique ?",
    a: ["6 J", "24 J", "48 J", "7 J"], correct: 1,
    explications: [
      "6 J correspond à ½ × m × v, sans le carré de la vitesse.",
      "Correct. Ec = ½ × 3 × 4² = ½ × 3 × 16 = 24 J.",
      "48 J oublie le facteur ½ dans la formule.",
      "7 J correspond à une addition (3 + 4), ce qui est faux."
    ] },
  { id: "PHY-356", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 5 kg est posé à 6 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["30 J", "300 J", "50 J", "330 J"], correct: 1,
    explications: [
      "30 J correspond à m × h, il manque g.",
      "Correct. Ep = m × g × h = 5 × 10 × 6 = 300 J.",
      "50 J correspond à m × g, il manque la hauteur.",
      "330 J correspond à une addition (300 + 30), ce qui est faux."
    ] },
  { id: "PHY-357", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 500 N s'exerce perpendiculairement sur une surface de 2 m². Quelle est la pression ?",
    a: ["1 000 Pa", "250 Pa", "502 Pa", "0,004 Pa"], correct: 1,
    explications: [
      "1 000 Pa correspond à F × S, c'est une multiplication, ce qui est faux.",
      "Correct. P = F / S = 500 / 2 = 250 Pa.",
      "502 Pa correspond à une addition (500 + 2), ce qui est faux.",
      "0,004 Pa correspond à S / F, c'est l'inverse de la formule."
    ] },
  { id: "PHY-358", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 3 A. Quelle est sa puissance ?",
    a: ["77 W", "233 W", "690 W", "6 900 W"], correct: 2,
    explications: [
      "77 W correspond à 230 ÷ 3, ce qui n'est pas la formule.",
      "233 W correspond à 230 + 3, ce qui est faux.",
      "Correct. P = U × I = 230 × 3 = 690 W.",
      "6 900 W correspond à 690 × 10, ce qui est faux."
    ] },
  { id: "PHY-359", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 2 000 W fonctionne pendant 3 h. Quelle énergie consomme-t-il ?",
    a: ["6 kWh", "0,667 kWh", "2 003 kWh", "6 000 kWh"], correct: 0,
    explications: [
      "Correct. E = P × t = 2 kW × 3 h = 6 kWh.",
      "0,667 kWh correspond à t ÷ P, ce qui est faux.",
      "2 003 kWh correspond à une addition (2 000 + 3), ce qui est faux.",
      "6 000 kWh oublie de convertir les watts en kilowatts."
    ] },
  { id: "PHY-360", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 250 g et un volume de 100 cm³. Quelle est sa masse volumique ?",
    a: ["0,4 g/cm³", "25 g/cm³", "2,5 g/cm³", "350 g/cm³"], correct: 2,
    explications: [
      "0,4 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "25 g/cm³ correspond à une erreur de division (250 ÷ 10), ce qui est faux.",
      "Correct. ρ = m / V = 250 / 100 = 2,5 g/cm³.",
      "350 g/cm³ correspond à 250 + 100, ce qui est faux."
    ] },
  { id: "PHY-361", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore a une longueur d'onde de 0,34 m et une fréquence de 1 000 Hz. Quelle est sa vitesse ?",
    a: ["340 m/s", "1 340 m/s", "2,9 m/s", "34 m/s"], correct: 0,
    explications: [
      "Correct. v = λ × f = 0,34 × 1 000 = 340 m/s.",
      "1 340 m/s correspond à une addition (1 000 + 340), ce qui est faux.",
      "2,9 m/s correspond à f ÷ λ, ce qui est faux.",
      "34 m/s correspond à une erreur sur la multiplication (0,34 × 100)."
    ] },
  { id: "PHY-362", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 8 C traverse un fil en 4 s. Quelle est l'intensité du courant ?",
    a: ["32 A", "2 A", "0,5 A", "12 C"], correct: 1,
    explications: [
      "32 A correspond à Q × t, ce qui est faux.",
      "Correct. I = Q / t = 8 / 4 = 2 A.",
      "0,5 A correspond à t / Q, c'est l'inverse de la formule.",
      "12 C correspond à une addition (8 + 4), ce qui est faux et ce n'est pas une intensité."
    ] },
  { id: "PHY-363", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 10 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
    a: ["20 Ω", "5 Ω", "0,1 Ω", "10 Ω"], correct: 1,
    explications: [
      "20 Ω correspond à une addition (10 + 10), c'est le calcul pour un montage en série.",
      "Correct. En parallèle, 1/R = 1/10 + 1/10 = 2/10, donc R = 5 Ω.",
      "0,1 Ω correspond à 1/R, ce qui n'est pas la résistance totale.",
      "10 Ω correspond à une seule résistance, sans tenir compte du montage."
    ] },
  { id: "PHY-364", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet part à 5 m/s et accélère à 3 m/s² pendant 4 s. Quelle est sa vitesse finale ?",
    a: ["12 m/s", "17 m/s", "7 m/s", "20 m/s"], correct: 1,
    explications: [
      "12 m/s ne correspond pas à la formule v = v₀ + a × t.",
      "Correct. v = v₀ + a × t = 5 + 3 × 4 = 17 m/s.",
      "7 m/s correspond à 5 + 2, ce qui est faux.",
      "20 m/s correspond à 5 + 3 × 5, mais la durée est de 4 s."
    ] },
  { id: "PHY-365", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 2 kg d'eau de 0 °C à 50 °C ? (c = 4 180 J/(kg·°C))",
    a: ["4 180 J", "41 800 J", "418 000 J", "50 J"], correct: 2,
    explications: [
      "4 180 J correspond à c seul, sans la masse ni la variation de température.",
      "41 800 J correspond à m × c × 5 °C, c'est une erreur sur ΔT.",
      "Correct. Q = m × c × ΔT = 2 × 4 180 × 50 = 418 000 J.",
      "50 J correspond à ΔT seul, ce qui est faux."
    ] },
  { id: "PHY-366", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un vélo parcourt 3 km en 12 min. Quelle est sa vitesse moyenne ?",
    a: ["0,25 km/h", "36 km/h", "15 km/h", "4 km/h"], correct: 2,
    explications: [
      "0,25 km/h correspond à 3 ÷ 12, sans convertir les minutes en heures.",
      "36 km/h correspond à 3 × 12, ce qui est faux.",
      "Correct. 12 min = 0,2 h, donc v = 3 / 0,2 = 15 km/h.",
      "4 km/h correspond à une division inversée, ce qui est faux."
    ] },
  { id: "PHY-367", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 7 kg a une accélération de 4 m/s². Quelle est la force appliquée ?",
    a: ["1,75 N", "11 N", "28 N", "280 N"], correct: 2,
    explications: [
      "1,75 N correspond à a ÷ m, ce qui est faux.",
      "11 N correspond à a + m, ce qui est faux.",
      "Correct. F = m × a = 7 × 4 = 28 N.",
      "280 N correspond à 7 × 40, ce qui est faux."
    ] },
  { id: "PHY-368", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une pression de 400 Pa s'exerce sur une surface de 0,5 m². Quelle est la force pressante ?",
    a: ["800 N", "200 N", "0,00125 N", "400,5 N"], correct: 1,
    explications: [
      "800 N correspond à P ÷ S, c'est l'inverse de la formule.",
      "Correct. F = P × S = 400 × 0,5 = 200 N.",
      "0,00125 N correspond à S ÷ P, ce qui est faux.",
      "400,5 N correspond à une addition (400 + 0,5), ce qui est faux."
    ] },
  { id: "PHY-369", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une vitesse de 200 m/s et une longueur d'onde de 0,5 m. Quelle est sa fréquence ?",
    a: ["100 Hz", "400 Hz", "0,0025 Hz", "200,5 Hz"], correct: 1,
    explications: [
      "100 Hz correspond à 200 ÷ 2, ce qui n'est pas la formule.",
      "Correct. f = v / λ = 200 / 0,5 = 400 Hz.",
      "0,0025 Hz correspond à λ ÷ v, c'est l'inverse de la formule.",
      "200,5 Hz correspond à une addition (200 + 0,5), ce qui est faux."
    ] },
  { id: "PHY-370", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une ampoule de 60 W reste allumée pendant 10 h. Quelle énergie consomme-t-elle ?",
    a: ["6 kWh", "0,6 kWh", "60 kWh", "0,06 kWh"], correct: 1,
    explications: [
      "6 kWh correspond à une erreur de conversion (facteur 10).",
      "Correct. 60 W = 0,06 kW, donc E = 0,06 × 10 = 0,6 kWh.",
      "60 kWh oublie de convertir les watts en kilowatts.",
      "0,06 kWh correspond à la puissance en kW, sans multiplier par la durée."
    ] }
];
