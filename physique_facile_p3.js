// IMFA QUIZ - PHYSIQUE, FACILE, Partie 3 (PHY-056 a PHY-075)
const PHYSIQUE_FACILE_P3 = [
  { id: "PHY-056", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de mesure de la résistance électrique ?",
    a: ["Le volt", "L'ampère", "L'ohm", "Le watt"], correct: 2,
    explications: [
      "Le volt mesure la tension électrique.",
      "L'ampère mesure l'intensité du courant.",
      "Correct. La résistance électrique se mesure en ohms (Ω).",
      "Le watt mesure la puissance."
    ] },
  { id: "PHY-057", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le contraire d'un conducteur électrique ?",
    a: ["Un aimant", "Un isolant", "Un moteur", "Un fusible"], correct: 1,
    explications: [
      "Un aimant attire certains métaux, il ne fait pas passer le courant.",
      "Correct. Un isolant empêche le courant de passer.",
      "Un moteur transforme l'électricité en mouvement, il ne l'isole pas.",
      "Un fusible protège un circuit, il n'est pas le contraire d'un conducteur."
    ] },
  { id: "PHY-058", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument sert à mesurer l'intensité du courant ?",
    a: ["Le voltmètre", "L'ampèremètre", "L'ohmmètre", "Le thermomètre"], correct: 1,
    explications: [
      "Le voltmètre mesure la tension.",
      "Correct. L'ampèremètre mesure l'intensité du courant.",
      "L'ohmmètre mesure la résistance.",
      "Le thermomètre mesure la température."
    ] },
  { id: "PHY-059", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de mesure de la fréquence ?",
    a: ["Le hertz", "Le pascal", "Le newton", "Le kelvin"], correct: 0,
    explications: [
      "Correct. La fréquence se mesure en hertz (Hz).",
      "Le pascal mesure la pression.",
      "Le newton mesure la force.",
      "Le kelvin mesure la température."
    ] },
  { id: "PHY-060", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi entend-on le tonnerre après avoir vu l'éclair ?",
    a: ["La lumière va plus vite que le son", "Le son va plus vite que la lumière", "L'éclair est silencieux par nature", "Le tonnerre voyage dans le sol"], correct: 0,
    explications: [
      "Correct. La lumière se déplace beaucoup plus vite que le son.",
      "Le son est beaucoup plus lent que la lumière.",
      "L'éclair produit du bruit, mais celui-ci arrive plus tard.",
      "Le tonnerre se propage dans l'air, pas dans le sol."
    ] },
  { id: "PHY-061", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle forme d'énergie possède un ressort comprimé ?",
    a: ["L'énergie potentielle élastique", "L'énergie cinétique", "L'énergie chimique", "L'énergie thermique"], correct: 0,
    explications: [
      "Correct. Un ressort déformé stocke une énergie potentielle élastique.",
      "L'énergie cinétique concerne un objet en mouvement.",
      "L'énergie chimique est stockée dans les substances.",
      "L'énergie thermique est liée à l'agitation des particules."
    ] },
  { id: "PHY-062", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil transforme la lumière du Soleil en électricité ?",
    a: ["Une cellule solaire", "Un moteur", "Un haut-parleur", "Un aimant"], correct: 0,
    explications: [
      "Correct. Une cellule solaire (photovoltaïque) produit de l'électricité à partir de la lumière.",
      "Un moteur transforme l'électricité en mouvement.",
      "Un haut-parleur transforme l'électricité en son.",
      "Un aimant ne produit pas d'électricité."
    ] },
  { id: "PHY-063", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel métal est liquide à la température ambiante ?",
    a: ["Le fer", "Le mercure", "Le cuivre", "L'aluminium"], correct: 1,
    explications: [
      "Le fer est solide à température ambiante.",
      "Correct. Le mercure est un métal liquide à température ambiante.",
      "Le cuivre est solide à température ambiante.",
      "L'aluminium est solide à température ambiante."
    ] },
  { id: "PHY-064", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que peut faire une force sur un objet immobile ?",
    a: ["Le mettre en mouvement", "Le rendre plus lourd", "Changer sa couleur", "Le faire disparaître"], correct: 0,
    explications: [
      "Correct. Une force peut mettre un objet immobile en mouvement.",
      "Une force ne change pas la masse de l'objet.",
      "Une force ne change pas la couleur de l'objet.",
      "Une force ne fait pas disparaître un objet."
    ] },
  { id: "PHY-065", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il quand on frotte un ballon sur ses cheveux ?",
    a: ["Il se charge d'électricité statique", "Il devient magnétique", "Il fond", "Il devient liquide"], correct: 0,
    explications: [
      "Correct. Le frottement transfère des charges électriques, le ballon devient chargé.",
      "Le ballon ne devient pas un aimant.",
      "Le ballon ne fond pas.",
      "Le ballon ne devient pas liquide."
    ] },
  { id: "PHY-066", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le centre du système solaire ?",
    a: ["La Terre", "La Lune", "Le Soleil", "Mars"], correct: 2,
    explications: [
      "La Terre tourne autour du Soleil, elle n'est pas le centre.",
      "La Lune tourne autour de la Terre.",
      "Correct. Le Soleil est au centre du système solaire.",
      "Mars est une planète qui tourne autour du Soleil."
    ] },
  { id: "PHY-067", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle partie de la lumière n'est pas visible par l'œil humain ?",
    a: ["Le rouge", "Le violet", "Les infrarouges", "Le vert"], correct: 2,
    explications: [
      "Le rouge fait partie de la lumière visible.",
      "Le violet fait partie de la lumière visible.",
      "Correct. Les infrarouges sont invisibles pour l'œil humain.",
      "Le vert fait partie de la lumière visible."
    ] },
  { id: "PHY-068", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la vitesse d'un objet qui ne bouge pas ?",
    a: ["0 m/s", "1 m/s", "10 m/s", "100 m/s"], correct: 0,
    explications: [
      "Correct. Un objet immobile a une vitesse de 0 m/s.",
      "1 m/s signifie que l'objet bouge.",
      "10 m/s signifie que l'objet bouge.",
      "100 m/s signifie que l'objet bouge très vite."
    ] },
  { id: "PHY-069", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il quand on tire sur un ressort ?",
    a: ["Il s'allonge", "Il devient liquide", "Il chauffe toujours", "Il disparaît"], correct: 0,
    explications: [
      "Correct. Un ressort tiré s'allonge.",
      "Un ressort reste solide, il ne devient pas liquide.",
      "Tirer sur un ressort ne le chauffe pas forcément.",
      "Un ressort ne disparaît pas quand on tire dessus."
    ] },
  { id: "PHY-070", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "À quelle température l'eau bout-elle à la pression normale ?",
    a: ["0 °C", "50 °C", "100 °C", "200 °C"], correct: 2,
    explications: [
      "0 °C est la température de fusion de la glace.",
      "50 °C est trop bas pour faire bouillir l'eau à la pression normale.",
      "Correct. L'eau bout à 100 °C à la pression normale.",
      "200 °C est trop haut, l'eau est déjà vapeur à 100 °C."
    ] },
  { id: "PHY-071", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole de la seconde ?",
    a: ["m", "s", "kg", "h"], correct: 1,
    explications: [
      "m est le symbole du mètre.",
      "Correct. La seconde s'écrit s.",
      "kg est le symbole du kilogramme.",
      "h est le symbole de l'heure, pas de la seconde."
    ] },
  { id: "PHY-072", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel état de la matière se trouve l'air que nous respirons ?",
    a: ["Gazeux", "Liquide", "Solide", "Plasma"], correct: 0,
    explications: [
      "Correct. L'air est un mélange de gaz.",
      "L'air n'est pas un liquide.",
      "L'air n'est pas un solide.",
      "Le plasma est un état très chaud, il ne se trouve pas dans l'air ambiant."
    ] },
  { id: "PHY-073", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il quand un objet chaud touche un objet froid ?",
    a: ["La chaleur passe du chaud vers le froid", "La chaleur passe du froid vers le chaud", "La chaleur disparaît", "Les deux deviennent glacés"], correct: 0,
    explications: [
      "Correct. La chaleur circule toujours du corps le plus chaud vers le plus froid.",
      "La chaleur ne va pas du froid vers le chaud spontanément.",
      "La chaleur ne disparaît pas, elle se transfère.",
      "Les deux objets ne deviennent pas glacés, ils se rapprochent de la même température."
    ] },
  { id: "PHY-074", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la vitesse ?",
    a: ["Le mètre par seconde", "Le kilogramme", "Le newton", "La seconde"], correct: 0,
    explications: [
      "Correct. La vitesse se mesure en mètres par seconde (m/s).",
      "Le kilogramme mesure la masse.",
      "Le newton mesure la force.",
      "La seconde mesure le temps."
    ] },
  { id: "PHY-075", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'une lampe torche produit ?",
    a: ["Des ondes sonores", "De la lumière", "De l'eau", "De l'électricité statique"], correct: 1,
    explications: [
      "Une lampe torche ne produit pas de son.",
      "Correct. Une lampe torche produit de la lumière grâce à l'électricité de sa pile.",
      "Une lampe torche ne produit pas d'eau.",
      "Une lampe torche ne produit pas d'électricité statique, elle utilise celle de la pile."
    ] }
];
