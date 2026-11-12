// IMFA QUIZ - PHYSIQUE, DIFFICILE, Partie 3 (PHY-541 a PHY-560)
// difficulte 4 = nivo DIFFICILE : rezònman ak kalkil plis konplèks
const PHYSIQUE_DIFFICILE_P3 = [
  { id: "PHY-541", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi le manche d'une casserole est-il souvent en bois ou en plastique ?",
    a: ["Ces matériaux conduisent mal la chaleur et protègent la main", "Ces matériaux produisent du froid", "Ces matériaux attirent la chaleur", "Ces matériaux sont magnétiques"], correct: 0,
    explications: [
      "Correct. Le bois et le plastique conduisent mal la chaleur, la main reste donc à l'abri.",
      "Aucun matériau ne produit du froid en étant en contact avec une casserole chaude.",
      "Un manche n'attire pas la chaleur, il la bloque.",
      "Le bois et le plastique ne sont pas magnétiques."
    ] },
  { id: "PHY-542", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet tombe de 20 m sans frottement (g = 10 m/s²). Quelle est sa vitesse en arrivant au sol ?",
    a: ["10 m/s", "20 m/s", "200 m/s", "40 m/s"], correct: 1,
    explications: [
      "10 m/s correspond à une chute de 5 m, pas de 20 m.",
      "Correct. v² = 2 × g × h = 2 × 10 × 20 = 400, donc v = 20 m/s.",
      "200 m/s oublie de prendre la racine carrée de 400.",
      "40 m/s correspond à 2 × h, il manque g et la racine carrée."
    ] },
  { id: "PHY-543", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un avion peut-il décoller grâce à la forme de ses ailes ?",
    a: ["L'aile produit sa propre force vers le haut", "L'aile attire la Terre vers le haut", "La forme de l'aile crée une différence de pression entre le dessus et le dessous", "L'aile fait diminuer le poids de l'avion"], correct: 2,
    explications: [
      "Une aile ne produit pas de force seule, elle agit grâce à l'air qui la traverse.",
      "L'aile n'attire pas la Terre, c'est la Terre qui attire l'avion vers le bas.",
      "Correct. L'air passe plus vite au-dessus de l'aile, la pression y est plus faible, ce qui pousse l'avion vers le haut.",
      "Le poids de l'avion ne diminue pas, c'est la portance qui compense ce poids."
    ] },
  { id: "PHY-544", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi la glace qui se forme à la surface d'un lac protège-t-elle la vie aquatique en hiver ?",
    a: ["Elle est plus dense que l'eau et tombe au fond", "Elle est moins dense que l'eau, elle flotte et isole l'eau en dessous", "Elle produit de la chaleur pour les poissons", "Elle attire la lumière vers le fond"], correct: 1,
    explications: [
      "Si la glace était plus dense que l'eau, elle coulerait et le lac gèlerait de bas en haut.",
      "Correct. La glace flotte, ce qui forme une couche isolante qui ralentit le refroidissement de l'eau en dessous.",
      "La glace ne produit pas de chaleur.",
      "La glace ne concentre pas la lumière vers le fond."
    ] },
  { id: "PHY-545", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux résistances de 6 Ω et 3 Ω sont branchées en série sous une tension de 18 V. Quelle est l'intensité du courant ?",
    a: ["2 A", "6 A", "3 A", "54 A"], correct: 0,
    explications: [
      "Correct. En série, R = 6 + 3 = 9 Ω, donc I = U / R = 18 / 9 = 2 A.",
      "6 A correspond à U ÷ 3 Ω, ce qui ne tient compte que d'une résistance.",
      "3 A correspond à U ÷ 6 Ω, ce qui ne tient compte que de la première résistance.",
      "54 A correspond à U × R, la loi d'Ohm demande une division."
    ] },
  { id: "PHY-546", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux résistances de 6 Ω et 3 Ω sont branchées en parallèle sous une tension de 12 V. Quelle est l'intensité totale du courant ?",
    a: ["2 A", "4 A", "6 A", "18 A"], correct: 2,
    explications: [
      "2 A correspond à la résistance totale, et non à l'intensité du courant.",
      "4 A correspond à une résistance de 3 Ω, ce qui ne tient pas compte des deux branches.",
      "Correct. 1/R = 1/6 + 1/3 = 1/2, donc R = 2 Ω et I = 12 / 2 = 6 A.",
      "18 A vient d'une addition (12 + 6), ce qui n'est pas la loi d'Ohm."
    ] },
  { id: "PHY-547", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un thermomètre médical doit-il rester sous la langue plusieurs minutes ?",
    a: ["Pour mesurer la pression du sang", "Pour que la chaleur passe du corps au thermomètre jusqu'à l'équilibre", "Pour refroidir le corps", "Pour produire un son qui indique la température"], correct: 1,
    explications: [
      "Le thermomètre médical mesure la température, pas la pression du sang.",
      "Correct. Il faut du temps pour que le thermomètre atteigne la même température que le corps.",
      "Le thermomètre ne sert pas à refroidir le corps.",
      "Un thermomètre médical ne produit pas de son."
    ] },
  { id: "PHY-548", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une voiture de 1 200 kg roule à 72 km/h, soit 20 m/s. Quelle est son énergie cinétique ?",
    a: ["24 000 J", "240 000 J", "86 400 J", "2 400 000 J"], correct: 1,
    explications: [
      "24 000 J correspond à une erreur d'un facteur 10 sur la masse ou sur la vitesse.",
      "Correct. Ec = ½ × 1 200 × 20² = ½ × 1 200 × 400 = 240 000 J.",
      "86 400 J correspond à m × v avec la vitesse en km/h, ce qui est une erreur d'unité.",
      "2 400 000 J correspond à une erreur de conversion des unités."
    ] },
  { id: "PHY-549", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Combien de kWh consomme une lampe de 100 W allumée pendant 10 h ?",
    a: ["1 kWh", "10 kWh", "0,1 kWh", "100 kWh"], correct: 0,
    explications: [
      "Correct. 100 W = 0,1 kW, et E = 0,1 × 10 = 1 kWh.",
      "10 kWh correspond à 1 kW × 10 h, or la lampe fait seulement 0,1 kW.",
      "0,1 kWh correspond à la puissance en kW, sans multiplier par la durée de 10 h.",
      "100 kWh oublie de convertir les watts en kilowatts."
    ] },
  { id: "PHY-550", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un ballon de baudruche rétrécit-il quand on le place dans un congélateur ?",
    a: ["L'air à l'intérieur se refroidit et son volume diminue", "Le caoutchouc fond sous le froid", "L'air devient plus lourd et tombe", "Le ballon absorbe le froid et se fige"], correct: 0,
    explications: [
      "Correct. Quand l'air se refroidit, ses particules ralentissent et le volume diminue.",
      "Le froid ne fait pas fondre le caoutchouc, il le rend plutôt plus rigide.",
      "Le refroidissement ne rend pas l'air plus lourd, c'est son volume qui diminue.",
      "Un ballon ne peut pas absorber le froid, c'est l'air à l'intérieur qui se refroidit."
    ] },
  { id: "PHY-551", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de masse volumique 0,5 g/cm³ et de volume 200 cm³ flotte sur l'eau. Quelle fraction de son volume est immergée ?",
    a: ["50 %", "100 %", "25 %", "0,5 %"], correct: 0,
    explications: [
      "Correct. Pour flotter, le poids égale la poussée : ρ_objet × V = ρ_eau × V_immergé, donc V_immergé / V = 0,5, soit 50 %.",
      "100 % correspond à un objet entièrement sous l'eau, ce qui n'arrive que si sa densité est égale à celle de l'eau.",
      "25 % ne correspond pas au calcul de l'équilibre des forces ici.",
      "0,5 % ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-552", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un bateau transporte des pierres. Quand on jette les pierres dans le lac, que fait le niveau de l'eau du lac ?",
    a: ["Il monte", "Il baisse", "Il reste identique", "Il disparaît"], correct: 1,
    explications: [
      "Le niveau ne monte pas : les pierres au fond déplacent moins d'eau qu'à bord du bateau.",
      "Correct. Les pierres à bord déplaçaient un volume d'eau correspondant à leur poids, au fond elles ne déplacent que leur propre volume, donc le niveau baisse.",
      "Le niveau change, car le volume d'eau déplacé n'est plus le même.",
      "L'eau ne disparaît pas dans ce phénomène."
    ] },
  { id: "PHY-553", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi l'image d'un objet dans un miroir plan paraît-elle se trouver derrière le miroir ?",
    a: ["Le miroir attire l'image vers lui", "L'image se forme symétriquement, à la même distance derrière le miroir", "La lumière s'arrête sur le miroir", "Le miroir produit sa propre image"], correct: 1,
    explications: [
      "Le miroir n'attire pas l'image, c'est un phénomène de réflexion de la lumière.",
      "Correct. Les rayons réfléchis semblent provenir d'un point symétrique de l'objet par rapport à la surface du miroir.",
      "La lumière n'est pas arrêtée par le miroir, elle est renvoyée.",
      "Le miroir ne produit pas d'image par lui-même, il renvoie la lumière de l'objet."
    ] },
  { id: "PHY-554", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un son a une longueur d'onde de 0,68 m dans l'air, où il se propage à 340 m/s. Quelle est sa fréquence ?",
    a: ["500 Hz", "0,002 Hz", "231 Hz", "340 Hz"], correct: 0,
    explications: [
      "Correct. f = v / λ = 340 / 0,68 = 500 Hz.",
      "0,002 Hz correspond à la période en secondes, pas à la fréquence.",
      "231 Hz correspond à λ × v (0,68 × 340), alors qu'il faut diviser.",
      "340 Hz correspond à la vitesse du son, pas à la fréquence."
    ] },
  { id: "PHY-555", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une cocotte-minute permet-elle de cuire les aliments plus vite ?",
    a: ["Elle chauffe moins fort qu'une casserole ordinaire", "L'eau bout à une température plus élevée sous pression", "Elle supprime la chaleur de la cuisson", "Elle attire la vapeur vers les aliments"], correct: 1,
    explications: [
      "Elle ne chauffe pas moins, elle garde la chaleur à l'intérieur.",
      "Correct. Sous pression, l'eau bout au-dessus de 100 °C, les aliments cuisent donc plus vite.",
      "La cocotte-minute ne supprime pas la chaleur, elle la conserve.",
      "La vapeur n'est pas attirée vers les aliments, elle reste enfermée et augmente la pression."
    ] },
  { id: "PHY-556", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une balle est lancée verticalement vers le haut à 20 m/s (g = 10 m/s²). Quelle est la hauteur maximale atteinte ?",
    a: ["10 m", "20 m", "40 m", "200 m"], correct: 1,
    explications: [
      "10 m correspond à v ÷ 2, ce qui n'est pas la formule de la hauteur maximale.",
      "Correct. h = v² / (2g) = 400 / 20 = 20 m.",
      "40 m correspond à v² / g, il manque le facteur 2.",
      "200 m correspond à v² / 2, il manque g."
    ] },
  { id: "PHY-557", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi les couleurs d'un arc-en-ciel apparaissent-elles toujours dans le même ordre ?",
    a: ["Les gouttes colorent la lumière une à une", "Le Soleil envoie les couleurs dans un ordre précis", "Chaque couleur est déviée d'un angle différent selon sa longueur d'onde", "Les nuages trient les couleurs par taille"], correct: 2,
    explications: [
      "Les gouttes ne colorent pas la lumière, elles la décomposent.",
      "Le Soleil envoie de la lumière blanche, il n'envoie pas les couleurs dans un ordre.",
      "Correct. Les gouttes d'eau dispersent la lumière, et chaque longueur d'onde est déviée d'un angle différent.",
      "Les nuages ne trient pas les couleurs, la décomposition se fait dans les gouttes d'eau."
    ] },
  { id: "PHY-558", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un automobiliste fait l'aller d'un trajet à 60 km/h, puis le retour sur la même distance à 40 km/h. Quelle est sa vitesse moyenne sur tout le trajet ?",
    a: ["50 km/h", "48 km/h", "100 km/h", "40 km/h"], correct: 1,
    explications: [
      "50 km/h est la moyenne simple de 60 et 40, ce qui n'est pas juste pour des trajets de même distance.",
      "Correct. Pour une distance d à chaque sens, le temps total est d/60 + d/40 = d/24 et la distance totale 2d, donc v = 2d / (d/24) = 48 km/h.",
      "100 km/h correspond à la somme des vitesses, ce qui n'a pas de sens ici.",
      "40 km/h correspond uniquement à la vitesse du retour."
    ] },
  { id: "PHY-559", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une force de 10 N tire un objet de 2 kg, mais un frottement de 4 N s'oppose au mouvement. Quelle est l'accélération ?",
    a: ["5 m/s²", "3 m/s²", "2 m/s²", "14 m/s²"], correct: 1,
    explications: [
      "5 m/s² correspond à 10 ÷ 2, on a oublié le frottement.",
      "Correct. La force nette est 10 − 4 = 6 N, donc a = 6 / 2 = 3 m/s².",
      "2 m/s² correspond à 4 ÷ 2, c'est le frottement divisé par la masse, ce qui n'est pas l'accélération.",
      "14 m/s² correspond à 10 + 4, or le frottement s'oppose au mouvement et se soustrait."
    ] },
  { id: "PHY-560", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un ressort de raideur k = 50 N/m s'allonge de 4 cm sous une masse suspendue (g = 10 N/kg). Quelle est la masse ?",
    a: ["0,2 kg", "2 kg", "0,8 kg", "20 kg"], correct: 0,
    explications: [
      "Correct. La force du ressort est F = k × x = 50 × 0,04 = 2 N, donc m = F / g = 2 / 10 = 0,2 kg.",
      "2 kg correspond à la force en newtons, sans diviser par g.",
      "0,8 kg correspond à une erreur de conversion des centimètres en mètres.",
      "20 kg correspond à la force multipliée par g, c'est l'inverse de la formule."
    ] }
];
