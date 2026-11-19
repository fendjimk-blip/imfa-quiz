// IMFA QUIZ - PHYSIQUE, MOYEN, Partie 4 (PHY-156 a PHY-175)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const PHYSIQUE_MOYEN_P4 = [
  { id: "PHY-156", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture roule à 90 km/h pendant 45 min. Quelle distance parcourt-elle ?",
    a: ["2 km", "67,5 km", "135 km", "45 km"], correct: 1,
    explications: [
      "2 km ne correspond pas à 90 km/h pendant 45 min.",
      "Correct. 45 min = 0,75 h, donc d = v × t = 90 × 0,75 = 67,5 km.",
      "135 km correspond à 90 × 1,5, ce qui suppose 1 h 30 min.",
      "45 km correspond à la durée en minutes, sans conversion ni calcul correct."
    ] },
  { id: "PHY-157", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a un poids de 100 N (g = 10 N/kg). Quelle est sa masse ?",
    a: ["1 000 kg", "10 kg", "90 kg", "110 kg"], correct: 1,
    explications: [
      "1 000 kg correspond à 100 × 10, ce qui est l'inverse de la formule.",
      "Correct. m = P / g = 100 / 10 = 10 kg.",
      "90 kg correspond à 100 − 10, ce qui est faux.",
      "110 kg correspond à 100 + 10, ce qui est faux."
    ] },
  { id: "PHY-158", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un courant de 0,5 A traverse une résistance de 10 Ω. Quelle est la tension à ses bornes ?",
    a: ["20 V", "5 V", "0,05 V", "10,5 V"], correct: 1,
    explications: [
      "20 V correspond à 10 × 2, ce qui n'est pas la formule.",
      "Correct. U = R × I = 10 × 0,5 = 5 V.",
      "0,05 V correspond à 0,5 × 0,1, ce qui est faux.",
      "10,5 V correspond à une addition (10 + 0,5), ce qui est faux."
    ] },
  { id: "PHY-159", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet a une masse volumique de 2,7 g/cm³ et un volume de 10 cm³. Quelle est sa masse ?",
    a: ["2,7 g", "27 g", "0,37 g", "12,7 g"], correct: 1,
    explications: [
      "2,7 g correspond à la masse volumique seule, sans multiplier par le volume.",
      "Correct. m = ρ × V = 2,7 × 10 = 27 g.",
      "0,37 g correspond à une division (10 ÷ 2,7), ce qui est faux.",
      "12,7 g correspond à une addition (2,7 + 10), ce qui est faux."
    ] },
  { id: "PHY-160", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une lampe de 60 W reste allumée pendant 5 h. Quelle énergie consomme-t-elle ?",
    a: ["0,3 kWh", "12 kWh", "65 kWh", "3 kWh"], correct: 0,
    explications: [
      "Correct. 60 W = 0,06 kW et E = 0,06 × 5 = 0,3 kWh.",
      "12 kWh ne correspond pas à ce calcul : 60 W × 5 h = 300 Wh = 0,3 kWh.",
      "65 kWh correspond à une addition (60 + 5), ce qui est faux.",
      "3 kWh oublie de convertir les watts en kilowatts."
    ] },
  { id: "PHY-161", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 2 kg est soulevé de 3 m (g = 10 N/kg). Quelle est son énergie potentielle de pesanteur ?",
    a: ["6 J", "60 J", "20 J", "600 J"], correct: 1,
    explications: [
      "6 J correspond à m × h, il manque g.",
      "Correct. Ep = m × g × h = 2 × 10 × 3 = 60 J.",
      "20 J correspond à m × g, il manque la hauteur.",
      "600 J correspond à une erreur sur un des facteurs."
    ] },
  { id: "PHY-162", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture de 1 000 kg roule à 20 m/s. Quelle est son énergie cinétique ?",
    a: ["20 000 J", "200 000 J", "400 000 J", "10 000 J"], correct: 1,
    explications: [
      "20 000 J correspond à m × v, ce qui n'est pas la formule.",
      "Correct. Ec = ½ × m × v² = ½ × 1 000 × 400 = 200 000 J.",
      "400 000 J oublie le facteur ½.",
      "10 000 J ne prend pas en compte la vitesse au carré correctement."
    ] },
  { id: "PHY-163", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une résistance de 5 Ω est traversée par un courant de 2 A pendant 10 s. Quelle énergie est dissipée ?",
    a: ["100 J", "200 J", "20 J", "2 000 J"], correct: 1,
    explications: [
      "100 J correspond à R × I × t = 5 × 2 × 10, ce qui oublie un facteur I. La formule correcte est E = R × I² × t.",
      "Correct. U = R × I = 10 V, puis P = U × I = 20 W, et E = P × t = 20 × 10 = 200 J.",
      "20 J correspond à la puissance, il faut la multiplier par le temps.",
      "2 000 J correspond à une erreur sur le calcul de la tension."
    ] },
  { id: "PHY-164", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux résistances de 10 Ω et 20 Ω sont branchées en parallèle. Quelle est la résistance totale ?",
    a: ["30 Ω", "6,67 Ω", "200 Ω", "5 Ω"], correct: 1,
    explications: [
      "30 Ω correspond à une addition, qui se fait en série, pas en parallèle.",
      "Correct. 1/R = 1/10 + 1/20 = 3/20, donc R = 20/3 ≈ 6,67 Ω.",
      "200 Ω correspond à une multiplication, ce qui est faux.",
      "5 Ω ne correspond pas au calcul : 1/R = 1/10 + 1/20 donne 6,67 Ω."
    ] },
  { id: "PHY-165", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet tombe sans vitesse initiale d'une hauteur de 45 m (g = 10 m/s²). Combien de temps met-il pour toucher le sol ?",
    a: ["3 s", "9 s", "4,5 s", "22,5 s"], correct: 0,
    explications: [
      "Correct. t² = 2h / g = 90 / 10 = 9, donc t = 3 s.",
      "9 s correspond à t², on a oublié de prendre la racine carrée.",
      "4,5 s correspond à h / 10, ce qui n'est pas la formule.",
      "22,5 s correspond à h / 2, ce qui n'est pas la formule."
    ] },
  { id: "PHY-166", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un cycliste passe de 0 à 6 m/s en 2 s. Quelle est son accélération ?",
    a: ["12 m/s²", "3 m/s²", "0,33 m/s²", "8 m/s²"], correct: 1,
    explications: [
      "12 m/s² correspond à 6 × 2, ce qui est faux.",
      "Correct. a = Δv / Δt = 6 / 2 = 3 m/s².",
      "0,33 m/s² correspond à Δt / Δv, c'est l'inverse de la formule.",
      "8 m/s² correspond à 6 + 2, ce qui est faux."
    ] },
  { id: "PHY-167", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une onde a une période de 0,25 s. Quelle est sa fréquence ?",
    a: ["0,25 Hz", "4 Hz", "25 Hz", "2,5 Hz"], correct: 1,
    explications: [
      "0,25 Hz correspond à la période seule, il faut la passer en fréquence.",
      "Correct. f = 1 / T = 1 / 0,25 = 4 Hz.",
      "25 Hz correspond à 1 ÷ 0,04, ce qui est faux.",
      "2,5 Hz correspond à une erreur de calcul sur 1 ÷ 0,25."
    ] },
  { id: "PHY-168", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un courant de 3 A circule pendant 20 min. Quelle charge électrique traverse le circuit ?",
    a: ["60 C", "3 600 C", "180 C", "27 C"], correct: 1,
    explications: [
      "60 C correspond à 3 × 20, on a pris les minutes au lieu des secondes.",
      "Correct. 20 min = 1 200 s, donc Q = I × t = 3 × 1 200 = 3 600 C.",
      "180 C correspond à 3 × 60, ce qui est faux.",
      "27 C correspond à 3 × 9, ce qui est faux."
    ] },
  { id: "PHY-169", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un objet de 1 kg est lancé avec une vitesse de 10 m/s. Quelle est son énergie cinétique ?",
    a: ["10 J", "50 J", "100 J", "5 J"], correct: 1,
    explications: [
      "10 J correspond à m × v, ce qui n'est pas la formule.",
      "Correct. Ec = ½ × 1 × 10² = ½ × 100 = 50 J.",
      "100 J oublie le facteur ½.",
      "5 J correspond à ½ × m × v, il manque le carré de la vitesse."
    ] },
  { id: "PHY-170", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un liquide de masse volumique 800 kg/m³ a une masse de 4 000 kg. Quel est son volume ?",
    a: ["3 200 000 m³", "5 m³", "0,2 m³", "4 800 m³"], correct: 1,
    explications: [
      "3 200 000 m³ correspond à une multiplication (800 × 4 000), ce qui est faux.",
      "Correct. V = m / ρ = 4 000 / 800 = 5 m³.",
      "0,2 m³ correspond à ρ / m, c'est l'inverse de la formule.",
      "4 800 m³ correspond à une addition (800 + 4 000), ce qui est faux."
    ] },
  { id: "PHY-171", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une lampe est alimentée sous 12 V et traversée par un courant de 0,5 A. Quelle est sa puissance ?",
    a: ["24 W", "6 W", "0,04 W", "12,5 W"], correct: 1,
    explications: [
      "24 W correspond à 12 × 2, ce qui n'est pas le calcul avec 0,5 A.",
      "Correct. P = U × I = 12 × 0,5 = 6 W.",
      "0,04 W correspond à I / U, c'est l'inverse de la formule.",
      "12,5 W correspond à une addition (12 + 0,5), ce qui est faux."
    ] },
  { id: "PHY-172", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une voiture passe de 20 m/s à 0 m/s en 5 s en freinant. Quelle est son accélération ?",
    a: ["Une accélération de 4 m/s²", "Une décélération de 4 m/s²", "Une accélération de 100 m/s²", "Une décélération de 0,25 m/s²"], correct: 1,
    explications: [
      "Une accélération positive signifie que la vitesse augmente, ce qui n'est pas le cas ici.",
      "Correct. a = (0 − 20) / 5 = −4 m/s². La vitesse diminue de 4 m/s chaque seconde.",
      "100 m/s² correspond à 20 × 5, ce qui est faux.",
      "0,25 m/s² correspond à 5 ÷ 20, c'est l'inverse de la formule."
    ] },
  { id: "PHY-173", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une force de 500 N produit une pression de 1 000 Pa. Quelle est la surface pressée ?",
    a: ["0,5 m²", "500 000 m²", "2 m²", "0,002 m²"], correct: 0,
    explications: [
      "Correct. S = F / P = 500 / 1 000 = 0,5 m².",
      "500 000 m² correspond à F × P, ce qui est faux.",
      "2 m² correspond à P / F, c'est l'inverse de la formule.",
      "0,002 m² correspond à une erreur de calcul sur 500 ÷ 1 000 ou 1 000 ÷ 500."
    ] },
  { id: "PHY-174", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un son fait un aller-retour vers un obstacle en 2 s, à la vitesse de 340 m/s. À quelle distance se trouve l'obstacle ?",
    a: ["680 m", "340 m", "170 m", "1 360 m"], correct: 1,
    explications: [
      "680 m est la distance parcourue à l'aller-retour, pas la distance jusqu'à l'obstacle.",
      "Correct. Le son parcourt 340 × 2 = 680 m en aller-retour, donc l'obstacle est à 680 / 2 = 340 m.",
      "170 m est la moitié de la distance, il faut diviser le trajet aller-retour par deux seulement une fois.",
      "1 360 m correspond à 340 × 4, ce qui est faux."
    ] },
  { id: "PHY-175", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie faut-il pour chauffer 0,5 kg d'eau de 20 °C à 100 °C ? (c = 4 180 J/(kg·°C))",
    a: ["167 200 J", "41 800 J", "334 400 J", "8 360 J"], correct: 0,
    explications: [
      "Correct. Q = m × c × ΔT = 0,5 × 4 180 × 80 = 167 200 J.",
      "41 800 J correspond à une erreur sur ΔT ou sur la masse.",
      "334 400 J correspond à un calcul avec ΔT doublé, ce qui est faux.",
      "8 360 J correspond à 2 × 4 180, il manque la variation de température."
    ] }
];
