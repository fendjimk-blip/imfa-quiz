// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 10 (PHY-431 a PHY-450)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P10 = [
  { id: "PHY-431", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 20 m/s pendant 15 s. Quelle distance parcourt-elle ?",
    a: ["35 m", "300 m", "1,33 m", "3 000 m"], correct: 1,
    explications: [
      "35 m correspond à 20 + 15, c'est une addition, ce qui est faux.",
      "Correct. d = v × t = 20 × 15 = 300 m.",
      "1,33 m correspond à 20 ÷ 15, ce qui n'est pas la formule.",
      "3 000 m correspond à 20 × 15 × 10, ce qui est faux."
    ] },
  { id: "PHY-432", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 0,5 kg. Quel est son poids (g = 10 N/kg) ?",
    a: ["0,05 N", "5 N", "50 N", "0,5 N"], correct: 1,
    explications: [
      "0,05 N correspond à une division par 10, ce qui est faux.",
      "Correct. P = m × g = 0,5 × 10 = 5 N.",
      "50 N correspond à une multiplication par 100, ce qui est faux.",
      "0,5 N correspond à la masse seule, sans multiplier par g."
    ] },
  { id: "PHY-433", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 10 N agit sur un corps de 2,5 kg. Quelle est son accélération ?",
    a: ["4 m/s²", "25 m/s²", "0,25 m/s²", "12,5 m/s²"], correct: 0,
    explications: [
      "Correct. a = F / m = 10 / 2,5 = 4 m/s².",
      "25 m/s² correspond à F × m, ce qui est faux.",
      "0,25 m/s² correspond à m / F, c'est l'inverse de la formule.",
      "12,5 m/s² correspond à une addition (10 + 2,5), ce qui est faux."
    ] },
  { id: "PHY-434", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une tension de 9 V fait circuler un courant de 3 A. Quelle est la résistance ?",
    a: ["27 Ω", "3 Ω", "6 Ω", "0,33 Ω"], correct: 1,
    explications: [
      "27 Ω correspond à U × I, ce qui n'est pas la formule de la résistance.",
      "Correct. R = U / I = 9 / 3 = 3 Ω.",
      "6 Ω correspond à 9 − 3, ce qui est faux.",
      "0,33 Ω correspond à I / U, c'est l'inverse de la formule."
    ] },
  { id: "PHY-435", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 6 kg se déplace à 2 m/s. Quelle est son énergie cinétique ?",
    a: ["12 J", "6 J", "24 J", "3 J"], correct: 0,
    explications: [
      "Correct. Ec = ½ × m × v² = ½ × 6 × 4 = 12 J.",
      "6 J correspond à ½ × m × v, il manque le carré de la vitesse.",
      "24 J correspond à m × v², il manque le facteur ½.",
      "3 J ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-436", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 1,5 kg est posé à 4 m de hauteur (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["6 J", "60 J", "15 J", "600 J"], correct: 1,
    explications: [
      "6 J correspond à m × h, il manque g.",
      "Correct. Ep = m × g × h = 1,5 × 10 × 4 = 60 J.",
      "15 J correspond à m × g, il manque la hauteur.",
      "600 J correspond à une erreur de multiplication, ce qui est faux."
    ] },
  { id: "PHY-437", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 120 N s'exerce perpendiculairement sur une surface de 0,6 m². Quelle est la pression ?",
    a: ["72 Pa", "200 Pa", "720 Pa", "0,005 Pa"], correct: 1,
    explications: [
      "72 Pa correspond à F × S (120 × 0,6), ce qui est faux.",
      "Correct. P = F / S = 120 / 0,6 = 200 Pa.",
      "720 Pa correspond à une multiplication, ce qui est faux.",
      "0,005 Pa correspond à S / F, c'est l'inverse de la formule."
    ] },
  { id: "PHY-438", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil est branché sous 110 V et traversé par un courant de 4 A. Quelle est sa puissance ?",
    a: ["114 W", "27,5 W", "440 W", "4 400 W"], correct: 2,
    explications: [
      "114 W correspond à une addition (110 + 4), ce qui est faux.",
      "27,5 W correspond à une division (110 ÷ 4), ce qui est faux.",
      "Correct. P = U × I = 110 × 4 = 440 W.",
      "4 400 W correspond à 440 × 10, ce qui est faux."
    ] },
  { id: "PHY-439", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un appareil de 800 W fonctionne pendant 2 h. Quelle énergie consomme-t-il ?",
    a: ["0,4 kWh", "1,6 kWh", "16 kWh", "1 600 kWh"], correct: 1,
    explications: [
      "0,4 kWh correspond à une division de la puissance par la durée, ce qui est faux.",
      "Correct. 800 W = 0,8 kW, donc E = 0,8 × 2 = 1,6 kWh.",
      "16 kWh correspond à une erreur sur la conversion des watts en kilowatts.",
      "1 600 kWh oublie de convertir les watts en kilowatts."
    ] },
  { id: "PHY-440", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse de 2,4 kg et un volume de 3 litres. Quelle est sa masse volumique en kg/m³ ?",
    a: ["0,00125 kg/m³", "800 kg/m³", "7,2 kg/m³", "7 200 kg/m³"], correct: 1,
    explications: [
      "0,00125 kg/m³ correspond à V / m, c'est l'inverse de la formule.",
      "Correct. 3 L = 0,003 m³, donc ρ = 2,4 / 0,003 = 800 kg/m³.",
      "7,2 kg/m³ correspond à m × V, ce qui est faux.",
      "7 200 kg/m³ correspond à une erreur sur la conversion du volume."
    ] },
  { id: "PHY-441", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde sonore se propage à 300 m/s et a une longueur d'onde de 0,6 m. Quelle est sa fréquence ?",
    a: ["180 Hz", "500 Hz", "0,002 Hz", "300,6 Hz"], correct: 1,
    explications: [
      "180 Hz correspond à v × λ (300 × 0,6), ce qui n'est pas la formule.",
      "Correct. f = v / λ = 300 / 0,6 = 500 Hz.",
      "0,002 Hz correspond à λ / v, c'est l'inverse de la formule.",
      "300,6 Hz correspond à une addition (300 + 0,6), ce qui est faux."
    ] },
  { id: "PHY-442", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un courant de 2 A circule pendant 5 min. Quelle charge électrique traverse le circuit ?",
    a: ["10 C", "600 C", "150 C", "0,4 C"], correct: 1,
    explications: [
      "10 C correspond à 2 × 5, on a pris les minutes au lieu des secondes.",
      "Correct. 5 min = 300 s, donc Q = I × t = 2 × 300 = 600 C.",
      "150 C correspond à 2 × 75, ce qui est faux.",
      "0,4 C correspond à t / I, ce qui est faux."
    ] },
  { id: "PHY-443", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Trois résistances de 5 Ω, 7 Ω et 8 Ω sont branchées en série. Quelle est la résistance totale ?",
    a: ["12 Ω", "20 Ω", "0,07 Ω", "280 Ω"], correct: 1,
    explications: [
      "12 Ω ne prend pas en compte les trois résistances.",
      "Correct. En série, on additionne : 5 + 7 + 8 = 20 Ω.",
      "0,07 Ω correspond à une formule de montage parallèle, ce qui est faux ici.",
      "280 Ω correspond à une multiplication, ce qui est faux pour un montage en série."
    ] },
  { id: "PHY-444", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 12 m/s et s'arrête en 4 s. Quelle est son accélération ?",
    a: ["3 m/s²", "−3 m/s²", "48 m/s²", "16 m/s²"], correct: 1,
    explications: [
      "3 m/s² est la bonne valeur absolue, mais le signe est négatif car la vitesse diminue.",
      "Correct. a = (0 − 12) / 4 = −3 m/s². Le signe négatif indique une décélération.",
      "48 m/s² correspond à 12 × 4, ce qui est faux.",
      "16 m/s² correspond à 12 + 4, ce qui est faux."
    ] },
  { id: "PHY-445", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un escargot avance à 1,5 m/s pendant 2 min. Quelle distance parcourt-il ?",
    a: ["80 m", "180 m", "0,0125 m", "121,5 m"], correct: 1,
    explications: [
      "80 m ne correspond pas à 1,5 m/s pendant 120 s.",
      "Correct. 2 min = 120 s, donc d = 1,5 × 120 = 180 m.",
      "0,0125 m correspond à t / v ... ce n'est pas la formule de la distance.",
      "121,5 m correspond à une addition (120 + 1,5), ce qui est faux."
    ] },
  { id: "PHY-446", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la vitesse de 15 m/s exprimée en km/h ?",
    a: ["4,17 km/h", "54 km/h", "15 km/h", "150 km/h"], correct: 1,
    explications: [
      "4,17 km/h correspond à 15 ÷ 3,6, c'est l'inverse de la conversion.",
      "Correct. Pour passer de m/s à km/h, on multiplie par 3,6 : 15 × 3,6 = 54 km/h.",
      "15 km/h garde le même nombre, sans faire la conversion.",
      "150 km/h correspond à 15 × 10, ce qui est faux."
    ] },
  { id: "PHY-447", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une période de 0,05 s. Quelle est sa fréquence ?",
    a: ["0,05 Hz", "20 Hz", "2 Hz", "200 Hz"], correct: 1,
    explications: [
      "0,05 Hz correspond à la période seule, il faut la convertir en fréquence.",
      "Correct. f = 1 / T = 1 / 0,05 = 20 Hz.",
      "2 Hz correspond à 1 ÷ 0,5, ce qui est faux.",
      "200 Hz correspond à 1 ÷ 0,005, ce qui est faux."
    ] },
  { id: "PHY-448", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 3 kg d'eau de 10 °C ? (c = 4 180 J/(kg·°C))",
    a: ["4 180 J", "12 540 J", "125 400 J", "1 254 J"], correct: 2,
    explications: [
      "4 180 J correspond à la chaleur massique seule, pour 1 kg et 1 °C.",
      "12 540 J correspond à m × c × 1, il manque la variation de température.",
      "Correct. Q = m × c × ΔT = 3 × 4 180 × 10 = 125 400 J.",
      "1 254 J correspond à une erreur sur un facteur 100."
    ] },
  { id: "PHY-449", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un ressort de raideur k = 40 N/m est allongé de 0,25 m. Quelle est la force de rappel ?",
    a: ["160 N", "10 N", "0,006 N", "40,25 N"], correct: 1,
    explications: [
      "160 N correspond à k × 4, ce qui n'est pas la formule.",
      "Correct. F = k × x = 40 × 0,25 = 10 N.",
      "0,006 N correspond à x / k, ce qui est faux.",
      "40,25 N correspond à une addition (40 + 0,25), ce qui est faux."
    ] },
  { id: "PHY-450", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force constante de 60 N déplace un objet sur 4 m, dans la même direction. Quel est le travail de la force ?",
    a: ["64 J", "240 J", "15 J", "0,067 J"], correct: 1,
    explications: [
      "64 J correspond à une addition (60 + 4), ce qui est faux.",
      "Correct. W = F × d = 60 × 4 = 240 J.",
      "15 J correspond à F ÷ d, ce qui n'est pas la formule.",
      "0,067 J correspond à d ÷ F, c'est l'inverse de la formule."
    ] }
];
