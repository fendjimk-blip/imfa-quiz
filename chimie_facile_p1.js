// IMFA QUIZ - CHIMIE, FACILE, Partie 1 (CHM-001 a CHM-050)
// difficulte 1 = FACILE
const CHIMIE_FACILE_P1 = [
  { id: "CHM-001", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on la plus petite partie d'un élément chimique qui conserve ses propriétés ?",
    a: ["La molécule", "L'atome", "La cellule", "Le tissu"], correct: 1,
    explications: [
      "Une molécule est formée de plusieurs atomes liés, ce n'est pas la plus petite partie d'un élément.",
      "Correct. L'atome est la plus petite partie d'un élément qui garde ses propriétés.",
      "La cellule est une unité du vivant, pas une particule chimique.",
      "Le tissu est un ensemble de cellules, ce n'est pas une particule chimique."
    ] },
  { id: "CHM-002", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique de l'eau ?",
    a: ["CO₂", "O₂", "H₂O", "NaCl"], correct: 2,
    explications: [
      "CO₂ est la formule du dioxyde de carbone.",
      "O₂ est la formule du dioxygène.",
      "Correct. Une molécule d'eau contient deux atomes d'hydrogène et un atome d'oxygène.",
      "NaCl est la formule du sel de cuisine."
    ] },
  { id: "CHM-003", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'oxygène ?",
    a: ["Ox", "O", "Og", "Oy"], correct: 1,
    explications: [
      "Ox n'est pas un symbole chimique reconnu.",
      "Correct. Le symbole de l'oxygène est O.",
      "Og est le symbole d'un élément très lourd, l'oganesson, pas de l'oxygène.",
      "Oy n'est pas un symbole chimique reconnu."
    ] },
  { id: "CHM-004", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'hydrogène ?",
    a: ["H", "Hy", "Hg", "He"], correct: 0,
    explications: [
      "Correct. L'hydrogène s'écrit H.",
      "Hy n'est pas le symbole de l'hydrogène.",
      "Hg est le symbole du mercure.",
      "He est le symbole de l'hélium."
    ] },
  { id: "CHM-005", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une substance composée d'un seul type d'atome ?",
    a: ["Un mélange", "Un composé", "Un élément chimique", "Une solution"], correct: 2,
    explications: [
      "Un mélange contient plusieurs substances, il n'a pas un seul type d'atome.",
      "Un composé contient au moins deux types d'atomes différents.",
      "Correct. Un élément chimique est constitué d'atomes de même type.",
      "Une solution est un mélange dans lequel une substance est dissoute."
    ] },
  { id: "CHM-006", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument permet de mesurer la masse d'une substance en laboratoire ?",
    a: ["Le thermomètre", "La balance", "Le microscope", "Le chronomètre"], correct: 1,
    explications: [
      "Le thermomètre mesure la température.",
      "Correct. La balance mesure la masse.",
      "Le microscope sert à observer de petits objets.",
      "Le chronomètre mesure le temps."
    ] },
  { id: "CHM-007", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de température utilisée dans le système international ?",
    a: ["Le degré Celsius", "Le degré Fahrenheit", "Le kelvin", "Le litre"], correct: 2,
    explications: [
      "Le degré Celsius est très utilisé, mais ce n'est pas l'unité SI.",
      "Le degré Fahrenheit n'est pas l'unité SI.",
      "Correct. L'unité SI de la température est le kelvin (K).",
      "Le litre est une unité de volume."
    ] },
  { id: "CHM-008", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du carbone ?",
    a: ["Ca", "C", "Co", "Cr"], correct: 1,
    explications: [
      "Ca est le symbole du calcium.",
      "Correct. Le carbone s'écrit C.",
      "Co est le symbole du cobalt.",
      "Cr est le symbole du chrome."
    ] },
  { id: "CHM-009", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz est indispensable à la respiration humaine ?",
    a: ["Le dioxyde de carbone", "L'azote", "L'oxygène", "L'hélium"], correct: 2,
    explications: [
      "Le dioxyde de carbone est rejeté lors de la respiration, il n'est pas indispensable.",
      "L'azote est présent dans l'air, mais le corps ne l'utilise pas pour produire de l'énergie.",
      "Correct. Les cellules utilisent l'oxygène pour produire l'énergie.",
      "L'hélium est un gaz inerte, il n'est pas utilisé par le corps."
    ] },
  { id: "CHM-010", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du sodium ?",
    a: ["S", "So", "Na", "N"], correct: 2,
    explications: [
      "S est le symbole du soufre.",
      "So n'est pas le symbole du sodium.",
      "Correct. Le sodium s'écrit Na, du latin natrium.",
      "N est le symbole de l'azote."
    ] },
  { id: "CHM-011", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Combien d'états physiques principaux de la matière étudie-t-on généralement à ce niveau ?",
    a: ["Deux", "Trois", "Quatre", "Cinq"], correct: 1,
    explications: [
      "Deux ne correspond pas aux trois états classiques.",
      "Correct. Les trois états classiques sont solide, liquide et gazeux.",
      "Quatre est trop, sauf si l'on ajoute le plasma, hors programme ici.",
      "Cinq ne correspond pas au niveau étudié."
    ] },
  { id: "CHM-012", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel état de la matière possède un volume propre et une forme propre ?",
    a: ["L'état gazeux", "L'état liquide", "L'état solide", "La vapeur"], correct: 2,
    explications: [
      "Un gaz n'a ni forme ni volume propres.",
      "Un liquide a un volume propre mais prend la forme du récipient.",
      "Correct. Un solide garde sa forme et son volume.",
      "La vapeur est un gaz, elle n'a pas de forme ni de volume propres."
    ] },
  { id: "CHM-013", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Que devient la glace lorsqu'elle fond ?",
    a: ["Elle devient un gaz", "Elle devient un liquide", "Elle devient du métal", "Elle disparaît"], correct: 1,
    explications: [
      "La glace ne devient pas directement un gaz en fondant.",
      "Correct. La fusion transforme un solide en liquide.",
      "La glace ne devient pas du métal.",
      "La glace ne disparaît pas, elle se transforme en eau liquide."
    ] },
  { id: "CHM-014", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le passage de l'état liquide à l'état gazeux ?",
    a: ["La solidification", "La fusion", "La vaporisation", "La condensation"], correct: 2,
    explications: [
      "La solidification transforme un liquide en solide.",
      "La fusion transforme un solide en liquide.",
      "Correct. La vaporisation transforme un liquide en gaz.",
      "La condensation transforme un gaz en liquide."
    ] },
  { id: "CHM-015", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le passage de l'état gazeux à l'état liquide ?",
    a: ["La condensation", "La fusion", "La sublimation", "La solidification"], correct: 0,
    explications: [
      "Correct. La condensation transforme un gaz en liquide, souvent quand la température baisse.",
      "La fusion transforme un solide en liquide.",
      "La sublimation transforme un solide directement en gaz.",
      "La solidification transforme un liquide en solide."
    ] },
  { id: "CHM-016", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du fer ?",
    a: ["F", "Fe", "Fr", "Fi"], correct: 1,
    explications: [
      "F est le symbole du fluor.",
      "Correct. Le fer s'écrit Fe, du latin ferrum.",
      "Fr est le symbole du francium.",
      "Fi n'est pas un symbole chimique reconnu."
    ] },
  { id: "CHM-017", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'or ?",
    a: ["Or", "Ag", "Au", "G"], correct: 2,
    explications: [
      "Or est le nom de l'élément, pas son symbole.",
      "Ag est le symbole de l'argent.",
      "Correct. L'or s'écrit Au, du latin aurum.",
      "G n'est pas le symbole de l'or."
    ] },
  { id: "CHM-018", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle substance trouve-t-on principalement dans le sel de cuisine ?",
    a: ["Le chlorure de sodium", "Le carbonate de calcium", "Le glucose", "Le dioxyde de carbone"], correct: 0,
    explications: [
      "Correct. Le sel de cuisine est principalement du chlorure de sodium, NaCl.",
      "Le carbonate de calcium est présent dans la craie et le calcaire.",
      "Le glucose est un sucre, pas du sel.",
      "Le dioxyde de carbone est un gaz."
    ] },
  { id: "CHM-019", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du dioxyde de carbone ?",
    a: ["CO", "CO₂", "C₂O", "O₂C₂"], correct: 1,
    explications: [
      "CO est le monoxyde de carbone, un autre composé.",
      "Correct. Le dioxyde de carbone contient un atome de carbone et deux d'oxygène.",
      "C₂O ne correspond pas au dioxyde de carbone.",
      "O₂C₂ ne correspond pas au dioxyde de carbone."
    ] },
  { id: "CHM-020", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel gaz est le plus abondant dans l'air atmosphérique sec ?",
    a: ["L'oxygène", "Le dioxyde de carbone", "L'azote", "L'hydrogène"], correct: 2,
    explications: [
      "L'oxygène représente environ 21 % de l'air.",
      "Le dioxyde de carbone ne représente qu'une très petite part de l'air.",
      "Correct. L'azote représente environ 78 % de l'air sec.",
      "L'hydrogène est présent en quantité infime dans l'air."
    ] },
  { id: "CHM-021", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on une réunion de plusieurs substances mélangées physiquement ?",
    a: ["Un mélange", "Un atome", "Un élément", "Un proton"], correct: 0,
    explications: [
      "Correct. Un mélange contient plusieurs substances réunies physiquement.",
      "Un atome est une particule unique d'un élément.",
      "Un élément est une substance formée d'un seul type d'atome.",
      "Un proton est une particule présente dans le noyau."
    ] },
  { id: "CHM-022", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel mélange est homogène ?",
    a: ["L'eau et l'huile", "Le sable et l'eau", "L'eau salée bien mélangée", "Les pierres et le sable"], correct: 2,
    explications: [
      "L'eau et l'huile forment deux couches distinctes, le mélange est hétérogène.",
      "Le sable reste visible dans l'eau, le mélange est hétérogène.",
      "Correct. Le sel dissous est réparti uniformément, on ne distingue pas ses constituants.",
      "Les pierres et le sable se distinguent à l'œil, le mélange est hétérogène."
    ] },
  { id: "CHM-023", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel mélange est hétérogène ?",
    a: ["L'eau sucrée", "L'eau salée", "L'air", "L'eau et l'huile"], correct: 3,
    explications: [
      "Le sucre dissous rend l'eau homogène.",
      "Le sel dissous rend l'eau homogène.",
      "L'air est un mélange homogène de gaz.",
      "Correct. L'eau et l'huile forment deux phases distinctes."
    ] },
  { id: "CHM-024", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel instrument sert à mesurer le volume d'un liquide en laboratoire ?",
    a: ["Une éprouvette graduée", "Une balance", "Un thermomètre", "Une spatule"], correct: 0,
    explications: [
      "Correct. L'éprouvette graduée porte des graduations qui permettent de lire un volume.",
      "La balance mesure la masse, pas le volume.",
      "Le thermomètre mesure la température.",
      "La spatule sert à prélever des solides."
    ] },
  { id: "CHM-025", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est l'unité de volume du système international ?",
    a: ["Le kilogramme", "Le mètre cube", "Le kelvin", "Le newton"], correct: 1,
    explications: [
      "Le kilogramme est une unité de masse.",
      "Correct. L'unité SI de volume est le mètre cube (m³).",
      "Le kelvin est une unité de température.",
      "Le newton est une unité de force."
    ] },
  { id: "CHM-026", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle particule possède une charge électrique positive dans l'atome ?",
    a: ["L'électron", "Le neutron", "Le proton", "La molécule"], correct: 2,
    explications: [
      "L'électron possède une charge négative.",
      "Le neutron n'a aucune charge électrique.",
      "Correct. Le proton possède une charge positive et se trouve dans le noyau.",
      "La molécule est un ensemble d'atomes, ce n'est pas une particule de l'atome."
    ] },
  { id: "CHM-027", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle particule possède une charge électrique négative ?",
    a: ["Le proton", "L'électron", "Le neutron", "Le noyau"], correct: 1,
    explications: [
      "Le proton possède une charge positive.",
      "Correct. L'électron possède une charge négative.",
      "Le neutron n'a pas de charge électrique.",
      "Le noyau est la partie centrale de l'atome, il n'est pas une particule."
    ] },
  { id: "CHM-028", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle particule ne possède aucune charge électrique ?",
    a: ["Le proton", "L'électron", "Le neutron", "L'ion"], correct: 2,
    explications: [
      "Le proton possède une charge positive.",
      "L'électron possède une charge négative.",
      "Correct. Le neutron est électriquement neutre.",
      "Un ion possède une charge électrique, car il a gagné ou perdu des électrons."
    ] },
  { id: "CHM-029", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Où se trouve principalement la masse d'un atome ?",
    a: ["Dans le noyau", "Dans les électrons uniquement", "À l'extérieur de l'atome", "Dans les liaisons chimiques"], correct: 0,
    explications: [
      "Correct. Protons et neutrons, dans le noyau, représentent presque toute la masse.",
      "Les électrons ont une masse très faible, ils ne portent pas l'essentiel de la masse.",
      "La masse est à l'intérieur de l'atome, pas à l'extérieur.",
      "Les liaisons chimiques ne sont pas une partie matérielle de l'atome qui porte sa masse."
    ] },
  { id: "CHM-030", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on un atome qui a perdu ou gagné un ou plusieurs électrons ?",
    a: ["Une molécule", "Un ion", "Un isotope", "Un mélange"], correct: 1,
    explications: [
      "Une molécule est un groupe d'atomes liés, sans gain ou perte d'électrons.",
      "Correct. Un atome qui perd ou gagne des électrons devient un ion.",
      "Un isotope est un atome qui a un nombre différent de neutrons.",
      "Un mélange est une réunion de plusieurs substances."
    ] },
  { id: "CHM-031", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le pH d'une solution neutre à 25 °C ?",
    a: ["1", "5", "7", "14"], correct: 2,
    explications: [
      "Un pH de 1 correspond à une solution très acide.",
      "Un pH de 5 correspond à une solution acide.",
      "Correct. À 25 °C, une solution neutre a un pH de 7.",
      "Un pH de 14 correspond à une solution très basique."
    ] },
  { id: "CHM-032", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Une solution dont le pH est inférieur à 7 est généralement :",
    a: ["Acide", "Basique", "Neutre", "Métallique"], correct: 0,
    explications: [
      "Correct. À 25 °C, un pH inférieur à 7 indique une solution acide.",
      "Une solution basique a un pH supérieur à 7.",
      "Une solution neutre a un pH égal à 7.",
      "Métallique ne désigne pas une propriété de pH."
    ] },
  { id: "CHM-033", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Une solution dont le pH est supérieur à 7 est généralement :",
    a: ["Acide", "Basique", "Neutre", "Solide"], correct: 1,
    explications: [
      "Une solution acide a un pH inférieur à 7.",
      "Correct. Un pH supérieur à 7 indique une solution basique, ou alcaline.",
      "Une solution neutre a un pH égal à 7.",
      "Solide ne désigne pas une propriété de pH."
    ] },
  { id: "CHM-034", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel produit courant est généralement acide ?",
    a: ["Le jus de citron", "L'eau pure", "L'eau savonneuse", "Une solution de bicarbonate de sodium"], correct: 0,
    explications: [
      "Correct. Le jus de citron contient de l'acide citrique.",
      "L'eau pure est neutre, son pH est 7.",
      "L'eau savonneuse est généralement basique.",
      "Le bicarbonate de sodium en solution est basique."
    ] },
  { id: "CHM-035", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel produit est généralement basique ?",
    a: ["Le vinaigre", "Le jus d'orange", "L'eau savonneuse", "Le jus de citron"], correct: 2,
    explications: [
      "Le vinaigre est acide.",
      "Le jus d'orange est acide.",
      "Correct. L'eau savonneuse est généralement basique.",
      "Le jus de citron est acide."
    ] },
  { id: "CHM-036", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du calcium ?",
    a: ["C", "Ca", "Cl", "Cu"], correct: 1,
    explications: [
      "C est le symbole du carbone.",
      "Correct. Le calcium s'écrit Ca.",
      "Cl est le symbole du chlore.",
      "Cu est le symbole du cuivre."
    ] },
  { id: "CHM-037", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique du cuivre ?",
    a: ["Cu", "C", "Co", "Cr"], correct: 0,
    explications: [
      "Correct. Le cuivre s'écrit Cu, du latin cuprum.",
      "C est le symbole du carbone.",
      "Co est le symbole du cobalt.",
      "Cr est le symbole du chrome."
    ] },
  { id: "CHM-038", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le symbole chimique de l'argent ?",
    a: ["Ag", "Ar", "Au", "An"], correct: 0,
    explications: [
      "Correct. L'argent s'écrit Ag, du latin argentum.",
      "Ar est le symbole de l'argon.",
      "Au est le symbole de l'or.",
      "An n'est pas le symbole de l'argent."
    ] },
  { id: "CHM-039", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du dioxygène ?",
    a: ["O", "O₂", "CO₂", "H₂O"], correct: 1,
    explications: [
      "O est un seul atome d'oxygène, pas le dioxygène.",
      "Correct. Le dioxygène est formé de deux atomes d'oxygène liés.",
      "CO₂ est le dioxyde de carbone.",
      "H₂O est la formule de l'eau."
    ] },
  { id: "CHM-040", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la formule chimique du dihydrogène ?",
    a: ["H", "H₂", "HO₂", "H₂O"], correct: 1,
    explications: [
      "H est un seul atome d'hydrogène.",
      "Correct. Le dihydrogène est formé de deux atomes d'hydrogène liés.",
      "HO₂ ne correspond pas au dihydrogène.",
      "H₂O est la formule de l'eau."
    ] },
  { id: "CHM-041", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le passage direct de l'état solide à l'état gazeux ?",
    a: ["La fusion", "La sublimation", "La condensation", "La solidification"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La sublimation transforme un solide directement en gaz.",
      "La condensation transforme un gaz en liquide.",
      "La solidification transforme un liquide en solide."
    ] },
  { id: "CHM-042", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Comment appelle-t-on le passage de l'état liquide à l'état solide ?",
    a: ["La fusion", "La vaporisation", "La solidification", "La sublimation"], correct: 2,
    explications: [
      "La fusion transforme un solide en liquide.",
      "La vaporisation transforme un liquide en gaz.",
      "Correct. La solidification transforme un liquide en solide, souvent par refroidissement.",
      "La sublimation transforme un solide directement en gaz."
    ] },
  { id: "CHM-043", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel phénomène permet de séparer un liquide d'un solide non dissous à l'aide d'un filtre ?",
    a: ["La filtration", "La fusion", "La combustion", "La sublimation"], correct: 0,
    explications: [
      "Correct. La filtration retient les solides sur le filtre et laisse passer le liquide.",
      "La fusion change l'état d'un solide, elle ne sépare pas un mélange.",
      "La combustion est une réaction qui brûle une substance.",
      "La sublimation est le passage d'un solide directement en gaz."
    ] },
  { id: "CHM-044", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle méthode permet de séparer deux liquides ayant des températures d'ébullition différentes ?",
    a: ["La filtration", "La décantation", "La distillation", "Le tamisage"], correct: 2,
    explications: [
      "La filtration sépare un solide d'un liquide, pas deux liquides.",
      "La décantation sépare des liquides non miscibles par gravité, sans tenir compte de l'ébullition.",
      "Correct. La distillation utilise les différences de température d'ébullition.",
      "Le tamisage sépare des solides de tailles différentes."
    ] },
  { id: "CHM-045", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel changement se produit lorsqu'un morceau de papier brûle ?",
    a: ["Un changement uniquement physique", "Une transformation chimique", "Une simple fusion", "Une dissolution"], correct: 1,
    explications: [
      "Le papier ne retrouve pas sa forme d'origine, il se transforme en de nouvelles substances.",
      "Correct. La combustion transforme le papier en gaz et en résidus, c'est une transformation chimique.",
      "La fusion change l'état d'un solide en liquide, ce n'est pas ce qui se passe ici.",
      "La dissolution consiste à mélanger une substance dans un liquide."
    ] },
  { id: "CHM-046", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le principal constituant chimique du sucre de table ordinaire ?",
    a: ["Le chlorure de sodium", "Le saccharose", "Le dioxyde de carbone", "Le chlorure de calcium"], correct: 1,
    explications: [
      "Le chlorure de sodium est le sel de cuisine.",
      "Correct. Le sucre de table est principalement du saccharose.",
      "Le dioxyde de carbone est un gaz.",
      "Le chlorure de calcium est un autre composé, sans rapport avec le sucre."
    ] },
  { id: "CHM-047", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle formule représente le chlorure de sodium ?",
    a: ["HCl", "NaOH", "NaCl", "CaCO₃"], correct: 2,
    explications: [
      "HCl est l'acide chlorhydrique.",
      "NaOH est la soude, une base.",
      "Correct. Le chlorure de sodium est formé d'ions Na⁺ et Cl⁻, sa formule est NaCl.",
      "CaCO₃ est le carbonate de calcium."
    ] },
  { id: "CHM-048", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel est le nom du tableau qui organise les éléments chimiques ?",
    a: ["Le tableau des masses", "Le tableau périodique", "Le tableau des mélanges", "Le tableau des solutions"], correct: 1,
    explications: [
      "Il n'existe pas de tableau officiel des masses qui classe les éléments.",
      "Correct. Le tableau périodique classe les éléments selon leur numéro atomique.",
      "Le tableau des mélanges n'est pas un outil de classification des éléments.",
      "Le tableau des solutions n'est pas un outil de classification des éléments."
    ] },
  { id: "CHM-049", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quel nombre correspond au numéro atomique d'un élément ?",
    a: ["Le nombre de neutrons uniquement", "Le nombre de protons", "Le nombre de molécules", "Le nombre de couches électroniques uniquement"], correct: 1,
    explications: [
      "Les neutrons ne définissent pas le numéro atomique.",
      "Correct. Le numéro atomique Z est le nombre de protons du noyau.",
      "Le nombre de molécules n'a pas de lien avec le numéro atomique.",
      "Le nombre de couches électroniques ne définit pas le numéro atomique."
    ] },
  { id: "CHM-050", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 1,
    q: "Quelle est la principale différence entre un corps pur et un mélange ?",
    a: ["Un corps pur contient une seule espèce chimique, tandis qu'un mélange en contient plusieurs.", "Un corps pur est toujours liquide.", "Un mélange contient toujours de l'eau.", "Un corps pur ne possède aucune masse."], correct: 0,
    explications: [
      "Correct. Un corps pur est formé d'une seule espèce chimique, un mélange en contient au moins deux.",
      "Un corps pur peut être solide, liquide ou gazeux.",
      "Un mélange ne contient pas forcément de l'eau.",
      "Tout corps pur possède une masse."
    ] }
];
