// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 2 (PHY-116 a PHY-135)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P2 = [
  { id: "PHY-116", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 72 km/h. Quelle est sa vitesse en m/s ?",
    a: ["20 m/s", "200 m/s", "7,2 m/s", "259 200 m/s"], correct: 0,
    explications: [
      "Correct. 72 km/h ÷ 3,6 = 20 m/s.",
      "200 m/s correspond à une multiplication par 3,6 au lieu d'une division.",
      "7,2 m/s correspond à 72 ÷ 10, ce qui n'est pas la conversion.",
      "259 200 m/s correspond à 72 × 3 600, ce qui est faux."
    ] },
  { id: "PHY-117", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a un poids de 60 N. Quelle est sa masse (g = 10 N/kg) ?",
    a: ["600 kg", "6 kg", "70 kg", "50 kg"], correct: 1,
    explications: [
      "600 kg correspond à 60 × 10, ce qui est faux.",
      "Correct. m = P / g = 60 / 10 = 6 kg.",
      "70 kg correspond à 60 + 10, ce qui est faux.",
      "50 kg correspond à 60 − 10, ce qui est faux."
    ] },
  { id: "PHY-118", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un ressort de raideur k = 50 N/m est allongé de 0,2 m. Quelle est la force de rappel ?",
    a: ["250 N", "10 N", "0,004 N", "50,2 N"], correct: 1,
    explications: [
      "250 N ne correspond pas au calcul F = k × x.",
      "Correct. F = k × x = 50 × 0,2 = 10 N.",
      "0,004 N correspond à une division de x par k, ce qui est faux.",
      "50,2 N correspond à 50 + 0,2, ce qui est faux."
    ] },
  { id: "PHY-119", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une charge électrique de 10 C traverse un fil en 5 s. Quelle est l'intensité du courant ?",
    a: ["50 A", "0,5 A", "2 A", "15 A"], correct: 2,
    explications: [
      "50 A correspond à 10 × 5, ce qui est faux.",
      "0,5 A correspond à t / Q, c'est l'inverse de la formule.",
      "Correct. I = Q / t = 10 / 5 = 2 A.",
      "15 A correspond à 10 + 5, ce qui est faux."
    ] },
  { id: "PHY-120", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une lampe est alimentée sous 9 V et traversée par un courant de 1,5 A. Quelle est sa résistance ?",
    a: ["13,5 Ω", "0,17 Ω", "6 Ω", "7,5 Ω"], correct: 2,
    explications: [
      "13,5 Ω correspond à 9 × 1,5, ce qui n'est pas la formule.",
      "0,17 Ω correspond à I / U, c'est l'inverse de la formule.",
      "Correct. R = U / I = 9 / 1,5 = 6 Ω.",
      "7,5 Ω correspond à 9 − 1,5, ce qui est faux."
    ] },
  { id: "PHY-121", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un radiateur de 1 500 W fonctionne pendant 2 h. Quelle énergie consomme-t-il ?",
    a: ["750 kWh", "3 kWh", "1 500 kWh", "0,75 kWh"], correct: 1,
    explications: [
      "750 kWh correspond à 1 500 ÷ 2, ce qui n'est pas le calcul de l'énergie.",
      "Correct. E = P × t = 1,5 kW × 2 h = 3 kWh.",
      "1 500 kWh oublie de convertir les watts en kilowatts.",
      "0,75 kWh correspond à 1,5 ÷ 2, ce qui est faux."
    ] },
  { id: "PHY-122", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 3 kg est posé à 10 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["30 J", "300 J", "3 J", "130 J"], correct: 1,
    explications: [
      "30 J correspond à 3 × 10, il manque la hauteur.",
      "Correct. Ep = m × g × h = 3 × 10 × 10 = 300 J.",
      "3 J correspond à la masse seule, il manque g et h.",
      "130 J correspond à 100 + 30, ce qui est faux."
    ] },
  { id: "PHY-123", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "La lumière du Soleil parcourt 1,5 × 10¹¹ m jusqu'à la Terre. Sa vitesse est 3 × 10⁸ m/s. Combien de temps met-elle ?",
    a: ["500 s (environ 8 min)", "5 s", "50 000 s", "8 h"], correct: 0,
    explications: [
      "Correct. t = d / v = 1,5 × 10¹¹ / 3 × 10⁸ = 500 s, soit environ 8 min 20 s.",
      "5 s correspond à une erreur sur les puissances de 10.",
      "50 000 s correspond à une erreur sur les puissances de 10.",
      "8 h est bien trop long, la lumière arrive en quelques minutes."
    ] },
  { id: "PHY-124", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un cycliste passe de 2 m/s à 8 m/s en 3 s. Quelle est son accélération ?",
    a: ["2 m/s²", "6 m/s²", "10 m/s²", "0,5 m/s²"], correct: 0,
    explications: [
      "Correct. a = (v − v₀) / t = (8 − 2) / 3 = 2 m/s².",
      "6 m/s² correspond à la variation de vitesse, sans diviser par le temps.",
      "10 m/s² correspond à 8 + 2, ce qui est faux.",
      "0,5 m/s² correspond à 3 ÷ 6, c'est l'inverse de la formule."
    ] },
  { id: "PHY-125", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 40 N agit sur une masse de 8 kg. Quelle est l'accélération ?",
    a: ["320 m/s²", "0,2 m/s²", "5 m/s²", "48 m/s²"], correct: 2,
    explications: [
      "320 m/s² correspond à 40 × 8, ce qui est faux.",
      "0,2 m/s² correspond à m ÷ F, c'est l'inverse de la formule.",
      "Correct. a = F / m = 40 / 8 = 5 m/s².",
      "48 m/s² correspond à 40 + 8, ce qui est faux."
    ] },
  { id: "PHY-126", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de poids 200 N repose sur une surface de 2 m². Quelle est la pression exercée ?",
    a: ["400 Pa", "100 Pa", "0,01 Pa", "202 Pa"], correct: 1,
    explications: [
      "400 Pa correspond à 200 × 2, ce qui est faux.",
      "Correct. P = F / S = 200 / 2 = 100 Pa.",
      "0,01 Pa correspond à S / F, c'est l'inverse de la formule.",
      "202 Pa correspond à 200 + 2, ce qui est faux."
    ] },
  { id: "PHY-127", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un liquide de masse volumique 1 000 kg/m³ occupe un volume de 0,5 m³. Quelle est sa masse ?",
    a: ["500 kg", "2 000 kg", "0,0005 kg", "1 000,5 kg"], correct: 0,
    explications: [
      "Correct. m = ρ × V = 1 000 × 0,5 = 500 kg.",
      "2 000 kg correspond à 1 000 × 2, ce qui ne respecte pas le volume.",
      "0,0005 kg correspond à une division, ce qui est faux.",
      "1 000,5 kg correspond à une addition, ce qui est faux."
    ] },
  { id: "PHY-128", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un moteur fournit 600 J d'énergie en 20 s. Quelle est sa puissance ?",
    a: ["12 000 W", "620 W", "30 W", "580 W"], correct: 2,
    explications: [
      "12 000 W correspond à 600 × 20, ce qui est faux.",
      "620 W correspond à 600 + 20, ce qui est faux.",
      "Correct. P = E / t = 600 / 20 = 30 W.",
      "580 W correspond à 600 − 20, ce qui est faux."
    ] },
  { id: "PHY-129", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une fréquence de 50 Hz. Quelle est sa période ?",
    a: ["2 s", "50 s", "0,5 s", "0,02 s"], correct: 3,
    explications: [
      "2 s ne correspond pas à 1 ÷ 50.",
      "50 s correspond à la fréquence, pas à la période.",
      "0,5 s ne correspond pas à 1 ÷ 50.",
      "Correct. T = 1 / f = 1 / 50 = 0,02 s."
    ] },
  { id: "PHY-130", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore a une longueur d'onde de 0,5 m et une fréquence de 680 Hz. Quelle est sa vitesse ?",
    a: ["1 180 m/s", "0,5 m/s", "340 m/s", "680 m/s"], correct: 2,
    explications: [
      "1 180 m/s ne correspond à aucun calcul correct avec ces valeurs.",
      "0,5 m/s correspond à la longueur d'onde seule.",
      "Correct. v = λ × f = 0,5 × 680 = 340 m/s.",
      "680 m/s correspond à la fréquence seule, ce qui n'est pas une vitesse."
    ] },
  { id: "PHY-131", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un ballon de 2 kg est lancé à 10 m/s. Quelle est son énergie cinétique ?",
    a: ["20 J", "100 J", "200 J", "50 J"], correct: 1,
    explications: [
      "20 J correspond à m × v, ce qui n'est pas la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 2 × 100 = 100 J.",
      "200 J oublie le facteur ½ dans la formule.",
      "50 J correspond à ½ × 100, il manque la masse."
    ] },
  { id: "PHY-132", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un cycliste parcourt 15 km en 30 min. Quelle est sa vitesse moyenne ?",
    a: ["30 km/h", "15 km/h", "0,5 km/h", "450 km/h"], correct: 0,
    explications: [
      "Correct. 30 min = 0,5 h, donc v = d / t = 15 / 0,5 = 30 km/h.",
      "15 km/h correspond à la distance, il faut la diviser par le temps en heures.",
      "0,5 km/h correspond à t / d, c'est l'inverse de la formule.",
      "450 km/h correspond à 15 × 30, ce qui est faux."
    ] },
  { id: "PHY-133", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 2 kg d'eau de 10 °C à 60 °C ? (c = 4 180 J/(kg·°C))",
    a: ["418 000 J", "41 800 J", "8 360 J", "50 J"], correct: 0,
    explications: [
      "Correct. Q = m × c × ΔT = 2 × 4 180 × 50 = 418 000 J.",
      "41 800 J correspond à une erreur sur ΔT (5 °C au lieu de 50 °C).",
      "8 360 J correspond à 2 × 4 180, il manque la variation de température.",
      "50 J correspond à ΔT seul, ce qui est faux."
    ] },
  { id: "PHY-134", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un courant de 4 A traverse une résistance de 25 Ω. Quelle est la tension aux bornes de la résistance ?",
    a: ["6,25 V", "29 V", "100 V", "21 V"], correct: 2,
    explications: [
      "6,25 V correspond à 25 ÷ 4, c'est l'inverse de la formule.",
      "29 V correspond à 25 + 4, ce qui est faux.",
      "Correct. U = R × I = 25 × 4 = 100 V.",
      "21 V correspond à 25 − 4, ce qui est faux."
    ] },
  { id: "PHY-135", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 0,5 kg et un volume de 0,0005 m³. Quelle est sa masse volumique ?",
    a: ["0,00025 kg/m³", "1 000 kg/m³", "250 kg/m³", "2 000 kg/m³"], correct: 1,
    explications: [
      "0,00025 kg/m³ ne correspond pas au calcul ρ = m / V avec ces valeurs.",
      "Correct. ρ = m / V = 0,5 / 0,0005 = 1 000 kg/m³.",
      "250 kg/m³ ne correspond pas au calcul ρ = m / V avec ces valeurs.",
      "2 000 kg/m³ ne correspond pas au calcul ρ = m / V avec ces valeurs."
    ] }
];
