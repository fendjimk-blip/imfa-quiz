// IMFA QUIZ - CHIMIE, FACILE, Partie 3B (CHM-126 a CHM-150)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P3B = [
  { id: "CHM-126", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la principale caractéristique d'un gaz ?",
    a: ["Il possède une forme propre.", "Il possède toujours un volume fixe.", "Il occupe l'espace disponible dans son récipient.", "Il ne peut pas être comprimé."], correct: 2,
    explications: [
      "Un gaz n'a pas de forme propre, il prend celle du récipient.",
      "Un gaz n'a pas de volume fixe, il se répand dans le récipient.",
      "Correct. Un gaz occupe tout l'espace disponible.",
      "Un gaz peut être comprimé, ses particules sont éloignées."
    ] },
  { id: "CHM-127", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la principale caractéristique d'un liquide ?",
    a: ["Il possède une forme propre.", "Il prend la forme de son récipient.", "Il n'a aucune masse.", "Il occupe toujours tout l'espace disponible."], correct: 1,
    explications: [
      "Un liquide n'a pas de forme propre.",
      "Correct. Un liquide a un volume propre, mais prend la forme du récipient.",
      "Tout liquide a une masse.",
      "Un liquide ne remplit pas toujours tout le récipient, il garde son volume."
    ] },
  { id: "CHM-128", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi peut-on comprimer facilement un gaz ?",
    a: ["Parce que ses particules sont très éloignées les unes des autres.", "Parce qu'il ne contient aucune particule.", "Parce que ses particules sont immobiles.", "Parce qu'il est toujours froid."], correct: 0,
    explications: [
      "Correct. Les particules d'un gaz sont séparées par de grands espaces, on peut donc réduire le volume.",
      "Un gaz contient bien des particules, ce n'est pas la raison.",
      "Les particules d'un gaz sont en mouvement, pas immobiles.",
      "La température d'un gaz n'explique pas sa compressibilité."
    ] },
  { id: "CHM-129", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle propriété caractérise généralement un solide ?",
    a: ["Il n'a pas de volume propre.", "Il possède une forme et un volume propres.", "Il prend toujours la forme du récipient.", "Il se répand comme un gaz."], correct: 1,
    explications: [
      "Un solide a un volume propre.",
      "Correct. Les particules d'un solide sont rapprochées et lui donnent une forme et un volume propres.",
      "Un solide ne prend pas la forme du récipient, c'est le propre d'un liquide ou d'un gaz.",
      "Un solide ne se répand pas comme un gaz."
    ] },
  { id: "CHM-130", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'oxyde de calcium ?",
    a: ["CaO", "CaCO₃", "CaCl₂", "CO₂"], correct: 0,
    explications: [
      "Correct. L'oxyde de calcium est formé de calcium et d'oxygène, il s'écrit CaO.",
      "CaCO₃ est le carbonate de calcium.",
      "CaCl₂ est le chlorure de calcium.",
      "CO₂ est le dioxyde de carbone."
    ] },
  { id: "CHM-131", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du chlorure de calcium ?",
    a: ["CaO", "CaCl₂", "CaCO₃", "NaCl"], correct: 1,
    explications: [
      "CaO est l'oxyde de calcium.",
      "Correct. Le chlorure de calcium contient un ion calcium et deux ions chlorure, soit CaCl₂.",
      "CaCO₃ est le carbonate de calcium.",
      "NaCl est le chlorure de sodium."
    ] },
  { id: "CHM-132", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du bicarbonate de sodium ?",
    a: ["NaCl", "NaOH", "NaHCO₃", "Na₂O"], correct: 2,
    explications: [
      "NaCl est le sel de cuisine.",
      "NaOH est l'hydroxyde de sodium.",
      "Correct. Le bicarbonate de sodium s'écrit NaHCO₃.",
      "Na₂O est l'oxyde de sodium."
    ] },
  { id: "CHM-133", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom courant du bicarbonate de sodium ?",
    a: ["Sel de cuisine", "Bicarbonate de soude", "Sucre blanc", "Eau oxygénée"], correct: 1,
    explications: [
      "Le sel de cuisine est le chlorure de sodium.",
      "Correct. Le bicarbonate de sodium est couramment appelé bicarbonate de soude.",
      "Le sucre blanc est du saccharose.",
      "L'eau oxygénée est une solution de peroxyde d'hydrogène."
    ] },
  { id: "CHM-134", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle substance est principalement responsable de la couleur rouge du sang ?",
    a: ["Le glucose", "L'hémoglobine", "Le chlorure de sodium", "Le calcium"], correct: 1,
    explications: [
      "Le glucose est un sucre, il ne donne pas sa couleur au sang.",
      "Correct. L'hémoglobine, une protéine contenant du fer, donne sa couleur rouge au sang.",
      "Le chlorure de sodium est le sel de cuisine.",
      "Le calcium est présent dans les os, pas dans la couleur du sang."
    ] },
  { id: "CHM-135", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique est présent dans l'hémoglobine et aide au transport de l'oxygène ?",
    a: ["Le fer", "L'or", "Le mercure", "L'argent"], correct: 0,
    explications: [
      "Correct. L'hémoglobine contient du fer, qui fixe l'oxygène.",
      "L'or n'intervient pas dans l'hémoglobine.",
      "Le mercure n'intervient pas dans l'hémoglobine.",
      "L'argent n'intervient pas dans l'hémoglobine."
    ] },
  { id: "CHM-136", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on la transformation des sucres en alcool et en dioxyde de carbone grâce aux levures ?",
    a: ["La filtration", "La fermentation alcoolique", "La distillation", "La sublimation"], correct: 1,
    explications: [
      "La filtration sépare un solide d'un liquide.",
      "Correct. La fermentation alcoolique transforme les sucres en éthanol et en dioxyde de carbone.",
      "La distillation sépare des liquides selon leur température d'ébullition.",
      "La sublimation transforme un solide directement en gaz."
    ] },
  { id: "CHM-137", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz est libéré lors de la fermentation alcoolique ?",
    a: ["Le dioxygène", "Le dioxyde de carbone", "L'hélium", "Le chlore"], correct: 1,
    explications: [
      "Le dioxygène n'est pas le gaz principal produit par la fermentation.",
      "Correct. La fermentation alcoolique produit du dioxyde de carbone.",
      "L'hélium n'intervient pas dans la fermentation.",
      "Le chlore n'est pas produit par la fermentation."
    ] },
  { id: "CHM-138", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le principal constituant chimique du gaz naturel ?",
    a: ["Le méthane", "L'oxygène", "Le chlore", "L'azote"], correct: 0,
    explications: [
      "Correct. Le gaz naturel est composé surtout de méthane.",
      "L'oxygène n'est pas le constituant principal du gaz naturel.",
      "Le chlore est un gaz toxique, il n'est pas dans le gaz naturel.",
      "L'azote peut être présent en petite quantité, mais ce n'est pas le principal constituant."
    ] },
  { id: "CHM-139", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel type de transformation se produit lorsqu'un morceau de sucre se dissout dans l'eau ?",
    a: ["Une transformation nucléaire", "Une transformation physique", "Une combustion", "Une oxydation"], correct: 1,
    explications: [
      "Une transformation nucléaire concerne le noyau des atomes, ce n'est pas le cas ici.",
      "Correct. Le sucre se disperse dans l'eau sans changer sa composition chimique.",
      "La combustion est une réaction qui brûle une substance.",
      "L'oxydation est une réaction avec l'oxygène, ce n'est pas le cas ici."
    ] },
  { id: "CHM-140", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle méthode permet de récupérer le sel dissous dans l'eau salée ?",
    a: ["La filtration simple", "L'évaporation de l'eau", "Le tamisage", "L'utilisation d'un aimant"], correct: 1,
    explications: [
      "La filtration retient les solides, mais le sel est dissous et passe à travers le filtre.",
      "Correct. En faisant évaporer l'eau, le sel reste sous forme solide.",
      "Le tamisage sépare des solides de tailles différentes, pas un sel dissous.",
      "L'aimant n'attire pas le sel."
    ] },
  { id: "CHM-141", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel procédé permet de séparer des particules solides de tailles différentes à l'aide d'un tamis ?",
    a: ["La distillation", "Le tamisage", "La condensation", "La fusion"], correct: 1,
    explications: [
      "La distillation sépare des liquides selon leur température d'ébullition.",
      "Correct. Le tamisage sépare les solides selon la taille de leurs particules.",
      "La condensation transforme un gaz en liquide.",
      "La fusion transforme un solide en liquide."
    ] },
  { id: "CHM-142", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle méthode permet de séparer un mélange de deux liquides non miscibles ?",
    a: ["La décantation", "La sublimation", "La combustion", "La cristallisation"], correct: 0,
    explications: [
      "Correct. La décantation sépare deux liquides qui forment des couches distinctes, comme l'eau et l'huile.",
      "La sublimation transforme un solide directement en gaz.",
      "La combustion est une réaction qui brûle une substance.",
      "La cristallisation sert à obtenir un solide à partir d'une solution."
    ] },
  { id: "CHM-143", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel appareil permet de mesurer avec précision le pH d'une solution ?",
    a: ["Le thermomètre", "Le pH-mètre", "Le baromètre", "Le voltmètre"], correct: 1,
    explications: [
      "Le thermomètre mesure la température.",
      "Correct. Le pH-mètre est un appareil électronique qui mesure le pH avec précision.",
      "Le baromètre mesure la pression atmosphérique.",
      "Le voltmètre mesure la tension électrique."
    ] },
  { id: "CHM-144", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel papier indicateur est souvent utilisé pour estimer le pH d'une solution ?",
    a: ["Le papier filtre", "Le papier pH", "Le papier aluminium", "Le papier carbone"], correct: 1,
    explications: [
      "Le papier filtre sert à retenir des solides, il ne mesure pas le pH.",
      "Correct. Le papier pH change de couleur selon l'acidité ou la basicité d'une solution.",
      "Le papier aluminium ne sert pas à mesurer le pH.",
      "Le papier carbone ne sert pas à mesurer le pH."
    ] },
  { id: "CHM-145", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la réaction entre un acide et une base qui peut former de l'eau et un sel ?",
    a: ["La neutralisation", "La combustion", "La sublimation", "La fermentation"], correct: 0,
    explications: [
      "Correct. La neutralisation est la réaction entre un acide et une base, qui donne souvent de l'eau et un sel.",
      "La combustion est une réaction avec l'oxygène qui libère de la chaleur.",
      "La sublimation transforme un solide directement en gaz.",
      "La fermentation transforme des sucres grâce à des micro-organismes."
    ] },
  { id: "CHM-146", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le produit obtenu lorsque l'acide chlorhydrique réagit avec l'hydroxyde de sodium ?",
    a: ["Du chlorure de sodium et de l'eau", "Du glucose et de l'oxygène", "Du méthane et de l'eau", "Du fer et du carbone"], correct: 0,
    explications: [
      "Correct. HCl + NaOH donne NaCl (chlorure de sodium) et H₂O (eau).",
      "Le glucose et l'oxygène ne sont pas produits par cette réaction.",
      "Le méthane ne se forme pas dans cette réaction.",
      "Le fer et le carbone ne sont pas produits par cette réaction."
    ] },
  { id: "CHM-147", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la substance qui reste sur le filtre après une filtration ?",
    a: ["Le filtrat", "Le résidu", "Le solvant", "Le gaz"], correct: 1,
    explications: [
      "Le filtrat est le liquide qui traverse le filtre.",
      "Correct. Le résidu est le solide retenu par le filtre.",
      "Le solvant est le liquide qui dissout une substance.",
      "Le gaz n'est pas retenu par le filtre dans une filtration classique."
    ] },
  { id: "CHM-148", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le liquide qui traverse un filtre pendant la filtration ?",
    a: ["Le résidu", "Le filtrat", "Le précipité", "Le soluté"], correct: 1,
    explications: [
      "Le résidu est le solide retenu par le filtre.",
      "Correct. Le filtrat est le liquide recueilli après le passage à travers le filtre.",
      "Le précipité est un solide qui se forme dans une solution.",
      "Le soluté est la substance dissoute dans un solvant."
    ] },
  { id: "CHM-149", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du solide qui se forme dans une solution pendant certaines réactions chimiques ?",
    a: ["Un précipité", "Un solvant", "Une vapeur", "Un catalyseur"], correct: 0,
    explications: [
      "Correct. Un précipité est un solide peu soluble qui apparaît dans une solution pendant une réaction.",
      "Un solvant est le liquide qui dissout une substance.",
      "Une vapeur est un gaz obtenu par vaporisation d'un liquide.",
      "Un catalyseur accélère une réaction, il ne forme pas de solide."
    ] },
  { id: "CHM-150", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle affirmation décrit correctement une réaction chimique ?",
    a: ["Elle transforme toujours un liquide en gaz.", "Elle produit de nouvelles substances à partir de substances initiales.", "Elle ne modifie jamais les substances.", "Elle ne concerne que les métaux."], correct: 1,
    explications: [
      "Une réaction chimique ne transforme pas toujours un liquide en gaz.",
      "Correct. Une réaction chimique transforme des réactifs en produits de composition différente.",
      "Une réaction chimique modifie justement les substances.",
      "Les réactions chimiques concernent de nombreuses substances, pas seulement les métaux."
    ] }
];
