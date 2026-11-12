// IMFA QUIZ - PHYSIQUE, FACILE, Partie 7 (PHY-216 a PHY-235)
const PHYSIQUE_FACILE_P7 = [
  { id: "PHY-216", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil sert à mesurer la tension électrique ?",
    a: ["L'ampèremètre", "Le voltmètre", "L'ohmmètre", "Le wattmètre"], correct: 1,
    explications: [
      "L'ampèremètre mesure l'intensité du courant.",
      "Correct. Le voltmètre mesure la tension électrique.",
      "L'ohmmètre mesure la résistance.",
      "Le wattmètre mesure la puissance."
    ] },
  { id: "PHY-217", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel organe permet de voir ?",
    a: ["L'oreille", "L'œil", "Le nez", "La bouche"], correct: 1,
    explications: [
      "L'oreille permet d'entendre.",
      "Correct. L'œil capte la lumière et permet de voir.",
      "Le nez permet de sentir les odeurs.",
      "La bouche permet de goûter et de parler."
    ] },
  { id: "PHY-218", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz est indispensable à la combustion ?",
    a: ["L'azote", "L'oxygène", "Le gaz carbonique", "L'hélium"], correct: 1,
    explications: [
      "L'azote ne permet pas la combustion, il l'empêche plutôt.",
      "Correct. Sans oxygène, le feu ne peut pas brûler.",
      "Le gaz carbonique éteint généralement un feu.",
      "L'hélium est un gaz inerte, il ne permet pas la combustion."
    ] },
  { id: "PHY-219", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle matière est plus dense que l'eau ?",
    a: ["L'huile", "Le fer", "La glace", "Le bois"], correct: 1,
    explications: [
      "L'huile est moins dense que l'eau, elle flotte dessus.",
      "Correct. Le fer est plus dense que l'eau, il coule.",
      "La glace est moins dense que l'eau, elle flotte.",
      "Le bois est moins dense que l'eau, il flotte en général."
    ] },
  { id: "PHY-220", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi la glace flotte-t-elle sur l'eau ?",
    a: ["La glace est plus dense que l'eau", "La glace est moins dense que l'eau", "La glace est magnétique", "La glace est plus chaude"], correct: 1,
    explications: [
      "Si la glace était plus dense, elle coulerait.",
      "Correct. La glace est moins dense que l'eau liquide, donc elle flotte.",
      "Le magnétisme n'explique pas la flottaison de la glace.",
      "La glace est plus froide que l'eau, sa température n'explique pas ce phénomène."
    ] },
  { id: "PHY-221", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la principale source d'énergie des plantes ?",
    a: ["Le sol", "L'eau seule", "La lumière du Soleil", "Le vent"], correct: 2,
    explications: [
      "Le sol fournit l'eau et les minéraux, mais pas l'énergie.",
      "L'eau est nécessaire, mais elle ne fournit pas d'énergie.",
      "Correct. La photosynthèse utilise la lumière du Soleil.",
      "Le vent aide à disperser les graines, il ne fournit pas d'énergie aux plantes."
    ] },
  { id: "PHY-222", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Lequel de ces objets est une source de lumière ?",
    a: ["Une bougie allumée", "Un miroir", "Une pierre", "Un livre fermé"], correct: 0,
    explications: [
      "Correct. Une bougie allumée produit sa propre lumière.",
      "Un miroir renvoie la lumière, il n'en produit pas.",
      "Une pierre reflète seulement la lumière qu'elle reçoit.",
      "Un livre fermé ne produit ni ne renvoie de lumière."
    ] },
  { id: "PHY-223", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil permet d'observer une étoile lointaine ?",
    a: ["Le microscope", "Le télescope", "Le périscope", "Le stéthoscope"], correct: 1,
    explications: [
      "Le microscope sert à observer de très petits objets.",
      "Correct. Le télescope permet d'observer des objets très lointains.",
      "Le périscope permet de voir au-dessus d'un obstacle, par exemple dans un sous-marin.",
      "Le stéthoscope sert à écouter les sons du corps."
    ] },
  { id: "PHY-224", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la fonction principale d'une batterie de voiture ?",
    a: ["Stocker de l'énergie électrique", "Produire du son", "Mesurer la vitesse", "Chauffer le moteur"], correct: 0,
    explications: [
      "Correct. La batterie stocke l'énergie électrique et la restitue au démarrage.",
      "La batterie ne produit pas de son.",
      "La batterie ne mesure pas la vitesse, c'est le rôle du compteur.",
      "La batterie ne chauffe pas le moteur."
    ] },
  { id: "PHY-225", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le principal effet de la chaleur sur la plupart des solides ?",
    a: ["Ils se dilatent", "Ils rétrécissent toujours", "Ils deviennent magnétiques", "Ils disparaissent"], correct: 0,
    explications: [
      "Correct. La plupart des solides se dilatent quand ils sont chauffés.",
      "La plupart des solides ne rétrécissent pas quand ils chauffent.",
      "La chaleur ne rend pas un solide magnétique.",
      "Un solide chauffé ne disparaît pas."
    ] },
  { id: "PHY-226", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la surface ?",
    a: ["Le mètre carré", "Le mètre cube", "Le mètre", "Le litre"], correct: 0,
    explications: [
      "Correct. La surface se mesure en mètres carrés (m²).",
      "Le mètre cube mesure le volume.",
      "Le mètre mesure une longueur.",
      "Le litre mesure un volume."
    ] },
  { id: "PHY-227", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du mètre cube ?",
    a: ["m²", "m³", "m", "m⁴"], correct: 1,
    explications: [
      "m² est le symbole du mètre carré.",
      "Correct. Le mètre cube s'écrit m³.",
      "m est le symbole du mètre, une simple longueur.",
      "m⁴ n'est pas une unité de volume usuelle."
    ] },
  { id: "PHY-228", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel état de la matière les particules sont-elles le plus serrées ?",
    a: ["Gazeux", "Liquide", "Solide", "Vapeur"], correct: 2,
    explications: [
      "Dans l'état gazeux, les particules sont très éloignées.",
      "Dans l'état liquide, les particules sont proches mais peuvent glisser.",
      "Correct. Dans l'état solide, les particules sont très serrées et fixes.",
      "La vapeur est de l'eau à l'état gazeux, ses particules sont éloignées."
    ] },
  { id: "PHY-229", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un circuit en série ?",
    a: ["Un circuit où les composants sont branchés les uns après les autres", "Un circuit où les composants sont côte à côte", "Un circuit sans aucun composant", "Un circuit où le courant ne circule jamais"], correct: 0,
    explications: [
      "Correct. Dans un circuit en série, le courant passe par chaque composant l'un après l'autre.",
      "Les composants côte à côte forment un circuit en dérivation, ou parallèle.",
      "Un circuit sans composant ne fonctionne pas, ce n'est pas la définition d'un circuit en série.",
      "Le courant circule normalement dans un circuit en série fermé."
    ] },
  { id: "PHY-230", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans une lampe torche, quelle partie contient l'énergie ?",
    a: ["L'ampoule", "La pile", "L'interrupteur", "Le boîtier"], correct: 1,
    explications: [
      "L'ampoule transforme l'énergie, elle ne la stocke pas.",
      "Correct. La pile stocke l'énergie chimique et la fournit sous forme électrique.",
      "L'interrupteur ouvre ou ferme le circuit, il ne stocke pas d'énergie.",
      "Le boîtier protège les composants, il ne contient pas l'énergie."
    ] },
  { id: "PHY-231", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène fait pointer une boussole vers le nord ?",
    a: ["La gravitation", "Le magnétisme terrestre", "La friction", "La pression"], correct: 1,
    explications: [
      "La gravitation attire les objets vers le centre de la Terre, elle n'oriente pas la boussole.",
      "Correct. La Terre se comporte comme un grand aimant, qui oriente l'aiguille.",
      "La friction s'oppose au mouvement, elle n'oriente pas la boussole.",
      "La pression exercée par l'air n'oriente pas la boussole."
    ] },
  { id: "PHY-232", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la température normale du corps humain, environ ?",
    a: ["25 °C", "37 °C", "50 °C", "45 °C"], correct: 1,
    explications: [
      "25 °C est une température ambiante, trop basse pour le corps.",
      "Correct. La température normale du corps est d'environ 37 °C.",
      "50 °C correspondrait à une forte fièvre, dangereuse pour le corps.",
      "45 °C est une température extrêmement élevée pour le corps."
    ] },
  { id: "PHY-233", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de planètes compte le système solaire ?",
    a: ["6", "7", "8", "9"], correct: 2,
    explications: [
      "Il y a plus de six planètes dans le système solaire.",
      "Il y a plus de sept planètes dans le système solaire.",
      "Correct. Le système solaire compte 8 planètes depuis que Pluton est classée planète naine.",
      "Il n'y a que 8 planètes, pas 9, depuis le classement de Pluton."
    ] },
  { id: "PHY-234", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel matériau est un bon isolant pour entourer les fils électriques ?",
    a: ["Le cuivre", "Le caoutchouc", "L'aluminium", "L'or"], correct: 1,
    explications: [
      "Le cuivre est un bon conducteur, il sert à faire passer le courant.",
      "Correct. Le caoutchouc empêche le courant de passer et protège l'utilisateur.",
      "L'aluminium est un bon conducteur électrique.",
      "L'or est un bon conducteur électrique."
    ] },
  { id: "PHY-235", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène est à l'origine de l'arc-en-ciel ?",
    a: ["La réflexion et la réfraction de la lumière dans les gouttes d'eau", "Les vibrations du son", "Le magnétisme", "La fusion de la glace"], correct: 0,
    explications: [
      "Correct. Dans les gouttes d'eau, la lumière est réfractée, dispersée et réfléchie, ce qui forme l'arc-en-ciel.",
      "Le son ne produit pas de couleurs.",
      "Le magnétisme n'explique pas la formation de l'arc-en-ciel.",
      "La fusion de la glace n'est pas liée à la formation de l'arc-en-ciel."
    ] }
];
