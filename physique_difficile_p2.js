// IMFA QUIZ - PHYSIQUE, DIFFICILE, Partie 2 (PHY-521 a PHY-540)
// difficulte 4 = nivo DIFFICILE : rezònman ak kalkil plis konplèks
const PHYSIQUE_DIFFICILE_P2 = [
  { id: "PHY-521", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un bateau en acier flotte-t-il alors que l'acier seul coule ?",
    a: ["Sa forme creuse déplace un grand volume d'eau, donc la poussée est grande", "L'acier devient plus léger dans l'eau", "Le bateau contient de l'air qui le rend magnétique", "L'eau de mer est moins dense que l'eau douce"], correct: 0,
    explications: [
      "Correct. La forme creuse du bateau déplace beaucoup d'eau, la poussée d'Archimède devient supérieure au poids.",
      "L'acier ne devient pas plus léger dans l'eau, sa masse reste la même.",
      "L'air à l'intérieur ne rend pas le bateau magnétique.",
      "L'eau de mer est plus dense que l'eau douce, ce n'est pas la raison principale ici."
    ] },
  { id: "PHY-522", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un fil fin chauffe-t-il davantage qu'un fil épais parcouru par le même courant ?",
    a: ["Le fil fin a une résistance plus grande", "Le fil fin a une masse plus faible", "Le fil épais absorbe la chaleur", "Le fil fin produit de la lumière"], correct: 0,
    explications: [
      "Correct. Plus le fil est fin, plus sa résistance est grande, et plus l'énergie dissipée en chaleur est importante.",
      "La masse du fil n'explique pas l'échauffement avec le même courant.",
      "Le fil épais n'absorbe pas la chaleur du fil fin, ce n'est pas la cause de l'échauffement.",
      "Un fil fin ne produit pas de lumière à cause du courant, il chauffe."
    ] },
  { id: "PHY-523", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une couverture garde-t-elle la chaleur du corps ?",
    a: ["Elle produit de la chaleur", "Elle absorbe la lumière", "Elle emprisonne de l'air, qui est un mauvais conducteur de chaleur", "Elle attire la chaleur du sol"], correct: 2,
    explications: [
      "La couverture ne produit pas de chaleur, elle limite les pertes.",
      "La lumière n'a pas de rôle dans la conservation de la chaleur d'une couverture.",
      "Correct. L'air emprisonné dans les fibres est un mauvais conducteur, il ralentit le passage de la chaleur du corps vers l'extérieur.",
      "Une couverture n'attire pas la chaleur du sol."
    ] },
  { id: "PHY-524", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi la pression atmosphérique diminue-t-elle quand on monte en altitude ?",
    a: ["L'air devient plus chaud", "Il y a moins d'air au-dessus de nous, donc moins de poids d'air", "L'air devient magnétique", "La gravité augmente"], correct: 1,
    explications: [
      "La chaleur de l'air n'explique pas la diminution de la pression.",
      "Correct. La pression vient du poids de la colonne d'air au-dessus. En altitude, cette colonne est plus courte.",
      "L'air n'est pas magnétique dans ce phénomène.",
      "La gravité n'augmente pas en altitude, elle diminue légèrement."
    ] },
  { id: "PHY-525", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi les étoiles semblent-elles scintiller depuis la Terre ?",
    a: ["Les étoiles clignotent réellement", "L'atmosphère turbulente déforme la trajectoire de leur lumière", "La Terre tourne trop vite", "Les nuages renvoient la lumière des étoiles"], correct: 1,
    explications: [
      "Les étoiles ne clignotent pas vraiment, c'est un effet de notre atmosphère.",
      "Correct. Les mouvements de l'air déforment légèrement la lumière qui nous arrive, ce qui crée le scintillement.",
      "La rotation de la Terre ne provoque pas le scintillement.",
      "Les nuages ne sont pas la cause principale du scintillement des étoiles."
    ] },
  { id: "PHY-526", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Dans un moteur électrique, quel phénomène produit le mouvement de rotation ?",
    a: ["La chaleur dilate le fil", "Une force magnétique agit sur un fil parcouru par du courant placé dans un champ magnétique", "La lumière pousse le rotor", "Le son fait tourner l'axe"], correct: 1,
    explications: [
      "La chaleur n'est pas la cause du mouvement dans un moteur électrique.",
      "Correct. Le courant dans le fil crée une force magnétique, qui met le rotor en rotation.",
      "La lumière ne joue pas de rôle dans le fonctionnement d'un moteur électrique.",
      "Le son ne fait pas tourner l'axe du moteur."
    ] },
  { id: "PHY-527", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un objet paraît-il plus léger sur la Lune que sur la Terre ?",
    a: ["Sa masse diminue", "L'air lunaire est plus léger", "La gravité lunaire est plus faible, donc le poids est plus petit", "Le Soleil l'éloigne"], correct: 2,
    explications: [
      "La masse de l'objet reste la même, c'est son poids qui change.",
      "L'air n'explique pas la différence de poids, la Lune a presque pas d'air.",
      "Correct. La gravité sur la Lune est environ six fois plus faible, donc le poids est plus petit.",
      "Le Soleil n'éloigne pas les objets de la Lune."
    ] },
  { id: "PHY-528", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un miroir concave peut-il concentrer la lumière ?",
    a: ["Sa surface courbe renvoie les rayons vers un même point", "Il absorbe toute la lumière", "Il produit sa propre lumière", "Il transforme la lumière en son"], correct: 0,
    explications: [
      "Correct. La surface courbe d'un miroir concave renvoie les rayons parallèles vers un même point, le foyer.",
      "Un miroir n'absorbe pas toute la lumière, il la renvoie.",
      "Un miroir ne produit pas sa propre lumière.",
      "La lumière ne se transforme pas en son dans un miroir."
    ] },
  { id: "PHY-529", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un bruit paraît-il plus fort dans une pièce aux murs durs ?",
    a: ["Les murs absorbent le son", "Les murs durs réfléchissent le son, ce qui renforce l'écho et le bruit perçu", "Les murs produisent le son", "Le son ne voyage pas à travers les murs"], correct: 1,
    explications: [
      "Les murs durs absorbent peu le son, c'est l'inverse de ce qui se passe.",
      "Correct. Les surfaces dures renvoient le son, qui se superpose et semble plus fort.",
      "Les murs ne produisent pas de son, ils le renvoient.",
      "Le son traverse une partie des murs, mais ce n'est pas la raison de l'effet décrit."
    ] },
  { id: "PHY-530", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un fusible de 5 A protège-t-il un circuit ?",
    a: ["Il fond si le courant dépasse 5 A, ce qui coupe le circuit", "Il augmente le courant pour protéger les appareils", "Il transforme le courant en chaleur utile", "Il mesure la tension du circuit"], correct: 0,
    explications: [
      "Correct. Si le courant dépasse 5 A, le fil du fusible chauffe et fond, ce qui coupe le circuit et évite les dégâts.",
      "Le fusible n'augmente pas le courant, il le limite.",
      "Le fusible ne cherche pas à produire de la chaleur utile, il protège.",
      "Le fusible ne mesure pas la tension, il protège contre une surintensité."
    ] },
  { id: "PHY-531", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une lampe de 60 W est allumée 4 h par jour pendant 30 jours. Quelle est l'énergie consommée ?",
    a: ["7,2 kWh", "72 kWh", "0,24 kWh", "720 kWh"], correct: 0,
    explications: [
      "Correct. 60 W = 0,06 kW, donc 0,06 × 4 = 0,24 kWh par jour, et 0,24 × 30 = 7,2 kWh.",
      "72 kWh oublie de convertir les watts en kilowatts.",
      "0,24 kWh correspond à une seule journée, il faut multiplier par 30 jours.",
      "720 kWh correspond à une erreur de conversion et de multiplication."
    ] },
  { id: "PHY-532", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux voitures partent du même point, dans des directions opposées, à 60 km/h et 40 km/h. Quelle distance les sépare après 2 h ?",
    a: ["200 km", "40 km", "20 km", "400 km"], correct: 0,
    explications: [
      "Correct. Chaque voiture s'éloigne : 60 × 2 = 120 km et 40 × 2 = 80 km. Au total, 120 + 80 = 200 km.",
      "40 km correspond à la distance de la deuxième voiture seule, sans additionner l'autre.",
      "20 km correspond à la différence des deux vitesses, ce qui ne correspond pas à des directions opposées.",
      "400 km correspond à une erreur de multiplication, la distance est 200 km."
    ] },
  { id: "PHY-533", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet tombe de 5 m sans frottement (g = 10 m/s²). Quelle est sa vitesse en arrivant au sol ?",
    a: ["5 m/s", "10 m/s", "100 m/s", "50 m/s"], correct: 1,
    explications: [
      "5 m/s correspond à la hauteur divisée par la gravité, ce qui n'est pas la formule.",
      "Correct. v² = 2 × g × h = 2 × 10 × 5 = 100, donc v = 10 m/s.",
      "100 m/s correspond à v² et non à v, on a oublié de prendre la racine carrée.",
      "50 m/s correspond à g × h, ce qui n'est pas la formule de la vitesse."
    ] },
  { id: "PHY-534", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un ressort de raideur k = 100 N/m est comprimé de 0,2 m. Quelle énergie potentielle élastique stocke-t-il ?",
    a: ["2 J", "20 J", "0,02 J", "200 J"], correct: 0,
    explications: [
      "Correct. Ep = ½ × k × x² = ½ × 100 × 0,04 = 2 J.",
      "20 J oublie le carré de la compression, ou le facteur ½.",
      "0,02 J correspond à une erreur sur le carré de x.",
      "200 J correspond à k × x² sans le facteur ½, ce qui est faux."
    ] },
  { id: "PHY-535", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 3 kg se déplace à 4 m/s. Quelle force de freinage constante l'arrête sur 2 m ?",
    a: ["6 N", "12 N", "24 N", "48 N"], correct: 1,
    explications: [
      "6 N correspond à la moitié de la bonne valeur, il faut bien calculer l'énergie cinétique.",
      "Correct. Ec = ½ × 3 × 4² = 24 J. La force de freinage vaut F = Ec / d = 24 / 2 = 12 N.",
      "24 N correspond à l'énergie cinétique, il faut la diviser par la distance.",
      "48 N correspond à un calcul avec le double de l'énergie, ce qui est faux."
    ] },
  { id: "PHY-536", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une lampe est alimentée sous 12 V et traversée par un courant de 2 A. En combien de temps dissipe-t-elle 480 J ?",
    a: ["10 s", "20 s", "40 s", "240 s"], correct: 1,
    explications: [
      "10 s correspond à une erreur sur la puissance, qui est P = 12 × 2 = 24 W.",
      "Correct. P = U × I = 24 W, puis t = E / P = 480 / 24 = 20 s.",
      "40 s correspond à une division de l'énergie par 12, ce qui est faux.",
      "240 s correspond à E ÷ 2, ce qui n'est pas la bonne formule."
    ] },
  { id: "PHY-537", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un cycliste passe de 2 m/s à 10 m/s sur une distance de 16 m. Quelle est son accélération ?",
    a: ["2 m/s²", "3 m/s²", "4 m/s²", "6 m/s²"], correct: 1,
    explications: [
      "2 m/s² ne correspond pas au calcul avec v² = v₀² + 2 × a × d.",
      "Correct. 10² = 2² + 2 × a × 16, donc 100 = 4 + 32a, et a = 96 / 32 = 3 m/s².",
      "4 m/s² correspond à une erreur sur le calcul de v₀².",
      "6 m/s² ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "PHY-538", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux résistances de 4 Ω et 8 Ω sont en série avec un courant de 3 A. Quelle est la tension totale aux bornes du montage ?",
    a: ["12 V", "24 V", "36 V", "96 V"], correct: 2,
    explications: [
      "12 V correspond à la résistance de la première seule multipliée par le courant, sans additionner.",
      "24 V correspond à la résistance de 8 Ω multipliée par 3 A, sans tenir compte de la première.",
      "Correct. En série, R = 4 + 8 = 12 Ω, donc U = R × I = 12 × 3 = 36 V.",
      "96 V correspond à une multiplication erronée de 8 × 12."
    ] },
  { id: "PHY-539", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "On chauffe 2 litres d'eau de 20 °C à 70 °C. Quelle énergie faut-il ? (c = 4 180 J/(kg·°C), 1 L d'eau = 1 kg)",
    a: ["209 000 J", "418 000 J", "41 800 J", "836 000 J"], correct: 1,
    explications: [
      "209 000 J correspond à une erreur sur la variation de température (25 °C au lieu de 50 °C).",
      "Correct. m = 2 kg, ΔT = 50 °C, donc Q = 2 × 4 180 × 50 = 418 000 J.",
      "41 800 J correspond à une masse de 1 kg, il faut prendre 2 kg.",
      "836 000 J correspond à une erreur de multiplication par 2 en trop."
    ] },
  { id: "PHY-540", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de masse volumique 2 g/cm³ a un volume de 50 cm³. Quel est son poids (g = 10 N/kg) ?",
    a: ["1 N", "10 N", "0,1 N", "100 N"], correct: 0,
    explications: [
      "Correct. m = ρ × V = 2 × 50 = 100 g = 0,1 kg, donc P = m × g = 0,1 × 10 = 1 N.",
      "10 N correspond à une erreur sur la conversion des grammes en kilogrammes.",
      "0,1 N correspond à la masse en kilogrammes, sans multiplier par g.",
      "100 N correspond à la masse en grammes multipliée par g, ce qui est une erreur d'unité."
    ] }
];
