// IMFA QUIZ - CHIMIE, MOYEN, Partie 2A (CHM-251 a CHM-275)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const CHIMIE_MOYEN_P2A = [
  { id: "CHM-251", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien de moles contiennent 36 g d'eau (M = 18 g/mol) ?",
    a: ["0,5 mol", "2 mol", "18 mol", "36 mol"], correct: 1,
    explications: [
      "0,5 mol correspond à une masse de 9 g, ce qui ne correspond pas à l'énoncé.",
      "Correct. n = m / M = 36 / 18 = 2 mol.",
      "18 mol correspond à la masse molaire, pas au nombre de moles.",
      "36 mol correspond à la masse, sans diviser par la masse molaire."
    ] },
  { id: "CHM-252", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la masse molaire de l'eau (H₂O) ? (H = 1 ; O = 16)",
    a: ["16 g/mol", "17 g/mol", "18 g/mol", "20 g/mol"], correct: 2,
    explications: [
      "16 g/mol ne tient compte que de l'oxygène.",
      "17 g/mol oublie un atome d'hydrogène.",
      "Correct. 2 × 1 + 16 = 18 g/mol.",
      "20 g/mol ne correspond pas au calcul."
    ] },
  { id: "CHM-253", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nom du gaz de formule N₂ ?",
    a: ["Dioxyde d'azote", "Diazote", "Ammoniac", "Protoxyde d'azote"], correct: 1,
    explications: [
      "Le dioxyde d'azote a pour formule NO₂.",
      "Correct. N₂ est le diazote, principal gaz de l'air.",
      "L'ammoniac a pour formule NH₃.",
      "Le protoxyde d'azote a pour formule N₂O."
    ] },
  { id: "CHM-254", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si une solution a un pH de 3, elle est :",
    a: ["Acide", "Neutre", "Basique", "Toujours pure"], correct: 0,
    explications: [
      "Correct. Un pH inférieur à 7 indique une solution acide.",
      "Un pH neutre vaut 7.",
      "Un pH supérieur à 7 indique une solution basique.",
      "La pureté ne se lit pas sur le pH."
    ] },
  { id: "CHM-255", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle formule permet de calculer la quantité de matière ?",
    a: ["n = m × M", "n = m / M", "n = M / m", "n = m + M"], correct: 1,
    explications: [
      "m × M ne donne pas la quantité de matière.",
      "Correct. n = m / M.",
      "M / m est l'inverse de la formule.",
      "m + M n'a pas de sens ici."
    ] },
  { id: "CHM-256", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien de protons possède un atome de potassium (Z = 19) ?",
    a: ["17", "19", "20", "39"], correct: 1,
    explications: [
      "17 est le numéro atomique du chlore.",
      "Correct. Le potassium possède 19 protons.",
      "20 ne correspond pas au nombre de protons du potassium.",
      "39 est la masse approximative du potassium, pas son nombre de protons."
    ] },
  { id: "CHM-257", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution contient 2 moles dans 1 litre. Quelle est sa concentration molaire ?",
    a: ["0,5 mol/L", "1 mol/L", "2 mol/L", "3 mol/L"], correct: 2,
    explications: [
      "0,5 mol/L correspond à V / n, c'est l'inverse de la formule.",
      "1 mol/L ne correspond pas à 2 moles dans 1 litre.",
      "Correct. C = n / V = 2 / 1 = 2 mol/L.",
      "3 mol/L ne correspond à aucun calcul avec ces valeurs."
    ] },
  { id: "CHM-258", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel type de liaison se forme généralement entre deux non-métaux ?",
    a: ["Liaison ionique", "Liaison covalente", "Liaison métallique", "Liaison nucléaire"], correct: 1,
    explications: [
      "La liaison ionique se forme entre un métal et un non-métal.",
      "Correct. Les non-métaux partagent des électrons : liaison covalente.",
      "La liaison métallique concerne les métaux.",
      "La liaison nucléaire concerne le noyau, pas les liaisons chimiques."
    ] },
  { id: "CHM-259", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nombre de masse de l'atome de carbone 12 ?",
    a: ["6", "12", "8", "14"], correct: 1,
    explications: [
      "6 est le numéro atomique du carbone, c'est-à-dire son nombre de protons.",
      "Correct. Le nombre de masse A vaut 12 pour le carbone 12.",
      "8 est le numéro atomique de l'oxygène.",
      "14 correspond au carbone 14, qui n'est pas le carbone 12."
    ] },
  { id: "CHM-260", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la charge électrique d'un ion sodium Na⁺ ?",
    a: ["+1", "-1", "0", "+11"], correct: 0,
    explications: [
      "Correct. L'ion Na⁺ a perdu un électron, sa charge est +1.",
      "-1 correspondrait à un ion qui a gagné un électron.",
      "0 correspond à un atome neutre, pas à un ion.",
      "+11 correspond au nombre de protons, pas à la charge de l'ion."
    ] },
  { id: "CHM-261", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule chimique de l'hydroxyde de calcium ?",
    a: ["CaO", "Ca(OH)₂", "CaCO₃", "CaH₂"], correct: 1,
    explications: [
      "CaO est l'oxyde de calcium.",
      "Correct. L'hydroxyde de calcium contient un ion Ca²⁺ et deux ions OH⁻.",
      "CaCO₃ est le carbonate de calcium.",
      "CaH₂ est un hydrure de calcium."
    ] },
  { id: "CHM-262", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans la réaction 2H₂ + O₂ → 2H₂O, combien de molécules d'eau sont produites selon l'équation ?",
    a: ["1", "2", "3", "4"], correct: 1,
    explications: [
      "1 ne correspond pas au coefficient devant H₂O.",
      "Correct. Le coefficient 2 indique deux molécules d'eau.",
      "3 ne correspond à aucun coefficient de l'équation.",
      "4 ne correspond à aucun coefficient de l'équation."
    ] },
  { id: "CHM-263", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle masse de chlorure de sodium se forme à partir de 23 g de sodium et 35,5 g de chlore ?",
    a: ["23 g", "35,5 g", "58,5 g", "12 g"], correct: 2,
    explications: [
      "23 g correspond seulement à la masse de sodium de départ.",
      "35,5 g correspond seulement à la masse de chlore de départ.",
      "Correct. La masse se conserve : 23 + 35,5 = 58,5 g de NaCl.",
      "12 g ne correspond à aucun calcul de conservation de la masse ici."
    ] },
  { id: "CHM-264", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une solution, la concentration en ions H₃O⁺ est 10⁻⁴ mol/L. Quel est son pH ?",
    a: ["2", "4", "6", "10"], correct: 1,
    explications: [
      "2 correspondrait à une concentration de 10⁻², pas de 10⁻⁴.",
      "Correct. pH = −log(10⁻⁴) = 4.",
      "6 correspondrait à une concentration de 10⁻⁶.",
      "10 n'est pas la bonne valeur, le pH est le logarithme négatif de la concentration."
    ] },
  { id: "CHM-265", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien de moles contiennent 12 × 10²³ molécules ? (N_A ≈ 6 × 10²³ mol⁻¹)",
    a: ["1 mol", "2 mol", "6 mol", "12 mol"], correct: 1,
    explications: [
      "1 mol correspondrait à 6 × 10²³ molécules.",
      "Correct. n = N / N_A = 12 × 10²³ / 6 × 10²³ = 2 mol.",
      "6 mol correspondrait à 36 × 10²³ molécules.",
      "12 mol correspond au nombre de molécules, pas au nombre de moles."
    ] },
  { id: "CHM-266", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la masse de 3 moles de fer (M = 56 g/mol) ?",
    a: ["56 g", "112 g", "168 g", "186 g"], correct: 2,
    explications: [
      "56 g correspond à une seule mole de fer.",
      "112 g correspond à deux moles de fer.",
      "Correct. m = n × M = 3 × 56 = 168 g.",
      "186 g ne correspond à aucun calcul correct."
    ] },
  { id: "CHM-267", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si 10 g de sel sont dissous dans 100 g d'eau, quelle est la masse totale de la solution ?",
    a: ["90 g", "100 g", "110 g", "120 g"], correct: 2,
    explications: [
      "90 g correspond à une soustraction, ce qui est faux.",
      "100 g ne tient compte que de l'eau.",
      "Correct. 10 + 100 = 110 g, sans perte de matière.",
      "120 g ne correspond à aucun calcul correct."
    ] },
  { id: "CHM-268", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "On mélange 2 mol de H₂ et 1 mol de O₂ selon 2H₂ + O₂ → 2H₂O. Quel est le réactif limitant ?",
    a: ["H₂", "O₂", "Aucun, les proportions sont exactes", "H₂O"], correct: 2,
    explications: [
      "H₂ n'est pas limitant ici, il y en a juste assez.",
      "O₂ n'est pas limitant ici, il y en a juste assez.",
      "Correct. 2 mol de H₂ réagissent avec 1 mol de O₂, les proportions sont exactes.",
      "H₂O est un produit, il ne peut pas être un réactif limitant."
    ] },
  { id: "CHM-269", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans le tableau périodique, les éléments d'une même colonne ont généralement :",
    a: ["Le même nombre de couches électroniques", "Des propriétés chimiques similaires", "La même masse atomique", "Le même nombre de neutrons"], correct: 1,
    explications: [
      "Ce sont les lignes (périodes) qui ont le même nombre de couches.",
      "Correct. Ils ont le même nombre d'électrons de valence.",
      "La masse atomique varie d'un élément à l'autre dans une colonne.",
      "Le nombre de neutrons varie d'un élément à l'autre dans une colonne."
    ] },
  { id: "CHM-270", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule de la concentration massique ?",
    a: ["Cm = V / m", "Cm = m / V", "Cm = m × V", "Cm = m + V"], correct: 1,
    explications: [
      "V / m est l'inverse de la formule.",
      "Correct. La concentration massique est la masse de soluté divisée par le volume.",
      "m × V ne donne pas une concentration.",
      "m + V n'a pas de sens ici."
    ] },
  { id: "CHM-271", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nom du changement d'état du gaz vers le liquide ?",
    a: ["Fusion", "Vaporisation", "Liquéfaction", "Sublimation"], correct: 2,
    explications: [
      "La fusion transforme un solide en liquide.",
      "La vaporisation transforme un liquide en gaz, c'est l'inverse.",
      "Correct. La liquéfaction transforme un gaz en liquide.",
      "La sublimation transforme un solide directement en gaz."
    ] },
  { id: "CHM-272", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle particule détermine principalement l'identité d'un élément chimique ?",
    a: ["Le neutron", "Le proton", "L'électron", "Le photon"], correct: 1,
    explications: [
      "Le neutron ne définit pas l'identité de l'élément.",
      "Correct. Le nombre de protons définit le numéro atomique, donc l'élément.",
      "L'électron peut varier dans un ion sans changer d'élément.",
      "Le photon n'est pas une particule de l'atome."
    ] },
  { id: "CHM-273", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution de concentration 4 mol/L est diluée. Que devient sa concentration ?",
    a: ["Elle augmente", "Elle diminue", "Elle reste toujours identique", "Elle devient nulle automatiquement"], correct: 1,
    explications: [
      "Une dilution augmente le volume, donc la concentration baisse.",
      "Correct. Ajouter du solvant diminue la concentration.",
      "La concentration change lors d'une dilution.",
      "Une dilution ne rend pas la solution nulle."
    ] },
  { id: "CHM-274", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle équation représente correctement la formation de l'eau ?",
    a: ["H₂ + O₂ → H₂O", "2H₂ + O₂ → 2H₂O", "H₂ + 2O₂ → H₂O", "H₂ + O₂ → 2H₂O"], correct: 1,
    explications: [
      "Cette équation n'est pas équilibrée : 2 O à gauche, 1 à droite.",
      "Correct. Il y a 4 H et 2 O des deux côtés.",
      "Il y a 4 O à gauche, l'équation n'est pas équilibrée.",
      "Il y a 2 H à gauche et 4 à droite, l'équation n'est pas équilibrée."
    ] },
  { id: "CHM-275", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle énergie minimale faut-il fournir pour qu'une réaction chimique démarre ?",
    a: ["L'énergie d'activation", "L'énergie cinétique", "L'énergie nucléaire", "L'énergie électrique"], correct: 0,
    explications: [
      "Correct. L'énergie d'activation est l'énergie minimale pour démarrer une réaction.",
      "L'énergie cinétique est liée au mouvement, ce n'est pas le seuil de démarrage.",
      "L'énergie nucléaire concerne le noyau des atomes.",
      "L'énergie électrique n'est pas l'énergie minimale d'une réaction chimique."
    ] }
];
