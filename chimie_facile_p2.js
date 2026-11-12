// IMFA QUIZ - CHIMIE, FACILE, Partie 2 (CHM-051 a CHM-100)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P2 = [
  { id: "CHM-051", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du potassium ?",
    a: ["P", "K", "Po", "Pt"], correct: 1,
    explications: [
      "P est le symbole du phosphore.",
      "Correct. Le potassium s'écrit K, du latin kalium.",
      "Po n'est pas le symbole du potassium.",
      "Pt est le symbole du platine."
    ] },
  { id: "CHM-052", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du chlore ?",
    a: ["C", "Ch", "Cl", "Cr"], correct: 2,
    explications: [
      "C est le symbole du carbone.",
      "Ch n'est pas le symbole du chlore.",
      "Correct. Le chlore s'écrit Cl.",
      "Cr est le symbole du chrome."
    ] },
  { id: "CHM-053", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'ammoniac ?",
    a: ["NH₃", "NO₂", "N₂O", "NH₄"], correct: 0,
    explications: [
      "Correct. L'ammoniac contient un atome d'azote et trois atomes d'hydrogène.",
      "NO₂ est le dioxyde d'azote.",
      "N₂O est le protoxyde d'azote.",
      "NH₄ ne correspond pas à une molécule neutre comme l'ammoniac."
    ] },
  { id: "CHM-054", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz les plantes utilisent-elles pendant la photosynthèse ?",
    a: ["L'oxygène", "Le dioxyde de carbone", "L'hélium", "L'hydrogène"], correct: 1,
    explications: [
      "Les plantes rejettent de l'oxygène pendant la photosynthèse, elles n'en utilisent pas comme ingrédient principal.",
      "Correct. Les plantes captent le dioxyde de carbone pour fabriquer de la matière organique.",
      "L'hélium n'intervient pas dans la photosynthèse.",
      "L'hydrogène n'est pas le gaz principal absorbé par les plantes."
    ] },
  { id: "CHM-055", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le principal constituant de l'air en volume ?",
    a: ["L'oxygène", "L'azote", "Le dioxyde de carbone", "L'hydrogène"], correct: 1,
    explications: [
      "L'oxygène représente environ 21 % de l'air.",
      "Correct. L'azote représente environ 78 % du volume de l'air sec.",
      "Le dioxyde de carbone ne représente qu'une très petite part de l'air.",
      "L'hydrogène est présent en quantité infime dans l'air."
    ] },
  { id: "CHM-056", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du méthane ?",
    a: ["CH₄", "C₂H₆", "CO₂", "C₂H₄"], correct: 0,
    explications: [
      "Correct. Le méthane contient un atome de carbone et quatre atomes d'hydrogène.",
      "C₂H₆ est la formule de l'éthane.",
      "CO₂ est le dioxyde de carbone.",
      "C₂H₄ est la formule de l'éthylène."
    ] },
  { id: "CHM-057", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique est indispensable à la formation des os et des dents ?",
    a: ["Le calcium", "L'hélium", "Le néon", "Le chlore"], correct: 0,
    explications: [
      "Correct. Le calcium joue un rôle essentiel dans la formation des os et des dents.",
      "L'hélium est un gaz noble, il n'intervient pas dans les os.",
      "Le néon est un gaz noble, il n'intervient pas dans les os.",
      "Le chlore est nécessaire au corps, mais il ne forme pas les os et les dents."
    ] },
  { id: "CHM-058", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du magnésium ?",
    a: ["Mn", "Mg", "Ma", "Me"], correct: 1,
    explications: [
      "Mn est le symbole du manganèse.",
      "Correct. Le magnésium s'écrit Mg.",
      "Ma n'est pas le symbole du magnésium.",
      "Me n'est pas le symbole du magnésium."
    ] },
  { id: "CHM-059", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'acide chlorhydrique ?",
    a: ["H₂SO₄", "HNO₃", "HCl", "H₂CO₃"], correct: 2,
    explications: [
      "H₂SO₄ est l'acide sulfurique.",
      "HNO₃ est l'acide nitrique.",
      "Correct. L'acide chlorhydrique est une solution de chlorure d'hydrogène, HCl.",
      "H₂CO₃ est l'acide carbonique."
    ] },
  { id: "CHM-060", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la substance dont la formule est NaOH ?",
    a: ["Chlorure de sodium", "Hydroxyde de sodium", "Acide sulfurique", "Carbonate de calcium"], correct: 1,
    explications: [
      "Le chlorure de sodium a pour formule NaCl.",
      "Correct. NaOH est l'hydroxyde de sodium, aussi appelé soude caustique.",
      "L'acide sulfurique a pour formule H₂SO₄.",
      "Le carbonate de calcium a pour formule CaCO₃."
    ] },
  { id: "CHM-061", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'hélium ?",
    a: ["H", "He", "Hl", "Hm"], correct: 1,
    explications: [
      "H est le symbole de l'hydrogène.",
      "Correct. L'hélium s'écrit He.",
      "Hl n'est pas le symbole de l'hélium.",
      "Hm n'est pas le symbole de l'hélium."
    ] },
  { id: "CHM-062", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du soufre ?",
    a: ["So", "Su", "S", "Sf"], correct: 2,
    explications: [
      "So n'est pas le symbole du soufre.",
      "Su n'est pas le symbole du soufre.",
      "Correct. Le soufre s'écrit S.",
      "Sf n'est pas le symbole du soufre."
    ] },
  { id: "CHM-063", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du phosphore ?",
    a: ["P", "Ph", "F", "Po"], correct: 0,
    explications: [
      "Correct. Le phosphore s'écrit P.",
      "Ph n'est pas le symbole du phosphore.",
      "F est le symbole du fluor.",
      "Po est le symbole du polonium."
    ] },
  { id: "CHM-064", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'azote ?",
    a: ["A", "N", "Az", "Nt"], correct: 1,
    explications: [
      "A n'est pas le symbole de l'azote.",
      "Correct. L'azote s'écrit N, du latin nitrogenium.",
      "Az n'est pas le symbole chimique officiel de l'azote.",
      "Nt n'est pas le symbole de l'azote."
    ] },
  { id: "CHM-065", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'acide sulfurique ?",
    a: ["HCl", "HNO₃", "H₂SO₄", "NaOH"], correct: 2,
    explications: [
      "HCl est l'acide chlorhydrique.",
      "HNO₃ est l'acide nitrique.",
      "Correct. L'acide sulfurique contient deux atomes d'hydrogène, un de soufre et quatre d'oxygène.",
      "NaOH est l'hydroxyde de sodium, ce n'est pas un acide."
    ] },
  { id: "CHM-066", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une substance qui accélère une réaction chimique sans être consommée globalement ?",
    a: ["Un solvant", "Un catalyseur", "Un produit", "Un précipité"], correct: 1,
    explications: [
      "Un solvant sert à dissoudre une autre substance, il n'accélère pas une réaction.",
      "Correct. Un catalyseur accélère la réaction et n'est pas consommé globalement.",
      "Un produit est ce qui se forme à la fin de la réaction.",
      "Un précipité est un solide qui se forme pendant une réaction."
    ] },
  { id: "CHM-067", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du processus par lequel un solide se dissout dans un liquide ?",
    a: ["La dissolution", "La combustion", "La solidification", "La condensation"], correct: 0,
    explications: [
      "Correct. La dissolution est le fait qu'un solide se disperse dans un liquide.",
      "La combustion est une réaction avec l'oxygène qui produit de la chaleur.",
      "La solidification transforme un liquide en solide.",
      "La condensation transforme un gaz en liquide."
    ] },
  { id: "CHM-068", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans une solution d'eau salée, quel est le solvant ?",
    a: ["Le sel", "L'eau", "Le sodium", "Le chlore"], correct: 1,
    explications: [
      "Le sel est le soluté, c'est-à-dire la substance dissoute.",
      "Correct. L'eau est le solvant, elle dissout le sel.",
      "Le sodium est un élément présent dans le sel, pas le solvant.",
      "Le chlore est un élément présent dans le sel, pas le solvant."
    ] },
  { id: "CHM-069", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Dans une solution d'eau sucrée, quelle substance est le soluté ?",
    a: ["L'eau", "Le sucre", "L'air", "L'oxygène"], correct: 1,
    explications: [
      "L'eau est le solvant, c'est elle qui dissout le sucre.",
      "Correct. Le sucre est dissous dans l'eau, c'est donc le soluté.",
      "L'air n'est pas présent dans la solution sucrée.",
      "L'oxygène n'est pas le soluté de cette solution."
    ] },
  { id: "CHM-070", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle propriété décrit la capacité d'une substance à se dissoudre dans une autre ?",
    a: ["La dureté", "La solubilité", "La densité", "La température"], correct: 1,
    explications: [
      "La dureté décrit la résistance d'un solide à la rayure.",
      "Correct. La solubilité indique la quantité d'une substance qui peut se dissoudre dans une autre.",
      "La densité compare la masse et le volume d'une substance.",
      "La température mesure l'agitation thermique, elle ne décrit pas la dissolution."
    ] },
  { id: "CHM-071", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de masse dans le système international ?",
    a: ["Le gramme", "Le kilogramme", "Le litre", "Le mètre"], correct: 1,
    explications: [
      "Le gramme est une unité de masse, mais ce n'est pas l'unité SI de base.",
      "Correct. Le kilogramme (kg) est l'unité SI de la masse.",
      "Le litre est une unité de volume.",
      "Le mètre est une unité de longueur."
    ] },
  { id: "CHM-072", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de grammes contient un kilogramme ?",
    a: ["10 grammes", "100 grammes", "1 000 grammes", "10 000 grammes"], correct: 2,
    explications: [
      "10 grammes est bien trop peu pour un kilogramme.",
      "100 grammes correspondent à un hectogramme.",
      "Correct. Un kilogramme vaut 1 000 grammes.",
      "10 000 grammes correspondent à dix kilogrammes."
    ] },
  { id: "CHM-073", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien de millilitres contient un litre ?",
    a: ["10 mL", "100 mL", "500 mL", "1 000 mL"], correct: 3,
    explications: [
      "10 mL ne représentent qu'une petite partie d'un litre.",
      "100 mL correspondent à un décilitre, pas à un litre.",
      "500 mL correspondent à une demi-bouteille, pas à un litre.",
      "Correct. Un litre vaut 1 000 millilitres."
    ] },
  { id: "CHM-074", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la température approximative de fusion de la glace pure à pression atmosphérique normale ?",
    a: ["0 °C", "25 °C", "50 °C", "100 °C"], correct: 0,
    explications: [
      "Correct. À pression normale, la glace pure fond à environ 0 °C.",
      "25 °C est une température ambiante, la glace y fond déjà depuis longtemps.",
      "50 °C est déjà bien au-dessus de la température de fusion de la glace.",
      "100 °C est la température d'ébullition de l'eau, pas de fusion de la glace."
    ] },
  { id: "CHM-075", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "À quelle température l'eau pure bout-elle approximativement à pression atmosphérique normale ?",
    a: ["0 °C", "50 °C", "100 °C", "150 °C"], correct: 2,
    explications: [
      "0 °C est la température de fusion de la glace.",
      "50 °C est trop bas pour faire bouillir l'eau à pression normale.",
      "Correct. L'eau pure bout à environ 100 °C à pression atmosphérique normale.",
      "150 °C correspond à une pression plus élevée que la pression normale."
    ] },
  { id: "CHM-076", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument permet de mesurer la température ?",
    a: ["Une balance", "Un thermomètre", "Une éprouvette", "Un entonnoir"], correct: 1,
    explications: [
      "La balance mesure la masse.",
      "Correct. Le thermomètre mesure la température.",
      "L'éprouvette sert à mesurer des volumes de liquide.",
      "L'entonnoir sert à verser des liquides dans un récipient étroit."
    ] },
  { id: "CHM-077", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le récipient généralement utilisé pour chauffer des liquides en laboratoire ?",
    a: ["Le bécher", "La règle", "La balance", "Le chronomètre"], correct: 0,
    explications: [
      "Correct. Le bécher est un récipient de laboratoire pour contenir, mélanger et chauffer des liquides.",
      "La règle sert à mesurer des longueurs.",
      "La balance sert à mesurer la masse.",
      "Le chronomètre sert à mesurer le temps."
    ] },
  { id: "CHM-078", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel équipement protège les yeux pendant une expérience chimique ?",
    a: ["Des gants", "Des lunettes de protection", "Un tablier", "Des chaussures"], correct: 1,
    explications: [
      "Les gants protègent les mains, pas les yeux.",
      "Correct. Les lunettes de protection empêchent les projections d'atteindre les yeux.",
      "Le tablier protège les vêtements, pas les yeux.",
      "Les chaussures protègent les pieds, pas les yeux."
    ] },
  { id: "CHM-079", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Pourquoi faut-il porter des gants pendant certaines manipulations chimiques ?",
    a: ["Pour augmenter la température", "Pour protéger les mains contre les substances dangereuses", "Pour mesurer la masse", "Pour accélérer les réactions"], correct: 1,
    explications: [
      "Les gants ne servent pas à augmenter la température.",
      "Correct. Les gants adaptés réduisent le contact direct avec des produits dangereux.",
      "Les gants ne servent pas à mesurer la masse.",
      "Les gants n'accélèrent pas les réactions chimiques."
    ] },
  { id: "CHM-080", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que faut-il faire avant d'utiliser un produit chimique inconnu ?",
    a: ["Le goûter", "Le sentir directement", "Lire son étiquette et ses consignes de sécurité", "Le mélanger avec de l'eau sans vérifier"], correct: 2,
    explications: [
      "Il ne faut jamais goûter un produit chimique, il peut être toxique.",
      "Il ne faut pas sentir un produit directement, les vapeurs peuvent être dangereuses.",
      "Correct. L'étiquette indique les dangers et les précautions à prendre.",
      "Mélanger sans vérifier peut provoquer une réaction dangereuse."
    ] },
  { id: "CHM-081", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du gaz utilisé pour gonfler certains ballons ?",
    a: ["L'hélium", "L'oxygène", "Le chlore", "Le dioxyde de carbone"], correct: 0,
    explications: [
      "Correct. L'hélium est un gaz léger et non inflammable, souvent utilisé pour les ballons.",
      "L'oxygène est un gaz nécessaire à la vie, il est plus lourd que l'hélium et ne sert pas à faire flotter les ballons.",
      "Le chlore est un gaz toxique, on ne l'utilise pas pour gonfler des ballons.",
      "Le dioxyde de carbone est plus lourd que l'air, il ne fait pas flotter les ballons."
    ] },
  { id: "CHM-082", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel métal est liquide à température ambiante dans les conditions ordinaires ?",
    a: ["Le fer", "Le cuivre", "Le mercure", "L'aluminium"], correct: 2,
    explications: [
      "Le fer est solide à température ambiante.",
      "Le cuivre est solide à température ambiante.",
      "Correct. Le mercure est un métal liquide à température ambiante.",
      "L'aluminium est solide à température ambiante."
    ] },
  { id: "CHM-083", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du mercure ?",
    a: ["Me", "Mg", "Hg", "Mr"], correct: 2,
    explications: [
      "Me n'est pas le symbole du mercure.",
      "Mg est le symbole du magnésium.",
      "Correct. Le mercure s'écrit Hg, du latin hydrargyrum.",
      "Mr n'est pas le symbole du mercure."
    ] },
  { id: "CHM-084", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'aluminium ?",
    a: ["Al", "Am", "Au", "An"], correct: 0,
    explications: [
      "Correct. L'aluminium s'écrit Al.",
      "Am est le symbole de l'américium.",
      "Au est le symbole de l'or.",
      "An n'est pas le symbole de l'aluminium."
    ] },
  { id: "CHM-085", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du carbonate de calcium ?",
    a: ["CaO", "CaCO₃", "CaCl₂", "CO₂"], correct: 1,
    explications: [
      "CaO est l'oxyde de calcium, ou chaux vive.",
      "Correct. Le carbonate de calcium est présent dans le calcaire et les coquilles.",
      "CaCl₂ est le chlorure de calcium.",
      "CO₂ est le dioxyde de carbone."
    ] },
  { id: "CHM-086", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle substance est responsable de l'acidité du vinaigre ?",
    a: ["L'acide acétique", "L'acide sulfurique", "Le chlorure de sodium", "Le glucose"], correct: 0,
    explications: [
      "Correct. Le vinaigre contient surtout de l'acide acétique, qui lui donne son acidité.",
      "L'acide sulfurique est un acide dangereux, il n'est pas présent dans le vinaigre alimentaire.",
      "Le chlorure de sodium est le sel de cuisine, il n'est pas acide.",
      "Le glucose est un sucre, il n'est pas acide."
    ] },
  { id: "CHM-087", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'éthanol ?",
    a: ["CH₄", "C₂H₅OH", "H₂O", "CO₂"], correct: 1,
    explications: [
      "CH₄ est la formule du méthane.",
      "Correct. L'éthanol est un alcool de formule C₂H₆O, souvent écrite C₂H₅OH pour montrer le groupe OH.",
      "H₂O est la formule de l'eau.",
      "CO₂ est la formule du dioxyde de carbone."
    ] },
  { id: "CHM-088", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel type de substance est le glucose ?",
    a: ["Un métal", "Un sucre simple", "Un gaz noble", "Un acide minéral"], correct: 1,
    explications: [
      "Le glucose n'est pas un métal.",
      "Correct. Le glucose est un sucre simple, utilisé par les cellules comme source d'énergie.",
      "Un gaz noble est un élément comme l'hélium ou le néon, ce n'est pas le glucose.",
      "Un acide minéral est un acide comme l'acide sulfurique, le glucose n'en est pas un."
    ] },
  { id: "CHM-089", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule moléculaire du glucose ?",
    a: ["C₆H₁₂O₆", "C₂H₆O", "H₂SO₄", "NaCl"], correct: 0,
    explications: [
      "Correct. Une molécule de glucose contient six atomes de carbone, douze d'hydrogène et six d'oxygène.",
      "C₂H₆O est la formule de l'éthanol.",
      "H₂SO₄ est la formule de l'acide sulfurique.",
      "NaCl est la formule du sel de cuisine."
    ] },
  { id: "CHM-090", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une réaction qui libère de la chaleur ?",
    a: ["Une réaction endothermique", "Une réaction exothermique", "Une dissolution", "Une évaporation"], correct: 1,
    explications: [
      "Une réaction endothermique absorbe de la chaleur.",
      "Correct. Une réaction exothermique libère de la chaleur vers le milieu extérieur.",
      "La dissolution est le fait qu'une substance se disperse dans un liquide, ce n'est pas une réaction de chaleur.",
      "L'évaporation est le passage d'un liquide en gaz, ce n'est pas le nom d'une réaction libérant de la chaleur."
    ] },
  { id: "CHM-091", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une réaction qui absorbe de la chaleur ?",
    a: ["Une réaction exothermique", "Une réaction endothermique", "Une combustion", "Une solidification"], correct: 1,
    explications: [
      "Une réaction exothermique libère de la chaleur, elle ne l'absorbe pas.",
      "Correct. Une réaction endothermique absorbe de l'énergie thermique de son environnement.",
      "Une combustion libère généralement de la chaleur.",
      "La solidification transforme un liquide en solide, ce n'est pas une réaction qui absorbe de la chaleur."
    ] },
  { id: "CHM-092", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène chimique se produit lorsqu'un métal comme le fer réagit avec l'oxygène et l'humidité ?",
    a: ["La fermentation", "La corrosion", "La distillation", "La dissolution"], correct: 1,
    explications: [
      "La fermentation est la transformation de sucres par des micro-organismes, elle ne concerne pas la rouille du fer.",
      "Correct. La corrosion est la dégradation d'un métal sous l'effet de l'oxygène et de l'humidité.",
      "La distillation sert à séparer les constituants d'un mélange.",
      "La dissolution est le fait qu'une substance se disperse dans un liquide."
    ] },
  { id: "CHM-093", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel nom donne-t-on à la rouille qui se forme sur le fer ?",
    a: ["Oxyde de fer", "Chlorure de sodium", "Carbonate de calcium", "Dioxyde de carbone"], correct: 0,
    explications: [
      "Correct. La rouille est formée principalement d'oxydes de fer.",
      "Le chlorure de sodium est le sel de cuisine.",
      "Le carbonate de calcium est présent dans le calcaire.",
      "Le dioxyde de carbone est un gaz, il ne forme pas la rouille."
    ] },
  { id: "CHM-094", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle substance est nécessaire à la combustion ordinaire du bois ?",
    a: ["L'oxygène", "L'hélium", "L'azote uniquement", "Le sel"], correct: 0,
    explications: [
      "Correct. La combustion du bois a besoin d'oxygène, le comburant de l'air.",
      "L'hélium ne permet pas la combustion, c'est un gaz inerte.",
      "L'azote seul ne permet pas la combustion, il a même tendance à l'empêcher.",
      "Le sel ne sert pas à faire brûler le bois."
    ] },
  { id: "CHM-095", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une substance qui permet de dissoudre une autre substance ?",
    a: ["Un solvant", "Un précipité", "Un catalyseur", "Un résidu"], correct: 0,
    explications: [
      "Correct. Le solvant est la substance qui dissout le soluté.",
      "Un précipité est un solide qui se forme dans une solution.",
      "Un catalyseur accélère une réaction, il ne dissout pas forcément une substance.",
      "Un résidu est ce qui reste après une opération, il ne dissout rien."
    ] },
  { id: "CHM-096", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle méthode permet de séparer les constituants d'un mélange de sable et de limaille de fer ?",
    a: ["La distillation", "L'utilisation d'un aimant", "L'évaporation", "La fusion"], correct: 1,
    explications: [
      "La distillation sépare des liquides de températures d'ébullition différentes, pas du sable et du fer.",
      "Correct. La limaille de fer est attirée par l'aimant, alors que le sable ne l'est pas.",
      "L'évaporation permet d'enlever un liquide, elle ne sépare pas le sable et le fer.",
      "La fusion change l'état d'un solide en liquide, elle ne sépare pas ce mélange."
    ] },
  { id: "CHM-097", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène se produit lorsqu'un liquide se transforme lentement en gaz à sa surface ?",
    a: ["La solidification", "L'évaporation", "La fusion", "La condensation"], correct: 1,
    explications: [
      "La solidification transforme un liquide en solide.",
      "Correct. L'évaporation est le passage lent d'un liquide en gaz à sa surface.",
      "La fusion transforme un solide en liquide.",
      "La condensation transforme un gaz en liquide."
    ] },
  { id: "CHM-098", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom de la substance chimique de formule HNO₃ ?",
    a: ["Acide chlorhydrique", "Acide sulfurique", "Acide nitrique", "Acide acétique"], correct: 2,
    explications: [
      "L'acide chlorhydrique a pour formule HCl.",
      "L'acide sulfurique a pour formule H₂SO₄.",
      "Correct. HNO₃ est la formule de l'acide nitrique.",
      "L'acide acétique a pour formule CH₃COOH."
    ] },
  { id: "CHM-099", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel élément chimique possède le numéro atomique 1 ?",
    a: ["L'oxygène", "L'hydrogène", "Le carbone", "L'hélium"], correct: 1,
    explications: [
      "L'oxygène a le numéro atomique 8.",
      "Correct. L'hydrogène a un seul proton, son numéro atomique est donc 1.",
      "Le carbone a le numéro atomique 6.",
      "L'hélium a le numéro atomique 2."
    ] },
  { id: "CHM-100", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle affirmation décrit correctement une molécule ?",
    a: ["C'est toujours un seul proton.", "C'est un assemblage d'au moins deux atomes liés chimiquement.", "C'est toujours un métal.", "C'est une particule qui ne possède jamais d'atomes."], correct: 1,
    explications: [
      "Un proton est une particule unique, pas une molécule.",
      "Correct. Une molécule est formée d'au moins deux atomes liés chimiquement.",
      "Une molécule n'est pas forcément un métal, par exemple l'eau est une molécule.",
      "Une molécule est formée d'atomes, elle en possède toujours."
    ] }
];
