// IMFA QUIZ - PHYSIQUE, FACILE, Partie 8 (PHY-236 a PHY-255)
const PHYSIQUE_FACILE_P8 = [
  { id: "PHY-236", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure l'humidité de l'air ?",
    a: ["Hygromètre", "Thermomètre", "Anémomètre", "Pluviomètre"], correct: 0,
    explications: [
      "Correct. L'hygromètre mesure le taux d'humidité de l'air.",
      "Le thermomètre mesure la température.",
      "L'anémomètre mesure la vitesse du vent.",
      "Le pluviomètre mesure la quantité de pluie."
    ] },
  { id: "PHY-237", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure la vitesse du vent ?",
    a: ["Pluviomètre", "Thermomètre", "Anémomètre", "Baromètre"], correct: 2,
    explications: [
      "Le pluviomètre mesure la quantité de pluie.",
      "Le thermomètre mesure la température.",
      "Correct. L'anémomètre mesure la vitesse du vent.",
      "Le baromètre mesure la pression atmosphérique."
    ] },
  { id: "PHY-238", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument mesure la quantité de pluie tombée ?",
    a: ["Anémomètre", "Pluviomètre", "Hygromètre", "Sismographe"], correct: 1,
    explications: [
      "L'anémomètre mesure la vitesse du vent.",
      "Correct. Le pluviomètre recueille l'eau de pluie et mesure sa hauteur.",
      "L'hygromètre mesure l'humidité de l'air.",
      "Le sismographe enregistre les séismes."
    ] },
  { id: "PHY-239", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil enregistre les secousses de la Terre ?",
    a: ["Sismographe", "Baromètre", "Télescope", "Galvanomètre"], correct: 0,
    explications: [
      "Correct. Le sismographe enregistre les secousses du sol lors des séismes.",
      "Le baromètre mesure la pression atmosphérique.",
      "Le télescope sert à observer des objets lointains.",
      "Le galvanomètre détecte un petit courant électrique."
    ] },
  { id: "PHY-240", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la quantité de matière ?",
    a: ["Le gramme", "La mole", "Le mètre", "Le kelvin"], correct: 1,
    explications: [
      "Le gramme est une unité de masse.",
      "Correct. La quantité de matière se mesure en moles (mol).",
      "Le mètre est une unité de longueur.",
      "Le kelvin est une unité de température."
    ] },
  { id: "PHY-241", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel rayonnement est utilisé pour les radiographies médicales ?",
    a: ["Rayons X", "Infrarouges", "Ondes radio", "Ultraviolets"], correct: 0,
    explications: [
      "Correct. Les rayons X traversent les tissus mous et révèlent les os.",
      "Les infrarouges servent surtout à transporter la chaleur, pas à faire des radiographies.",
      "Les ondes radio servent aux communications, pas aux radiographies.",
      "Les ultraviolets ne sont pas utilisés pour les radiographies classiques."
    ] },
  { id: "PHY-242", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet transforme directement l'énergie électrique en lumière ?",
    a: ["Une LED", "Un moteur", "Une résistance", "Un fil de cuivre"], correct: 0,
    explications: [
      "Correct. Une LED transforme directement l'électricité en lumière.",
      "Un moteur transforme l'électricité en mouvement.",
      "Une résistance transforme surtout l'électricité en chaleur.",
      "Un fil de cuivre conduit le courant, il ne produit pas de lumière."
    ] },
  { id: "PHY-243", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel changement d'état transforme un solide directement en gaz ?",
    a: ["Fusion", "Sublimation", "Condensation", "Solidification"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La sublimation transforme directement un solide en gaz.",
      "La condensation transforme un gaz en liquide.",
      "La solidification transforme un liquide en solide."
    ] },
  { id: "PHY-244", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de kilogrammes y a-t-il dans une tonne ?",
    a: ["10 kg", "100 kg", "1 000 kg", "10 000 kg"], correct: 2,
    explications: [
      "10 kg est bien trop léger pour une tonne.",
      "100 kg est aussi trop léger pour une tonne.",
      "Correct. Une tonne vaut 1 000 kg.",
      "10 000 kg correspond à dix tonnes."
    ] },
  { id: "PHY-245", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi un vélo ralentit-il quand on arrête de pédaler ?",
    a: ["À cause du frottement", "À cause de la lumière", "À cause du son", "À cause de la couleur"], correct: 0,
    explications: [
      "Correct. Le frottement de l'air et des roues freine progressivement le vélo.",
      "La lumière n'a pas d'effet sur la vitesse du vélo.",
      "Le son ne freine pas le vélo.",
      "La couleur du vélo n'a pas d'effet sur sa vitesse."
    ] },
  { id: "PHY-246", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la forme de l'orbite de la Terre autour du Soleil ?",
    a: ["Un cercle parfait", "Une ellipse", "Un carré", "Une ligne droite"], correct: 1,
    explications: [
      "L'orbite est presque circulaire, mais pas parfaitement un cercle.",
      "Correct. L'orbite de la Terre est une ellipse très proche d'un cercle.",
      "Une orbite n'a pas la forme d'un carré.",
      "La Terre ne se déplace pas en ligne droite autour du Soleil."
    ] },
  { id: "PHY-247", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument permet de mesurer le volume d'un liquide ?",
    a: ["Une éprouvette graduée", "Une balance", "Un thermomètre", "Un voltmètre"], correct: 0,
    explications: [
      "Correct. L'éprouvette graduée permet de lire le volume d'un liquide.",
      "La balance mesure la masse, pas le volume.",
      "Le thermomètre mesure la température.",
      "Le voltmètre mesure la tension électrique."
    ] },
  { id: "PHY-248", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le rôle des fils électriques ?",
    a: ["Transporter le courant électrique", "Mesurer la température", "Produire de la lumière", "Stocker la chaleur"], correct: 0,
    explications: [
      "Correct. Les fils électriques transportent le courant d'un point à un autre.",
      "Les fils ne mesurent pas la température.",
      "Les fils ne produisent pas de lumière, c'est le rôle de la lampe.",
      "Les fils ne stockent pas la chaleur."
    ] },
  { id: "PHY-249", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Qu'est-ce qui produit le son d'une guitare ?",
    a: ["Les vibrations des cordes", "La lumière des cordes", "L'eau dans l'instrument", "Le magnétisme de l'instrument"], correct: 0,
    explications: [
      "Correct. Les cordes vibrent et produisent le son.",
      "La lumière ne produit pas de son.",
      "L'eau n'est pas utilisée pour produire le son de la guitare.",
      "Le magnétisme n'est pas la source du son de la guitare."
    ] },
  { id: "PHY-250", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet conduit le mieux la chaleur ?",
    a: ["Une casserole en métal", "Une cuillère en bois", "Un bol en plastique", "Un torchon en tissu"], correct: 0,
    explications: [
      "Correct. Le métal conduit bien la chaleur, c'est pourquoi les casseroles sont en métal.",
      "Le bois est un mauvais conducteur de chaleur.",
      "Le plastique est un mauvais conducteur de chaleur.",
      "Le tissu isole, il ne conduit pas bien la chaleur."
    ] },
  { id: "PHY-251", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la trajectoire d'un satellite autour de la Terre ?",
    a: ["Une orbite", "Une ligne droite", "Un zigzag", "Un tunnel"], correct: 0,
    explications: [
      "Correct. Un satellite décrit une orbite autour de la Terre.",
      "Un satellite ne suit pas une ligne droite, il tourne autour de la Terre.",
      "Un satellite ne suit pas un zigzag.",
      "Un tunnel n'est pas une trajectoire, c'est une structure construite."
    ] },
  { id: "PHY-252", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de grammes y a-t-il dans un kilogramme ?",
    a: ["10", "100", "1 000", "10 000"], correct: 2,
    explications: [
      "10 grammes est bien trop peu pour un kilogramme.",
      "100 grammes correspondent à un hectogramme.",
      "Correct. Un kilogramme vaut 1 000 grammes.",
      "10 000 grammes correspondent à dix kilogrammes."
    ] },
  { id: "PHY-253", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi les vêtements sombres se réchauffent-ils plus au soleil ?",
    a: ["Ils absorbent davantage la lumière", "Ils réfléchissent davantage la lumière", "Ils produisent de la lumière", "Ils dispersent le son"], correct: 0,
    explications: [
      "Correct. Les couleurs sombres absorbent davantage la lumière, qui se transforme en chaleur.",
      "Les couleurs claires réfléchissent davantage la lumière, pas les couleurs sombres.",
      "Un vêtement ne produit pas de lumière.",
      "Un vêtement ne disperse pas le son de cette manière."
    ] },
  { id: "PHY-254", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil permet de voir de très petits objets fortement agrandis ?",
    a: ["Le microscope", "Le télescope", "Le périscope", "Le stéthoscope"], correct: 0,
    explications: [
      "Correct. Le microscope agrandit fortement les très petits objets.",
      "Le télescope sert à observer des objets très lointains.",
      "Le périscope permet de voir au-dessus d'un obstacle.",
      "Le stéthoscope sert à écouter les sons du corps."
    ] },
  { id: "PHY-255", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel objet céleste tourne autour de la Terre ?",
    a: ["La Lune", "Mars", "Le Soleil", "Jupiter"], correct: 0,
    explications: [
      "Correct. La Lune tourne autour de la Terre.",
      "Mars tourne autour du Soleil, pas autour de la Terre.",
      "Le Soleil est au centre du système solaire, il ne tourne pas autour de la Terre.",
      "Jupiter tourne autour du Soleil, pas autour de la Terre."
    ] }
];
