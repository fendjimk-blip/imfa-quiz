// IMFA QUIZ - PHYSIQUE, DIFFICILE, Partie 5 (PHY-581 a PHY-600)
// difficulte 4 = nivo DIFFICILE : rezònman ak kalkil plis konplèks
const PHYSIQUE_DIFFICILE_P5 = [
  { id: "PHY-581", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 2 kg tombe sans frottement d'une hauteur de 10 m (g = 10 m/s²). Quelle est sa vitesse juste avant de toucher le sol ?",
    a: ["10 m/s", "14,1 m/s", "20 m/s", "100 m/s"], correct: 1,
    explications: [
      "10 m/s correspondrait à une chute de 5 m, pas de 10 m.",
      "Correct. v² = 2 × g × h = 2 × 10 × 10 = 200, donc v ≈ 14,1 m/s.",
      "20 m/s correspond à 2 × g × h sans prendre la racine carrée.",
      "100 m/s correspond à 10 × 10, la racine carrée a été oubliée."
    ] },
  { id: "PHY-582", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un fil parcouru par un courant électrique finit-il par chauffer ?",
    a: ["Les électrons cèdent une partie de leur énergie aux atomes du fil lors des chocs", "Le courant produit des atomes de chaleur", "Le fil absorbe la lumière du circuit", "Le fil attire la chaleur de l'air"], correct: 0,
    explications: [
      "Correct. Pendant leur déplacement, les électrons heurtent les atomes du fil et leur transmettent de l'énergie, ce qui chauffe le fil (effet Joule).",
      "Le courant ne produit pas d'atomes de chaleur, il déplace des charges.",
      "La lumière n'est pas la cause de l'échauffement du fil.",
      "Le fil ne attire pas la chaleur de l'air, la chaleur vient du courant."
    ] },
  { id: "PHY-583", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une lampe est alimentée sous 12 V et traversée par un courant de 0,5 A. Quelle énergie consomme-t-elle en 1 minute ?",
    a: ["6 J", "360 J", "720 J", "30 J"], correct: 1,
    explications: [
      "6 J correspond à la puissance (6 W), il faut la multiplier par le temps.",
      "Correct. P = U × I = 12 × 0,5 = 6 W, et E = P × t = 6 × 60 = 360 J.",
      "720 J correspond à une erreur sur la durée (2 minutes au lieu de 1).",
      "30 J correspond à une erreur sur la tension ou l'intensité."
    ] },
  { id: "PHY-584", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet subit deux forces perpendiculaires : 3 N vers l'est et 4 N vers le nord. Quelle est la norme de la force résultante ?",
    a: ["7 N", "5 N", "1 N", "12 N"], correct: 1,
    explications: [
      "7 N correspond à 3 + 4, mais des forces perpendiculaires ne s'additionnent pas ainsi.",
      "Correct. Théorème de Pythagore : F = √(3² + 4²) = √25 = 5 N.",
      "1 N correspond à 4 − 3, ce qui vaut seulement si les forces sont opposées.",
      "12 N correspond à 3 × 4, ce qui n'est pas une addition vectorielle."
    ] },
  { id: "PHY-585", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi le son voyage-t-il plus vite dans un gaz chaud que dans un gaz froid ?",
    a: ["Les particules chaudes bougent plus vite et transmettent la vibration plus rapidement", "Le gaz chaud est plus dense", "La chaleur supprime les vibrations", "Le son ne voyage que dans les gaz froids"], correct: 0,
    explications: [
      "Correct. Quand la température augmente, les particules s'agitent davantage et transmettent les vibrations plus vite.",
      "Un gaz chaud est en général moins dense, ce n'est pas la raison de la vitesse plus élevée.",
      "La chaleur ne supprime pas les vibrations, elle les accélère dans la propagation.",
      "Le son voyage aussi dans les gaz chauds, il ne se limite pas aux gaz froids."
    ] },
  { id: "PHY-586", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un ressort de raideur k = 200 N/m supporte une masse de 4 kg (g = 10 N/kg). De combien s'allonge-t-il ?",
    a: ["2 cm", "20 cm", "0,5 m", "5 m"], correct: 1,
    explications: [
      "2 cm correspond à une erreur d'un facteur 10 sur le calcul.",
      "Correct. Équilibre : k × x = m × g, donc x = 40 / 200 = 0,2 m = 20 cm.",
      "0,5 m correspond à une erreur sur la division par k.",
      "5 m correspond à une multiplication au lieu d'une division."
    ] },
  { id: "PHY-587", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un moteur a un rendement de 25 % et consomme 400 J d'énergie. Quelle est l'énergie utile fournie ?",
    a: ["25 J", "100 J", "400 J", "1 600 J"], correct: 1,
    explications: [
      "25 J correspond au pourcentage, pas à l'énergie utile.",
      "Correct. Énergie utile = rendement × énergie consommée = 0,25 × 400 = 100 J.",
      "400 J est l'énergie consommée totale, une partie est perdue.",
      "1 600 J correspond à 400 × 4, ce qui est une erreur sur le rendement."
    ] },
  { id: "PHY-588", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une voiture roulant à 90 km/h freine avec une décélération constante de 5 m/s². Quelle est sa distance d'arrêt ?",
    a: ["12,5 m", "62,5 m", "125 m", "25 m"], correct: 1,
    explications: [
      "12,5 m correspond à une erreur sur la conversion de la vitesse ou sur la formule.",
      "Correct. 90 km/h = 25 m/s, et d = v² / (2a) = 625 / 10 = 62,5 m.",
      "125 m correspond à v² / a, il manque le facteur 2.",
      "25 m correspond à la vitesse en m/s, ce n'est pas une distance d'arrêt."
    ] },
  { id: "PHY-589", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet a une masse volumique de 8 g/cm³ et un volume de 100 cm³ (g = 10 N/kg). Quel est son poids ?",
    a: ["80 N", "8 N", "0,8 N", "800 N"], correct: 1,
    explications: [
      "80 N correspond à une erreur sur la conversion des grammes en kilogrammes.",
      "Correct. m = ρ × V = 8 × 100 = 800 g = 0,8 kg, donc P = 0,8 × 10 = 8 N.",
      "0,8 N correspond à la masse en kg, sans multiplier par g.",
      "800 N correspond à la masse en grammes multipliée par g, ce qui est une erreur d'unité."
    ] },
  { id: "PHY-590", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi la Lune n'a-t-elle pratiquement pas d'atmosphère ?",
    a: ["Sa gravité est trop faible pour retenir les gaz", "Le Soleil a brûlé tout l'air", "Elle est trop proche de la Terre", "Elle a été recouverte d'eau"], correct: 0,
    explications: [
      "Correct. La gravité lunaire est trop faible pour retenir durablement les molécules de gaz.",
      "Le Soleil ne brûle pas l'air d'une planète de cette manière.",
      "La proximité de la Terre n'empêche pas une atmosphère de se former.",
      "La Lune n'a jamais été recouverte d'eau de façon à expliquer cette absence."
    ] },
  { id: "PHY-591", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une onde a une période de 0,2 s. Quelle est sa fréquence ?",
    a: ["0,2 Hz", "5 Hz", "2 Hz", "0,5 Hz"], correct: 1,
    explications: [
      "0,2 Hz correspond à la période seule, il faut la convertir.",
      "Correct. f = 1 / T = 1 / 0,2 = 5 Hz.",
      "2 Hz correspond à une erreur sur la division.",
      "0,5 Hz correspond à 1 ÷ 2, ce qui ne correspond pas à la période donnée."
    ] },
  { id: "PHY-592", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un son de fréquence 440 Hz se propage dans l'air à 340 m/s. Quelle est sa longueur d'onde ?",
    a: ["0,77 m", "149 600 m", "340 m", "440 m"], correct: 0,
    explications: [
      "Correct. λ = v / f = 340 / 440 ≈ 0,77 m.",
      "149 600 m correspond à v × f, la formule demande une division.",
      "340 m correspond à la vitesse seule.",
      "440 m correspond à la fréquence seule."
    ] },
  { id: "PHY-593", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un arc-en-ciel apparaît-il dans la direction opposée au Soleil ?",
    a: ["Les gouttes renvoient la lumière vers l'observateur sous un angle d'environ 42° par rapport à la direction opposée au Soleil", "Les nuages cachent le Soleil", "L'arc-en-ciel est une image du ciel", "La Terre tourne dans le sens opposé"], correct: 0,
    explications: [
      "Correct. La lumière est réfractée, réfléchie à l'intérieur des gouttes puis renvoyée vers l'observateur, sous un angle d'environ 42°.",
      "Les nuages ne sont pas la cause de la position de l'arc-en-ciel.",
      "L'arc-en-ciel est un phénomène optique, ce n'est pas une image du ciel.",
      "La rotation de la Terre n'explique pas la position de l'arc-en-ciel."
    ] },
  { id: "PHY-594", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un objet métallique se dilate-t-il quand on le chauffe ?",
    a: ["Les particules bougent davantage et s'écartent en moyenne", "Le métal ajoute de la matière", "Le métal devient plus léger", "La chaleur supprime les forces entre particules"], correct: 0,
    explications: [
      "Correct. En chauffant, l'agitation des particules augmente, elles prennent en moyenne plus de place.",
      "La dilatation ne vient pas d'un ajout de matière, la masse reste la même.",
      "La masse ne diminue pas quand le métal se dilate.",
      "La chaleur ne supprime pas les forces entre particules, elle augmente leur agitation."
    ] },
  { id: "PHY-595", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 3 kg glisse à 4 m/s sur une surface avec frottement et s'arrête après 4 m. Quelle est la force de frottement ?",
    a: ["6 N", "12 N", "24 N", "3 N"], correct: 0,
    explications: [
      "Correct. Ec = ½ × 3 × 16 = 24 J. Cette énergie est dissipée par le frottement : F = Ec / d = 24 / 4 = 6 N.",
      "12 N correspond à Ec divisée par 2, ce n'est pas la bonne énergie.",
      "24 N correspond à l'énergie cinétique, il faut la diviser par la distance.",
      "3 N correspond à la masse en kg, ce n'est pas une force."
    ] },
  { id: "PHY-596", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un courant de 2 A traverse deux résistances de 5 Ω et 10 Ω montées en série. Quelle est la tension aux bornes de la résistance de 10 Ω ?",
    a: ["10 V", "20 V", "30 V", "40 V"], correct: 1,
    explications: [
      "10 V correspond à la tension aux bornes de la résistance de 5 Ω.",
      "Correct. En série, le même courant traverse les deux résistances, donc U = R × I = 10 × 2 = 20 V.",
      "30 V correspond à la somme des deux tensions, mais la question demande seulement la résistance de 10 Ω.",
      "40 V correspond à 20 × 2, ce qui est une erreur."
    ] },
  { id: "PHY-597", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux résistances de 5 Ω et 10 Ω sont montées en parallèle sous une tension de 20 V. Quelle est l'intensité totale du courant ?",
    a: ["2 A", "6 A", "4 A", "30 A"], correct: 1,
    explications: [
      "2 A correspond à l'intensité dans la résistance de 10 Ω seulement, à une erreur près.",
      "Correct. 1/R = 1/5 + 1/10 = 3/10, donc R = 10/3 Ω et I = U / R = 20 / (10/3) = 6 A.",
      "4 A correspond à une erreur sur la résistance équivalente.",
      "30 A correspond à 20 + 10, ce qui n'est pas la loi d'Ohm."
    ] },
  { id: "PHY-598", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un ballon crève-t-il quand on le gonfle trop ?",
    a: ["La pression intérieure dépasse la résistance du caoutchouc", "Le ballon devient plus léger", "L'air intérieur refroidit", "Le ballon perd sa masse"], correct: 0,
    explications: [
      "Correct. Quand la pression intérieure devient trop forte, la paroi du ballon ne résiste plus et se déchire.",
      "Le gonflage ne rend pas le ballon plus léger de manière à le faire éclater.",
      "Un refroidissement de l'air n'explique pas l'éclatement, c'est la pression qui compte.",
      "La masse du ballon ne diminue pas au gonflage."
    ] },
  { id: "PHY-599", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 1 kg est placé à 2 m de hauteur, puis lâché sans frottement (g = 10 m/s²). Quelle est son énergie cinétique juste avant de toucher le sol ?",
    a: ["2 J", "10 J", "20 J", "40 J"], correct: 2,
    explications: [
      "2 J correspond à la hauteur seule, sans tenir compte de la masse et de g.",
      "10 J correspond à m × g, il manque la hauteur.",
      "Correct. Conservation de l'énergie : toute l'énergie potentielle devient cinétique, Ec = m × g × h = 1 × 10 × 2 = 20 J.",
      "40 J correspond à une erreur d'un facteur 2 sur l'énergie."
    ] },
  { id: "PHY-600", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une force de 5 N agit sur un objet qui se déplace de 4 m, en formant un angle de 60° avec le déplacement. Quel est le travail de cette force ?",
    a: ["20 J", "10 J", "17,3 J", "5 J"], correct: 1,
    explications: [
      "20 J correspond à F × d, sans tenir compte de l'angle.",
      "Correct. W = F × d × cos(60°) = 5 × 4 × 0,5 = 10 J.",
      "17,3 J correspond à F × d × sin(60°), la formule utilise le cosinus.",
      "5 J correspond à la force seule, sans multiplier par la distance."
    ] }
];
