const mathematiquesMoyenP1 = [
{
  id: "MAT-171", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans une expression algébrique, que représente le coefficient de 5x ?",
  a: ["La variable x", "Le nombre 5", "Le terme entier 5x", "La puissance de x"],
  correct: 1,
  explanation: "Le coefficient est le nombre qui multiplie la variable. Ici, c'est 5. x est la variable."
},
{
  id: "MAT-172", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle expression désigne le double d'un nombre diminué de 3 ?",
  a: ["2(x - 3)", "2x - 3", "x - 6", "3 - 2x"],
  correct: 1,
  explanation: "Le double du nombre est 2x, puis on diminue de 3. 2(x - 3) signifie le double de la différence."
},
{
  id: "MAT-173", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans 7a - 4, quel est le terme constant ?",
  a: ["7", "a", "-4", "7a"],
  correct: 2,
  explanation: "Le terme constant ne contient aucune variable. C'est -4, et non 4."
},
{
  id: "MAT-174", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle expression est équivalente à 3(x + 2) ?",
  a: ["3x + 2", "3x + 6", "x + 6", "6x + 3"],
  correct: 1,
  explanation: "La distributivité donne 3 fois x et 3 fois 2. Le piège est d'oublier de multiplier le 2."
},
{
  id: "MAT-175", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Que signifie le symbole ≤ ?",
  a: ["Strictement inférieur", "Strictement supérieur", "Inférieur ou égal", "Supérieur ou égal"],
  correct: 2,
  explanation: "≤ signifie inférieur ou égal. Le trait sous le signe ajoute la possibilité d'égalité."
},
{
  id: "MAT-176", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quels sont les termes semblables dans cette liste ?",
  a: ["3x et 3y", "4a et -2a", "x et x²", "5 et 5x"],
  correct: 1,
  explanation: "4a et -2a ont la même partie littérale a. Les coefficients peuvent être différents."
},
{
  id: "MAT-177", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle propriété est illustrée par a + b = b + a ?",
  a: ["Associativité", "Distributivité", "Commutativité", "Élément neutre"],
  correct: 2,
  explanation: "La commutativité permet de changer l'ordre des termes sans changer la somme."
},
{
  id: "MAT-178", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans l'expression -6x, quel est le coefficient de x ?",
  a: ["6", "-6", "x", "-x"],
  correct: 1,
  explanation: "Le signe fait partie du coefficient. Le coefficient est donc -6, pas 6."
},
{
  id: "MAT-179", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle écriture représente le carré d'un nombre augmenté de 1 ?",
  a: ["(x + 1)²", "x² + 1", "2x + 1", "x² - 1"],
  correct: 1,
  explanation: "Le carré du nombre est x², puis on ajoute 1. (x + 1)² représente le carré de la somme."
},
{
  id: "MAT-180", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle formule exprime le périmètre d'un rectangle de longueur L et largeur l ?",
  a: ["L × l", "L + l", "2(L + l)", "2L × 2l"],
  correct: 2,
  explanation: "Le périmètre additionne les quatre côtés : L + l + L + l, soit 2(L + l)."
},
{
  id: "MAT-181", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le signe du produit de deux nombres négatifs ?",
  a: ["Négatif", "Positif", "Nul", "Toujours égal à -1"],
  correct: 1,
  explanation: "Le produit de deux nombres de même signe est positif. Le piège consiste à confondre produit et somme."
},
{
  id: "MAT-182", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le signe de (-) × (+) × (-) ?",
  a: ["Positif", "Négatif", "Nul", "Impossible à déterminer"],
  correct: 0,
  explanation: "Deux facteurs négatifs donnent un produit positif, puis le facteur positif conserve ce signe."
},
{
  id: "MAT-183", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle affirmation sur la division par un nombre négatif est correcte ?",
  a: ["Le quotient est toujours positif", "Le signe dépend des deux nombres", "Le quotient est toujours négatif", "Le quotient est toujours nul"],
  correct: 1,
  explanation: "Même signe donne un quotient positif ; signes différents donnent un quotient négatif."
},
{
  id: "MAT-184", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel signe obtient-on en multipliant un nombre négatif par zéro ?",
  a: ["Positif", "Négatif", "Zéro", "Cela dépend du nombre"],
  correct: 2,
  explanation: "Tout nombre multiplié par zéro donne zéro. Le signe du nombre initial ne change pas ce résultat."
},
{
  id: "MAT-185", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle règle s'applique à une soustraction de nombres relatifs ?",
  a: ["On garde toujours le signe moins", "On ajoute l'opposé du second nombre", "On multiplie les deux nombres", "On change les deux signes"],
  correct: 1,
  explanation: "Soustraire un nombre revient à ajouter son opposé. Il ne faut pas changer arbitrairement les deux signes."
},
{
  id: "MAT-186", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le signe de (-4) × (-2) × (-1) ?",
  a: ["Positif", "Négatif", "Nul", "Toujours égal à 1"],
  correct: 1,
  explanation: "Il y a trois facteurs négatifs, donc un nombre impair de signes négatifs : le produit est négatif."
},
{
  id: "MAT-187", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans une multiplication, un nombre pair de facteurs négatifs donne un produit...",
  a: ["Négatif", "Positif", "Nul", "Infini"],
  correct: 1,
  explanation: "Les signes négatifs se regroupent par paires. Chaque paire donne un résultat positif."
},
{
  id: "MAT-188", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle affirmation est vraie pour l'opposé de -9 ?",
  a: ["-9", "9", "0", "1/9"],
  correct: 1,
  explanation: "L'opposé a le signe contraire. L'opposé de -9 est 9 ; ce n'est pas son inverse."
},
{
  id: "MAT-189", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le signe de (-3)² ?",
  a: ["Négatif", "Positif", "Nul", "Impossible à savoir"],
  correct: 1,
  explanation: "(-3)² signifie (-3) × (-3), donc le résultat est positif. Sans parenthèses, -3² signifie -(3²)."
},
{
  id: "MAT-190", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le signe de -3² selon les priorités opératoires ?",
  a: ["Positif", "Négatif", "Nul", "Cela dépend de la base"],
  correct: 1,
  explanation: "La puissance est calculée avant le signe moins : -3² = -(3²). Le piège est de confondre avec (-3)²."
},
{
  id: "MAT-191", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de 135° appartient à quel quadrant ?",
  a: ["I", "II", "III", "IV"],
  correct: 1,
  explanation: "Le deuxième quadrant contient les angles strictement compris entre 90° et 180°."
},
{
  id: "MAT-192", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de 225° appartient à quel quadrant ?",
  a: ["I", "II", "III", "IV"],
  correct: 2,
  explanation: "225° est compris entre 180° et 270° : il appartient au troisième quadrant."
},
{
  id: "MAT-193", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de 315° appartient à quel quadrant ?",
  a: ["I", "II", "III", "IV"],
  correct: 3,
  explanation: "Le quatrième quadrant est compris entre 270° et 360°. 315° s'y trouve."
},
{
  id: "MAT-194", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans quel quadrant le sinus est-il positif et le cosinus négatif ?",
  a: ["I", "II", "III", "IV"],
  correct: 1,
  explanation: "Dans le deuxième quadrant, le sinus est positif et le cosinus négatif. Il ne faut pas inverser leurs signes."
},
{
  id: "MAT-195", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans quel quadrant le sinus et le cosinus sont-ils tous deux négatifs ?",
  a: ["I", "II", "III", "IV"],
  correct: 2,
  explanation: "Dans le troisième quadrant, les coordonnées x et y sont négatives : cosinus et sinus sont donc négatifs."
},
{
  id: "MAT-196", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de 450° est équivalent à quel angle entre 0° et 360° ?",
  a: ["45°", "90°", "180°", "270°"],
  correct: 1,
  explanation: "On retire un tour complet de 360° : 450° correspond à 90°. Attention, 90° est sur un axe, pas dans un quadrant."
},
{
  id: "MAT-197", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de -45° se situe dans quel quadrant ?",
  a: ["I", "II", "III", "IV"],
  correct: 3,
  explanation: "Un angle négatif tourne dans le sens horaire. -45° correspond à 315°, dans le quatrième quadrant."
},
{
  id: "MAT-198", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de 180° appartient à quel quadrant ?",
  a: ["I", "II", "III", "Aucun quadrant"],
  correct: 3,
  explanation: "180° se trouve sur l'axe horizontal négatif. Les axes ne font partie d'aucun quadrant."
},
{
  id: "MAT-199", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans quel quadrant le cosinus est-il positif et le sinus négatif ?",
  a: ["I", "II", "III", "IV"],
  correct: 3,
  explanation: "Dans le quatrième quadrant, l'abscisse est positive et l'ordonnée négative."
},
{
  id: "MAT-200", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un angle de 720° se trouve où après réduction ?",
  a: ["Dans le quadrant I", "Dans le quadrant IV", "Sur l'axe horizontal positif", "Sur l'axe vertical positif"],
  correct: 2,
  explanation: "720° représente deux tours complets. L'angle réduit est 0°, sur l'axe horizontal positif."
},
{
  id: "MAT-201", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Combien de côtés possède un hexagone ?",
  a: ["5", "6", "7", "8"],
  correct: 1,
  explanation: "Un hexagone possède six côtés. Un pentagone en possède cinq."
},
{
  id: "MAT-202", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle est la somme des angles intérieurs d'un triangle ?",
  a: ["90°", "180°", "270°", "360°"],
  correct: 1,
  explanation: "Dans la géométrie plane, la somme des angles intérieurs d'un triangle est toujours 180°."
},
{
  id: "MAT-203", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Un triangle qui possède trois côtés égaux est...",
  a: ["Rectangle", "Isocèle seulement", "Équilatéral", "Scalène"],
  correct: 2,
  explanation: "Un triangle équilatéral a trois côtés égaux et trois angles de 60°. Il est aussi isocèle au sens large."
},
{
  id: "MAT-204", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle propriété caractérise un rectangle ?",
  a: ["Quatre côtés égaux obligatoirement", "Quatre angles droits", "Trois angles droits", "Deux côtés seulement"],
  correct: 1,
  explanation: "Un rectangle possède quatre angles droits. Ses quatre côtés ne sont pas nécessairement égaux."
},
{
  id: "MAT-205", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle figure possède exactement un seul centre de symétrie ?",
  a: ["Un parallélogramme", "Un triangle quelconque", "Un angle", "Un demi-cercle"],
  correct: 0,
  explanation: "Le centre du parallélogramme est l'intersection de ses diagonales. Un triangle n'a généralement pas de centre de symétrie."
},
{
  id: "MAT-206", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Deux droites perpendiculaires forment un angle de...",
  a: ["45°", "90°", "180°", "360°"],
  correct: 1,
  explanation: "Des droites perpendiculaires se coupent en formant des angles droits de 90°."
},
{
  id: "MAT-207", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle formule donne l'aire d'un triangle ?",
  a: ["Base × hauteur", "Base + hauteur", "(Base × hauteur) / 2", "2 × (base + hauteur)"],
  correct: 2,
  explanation: "L'aire du triangle est la moitié du produit de sa base par sa hauteur correspondante. Le périmètre est différent."
},
{
  id: "MAT-208", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Dans un cercle, le diamètre est égal à...",
  a: ["La moitié du rayon", "Deux fois le rayon", "Trois fois le rayon", "Le rayon au carré"],
  correct: 1,
  explanation: "Le diamètre passe par le centre et vaut deux rayons. Le rayon est la moitié du diamètre."
},
{
  id: "MAT-209", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le nom d'un angle strictement supérieur à 90° et inférieur à 180° ?",
  a: ["Aigu", "Droit", "Obtus", "Plat"],
  correct: 2,
  explanation: "Un angle obtus est compris entre 90° et 180°. Un angle droit mesure exactement 90°."
},
{
  id: "MAT-210", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle est la nature d'un angle de 90° ?",
  a: ["Aigu", "Droit", "Obtus", "Plat"],
  correct: 1,
  explanation: "Un angle de 90° est droit. Un angle aigu est strictement inférieur à 90°."
},
{
  id: "MAT-211", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Le nombre √2 est...",
  a: ["Naturel", "Entier", "Rationnel", "Irrationnel"],
  correct: 3,
  explanation: "√2 ne peut pas s'écrire comme quotient de deux entiers. C'est un nombre irrationnel."
},
{
  id: "MAT-212", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Le nombre 0,25 appartient à quel ensemble ?",
  a: ["Aux rationnels", "Aux irrationnels seulement", "Aux entiers naturels", "Aux entiers relatifs"],
  correct: 0,
  explanation: "0,25 = 1/4 : il peut s'écrire comme quotient de deux entiers, donc il est rationnel."
},
{
  id: "MAT-213", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Lequel de ces nombres est un entier relatif mais pas un naturel ?",
  a: ["0", "-4", "3", "7"],
  correct: 1,
  explanation: "-4 est un entier relatif négatif, mais il n'appartient pas aux naturels."
},
{
  id: "MAT-214", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Tout nombre entier est-il rationnel ?",
  a: ["Non, jamais", "Oui, car il peut être écrit sur 1", "Seulement s'il est positif", "Seulement s'il est pair"],
  correct: 1,
  explanation: "Tout entier n peut s'écrire n/1. Il est donc rationnel, même s'il est négatif."
},
{
  id: "MAT-215", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel nombre est irrationnel ?",
  a: ["3/4", "0,5", "π", "−2"],
  correct: 2,
  explanation: "π est irrationnel. Les fractions et les entiers proposés sont rationnels."
},
{
  id: "MAT-216", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle affirmation est toujours vraie concernant un nombre et son carré ?",
  a: ["Le carré est toujours négatif", "Le carré est toujours positif ou nul", "Le carré garde toujours le signe", "Le carré est toujours plus petit"],
  correct: 1,
  explanation: "Le carré d'un nombre réel est positif ou nul. Il est nul uniquement si le nombre est nul."
},
{
  id: "MAT-217", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quel est le résultat de la multiplication d'un nombre par son inverse, si ce nombre est non nul ?",
  a: ["0", "Le nombre lui-même", "1", "-1"],
  correct: 2,
  explanation: "Un nombre non nul multiplié par son inverse donne 1. Zéro n'a pas d'inverse multiplicatif."
},
{
  id: "MAT-218", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle affirmation distingue un nombre rationnel d'un irrationnel ?",
  a: ["Le rationnel est toujours entier", "Le rationnel peut s'écrire comme fraction de deux entiers", "L'irrationnel est toujours négatif", "Le rationnel n'a jamais de décimales"],
  correct: 1,
  explanation: "Un rationnel s'écrit p/q avec p et q entiers et q non nul. Son écriture décimale peut être finie ou périodique."
},
{
  id: "MAT-219", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Si deux événements sont impossibles simultanément, ils sont dits...",
  a: ["Compatibles", "Incompatibles", "Certains", "Équiprobables"],
  correct: 1,
  explanation: "Deux événements incompatibles ne peuvent pas se produire en même temps. Équiprobable signifie avoir la même probabilité."
},
{
  id: "MAT-220", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
  q: "Quelle est la négation logique de « Tous les élèves sont présents » ?",
  a: ["Aucun élève n'est présent", "Tous les élèves sont absents", "Au moins un élève est absent", "La moitié des élèves est absente"],
  correct: 2,
  explanation: "La négation de « tous » est « il existe au moins un qui ne... ». Il suffit donc qu'un élève soit absent."
}
];
