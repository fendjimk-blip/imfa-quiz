// IMFA QUIZ - PHYSIQUE, FACILE, Partie 11 (PHY-296 a PHY-315)
const PHYSIQUE_FACILE_P11 = [
  { id: "PHY-296", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène explique la rouille du fer ?",
    a: ["La fusion", "L'oxydation", "La condensation", "La dilatation"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La rouille est une oxydation du fer au contact de l'air et de l'humidité.",
      "La condensation transforme un gaz en liquide.",
      "La dilatation est l'augmentation du volume d'un corps."
    ] },
  { id: "PHY-297", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi entend-on un écho ?",
    a: ["Le son disparaît", "Le son se transforme en chaleur", "Le son se réfléchit sur un obstacle", "La lumière est reflétée"], correct: 2,
    explications: [
      "Le son ne disparaît pas, il est renvoyé.",
      "Le son ne se transforme pas en chaleur pour produire un écho.",
      "Correct. Le son rebondit sur un obstacle et revient vers nous.",
      "L'écho concerne le son, pas la lumière."
    ] },
  { id: "PHY-298", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est environ la distance entre la Terre et le Soleil ?",
    a: ["150 000 km", "150 millions de km", "150 km", "1,5 milliard de km"], correct: 1,
    explications: [
      "150 000 km est trop court, c'est moins que la distance Terre-Lune (environ 384 000 km).",
      "Correct. La distance moyenne Terre-Soleil est d'environ 150 millions de km.",
      "150 km est bien trop court pour la distance Terre-Soleil.",
      "1,5 milliard de km est environ dix fois trop loin."
    ] },
  { id: "PHY-299", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la différence entre la masse et le poids ?",
    a: ["Ils sont identiques", "La masse se mesure en newtons, le poids en kilogrammes", "La masse ne change pas, le poids dépend de la gravité", "Le poids ne change jamais"], correct: 2,
    explications: [
      "Ils ne sont pas identiques : la masse et le poids sont deux grandeurs différentes.",
      "C'est inversé : la masse se mesure en kilogrammes, le poids en newtons.",
      "Correct. La masse reste la même partout, alors que le poids dépend de la pesanteur.",
      "Le poids dépend du lieu, il peut donc changer."
    ] },
  { id: "PHY-300", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle d'un levier ?",
    a: ["Mesurer la température", "Multiplier une force ou changer sa direction", "Produire de l'électricité", "Stocker de l'eau"], correct: 1,
    explications: [
      "Mesurer la température est le rôle d'un thermomètre.",
      "Correct. Un levier permet de soulever une charge avec moins d'effort ou de changer la direction de la force.",
      "Un levier ne produit pas d'électricité.",
      "Un levier ne stocke pas d'eau."
    ] },
  { id: "PHY-301", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi le son voyage-t-il plus vite dans un solide que dans l'air ?",
    a: ["Les particules sont plus éloignées", "Les particules sont plus proches et transmettent mieux la vibration", "Le solide produit de la lumière", "Le solide est plus léger"], correct: 1,
    explications: [
      "Si les particules étaient plus éloignées, la vibration se transmettrait moins bien.",
      "Correct. Dans un solide, les particules sont proches et transmettent vite la vibration.",
      "Un solide ne produit pas de lumière pour transmettre le son.",
      "La légèreté n'explique pas la vitesse du son."
    ] },
  { id: "PHY-302", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est environ la plage de fréquences audibles par l'oreille humaine ?",
    a: ["De 20 Hz à 20 000 Hz", "De 1 Hz à 100 Hz", "De 1 000 Hz à 10 000 Hz", "De 0 à 5 Hz"], correct: 0,
    explications: [
      "Correct. L'oreille humaine perçoit environ de 20 Hz à 20 000 Hz.",
      "100 Hz est trop bas, l'oreille perçoit des sons beaucoup plus aigus.",
      "Cette plage est trop étroite, l'oreille entend des sons plus graves et plus aigus.",
      "5 Hz est bien en dessous du seuil d'audition humaine."
    ] },
  { id: "PHY-303", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il quand on frotte fortement ses mains l'une contre l'autre ?",
    a: ["Elles deviennent magnétiques", "Elles se réchauffent", "Elles deviennent lourdes", "Elles fondent"], correct: 1,
    explications: [
      "Le frottement ne rend pas les mains magnétiques.",
      "Correct. Le frottement transforme une partie de l'énergie du mouvement en chaleur.",
      "Le frottement ne change pas la masse des mains.",
      "Les mains ne fondent pas en se frottant."
    ] },
  { id: "PHY-304", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est environ la masse volumique de l'eau pure ?",
    a: ["10 g/cm³", "1 g/cm³", "0,1 g/cm³", "100 g/cm³"], correct: 1,
    explications: [
      "10 g/cm³ est bien trop élevé pour l'eau.",
      "Correct. L'eau pure a une masse volumique d'environ 1 g/cm³, soit 1 000 kg/m³.",
      "0,1 g/cm³ est trop faible pour l'eau.",
      "100 g/cm³ est beaucoup trop élevé pour l'eau."
    ] },
  { id: "PHY-305", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est l'effet le plus courant de la chaleur sur un gaz ?",
    a: ["Il se dilate", "Il se solidifie", "Il devient magnétique", "Il disparaît"], correct: 0,
    explications: [
      "Correct. Un gaz chauffé se dilate, son volume augmente.",
      "Un gaz ne se solidifie pas en étant chauffé, c'est l'inverse.",
      "Chauffer un gaz ne le rend pas magnétique.",
      "Un gaz chauffé ne disparaît pas, il occupe un volume plus grand."
    ] },
  { id: "PHY-306", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi un ballon de football gonflé rebondit-il ?",
    a: ["Grâce à la pression de l'air à l'intérieur", "Grâce à un aimant intérieur", "Grâce à la lumière", "Grâce au son"], correct: 0,
    explications: [
      "Correct. L'air comprimé à l'intérieur pousse la paroi du ballon et lui permet de rebondir.",
      "Un ballon de football n'a pas d'aimant intérieur.",
      "La lumière n'est pas la cause du rebond.",
      "Le son n'est pas la cause du rebond."
    ] },
  { id: "PHY-307", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle d'un ressort dans une balance à ressort ?",
    a: ["Stocker de l'électricité", "Se déformer proportionnellement à la force", "Produire du son", "Mesurer le temps"], correct: 1,
    explications: [
      "Un ressort ne stocke pas d'électricité dans une balance.",
      "Correct. Le ressort s'allonge d'autant plus que la force est grande, ce qui permet de mesurer la force.",
      "Un ressort de balance ne produit pas de son.",
      "Un ressort ne sert pas à mesurer le temps."
    ] },
  { id: "PHY-308", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un miroir plan ?",
    a: ["Une lentille qui agrandit", "Une surface qui réfléchit la lumière de façon régulière", "Une source de lumière", "Un prisme"], correct: 1,
    explications: [
      "Une lentille agrandit ou réduit une image, ce n'est pas un miroir plan.",
      "Correct. Un miroir plan renvoie la lumière de façon régulière, ce qui donne une image nette.",
      "Un miroir ne produit pas sa propre lumière.",
      "Un prisme décompose la lumière, il ne la réfléchit pas comme un miroir."
    ] },
  { id: "PHY-309", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le mouvement d'un objet qui va et vient autour d'une position d'équilibre ?",
    a: ["La translation", "L'oscillation", "La fusion", "La dilatation"], correct: 1,
    explications: [
      "La translation est un déplacement d'un point à un autre.",
      "Correct. L'oscillation est un mouvement de va-et-vient autour d'une position d'équilibre.",
      "La fusion est le passage d'un solide à l'état liquide.",
      "La dilatation est l'augmentation du volume d'un corps."
    ] },
  { id: "PHY-310", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de la masse volumique dans le Système international ?",
    a: ["g/L", "kg/m³", "kg/L", "m/s"], correct: 1,
    explications: [
      "g/L est couramment utilisé, mais ce n'est pas l'unité SI.",
      "Correct. L'unité SI de la masse volumique est le kilogramme par mètre cube.",
      "kg/L n'est pas l'unité SI.",
      "m/s est une unité de vitesse."
    ] },
  { id: "PHY-311", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure l'intensité de la lumière ?",
    a: ["Le manomètre", "Le dynamomètre", "Le luxmètre", "Le pluviomètre"], correct: 2,
    explications: [
      "Le manomètre mesure la pression.",
      "Le dynamomètre mesure une force.",
      "Correct. Le luxmètre mesure l'éclairement, c'est-à-dire la quantité de lumière reçue.",
      "Le pluviomètre mesure la quantité de pluie."
    ] },
  { id: "PHY-312", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi les pneus des voitures sont-ils en caoutchouc ?",
    a: ["Pour produire du courant", "Pour augmenter l'adhérence sur la route", "Pour éclairer la route", "Pour mesurer la vitesse"], correct: 1,
    explications: [
      "Les pneus ne produisent pas de courant électrique.",
      "Correct. Le caoutchouc adhère bien à la route grâce au frottement, ce qui améliore la sécurité.",
      "Les pneus n'éclairent pas la route.",
      "Les pneus ne mesurent pas la vitesse, c'est le rôle du compteur."
    ] },
  { id: "PHY-313", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle énergie est libérée quand une bougie brûle ?",
    a: ["Énergie nucléaire", "Énergie sonore uniquement", "Énergie chimique transformée en chaleur et lumière", "Énergie potentielle uniquement"], correct: 2,
    explications: [
      "La combustion d'une bougie n'est pas une réaction nucléaire.",
      "Une bougie produit aussi de la chaleur et de la lumière, pas seulement du son.",
      "Correct. L'énergie chimique de la cire est libérée sous forme de chaleur et de lumière.",
      "L'énergie potentielle n'est pas la forme principale libérée par une bougie."
    ] },
  { id: "PHY-314", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "À quoi sert un filtre à café ?",
    a: ["Chauffer l'eau", "Produire de l'électricité", "Séparer un solide d'un liquide", "Mesurer le volume"], correct: 2,
    explications: [
      "Le filtre ne chauffe pas l'eau.",
      "Le filtre ne produit pas d'électricité.",
      "Correct. Le filtre retient le marc de café et laisse passer le liquide.",
      "Le filtre ne sert pas à mesurer le volume."
    ] },
  { id: "PHY-315", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la différence entre une source primaire et une source secondaire de lumière ?",
    a: ["Il n'y a pas de différence", "Une source primaire reflète, une secondaire produit sa lumière", "Une source primaire produit sa lumière, une secondaire la reflète", "Une source primaire est toujours artificielle"], correct: 2,
    explications: [
      "Il y a bien une différence entre les deux types de sources.",
      "C'est inversé : une source primaire produit sa lumière, une source secondaire la reflète.",
      "Correct. Le Soleil est une source primaire, la Lune est une source secondaire.",
      "Une source primaire peut être naturelle, comme le Soleil."
    ] }
];
