// IMFA QUIZ - PHYSIQUE, FACILE, Partie 9 (PHY-256 a PHY-275)
const PHYSIQUE_FACILE_P9 = [
  { id: "PHY-256", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole du kelvin ?",
    a: ["K", "k", "Kl", "Kv"], correct: 0,
    explications: [
      "Correct. Le kelvin s'écrit K (majuscule).",
      "k en minuscule n'est pas le symbole du kelvin.",
      "Kl n'est pas le symbole du kelvin.",
      "Kv n'est pas le symbole du kelvin."
    ] },
  { id: "PHY-257", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est l'état de la matière le plus répandu dans l'Univers ?",
    a: ["Solide", "Liquide", "Gaz", "Plasma"], correct: 3,
    explications: [
      "Les solides sont rares dans l'Univers, en dehors des planètes.",
      "Les liquides sont très rares dans l'Univers.",
      "Les gaz sont présents, mais le plasma est plus répandu.",
      "Correct. Le plasma, présent dans les étoiles, est l'état le plus répandu."
    ] },
  { id: "PHY-258", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel organe permet à l'être humain de respirer ?",
    a: ["Le cœur", "Le foie", "Les poumons", "L'estomac"], correct: 2,
    explications: [
      "Le cœur pompe le sang, il ne sert pas à respirer.",
      "Le foie participe à la digestion et à la purification du sang.",
      "Correct. Les poumons permettent les échanges d'oxygène et de dioxyde de carbone.",
      "L'estomac sert à digérer les aliments."
    ] },
  { id: "PHY-259", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel os protège le cerveau ?",
    a: ["Le fémur", "Le crâne", "La côte", "Le bassin"], correct: 1,
    explications: [
      "Le fémur est l'os de la cuisse.",
      "Correct. Le crâne forme une boîte osseuse qui protège le cerveau.",
      "Les côtes protègent le cœur et les poumons.",
      "Le bassin protège les organes du bas du ventre."
    ] },
  { id: "PHY-260", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Environ combien de litres de sang contient un adulte ?",
    a: ["1 litre", "5 litres", "20 litres", "50 litres"], correct: 1,
    explications: [
      "1 litre est bien trop peu pour un adulte.",
      "Correct. Un adulte contient environ 5 litres de sang.",
      "20 litres est beaucoup trop pour un adulte.",
      "50 litres est impossible pour le corps humain."
    ] },
  { id: "PHY-261", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la planète la plus proche du Soleil ?",
    a: ["Mercure", "Vénus", "Mars", "Jupiter"], correct: 0,
    explications: [
      "Correct. Mercure est la planète la plus proche du Soleil.",
      "Vénus est la deuxième planète à partir du Soleil.",
      "Mars est la quatrième planète à partir du Soleil.",
      "Jupiter est une planète géante, située beaucoup plus loin du Soleil."
    ] },
  { id: "PHY-262", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle planète est surnommée la planète rouge ?",
    a: ["Vénus", "Jupiter", "Mars", "Saturne"], correct: 2,
    explications: [
      "Vénus est surtout appelée l'étoile du matin ou du soir.",
      "Jupiter est une planète géante, elle est surtout connue pour ses bandes colorées.",
      "Correct. Mars est appelée la planète rouge à cause de l'oxyde de fer en surface.",
      "Saturne est connue pour ses anneaux."
    ] },
  { id: "PHY-263", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un son aigu ?",
    a: ["Un son à faible fréquence", "Un son à fréquence élevée", "Un son qui ne vibre pas", "Un son produit sans matière"], correct: 1,
    explications: [
      "Une faible fréquence correspond à un son grave.",
      "Correct. Un son aigu correspond à une fréquence élevée.",
      "Tout son est produit par une vibration.",
      "Un son ne peut pas être produit sans matière pour vibrer."
    ] },
  { id: "PHY-264", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'un son grave ?",
    a: ["Un son à basse fréquence", "Un son à haute fréquence", "Un son très fort", "Un son sans vibration"], correct: 0,
    explications: [
      "Correct. Un son grave correspond à une fréquence basse, par exemple une grosse caisse.",
      "Un son à haute fréquence est un son aigu.",
      "La force d'un son est son volume, ce n'est pas la hauteur du son.",
      "Tout son est produit par une vibration."
    ] },
  { id: "PHY-265", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle couleur ne fait pas partie de l'arc-en-ciel ?",
    a: ["Rouge", "Vert", "Noir", "Violet"], correct: 2,
    explications: [
      "Le rouge fait partie des couleurs de l'arc-en-ciel.",
      "Le vert fait partie des couleurs de l'arc-en-ciel.",
      "Correct. Le noir n'est pas une couleur de l'arc-en-ciel.",
      "Le violet fait partie des couleurs de l'arc-en-ciel."
    ] },
  { id: "PHY-266", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment la chaleur du Soleil arrive-t-elle jusqu'à la Terre à travers le vide spatial ?",
    a: ["Par conduction", "Par convection", "Par rayonnement", "Par friction"], correct: 2,
    explications: [
      "La conduction a besoin d'un contact entre des matériaux.",
      "La convection a besoin d'un fluide qui circule, et il n'y en a pas dans le vide.",
      "Correct. Le rayonnement transporte la chaleur sans matière, comme celle du Soleil.",
      "La friction est une force, ce n'est pas un mode de transfert de chaleur."
    ] },
  { id: "PHY-267", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans quel mode de transfert la chaleur se propage-t-elle grâce au mouvement d'un fluide ?",
    a: ["La conduction", "La convection", "Le rayonnement", "La fusion"], correct: 1,
    explications: [
      "La conduction se fait de proche en proche dans un matériau, sans mouvement de matière.",
      "Correct. La convection se fait grâce aux courants chauds et froids d'un fluide.",
      "Le rayonnement ne demande pas de fluide.",
      "La fusion est un changement d'état, ce n'est pas un mode de transfert de chaleur."
    ] },
  { id: "PHY-268", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quand une barre de métal est chauffée à une extrémité, comment la chaleur se propage-t-elle ?",
    a: ["Par conduction", "Par convection", "Par rayonnement", "Par dilatation"], correct: 0,
    explications: [
      "Correct. Dans un solide comme le métal, la chaleur se propage par conduction.",
      "La convection concerne les fluides, pas un métal solide.",
      "Le rayonnement est surtout important pour les corps très chauds, pas pour cette barre.",
      "La dilatation est une conséquence de la chaleur, ce n'est pas un mode de transfert."
    ] },
  { id: "PHY-269", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il quand on approche deux pôles identiques de deux aimants ?",
    a: ["Ils s'attirent", "Ils restent sans effet", "Ils fondent", "Ils se repoussent"], correct: 3,
    explications: [
      "Deux pôles identiques ne s'attirent pas.",
      "Deux pôles identiques ont bien un effet, ils se repoussent.",
      "Les aimants ne fondent pas à cause de leur pôle.",
      "Correct. Deux pôles identiques, nord et nord ou sud et sud, se repoussent."
    ] },
  { id: "PHY-270", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que se passe-t-il quand on approche un pôle nord d'un pôle sud de deux aimants ?",
    a: ["Ils se repoussent", "Ils s'attirent", "Ils deviennent liquides", "Ils perdent leur masse"], correct: 1,
    explications: [
      "Deux pôles opposés ne se repoussent pas.",
      "Correct. Deux pôles opposés, nord et sud, s'attirent.",
      "Les aimants ne deviennent pas liquides à cause de leurs pôles.",
      "L'approche d'un aimant ne modifie pas sensiblement la masse."
    ] },
  { id: "PHY-271", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de centimètres y a-t-il dans un mètre ?",
    a: ["10", "100", "1 000", "10 000"], correct: 1,
    explications: [
      "10 centimètres ne font pas un mètre.",
      "Correct. Un mètre vaut 100 centimètres.",
      "1 000 correspond au nombre de millimètres dans un mètre.",
      "10 000 ne correspond à aucune conversion usuelle du mètre."
    ] },
  { id: "PHY-272", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de secondes y a-t-il dans une heure ?",
    a: ["60", "360", "3 600", "6 000"], correct: 2,
    explications: [
      "60 correspond au nombre de secondes dans une minute.",
      "360 ne correspond à aucune conversion de l'heure.",
      "Correct. Une heure vaut 60 minutes, soit 3 600 secondes.",
      "6 000 ne correspond pas à une heure."
    ] },
  { id: "PHY-273", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil transforme l'électricité en chaleur pour faire bouillir l'eau ?",
    a: ["Le réfrigérateur", "La bouilloire électrique", "Le ventilateur", "La balance"], correct: 1,
    explications: [
      "Le réfrigérateur refroidit, il ne chauffe pas l'eau.",
      "Correct. La bouilloire électrique transforme l'électricité en chaleur pour chauffer l'eau.",
      "Le ventilateur transforme l'électricité en mouvement d'air.",
      "La balance mesure la masse, elle ne chauffe pas."
    ] },
  { id: "PHY-274", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qu'une force ?",
    a: ["Une action qui peut modifier le mouvement ou la forme d'un objet", "Une mesure de la température", "Une quantité de matière", "Un type de lumière"], correct: 0,
    explications: [
      "Correct. Une force peut mettre en mouvement, arrêter ou déformer un objet.",
      "La température se mesure avec un thermomètre, ce n'est pas une force.",
      "La quantité de matière correspond à la masse ou à la mole, ce n'est pas une force.",
      "Un type de lumière n'est pas une force."
    ] },
  { id: "PHY-275", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on un mouvement dont la trajectoire est une ligne droite ?",
    a: ["Un mouvement circulaire", "Un mouvement en zigzag", "Un mouvement rectiligne", "Un mouvement aléatoire"], correct: 2,
    explications: [
      "Un mouvement circulaire suit un cercle autour d'un centre.",
      "Un zigzag n'est pas une ligne droite.",
      "Correct. Un mouvement rectiligne suit une trajectoire en ligne droite.",
      "Un mouvement aléatoire n'a pas de trajectoire régulière."
    ] }
];
