// IMFA QUIZ - CHIMIE, FACILE, Partie 5B (CHM-189 a CHM-200)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P5B = [
  { id: "CHM-189", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole de la quantité de matière ?",
    a: ["m", "V", "n", "T"], correct: 2,
    explications: [
      "m est le symbole de la masse.",
      "V est le symbole du volume.",
      "Correct. La quantité de matière se note n.",
      "T est le symbole de la température."
    ] },
  { id: "CHM-190", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de la quantité de matière dans le système international ?",
    a: ["Le gramme", "La mole", "Le litre", "Le kelvin"], correct: 1,
    explications: [
      "Le gramme est une unité de masse.",
      "Correct. La mole (mol) est l'unité SI de la quantité de matière.",
      "Le litre est une unité de volume.",
      "Le kelvin est une unité de température."
    ] },
  { id: "CHM-191", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel nom donne-t-on à la réaction chimique qui libère de l'énergie lors de la combustion d'un combustible ?",
    a: ["Une réaction de combustion", "Une réaction de dissolution", "Une réaction de filtration", "Une réaction de condensation"], correct: 0,
    explications: [
      "Correct. La combustion est une réaction d'oxydation rapide qui libère de la chaleur.",
      "La dissolution est le fait qu'une substance se disperse dans un liquide.",
      "La filtration est une méthode de séparation, pas une réaction.",
      "La condensation transforme un gaz en liquide."
    ] },
  { id: "CHM-192", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom des substances obtenues à la fin d'une réaction chimique ?",
    a: ["Un réactif", "Un produit", "Un solvant", "Un indicateur"], correct: 1,
    explications: [
      "Un réactif est une substance de départ.",
      "Correct. Les produits sont les substances formées à la fin de la réaction.",
      "Un solvant dissout une autre substance.",
      "Un indicateur change de couleur selon le pH."
    ] },
  { id: "CHM-193", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel nom donne-t-on aux substances présentes avant une réaction chimique ?",
    a: ["Les produits", "Les réactifs", "Les précipités", "Les solvants uniquement"], correct: 1,
    explications: [
      "Les produits sont obtenus après la réaction.",
      "Correct. Les réactifs sont les substances de départ.",
      "Les précipités sont des solides qui apparaissent pendant certaines réactions.",
      "Les solvants ne sont pas forcément présents dans toutes les réactions."
    ] },
  { id: "CHM-194", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle loi affirme que la masse totale se conserve au cours d'une réaction chimique dans un système fermé ?",
    a: ["La loi de la gravitation", "La loi de conservation de la masse", "La loi de la pression", "La loi de la température"], correct: 1,
    explications: [
      "La loi de la gravitation décrit l'attraction entre les masses, pas une réaction chimique.",
      "Correct. La loi de conservation de la masse affirme que la masse totale se conserve.",
      "La loi de la pression concerne les gaz, elle ne dit pas cela.",
      "La loi de la température ne concerne pas la conservation de la masse."
    ] },
  { id: "CHM-195", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel scientifique est associé à la formulation classique de la loi de conservation de la masse en chimie ?",
    a: ["Isaac Newton", "Antoine Lavoisier", "Albert Einstein", "Dmitri Mendeleïev"], correct: 1,
    explications: [
      "Isaac Newton est connu pour la mécanique et la gravitation.",
      "Correct. Antoine Lavoisier est l'un des fondateurs de la chimie moderne.",
      "Albert Einstein est connu pour la relativité.",
      "Dmitri Mendeleïev est connu pour le tableau périodique."
    ] },
  { id: "CHM-196", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel scientifique est principalement connu pour avoir proposé une classification périodique des éléments ?",
    a: ["Dmitri Mendeleïev", "Louis Pasteur", "Marie Curie", "Niels Bohr"], correct: 0,
    explications: [
      "Correct. Dmitri Mendeleïev a publié en 1869 une classification périodique des éléments.",
      "Louis Pasteur est connu pour ses travaux en microbiologie.",
      "Marie Curie est connue pour ses travaux sur la radioactivité.",
      "Niels Bohr est connu pour son modèle de l'atome."
    ] },
  { id: "CHM-197", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle scientifique a découvert le radium et le polonium avec Pierre Curie ?",
    a: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Jane Goodall"], correct: 0,
    explications: [
      "Correct. Marie Curie et Pierre Curie ont découvert le polonium et le radium en 1898.",
      "Rosalind Franklin est connue pour ses travaux sur la structure de l'ADN.",
      "Ada Lovelace est considérée comme une pionnière de l'informatique.",
      "Jane Goodall est connue pour ses études sur les chimpanzés."
    ] },
  { id: "CHM-198", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle branche de la chimie étudie principalement les composés contenant du carbone ?",
    a: ["La chimie organique", "La chimie nucléaire", "La chimie analytique uniquement", "La chimie minérale uniquement"], correct: 0,
    explications: [
      "Correct. La chimie organique étudie les composés du carbone, comme les hydrocarbures.",
      "La chimie nucléaire étudie le noyau des atomes.",
      "La chimie analytique sert à identifier et doser des substances, elle n'est pas définie par le carbone.",
      "La chimie minérale étudie surtout les composés sans carbone."
    ] },
  { id: "CHM-199", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle branche de la chimie étudie la composition et les propriétés des substances minérales ?",
    a: ["La chimie organique", "La chimie inorganique", "La biochimie uniquement", "La chimie alimentaire uniquement"], correct: 1,
    explications: [
      "La chimie organique étudie les composés du carbone.",
      "Correct. La chimie inorganique étudie les métaux, les minéraux et les sels.",
      "La biochimie étudie les molécules du vivant, ce n'est pas la chimie des minéraux.",
      "La chimie alimentaire étudie les aliments, pas l'ensemble des minéraux."
    ] },
  { id: "CHM-200", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est l'objectif principal de la chimie ?",
    a: ["Étudier uniquement les êtres vivants", "Étudier la matière, sa composition, ses propriétés et ses transformations", "Étudier uniquement les planètes", "Étudier uniquement les mouvements des objets"], correct: 1,
    explications: [
      "Étudier les êtres vivants est le rôle de la biologie.",
      "Correct. La chimie étudie la matière, sa composition, ses propriétés et ses transformations.",
      "Étudier les planètes relève de l'astronomie.",
      "Étudier les mouvements des objets relève de la physique."
    ] }
];
