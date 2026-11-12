// IMFA QUIZ - PHYSIQUE, FACILE, Partie 1 (PHY-016 a PHY-035)
// explications[i] = eksplikasyon pou chwa i (0 a 3)

const PHYSIQUE_FACILE_P1 = [
  {
    id: "PHY-016", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI du temps ?",
    a: ["Le mètre", "La seconde", "Le kilogramme", "Le litre"], correct: 1,
    explications: [
      "Le mètre mesure la longueur, pas le temps.",
      "Correct. La seconde (s) est l'unité SI du temps.",
      "Le kilogramme mesure la masse, pas le temps.",
      "Le litre mesure le volume, pas le temps."
    ]
  },
  {
    id: "PHY-017", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument permet de mesurer la masse d'un objet ?",
    a: ["Le thermomètre", "Le chronomètre", "La balance", "Le baromètre"], correct: 2,
    explications: [
      "Le thermomètre mesure la température.",
      "Le chronomètre mesure la durée.",
      "Correct. La balance permet de mesurer la masse.",
      "Le baromètre mesure la pression atmosphérique."
    ]
  },
  {
    id: "PHY-018", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel état l'eau se trouve-t-elle lorsqu'elle devient de la glace ?",
    a: ["Gazeux", "Liquide", "Solide", "Invisible"], correct: 2,
    explications: [
      "L'état gazeux correspond à la vapeur d'eau.",
      "L'eau liquide est l'eau que nous buvons.",
      "Correct. La glace est de l'eau à l'état solide.",
      "Invisible n'est pas un état physique de la matière."
    ]
  },
  {
    id: "PHY-019", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le passage de l'eau liquide à la vapeur ?",
    a: ["La solidification", "La fusion", "La vaporisation", "La condensation"], correct: 2,
    explications: [
      "La solidification transforme un liquide en solide.",
      "La fusion transforme un solide en liquide.",
      "Correct. La vaporisation transforme un liquide en gaz.",
      "La condensation transforme un gaz en liquide."
    ]
  },
  {
    id: "PHY-020", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle force permet à un aimant d'attirer certains objets métalliques ?",
    a: ["La force magnétique", "La force électrique uniquement", "La force de frottement", "La force de pression"], correct: 0,
    explications: [
      "Correct. La force magnétique permet à un aimant d'attirer certains matériaux.",
      "Un aimant permanent n'a pas besoin d'électricité.",
      "Le frottement s'oppose au mouvement entre deux surfaces.",
      "La pression est une force exercée sur une surface."
    ]
  },
  {
    id: "PHY-021", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que mesure un thermomètre ?",
    a: ["La masse", "La température", "La distance", "La vitesse"], correct: 1,
    explications: [
      "La masse se mesure avec une balance.",
      "Correct. Le thermomètre mesure la température.",
      "La distance se mesure avec une règle ou un mètre.",
      "La vitesse se calcule à partir de la distance et du temps."
    ]
  },
  {
    id: "PHY-022", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène se produit lorsqu'un rayon lumineux rebondit sur un miroir ?",
    a: ["La réfraction", "La réflexion", "La fusion", "L'évaporation"], correct: 1,
    explications: [
      "La réfraction est le changement de direction de la lumière en passant d'un milieu à un autre.",
      "Correct. La lumière est renvoyée par la surface du miroir.",
      "La fusion transforme un solide en liquide.",
      "L'évaporation transforme un liquide en gaz."
    ]
  },
  {
    id: "PHY-023", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la force ?",
    a: ["Le joule", "Le watt", "Le newton", "Le volt"], correct: 2,
    explications: [
      "Le joule mesure l'énergie.",
      "Le watt mesure la puissance.",
      "Correct. La force se mesure en newtons (N).",
      "Le volt mesure la tension électrique."
    ]
  },
  {
    id: "PHY-024", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil permet de mesurer la durée d'une course ?",
    a: ["Une balance", "Un chronomètre", "Un thermomètre", "Un voltmètre"], correct: 1,
    explications: [
      "Une balance mesure la masse.",
      "Correct. Le chronomètre mesure le temps écoulé.",
      "Le thermomètre mesure la température.",
      "Le voltmètre mesure la tension électrique."
    ]
  },
  {
    id: "PHY-025", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Si on verse 200 mL d'eau d'un verre dans un autre verre identique, quel est le volume d'eau ?",
    a: ["100 mL", "200 mL", "400 mL", "0 mL"], correct: 1,
    explications: [
      "Le volume ne se divise pas en deux quand on change de verre.",
      "Correct. Si rien n'est ajouté ni retiré, le volume reste 200 mL.",
      "Le volume ne double pas quand on verse l'eau dans un autre verre.",
      "L'eau ne disparaît pas quand on la verse."
    ]
  },
  {
    id: "PHY-026", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle énergie est associée au mouvement d'un objet ?",
    a: ["L'énergie thermique", "L'énergie cinétique", "L'énergie chimique", "L'énergie nucléaire"], correct: 1,
    explications: [
      "L'énergie thermique est liée à l'agitation des particules.",
      "Correct. L'énergie cinétique est celle d'un objet en mouvement.",
      "L'énergie chimique est stockée dans les substances.",
      "L'énergie nucléaire est liée au noyau des atomes."
    ]
  },
  {
    id: "PHY-027", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi une balle lancée vers le haut finit-elle par retomber ?",
    a: ["À cause de la gravité", "À cause de la lumière", "À cause du son", "À cause de la couleur"], correct: 0,
    explications: [
      "Correct. La gravité terrestre attire la balle vers le centre de la Terre.",
      "La lumière ne provoque pas sa chute.",
      "Le son ne provoque pas sa chute.",
      "La couleur n'influence pas sa chute."
    ]
  },
  {
    id: "PHY-028", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel matériau laisse généralement passer facilement le courant électrique ?",
    a: ["Le plastique", "Le caoutchouc", "Le cuivre", "Le bois sec"], correct: 2,
    explications: [
      "Le plastique est généralement un isolant électrique.",
      "Le caoutchouc est généralement un isolant.",
      "Correct. Le cuivre est un bon conducteur électrique.",
      "Le bois sec est généralement un isolant."
    ]
  },
  {
    id: "PHY-029", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il lorsqu'on chauffe suffisamment un glaçon ?",
    a: ["Il se transforme en eau liquide.", "Il devient du fer.", "Il disparaît immédiatement.", "Il devient du bois."], correct: 0,
    explications: [
      "Correct. Le glaçon fond et devient de l'eau liquide.",
      "Le chauffage ne transforme pas la glace en fer.",
      "La glace ne disparaît pas immédiatement.",
      "La glace ne peut pas devenir du bois."
    ]
  },
  {
    id: "PHY-030", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle principal d'un interrupteur dans un circuit électrique ?",
    a: ["Mesurer la température", "Ouvrir ou fermer le circuit", "Augmenter la masse", "Produire de l'eau"], correct: 1,
    explications: [
      "La température se mesure avec un thermomètre.",
      "Correct. L'interrupteur contrôle le passage du courant.",
      "Un interrupteur ne modifie pas la masse.",
      "Un interrupteur ne produit pas d'eau."
    ]
  },
  {
    id: "PHY-031", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la principale fonction d'une poulie simple fixe ?",
    a: ["Changer la direction de la force", "Produire de l'électricité", "Mesurer la température", "Augmenter la masse de l'objet"], correct: 0,
    explications: [
      "Correct. Une poulie fixe permet de tirer vers le bas pour soulever une charge.",
      "Elle ne produit pas d'électricité.",
      "Elle ne mesure pas la température.",
      "Elle ne change pas la masse de l'objet."
    ]
  },
  {
    id: "PHY-032", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel milieu le son ne peut-il pas se propager ?",
    a: ["Dans l'air", "Dans l'eau", "Dans le métal", "Dans le vide"], correct: 3,
    explications: [
      "Le son se propage dans l'air.",
      "Le son se propage dans l'eau.",
      "Le son peut se propager dans le métal.",
      "Correct. Le son a besoin d'un milieu matériel pour se propager."
    ]
  },
  {
    id: "PHY-033", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "En quelles formes d'énergie une lampe allumée transforme-t-elle principalement l'énergie électrique ?",
    a: ["Énergie lumineuse et thermique", "Énergie nucléaire uniquement", "Énergie chimique uniquement", "Énergie sonore uniquement"], correct: 0,
    explications: [
      "Correct. Une lampe produit de la lumière et dégage de la chaleur.",
      "Une lampe ordinaire ne transforme pas l'électricité en énergie nucléaire.",
      "Elle ne produit pas principalement de l'énergie chimique.",
      "Elle n'a pas pour fonction principale de produire du son."
    ]
  },
  {
    id: "PHY-034", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on la distance parcourue pendant une unité de temps ?",
    a: ["La masse", "La vitesse", "La température", "La pression"], correct: 1,
    explications: [
      "La masse représente la quantité de matière.",
      "Correct. La vitesse indique la distance parcourue par unité de temps.",
      "La température indique l'état thermique d'un corps.",
      "La pression est une force exercée sur une surface."
    ]
  },
  {
    id: "PHY-035", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène explique la formation d'une ombre derrière un objet opaque éclairé ?",
    a: ["La lumière se propage en ligne droite.", "La lumière traverse tous les objets.", "Le son bloque la lumière.", "La gravité arrête la lumière."], correct: 0,
    explications: [
      "Correct. L'objet opaque bloque la lumière qui se propage en ligne droite.",
      "Un objet opaque ne laisse pas passer la lumière.",
      "Le son ne bloque pas la lumière de cette manière.",
      "La gravité n'est pas la cause habituelle d'une ombre."
    ]
  }
];
