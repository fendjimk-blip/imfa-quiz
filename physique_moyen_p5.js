// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 5 (PHY-331 a PHY-350)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P5 = [
  { id: "PHY-331", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture parcourt 150 km en 2 h 30 min. Quelle est sa vitesse moyenne ?",
    a: ["60 km/h", "75 km/h", "375 km/h", "15 km/h"], correct: 0,
    explications: [
      "Correct. 2 h 30 min = 2,5 h, donc v = 150 / 2,5 = 60 km/h.",
      "75 km/h correspond à 150 / 2, on a oublié les 30 minutes.",
      "375 km/h correspond à 150 × 2,5, c'est une multiplication, pas une division.",
      "15 km/h correspond à 150 ÷ 10, ce qui n'est pas le calcul."
    ] },
  { id: "PHY-332", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 3 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,3 N", "30 N", "13 N", "300 N"], correct: 1,
    explications: [
      "0,3 N correspond à une division, ce qui est faux.",
      "Correct. P = m × g = 3 × 10 = 30 N.",
      "13 N correspond à une addition (3 + 10), ce qui est faux.",
      "300 N correspond à 3 × 100, ce qui n'est pas la formule."
    ] },
  { id: "PHY-333", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 60 N agit sur une masse de 12 kg. Quelle est l'accélération ?",
    a: ["72 m/s²", "0,2 m/s²", "5 m/s²", "48 m/s²"], correct: 2,
    explications: [
      "72 m/s² correspond à 60 + 12, ce qui est faux.",
      "0,2 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 60 / 12 = 5 m/s².",
      "48 m/s² correspond à 60 − 12, ce qui est faux."
    ] },
  { id: "PHY-334", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une lampe est alimentée sous 12 V et sa résistance est de 6 Ω. Quelle est l'intensité du courant ?",
    a: ["72 A", "0,5 A", "2 A", "18 A"], correct: 2,
    explications: [
      "72 A correspond à 12 × 6, ce qui est faux.",
      "0,5 A correspond à R / U, c'est l'inverse de la formule.",
      "Correct. I = U / R = 12 / 6 = 2 A.",
      "18 A correspond à 12 + 6, ce qui est faux."
    ] },
  { id: "PHY-335", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 4 kg se déplace à 5 m/s. Quelle est son énergie cinétique ?",
    a: ["20 J", "100 J", "50 J", "10 J"], correct: 2,
    explications: [
      "20 J correspond à m × v (4 × 5), ce qui n'est pas la formule.",
      "100 J oublie le carré de la vitesse ou le facteur ½ de la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 4 × 25 = 50 J.",
      "10 J correspond à ½ × m × v, il manque le carré de la vitesse."
    ] },
  { id: "PHY-336", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 2 kg est posé à 20 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["40 J", "400 J", "200 J", "220 J"], correct: 1,
    explications: [
      "40 J correspond à m × h (2 × 20), il manque g.",
      "Correct. Ep = m × g × h = 2 × 10 × 20 = 400 J.",
      "200 J correspond à m × g × h divisé par 2, ce qui n'est pas la formule.",
      "220 J correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-337", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 600 N s'exerce perpendiculairement sur une surface de 3 m². Quelle est la pression ?",
    a: ["1 800 Pa", "200 Pa", "603 Pa", "0,005 Pa"], correct: 1,
    explications: [
      "1 800 Pa correspond à 600 × 3, ce qui est faux.",
      "Correct. P = F / S = 600 / 3 = 200 Pa.",
      "603 Pa correspond à une addition (600 + 3), ce qui est faux.",
      "0,005 Pa correspond à S / F, c'est l'inverse de la formule."
    ] },
  { id: "PHY-338", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 230 V et traversé par un courant de 5 A. Quelle est sa puissance ?",
    a: ["1 150 W", "235 W", "45 W", "1 150 000 W"], correct: 0,
    explications: [
      "Correct. P = U × I = 230 × 5 = 1 150 W.",
      "235 W correspond à une addition (230 + 5), ce qui est faux.",
      "45 W ne correspond à aucune opération correcte avec 230 V et 5 A.",
      "1 150 000 W correspond à une erreur d'unité, ce n'est pas le résultat de ce calcul."
    ] },
  { id: "PHY-339", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 100 W fonctionne pendant 4 h. Quelle énergie consomme-t-il ?",
    a: ["0,4 kWh", "4 kWh", "400 kWh", "0,04 kWh"], correct: 0,
    explications: [
      "Correct. 100 W = 0,1 kW, donc E = 0,1 × 4 = 0,4 kWh.",
      "4 kWh oublie de convertir les watts en kilowatts.",
      "400 kWh correspond à 100 × 4 sans conversion, ce qui est faux.",
      "0,04 kWh correspond à une erreur sur la conversion en kilowatts."
    ] },
  { id: "PHY-340", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 800 g et un volume de 400 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "320 000 g/cm³", "1 200 g/cm³"], correct: 1,
    explications: [
      "0,5 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 800 / 400 = 2 g/cm³.",
      "320 000 g/cm³ correspond à une multiplication, ce qui est faux.",
      "1 200 g/cm³ correspond à une addition (800 + 400), ce qui est faux."
    ] },
  { id: "PHY-341", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore a une longueur d'onde de 2 m et une fréquence de 170 Hz. Quelle est sa vitesse ?",
    a: ["85 m/s", "340 m/s", "172 m/s", "0,0118 m/s"], correct: 1,
    explications: [
      "85 m/s correspond à λ ÷ f, c'est l'inverse de la formule.",
      "Correct. v = λ × f = 2 × 170 = 340 m/s.",
      "172 m/s correspond à une addition (2 + 170), ce qui est faux.",
      "0,0118 m/s correspond à f ÷ λ, ce qui est faux."
    ] },
  { id: "PHY-342", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un courant de 0,5 A circule pendant 20 s. Quelle charge électrique traverse le circuit ?",
    a: ["10 C", "0,025 C", "40 C", "20,5 C"], correct: 0,
    explications: [
      "Correct. Q = I × t = 0,5 × 20 = 10 C.",
      "0,025 C correspond à une division de l'intensité par le temps, ce qui est faux.",
      "40 C correspond à 2 × 20, ce qui ne respecte pas l'intensité de 0,5 A.",
      "20,5 C correspond à une addition (20 + 0,5), ce qui est faux."
    ] },
  { id: "PHY-343", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Trois résistances de 3 Ω, 9 Ω et 2 Ω sont branchées en série. Quelle est la résistance totale ?",
    a: ["14 Ω", "27 Ω", "0,15 Ω", "6 Ω"], correct: 0,
    explications: [
      "Correct. En série, on additionne : 3 + 9 + 2 = 14 Ω.",
      "27 Ω correspond à une multiplication (3 × 9), ce qui est faux pour un montage en série.",
      "0,15 Ω correspond à 1/R, ce qui est faux pour un montage en série.",
      "6 Ω ne prend pas en compte les trois résistances."
    ] },
  { id: "PHY-344", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un cycliste passe de 5 m/s à 25 m/s en 4 s. Quelle est son accélération ?",
    a: ["20 m/s²", "5 m/s²", "30 m/s²", "0,2 m/s²"], correct: 1,
    explications: [
      "20 m/s² correspond à la variation de vitesse sans diviser par le temps.",
      "Correct. a = (v − v₀) / t = (25 − 5) / 4 = 5 m/s².",
      "30 m/s² correspond à 25 + 5, ce qui est faux.",
      "0,2 m/s² correspond à t / Δv, c'est l'inverse de la formule."
    ] },
  { id: "PHY-345", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 0,5 kg d'eau de 40 °C ? (c = 4 180 J/(kg·°C))",
    a: ["83 600 J", "167 200 J", "4 180 J", "20 900 J"], correct: 0,
    explications: [
      "Correct. Q = m × c × ΔT = 0,5 × 4 180 × 40 = 83 600 J.",
      "167 200 J correspond à un ΔT doublé, ce qui n'est pas l'énoncé.",
      "4 180 J correspond à la chaleur massique seule, pour 1 kg et 1 °C.",
      "20 900 J correspond à une erreur sur la masse ou sur ΔT."
    ] },
  { id: "PHY-346", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un véhicule roule à 72 km/h pendant 30 s. Quelle distance parcourt-il ?",
    a: ["600 m", "2 160 m", "2,4 m", "72 m"], correct: 0,
    explications: [
      "Correct. 72 km/h = 20 m/s, donc d = v × t = 20 × 30 = 600 m.",
      "2 160 m correspond à 72 × 30, sans convertir les km/h en m/s.",
      "2,4 m correspond à une division erronée, ce qui est faux.",
      "72 m correspond à la vitesse multipliée par 1, sans la durée."
    ] },
  { id: "PHY-347", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un ressort de raideur k = 200 N/m est allongé de 5 cm. Quelle est la force de rappel ?",
    a: ["4 N", "10 N", "250 N", "0,00025 N"], correct: 1,
    explications: [
      "4 N correspond à k ÷ 50, ce qui n'est pas la formule.",
      "Correct. F = k × x = 200 × 0,05 = 10 N (5 cm = 0,05 m).",
      "250 N correspond à k ÷ x, c'est l'inverse de la formule.",
      "0,00025 N correspond à x ÷ k, ce qui est faux."
    ] },
  { id: "PHY-348", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une fréquence de 20 Hz. Quelle est sa période ?",
    a: ["0,05 s", "20 s", "0,5 s", "400 s"], correct: 0,
    explications: [
      "Correct. T = 1 / f = 1 / 20 = 0,05 s.",
      "20 s correspond à la fréquence, pas à la période.",
      "0,5 s ne correspond pas à 1 ÷ 20.",
      "400 s correspond à f × 20, ce qui est faux."
    ] },
  { id: "PHY-349", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture de 1 200 kg est soumise à la gravité (g = 10 N/kg). Quel est son poids ?",
    a: ["120 N", "1 200 N", "12 000 N", "120 000 N"], correct: 2,
    explications: [
      "120 N correspond à une division par 10, ce qui est faux.",
      "1 200 N correspond à la masse seule, sans multiplier par g.",
      "Correct. P = m × g = 1 200 × 10 = 12 000 N.",
      "120 000 N correspond à 1 200 × 100, ce qui est faux."
    ] },
  { id: "PHY-350", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un moteur fournit un travail de 1 200 J en 6 s. Quelle est sa puissance ?",
    a: ["200 W", "7 200 W", "6 W", "1 206 W"], correct: 0,
    explications: [
      "Correct. P = W / t = 1 200 / 6 = 200 W.",
      "7 200 W correspond à 1 200 × 6, ce qui est faux.",
      "6 W correspond à la durée, pas à la puissance.",
      "1 206 W correspond à une addition (1 200 + 6), ce qui est faux."
    ] }
];
