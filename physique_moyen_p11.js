// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 11 (PHY-451 a PHY-470)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P11 = [
  { id: "PHY-451", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 25 m/s pendant 12 s. Quelle distance parcourt-elle ?",
    a: ["37 m", "300 m", "2,08 m", "3 000 m"], correct: 1,
    explications: [
      "37 m vient d'une addition (25 + 12), alors qu'il faut multiplier la vitesse par le temps.",
      "Correct. d = v × t = 25 × 12 = 300 m.",
      "2,08 m vient d'une division (25 ÷ 12), ce qui n'est pas la formule de la distance.",
      "3 000 m vient d'une multiplication erronée par 10."
    ] },
  { id: "PHY-452", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 7 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,7 N", "70 N", "17 N", "700 N"], correct: 1,
    explications: [
      "0,7 N vient d'une division de la masse par 10, alors qu'il faut la multiplier.",
      "Correct. P = m × g = 7 × 10 = 70 N.",
      "17 N vient d'une addition (7 + 10), ce qui n'est pas la formule du poids.",
      "700 N vient d'une multiplication par 100, ce qui ne correspond pas à g = 10 N/kg."
    ] },
  { id: "PHY-453", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 42 N agit sur une masse de 6 kg. Quelle est l'accélération ?",
    a: ["252 m/s²", "0,14 m/s²", "7 m/s²", "48 m/s²"], correct: 2,
    explications: [
      "252 m/s² vient d'une multiplication (42 × 6), alors qu'il faut diviser la force par la masse.",
      "0,14 m/s² correspond à m ÷ F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 42 / 6 = 7 m/s².",
      "48 m/s² ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-454", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 15 V est appliquée à une résistance de 3 Ω. Quelle est l'intensité du courant ?",
    a: ["45 A", "0,2 A", "5 A", "18 A"], correct: 2,
    explications: [
      "45 A correspond à U × R, la loi d'Ohm demande une division.",
      "0,2 A correspond à R ÷ U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 15 / 3 = 5 A.",
      "18 A correspond à une addition (15 + 3), ce qui n'est pas la loi d'Ohm."
    ] },
  { id: "PHY-455", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 8 kg se déplace à 3 m/s. Quelle est son énergie cinétique ?",
    a: ["24 J", "36 J", "72 J", "11 J"], correct: 1,
    explications: [
      "24 J correspond à m × v (8 × 3), il manque le carré de la vitesse et le facteur ½.",
      "Correct. Ec = ½ × m × v² = ½ × 8 × 9 = 36 J.",
      "72 J oublie le facteur ½ dans la formule.",
      "11 J vient d'une addition (8 + 3), ce qui n'est pas la formule de l'énergie cinétique."
    ] },
  { id: "PHY-456", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 2 kg est posé à 15 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["30 J", "300 J", "150 J", "17 J"], correct: 1,
    explications: [
      "30 J correspond à m × g, il manque la hauteur.",
      "Correct. Ep = m × g × h = 2 × 10 × 15 = 300 J.",
      "150 J correspond à m × h × 5, ce qui ne correspond pas à g = 10 N/kg.",
      "17 J vient d'une addition, ce qui n'est pas la formule de l'énergie potentielle."
    ] },
  { id: "PHY-457", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 240 N s'exerce perpendiculairement sur une surface de 0,8 m². Quelle est la pression ?",
    a: ["192 Pa", "300 Pa", "0,003 Pa", "240,8 Pa"], correct: 1,
    explications: [
      "192 Pa correspond à F × S (240 × 0,8), alors qu'il faut diviser la force par la surface.",
      "Correct. P = F / S = 240 / 0,8 = 300 Pa.",
      "0,003 Pa correspond à S ÷ F, c'est l'inverse de la formule.",
      "240,8 Pa vient d'une addition (240 + 0,8), ce qui n'est pas la formule de la pression."
    ] },
  { id: "PHY-458", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 0,5 A. Quelle est sa puissance ?",
    a: ["230,5 W", "460 W", "115 W", "0,002 W"], correct: 2,
    explications: [
      "230,5 W vient d'une addition (230 + 0,5), ce qui n'est pas la formule de la puissance.",
      "460 W correspond à U × I avec un facteur 2 en trop, ce qui ne correspond pas à 0,5 A.",
      "Correct. P = U × I = 230 × 0,5 = 115 W.",
      "0,002 W correspond à I ÷ U, ce qui est faux."
    ] },
  { id: "PHY-459", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 1 200 W fonctionne pendant 30 min. Quelle énergie consomme-t-il ?",
    a: ["36 000 kWh", "0,6 kWh", "20 kWh", "0,4 kWh"], correct: 1,
    explications: [
      "36 000 kWh oublie de convertir les watts en kilowatts et les minutes en heures.",
      "Correct. 1 200 W = 1,2 kW et 30 min = 0,5 h, donc E = 1,2 × 0,5 = 0,6 kWh.",
      "20 kWh vient d'une mauvaise conversion de la durée.",
      "0,4 kWh vient d'une erreur sur la puissance convertie."
    ] },
  { id: "PHY-460", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 450 g et un volume de 150 cm³. Quelle est sa masse volumique ?",
    a: ["0,33 g/cm³", "3 g/cm³", "300 g/cm³", "600 g/cm³"], correct: 1,
    explications: [
      "0,33 g/cm³ correspond à V ÷ m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 450 / 150 = 3 g/cm³.",
      "300 g/cm³ vient d'une multiplication (450 × 150 ÷ 225), ce qui n'est pas la formule.",
      "600 g/cm³ vient d'une addition approximative, ce qui ne donne pas le bon résultat."
    ] },
  { id: "PHY-461", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore se propage à 340 m/s et a une fréquence de 170 Hz. Quelle est sa longueur d'onde ?",
    a: ["0,5 m", "2 m", "510 m", "170 m"], correct: 1,
    explications: [
      "0,5 m correspond à f ÷ v, c'est l'inverse de la formule.",
      "Correct. λ = v / f = 340 / 170 = 2 m.",
      "510 m vient d'une addition (340 + 170), ce qui n'est pas la formule.",
      "170 m correspond à la fréquence, pas à la longueur d'onde."
    ] },
  { id: "PHY-462", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge de 24 C traverse un fil en 6 s. Quelle est l'intensité du courant ?",
    a: ["144 A", "4 A", "0,25 A", "30 C"], correct: 1,
    explications: [
      "144 A correspond à Q × t, alors qu'il faut diviser la charge par le temps.",
      "Correct. I = Q / t = 24 / 6 = 4 A.",
      "0,25 A correspond à t ÷ Q, c'est l'inverse de la formule.",
      "30 C vient d'une addition (24 + 6), et ce n'est pas une intensité."
    ] },
  { id: "PHY-463", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 12 Ω et 4 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
    a: ["16 Ω", "3 Ω", "0,33 Ω", "8 Ω"], correct: 1,
    explications: [
      "16 Ω correspond à une addition, c'est le calcul pour un montage en série.",
      "Correct. En parallèle, 1/R = 1/12 + 1/4 = 1/12 + 3/12 = 4/12 = 1/3, donc R = 3 Ω.",
      "0,33 Ω correspond à 1/3, c'est la valeur de 1/R et non de R.",
      "8 Ω correspond à la moyenne des deux résistances, ce qui n'est pas la règle du montage parallèle."
    ] },
  { id: "PHY-464", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet part à 10 m/s et accélère à 2 m/s² pendant 5 s. Quelle est sa vitesse finale ?",
    a: ["17 m/s", "20 m/s", "50 m/s", "15 m/s"], correct: 1,
    explications: [
      "17 m/s ne correspond pas à v₀ + a × t avec ces valeurs.",
      "Correct. v = v₀ + a × t = 10 + 2 × 5 = 20 m/s.",
      "50 m/s correspond à v₀ × t, ce qui n'est pas la formule.",
      "15 m/s ne tient pas compte de la durée pendant laquelle l'accélération agit."
    ] },
  { id: "PHY-465", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 4 kg se déplace à 10 m/s. Quelle est son énergie cinétique ?",
    a: ["40 J", "200 J", "400 J", "14 J"], correct: 1,
    explications: [
      "40 J correspond à m × v (4 × 10), il manque le carré de la vitesse et le facteur ½.",
      "Correct. Ec = ½ × 4 × 100 = 200 J.",
      "400 J oublie le facteur ½ dans la formule.",
      "14 J vient d'une addition (4 + 10), ce qui n'est pas la formule."
    ] },
  { id: "PHY-466", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 0,2 kg d'eau de 50 °C ? (c = 4 180 J/(kg·°C))",
    a: ["4 180 J", "41 800 J", "8 360 J", "418 000 J"], correct: 1,
    explications: [
      "4 180 J correspond à la chaleur massique seule, pour 1 kg et 1 °C.",
      "Correct. Q = m × c × ΔT = 0,2 × 4 180 × 50 = 41 800 J.",
      "8 360 J correspond à m × c, il manque la variation de température.",
      "418 000 J correspond à une masse de 2 kg, ce qui ne correspond pas à l'énoncé."
    ] },
  { id: "PHY-467", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un trajet de 90 km est fait à la vitesse de 60 km/h. Combien de temps dure-t-il ?",
    a: ["5 400 h", "1,5 h", "0,67 h", "30 h"], correct: 1,
    explications: [
      "5 400 h correspond à une multiplication (90 × 60), ce qui n'est pas la formule du temps.",
      "Correct. t = d / v = 90 / 60 = 1,5 h.",
      "0,67 h correspond à v ÷ d, c'est l'inverse de la formule.",
      "30 h vient d'une soustraction (90 − 60), ce qui n'est pas la formule."
    ] },
  { id: "PHY-468", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 20 kg a une accélération de 3 m/s². Quelle est la force appliquée ?",
    a: ["60 N", "6,67 N", "23 N", "600 N"], correct: 0,
    explications: [
      "Correct. F = m × a = 20 × 3 = 60 N.",
      "6,67 N correspond à a ÷ m, c'est l'inverse de la formule.",
      "23 N vient d'une addition (20 + 3), ce qui n'est pas la formule.",
      "600 N correspond à 20 × 3 × 10, ce qui est faux."
    ] },
  { id: "PHY-469", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une fréquence de 1 000 Hz et une longueur d'onde de 0,34 m. Quelle est sa vitesse ?",
    a: ["340 m/s", "0,000034 m/s", "1 000,34 m/s", "2 941 m/s"], correct: 0,
    explications: [
      "Correct. v = λ × f = 0,34 × 1 000 = 340 m/s.",
      "0,000034 m/s correspond à λ ÷ f, ce qui est faux.",
      "1 000,34 m/s vient d'une addition (1 000 + 0,34), ce qui n'est pas la formule.",
      "2 941 m/s correspond à f ÷ λ, ce qui est faux."
    ] },
  { id: "PHY-470", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 3 kg est posé à 20 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["60 J", "600 J", "23 J", "1 200 J"], correct: 1,
    explications: [
      "60 J correspond à m × h, il manque g.",
      "Correct. Ep = m × g × h = 3 × 10 × 20 = 600 J.",
      "23 J vient d'une addition (3 + 20), ce qui n'est pas la formule.",
      "1 200 J correspond à une multiplication par 2 en trop, ce qui ne correspond pas à l'énoncé."
    ] }
];
