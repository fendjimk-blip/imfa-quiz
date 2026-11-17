// IMFA QUIZ - CHIMIE, FACILE, Partie 5A (CHM-176 a CHM-188)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P5A = [
  { id: "CHM-176", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la liaison chimique qui résulte du partage d'électrons entre des atomes ?",
    a: ["La liaison ionique", "La liaison covalente", "La liaison métallique", "La liaison nucléaire"], correct: 1,
    explications: [
      "La liaison ionique résulte d'un transfert d'électrons, pas d'un partage.",
      "Correct. La liaison covalente se forme quand des atomes partagent des électrons.",
      "La liaison métallique concerne les électrons délocalisés dans un métal.",
      "La liaison nucléaire concerne le noyau des atomes, pas les électrons."
    ] },
  { id: "CHM-177", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel type de liaison se forme généralement entre un métal et un non-métal par transfert d'électrons ?",
    a: ["Une liaison covalente", "Une liaison ionique", "Une liaison métallique", "Une liaison nucléaire"], correct: 1,
    explications: [
      "La liaison covalente correspond à un partage d'électrons.",
      "Correct. La liaison ionique résulte d'un transfert d'électrons entre un métal et un non-métal.",
      "La liaison métallique se forme entre atomes de métal, pas avec un non-métal.",
      "La liaison nucléaire ne concerne pas le transfert d'électrons."
    ] },
  { id: "CHM-178", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel type de liaison caractérise principalement les métaux solides ?",
    a: ["La liaison métallique", "La liaison covalente simple", "La liaison hydrogène", "La liaison nucléaire"], correct: 0,
    explications: [
      "Correct. Dans un métal, les ions positifs baignent dans un nuage d'électrons délocalisés.",
      "La liaison covalente simple est un partage d'électrons entre deux atomes, ce n'est pas le cas des métaux.",
      "La liaison hydrogène est une interaction entre molécules, elle ne caractérise pas les métaux.",
      "La liaison nucléaire ne concerne pas les liaisons entre atomes des métaux."
    ] },
  { id: "CHM-179", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du dioxyde d'azote ?",
    a: ["NO", "NO₂", "N₂O", "N₂O₅"], correct: 1,
    explications: [
      "NO est le monoxyde d'azote.",
      "Correct. Le dioxyde d'azote contient un atome d'azote et deux d'oxygène.",
      "N₂O est le protoxyde d'azote.",
      "N₂O₅ est le pentoxyde de diazote."
    ] },
  { id: "CHM-180", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du protoxyde d'azote ?",
    a: ["NO₂", "N₂O", "N₂O₃", "NH₃"], correct: 1,
    explications: [
      "NO₂ est le dioxyde d'azote.",
      "Correct. Le protoxyde d'azote, ou oxyde nitreux, a pour formule N₂O.",
      "N₂O₃ est le trioxyde de diazote.",
      "NH₃ est l'ammoniac."
    ] },
  { id: "CHM-181", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du processus qui permet d'obtenir des cristaux solides à partir d'une solution ?",
    a: ["La cristallisation", "La combustion", "La filtration", "La vaporisation"], correct: 0,
    explications: [
      "Correct. La cristallisation fait apparaître un solide cristallisé à partir d'une solution.",
      "La combustion est une réaction qui brûle une substance.",
      "La filtration sépare un solide d'un liquide.",
      "La vaporisation transforme un liquide en gaz."
    ] },
  { id: "CHM-182", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la substance dissoute dans une solution ?",
    a: ["Le solvant", "Le soluté", "Le résidu", "Le filtrat"], correct: 1,
    explications: [
      "Le solvant est le liquide qui dissout.",
      "Correct. Le soluté est la substance dissoute.",
      "Le résidu est le solide retenu par un filtre.",
      "Le filtrat est le liquide qui traverse un filtre."
    ] },
  { id: "CHM-183", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du mélange homogène formé par un soluté et un solvant ?",
    a: ["Une solution", "Une suspension", "Un précipité", "Une émulsion"], correct: 0,
    explications: [
      "Correct. Une solution est un mélange homogène de soluté dissous dans un solvant.",
      "Une suspension contient des particules solides qui ne se dissolvent pas.",
      "Un précipité est un solide qui apparaît dans une solution.",
      "Une émulsion est un mélange de liquides non miscibles."
    ] },
  { id: "CHM-184", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle propriété permet de comparer la masse d'une substance à son volume ?",
    a: ["La température", "La densité de masse", "La solubilité", "L'acidité"], correct: 1,
    explications: [
      "La température mesure l'agitation thermique, elle ne compare pas la masse et le volume.",
      "Correct. La masse volumique, souvent appelée densité, compare la masse au volume.",
      "La solubilité indique la quantité de soluté qui peut se dissoudre.",
      "L'acidité mesure le caractère acide d'une solution."
    ] },
  { id: "CHM-185", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité SI de la masse volumique ?",
    a: ["kg/m³", "kg/m", "m/s", "mol/L"], correct: 0,
    explications: [
      "Correct. Dans le système international, la masse volumique s'exprime en kg/m³.",
      "kg/m est une unité qui ne correspond pas à une masse volumique.",
      "m/s est une unité de vitesse.",
      "mol/L est une unité de concentration."
    ] },
  { id: "CHM-186", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle formule permet de calculer la masse volumique ?",
    a: ["ρ = V/m", "ρ = m/V", "ρ = m × V", "ρ = m + V"], correct: 1,
    explications: [
      "ρ = V/m est l'inverse de la formule.",
      "Correct. La masse volumique se calcule avec ρ = m / V.",
      "ρ = m × V ne donne pas une masse volumique.",
      "ρ = m + V n'a pas de sens physique ici."
    ] },
  { id: "CHM-187", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Un objet a une masse de 100 g et un volume de 50 cm³. Quelle est sa masse volumique ?",
    a: ["0,5 g/cm³", "2 g/cm³", "50 g/cm³", "150 g/cm³"], correct: 1,
    explications: [
      "0,5 g/cm³ correspond à V / m, c'est l'inverse de la formule.",
      "Correct. ρ = m / V = 100 / 50 = 2 g/cm³.",
      "50 g/cm³ correspond au volume, pas à la masse volumique.",
      "150 g/cm³ correspond à une addition (100 + 50), ce qui est faux."
    ] },
  { id: "CHM-188", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle quantité de matière est représentée par une mole ?",
    a: ["Une unité de température", "Une quantité contenant environ 6,022 × 10²³ entités", "Une unité de masse uniquement", "Une unité de volume uniquement"], correct: 1,
    explications: [
      "La mole n'est pas une unité de température.",
      "Correct. Une mole contient environ 6,022 × 10²³ entités élémentaires, c'est la constante d'Avogadro.",
      "La mole n'est pas une unité de masse, elle mesure une quantité de matière.",
      "La mole n'est pas une unité de volume."
    ] }
];
