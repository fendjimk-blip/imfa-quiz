// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 1 (PHY-096 a PHY-115)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P1 = [
  { id: "PHY-096", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture parcourt 120 km en 2 h. Quelle est sa vitesse moyenne ?",
    a: ["40 km/h", "60 km/h", "80 km/h", "240 km/h"], correct: 1,
    explications: [
      "Ce résultat ne correspond pas à 120 km divisés par 2 h.",
      "Correct. v = d / t = 120 / 2 = 60 km/h.",
      "80 km/h donnerait 160 km en 2 h, ce qui ne correspond pas.",
      "240 km/h correspond à une multiplication, la formule est une division."
    ] },
  { id: "PHY-097", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une moto roule à 15 m/s pendant 10 s. Quelle distance parcourt-elle ?",
    a: ["25 m", "150 m", "1,5 m", "300 m"], correct: 1,
    explications: [
      "25 m correspond à une addition (15 + 10), ce qui est faux.",
      "Correct. d = v × t = 15 × 10 = 150 m.",
      "1,5 m correspond à une division (15 ÷ 10), ce qui est faux.",
      "300 m ne correspond pas aux données de l'énoncé."
    ] },
  { id: "PHY-098", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 500 g et un volume de 250 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "125 g/cm³", "750 g/cm³"], correct: 1,
    explications: [
      "0,5 g/cm³ correspond à volume ÷ masse, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 500 / 250 = 2 g/cm³.",
      "125 g/cm³ ne correspond à aucune opération correcte avec ces valeurs.",
      "750 g/cm³ correspond à une addition (500 + 250), ce qui est faux."
    ] },
  { id: "PHY-099", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un chariot de 10 kg subit une accélération de 3 m/s². Quelle est la force appliquée ?",
    a: ["3 N", "13 N", "30 N", "300 N"], correct: 2,
    explications: [
      "3 N correspond à l'accélération seule, la masse manque dans le calcul.",
      "13 N correspond à une addition (10 + 3), ce qui est faux.",
      "Correct. F = m × a = 10 × 3 = 30 N.",
      "300 N ajoute un facteur qui n'existe pas dans cet énoncé."
    ] },
  { id: "PHY-100", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le poids d'un objet de 5 kg, sachant que g = 10 N/kg ?",
    a: ["0,5 N", "5 N", "50 N", "15 N"], correct: 2,
    explications: [
      "0,5 N correspond à une division, ce qui est faux.",
      "5 N est la valeur de la masse, pas du poids.",
      "Correct. P = m × g = 5 × 10 = 50 N.",
      "15 N correspond à une addition (5 + 10), ce qui est faux."
    ] },
  { id: "PHY-101", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une lampe est alimentée sous 12 V et sa résistance est de 4 Ω. Quelle est l'intensité du courant ?",
    a: ["48 A", "3 A", "0,33 A", "8 A"], correct: 1,
    explications: [
      "48 A correspond à une multiplication (12 × 4), ce qui est faux.",
      "Correct. Loi d'Ohm : I = U / R = 12 / 4 = 3 A.",
      "0,33 A correspond à R / U, c'est l'inverse de la formule.",
      "8 A correspond à une soustraction (12 − 4), ce qui est faux."
    ] },
  { id: "PHY-102", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sur 230 V et traversé par un courant de 2 A. Quelle est sa puissance ?",
    a: ["115 W", "232 W", "460 W", "920 W"], correct: 2,
    explications: [
      "115 W correspond à 230 ÷ 2, ce qui n'est pas la formule de la puissance.",
      "232 W correspond à une addition (230 + 2), ce qui est faux.",
      "Correct. P = U × I = 230 × 2 = 460 W.",
      "920 W applique le calcul deux fois, ce qui est faux."
    ] },
  { id: "PHY-103", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 2 kg se déplace à 3 m/s. Quelle est son énergie cinétique ?",
    a: ["3 J", "6 J", "9 J", "12 J"], correct: 2,
    explications: [
      "3 J ne prend pas en compte la masse et le carré de la vitesse.",
      "6 J correspond à m × v, mais la formule utilise v².",
      "Correct. Ec = ½ × m × v² = ½ × 2 × 9 = 9 J.",
      "12 J ne correspond pas à la formule de l'énergie cinétique."
    ] },
  { id: "PHY-104", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un livre de 2 kg est posé sur une étagère à 5 m de hauteur. Quelle est son énergie potentielle de pesanteur (g = 10 N/kg) ?",
    a: ["10 J", "50 J", "100 J", "20 J"], correct: 2,
    explications: [
      "10 J correspond à m × h = 2 × 5, il manque g.",
      "50 J correspond à g × h = 10 × 5, il manque la masse.",
      "Correct. Ep = m × g × h = 2 × 10 × 5 = 100 J.",
      "20 J correspond à m × g, il manque la hauteur."
    ] },
  { id: "PHY-105", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 20 N déplace une caisse sur 4 m dans la même direction. Quel est le travail de la force ?",
    a: ["5 J", "24 J", "80 J", "16 J"], correct: 2,
    explications: [
      "5 J correspond à 20 ÷ 4, ce qui n'est pas la formule du travail.",
      "24 J correspond à une addition (20 + 4), ce qui est faux.",
      "Correct. W = F × d = 20 × 4 = 80 J.",
      "16 J correspond à 4 × 4, ce qui ne respecte pas l'énoncé."
    ] },
  { id: "PHY-106", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 100 N s'exerce perpendiculairement sur une surface de 0,5 m². Quelle est la pression ?",
    a: ["50 Pa", "200 Pa", "0,005 Pa", "100 Pa"], correct: 1,
    explications: [
      "50 Pa correspond à une multiplication (100 × 0,5), ce qui est faux.",
      "Correct. P = F / S = 100 / 0,5 = 200 Pa.",
      "0,005 Pa correspond à S / F, c'est l'inverse de la formule.",
      "100 Pa ne tient pas compte de la division par la surface."
    ] },
  { id: "PHY-107", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un son met 3 s pour parcourir 1 020 m. Quelle est sa vitesse ?",
    a: ["3 060 m/s", "340 m/s", "1 020 m/s", "300 m/s"], correct: 1,
    explications: [
      "3 060 m/s correspond à une multiplication (1 020 × 3), ce qui est faux.",
      "Correct. v = d / t = 1 020 / 3 = 340 m/s.",
      "1 020 m/s est la distance, pas la vitesse.",
      "300 m/s est trop bas, le calcul donne 340 m/s."
    ] },
  { id: "PHY-108", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un bus roule à 100 km/h. Combien de temps met-il pour parcourir 300 km ?",
    a: ["2 h", "3 h", "30 h", "0,33 h"], correct: 1,
    explications: [
      "2 h ne correspond pas à 300 km à 100 km/h.",
      "Correct. t = d / v = 300 / 100 = 3 h.",
      "30 h correspond à 300 ÷ 10, ce qui n'est pas la formule.",
      "0,33 h correspond à v / d, c'est l'inverse de la formule."
    ] },
  { id: "PHY-109", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un conducteur est soumis à une tension de 6 V et traversé par un courant de 0,5 A. Quelle est sa résistance ?",
    a: ["3 Ω", "12 Ω", "6,5 Ω", "0,08 Ω"], correct: 1,
    explications: [
      "3 Ω ne correspond pas au calcul avec 6 V et 0,5 A.",
      "Correct. R = U / I = 6 / 0,5 = 12 Ω.",
      "6,5 Ω correspond à une addition (6 + 0,5), ce qui est faux.",
      "0,08 Ω correspond à I / U, c'est l'inverse de la formule."
    ] },
  { id: "PHY-110", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 4 Ω et 6 Ω sont branchées en série. Quelle est la résistance totale ?",
    a: ["2,4 Ω", "10 Ω", "24 Ω", "6 Ω"], correct: 1,
    explications: [
      "2,4 Ω ne correspond pas à un calcul en série.",
      "Correct. En série, on additionne : R = 4 + 6 = 10 Ω.",
      "24 Ω correspond à une multiplication, ce qui n'est pas la formule en série.",
      "6 Ω ne prend en compte que l'une des deux résistances."
    ] },
  { id: "PHY-111", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de masse volumique 0,8 g/cm³ est placé dans l'eau (1 g/cm³). Que se passe-t-il ?",
    a: ["Il coule", "Il flotte", "Il reste en suspension sans bouger", "Il disparaît"], correct: 1,
    explications: [
      "Un objet coule seulement si sa masse volumique est supérieure à celle de l'eau.",
      "Correct. 0,8 < 1, l'objet est moins dense que l'eau, donc il flotte.",
      "Un objet reste en suspension seulement si sa masse volumique est égale à celle de l'eau.",
      "Un objet ne disparaît pas dans l'eau."
    ] },
  { id: "PHY-112", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet tombe sans vitesse initiale d'une hauteur de 20 m (g = 10 m/s²). Combien de temps met-il pour toucher le sol ?",
    a: ["1 s", "2 s", "4 s", "10 s"], correct: 1,
    explications: [
      "1 s correspondrait à une chute de 5 m seulement.",
      "Correct. h = ½ g t² donne t² = 2h / g = 4, donc t = 2 s.",
      "4 s correspond à t², on a oublié de prendre la racine carrée.",
      "10 s est beaucoup trop long pour une chute de 20 m."
    ] },
  { id: "PHY-113", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 1 kg d'eau de 20 °C à 40 °C ? (c = 4 180 J/(kg·°C))",
    a: ["4 180 J", "83 600 J", "20 000 J", "800 J"], correct: 1,
    explications: [
      "4 180 J correspond à la chaleur massique seule, pour 1 °C.",
      "Correct. Q = m × c × ΔT = 1 × 4 180 × 20 = 83 600 J.",
      "20 000 J ne prend pas en compte la chaleur massique de l'eau.",
      "800 J correspond à 40 × 20, ce qui n'est pas la formule."
    ] },
  { id: "PHY-114", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une personne parcourt 50 km à 25 km/h, puis 50 km à 50 km/h. Quelle est sa vitesse moyenne sur le trajet total ?",
    a: ["37,5 km/h", "33,3 km/h", "75 km/h", "40 km/h"], correct: 1,
    explications: [
      "37,5 km/h est la moyenne simple des deux vitesses, ce qui n'est pas juste ici.",
      "Correct. Temps total = 2 h + 1 h = 3 h ; distance = 100 km ; vitesse moyenne = 100 / 3 ≈ 33,3 km/h.",
      "75 km/h est la somme des deux vitesses, ce n'est pas une moyenne.",
      "40 km/h ne correspond pas au calcul avec les temps réels."
    ] },
  { id: "PHY-115", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture passe de 0 à 20 m/s en 5 s. Quelle est son accélération ?",
    a: ["0,25 m/s²", "4 m/s²", "100 m/s²", "15 m/s²"], correct: 1,
    explications: [
      "0,25 m/s² correspond à Δt / Δv, c'est l'inverse de la formule.",
      "Correct. a = Δv / Δt = 20 / 5 = 4 m/s².",
      "100 m/s² correspond à une multiplication (20 × 5), ce qui n'est pas la formule.",
      "15 m/s² correspond à une soustraction (20 − 5), ce qui est faux."
    ] }
];
