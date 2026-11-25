const mathematiquesMoyenP7 = [
{
id: "MAT-471", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle expression représente le triple de x diminué de 4 ?",
a: ["3(x - 4)", "3x - 4", "x - 12", "4 - 3x"],
correct: 1,
explanation: "Le triple de x est 3x. Diminué de 4 donne 3x - 4."
},
{
id: "MAT-472", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Dans l'expression 5x² - 3x + 8, quel est le terme constant ?",
a: ["5", "-3", "8", "x²"],
correct: 2,
explanation: "Le terme constant ne contient aucune variable : c'est 8."
},
{
id: "MAT-473", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le coefficient de x² dans -7x² + 2x - 1 ?",
a: ["7", "-7", "2", "-1"],
correct: 1,
explanation: "Le nombre qui multiplie x² est -7."
},
{
id: "MAT-474", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle expression est un polynôme de degré 3 ?",
a: ["2x² + 1", "x³ - 4x + 2", "5x⁴ + 1", "7x"],
correct: 1,
explanation: "Le degré d'un polynôme est le plus grand exposant de la variable : ici 3."
},
{
id: "MAT-475", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle égalité traduit la distributivité de la multiplication sur l'addition ?",
a: ["a(b + c) = ab + ac", "a + (b + c) = ab + c", "ab + c = a(b + c)", "a(b + c) = a + bc"],
correct: 0,
explanation: "La multiplication se distribue sur chaque terme à l'intérieur des parenthèses."
},
{
id: "MAT-476", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Les termes 4x et -9x sont-ils semblables ?",
a: ["Oui, car ils ont la même variable et le même exposant", "Non, car leurs signes sont différents", "Non, car leurs coefficients sont différents", "Oui, seulement si x vaut 1"],
correct: 0,
explanation: "Des termes sont semblables lorsqu'ils ont la même partie littérale, même si leurs coefficients diffèrent."
},
{
id: "MAT-477", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle est la forme factorisée de 6x + 12 ?",
a: ["6(x + 2)", "6(x + 12)", "3(2x + 12)", "12(x + 6)"],
correct: 0,
explanation: "Le facteur commun est 6 : 6x + 12 = 6(x + 2)."
},
{
id: "MAT-478", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel symbole signifie « différent de » ?",
a: ["=", "≤", "≠", "≥"],
correct: 2,
explanation: "Le symbole ≠ signifie que deux quantités ne sont pas égales."
},
{
id: "MAT-479", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Que signifie x ≥ 5 ?",
a: ["x est strictement supérieur à 5", "x est inférieur ou égal à 5", "x est supérieur ou égal à 5", "x est égal uniquement à 5"],
correct: 2,
explanation: "Le symbole ≥ signifie supérieur ou égal à."
},
{
id: "MAT-480", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle expression représente le carré de la différence entre x et 2 ?",
a: ["x² - 2", "(x - 2)²", "x - 2²", "2(x - 2)"],
correct: 1,
explanation: "La différence est x - 2. Son carré est (x - 2)²."
},
{
id: "MAT-481", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le signe de (-2) × (-3) × (-4) ?",
a: ["Positif", "Négatif", "Nul", "Impossible à déterminer"],
correct: 1,
explanation: "Il y a trois facteurs négatifs, un nombre impair : le produit est négatif."
},
{
id: "MAT-482", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le signe de (-5) × 2 × (-1) × 3 ?",
a: ["Positif", "Négatif", "Nul", "Toujours négatif"],
correct: 0,
explanation: "Il y a deux facteurs négatifs : le produit est positif."
},
{
id: "MAT-483", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle règle s'applique à la division de deux nombres de signes contraires ?",
a: ["Le quotient est positif", "Le quotient est négatif", "Le quotient est nul", "Le quotient est toujours égal à 1"],
correct: 1,
explanation: "Deux nombres de signes contraires donnent un quotient négatif, si le diviseur est non nul."
},
{
id: "MAT-484", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est l'opposé de l'opposé de 12 ?",
a: ["-12", "0", "12", "24"],
correct: 2,
explanation: "Prendre deux fois l'opposé ramène au nombre initial."
},
{
id: "MAT-485", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle affirmation est vraie pour |a| ?",
a: ["Il est toujours négatif", "Il est toujours positif ou nul", "Il est toujours égal à a", "Il est toujours supérieur à a"],
correct: 1,
explanation: "Une valeur absolue représente une distance : elle ne peut pas être négative."
},
{
id: "MAT-486", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle puissance est égale à 1 pour tout nombre non nul a ?",
a: ["a⁰", "a¹", "a²", "a⁻¹"],
correct: 0,
explanation: "Toute base non nulle élevée à la puissance zéro vaut 1."
},
{
id: "MAT-487", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Pour a non nul, à quoi est égal a⁻² ?",
a: ["-a²", "1/a²", "1/a", "a²"],
correct: 1,
explanation: "Un exposant négatif indique l'inverse : a⁻² = 1/a²."
},
{
id: "MAT-488", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle égalité est correcte ?",
a: ["(a²)³ = a⁵", "(a²)³ = a⁶", "(a²)³ = a⁹", "(a²)³ = a"],
correct: 1,
explanation: "Une puissance de puissance multiplie les exposants : 2 × 3 = 6."
},
{
id: "MAT-489", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le résultat de 10⁻¹ ?",
a: ["-10", "0,1", "10", "0,01"],
correct: 1,
explanation: "10⁻¹ = 1/10 = 0,1."
},
{
id: "MAT-490", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle expression est égale à √(a²) pour tout réel a ?",
a: ["a", "-a", "|a|", "a²"],
correct: 2,
explanation: "La racine carrée principale est toujours non négative : √(a²) = |a|."
},
{
id: "MAT-491", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Dans quel quadrant se trouve un angle de 210° ?",
a: ["I", "II", "III", "IV"],
correct: 2,
explanation: "210° est compris entre 180° et 270° : troisième quadrant."
},
{
id: "MAT-492", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Dans quel quadrant se trouve un angle de -45° ?",
a: ["I", "II", "III", "IV"],
correct: 3,
explanation: "-45° + 360° = 315°, qui appartient au quatrième quadrant."
},
{
id: "MAT-493", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Dans quel quadrant se trouve un angle de 495° ?",
a: ["I", "II", "III", "IV"],
correct: 1,
explanation: "495° - 360° = 135°, qui appartient au deuxième quadrant."
},
{
id: "MAT-494", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le signe du sinus dans le troisième quadrant ?",
a: ["Positif", "Négatif", "Nul", "Toujours égal à 1"],
correct: 1,
explanation: "Dans le troisième quadrant, sinus et cosinus sont tous deux négatifs."
},
{
id: "MAT-495", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le signe du cosinus dans le quatrième quadrant ?",
a: ["Positif", "Négatif", "Nul", "Toujours égal à -1"],
correct: 0,
explanation: "Dans le quatrième quadrant, le cosinus est positif et le sinus négatif."
},
{
id: "MAT-496", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel angle se trouve sur l'axe horizontal positif ?",
a: ["90°", "180°", "270°", "0°"],
correct: 3,
explanation: "L'angle 0° se situe sur l'axe horizontal positif."
},
{
id: "MAT-497", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel angle est coterminal avec 810° et compris entre 0° et 360° ?",
a: ["90°", "180°", "270°", "360°"],
correct: 0,
explanation: "810° - 720° = 90°."
},
{
id: "MAT-498", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel angle est situé sur l'axe vertical négatif ?",
a: ["90°", "180°", "270°", "360°"],
correct: 2,
explanation: "270° correspond à la direction verticale vers le bas."
},
{
id: "MAT-499", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Dans quel quadrant le sinus et le cosinus sont-ils tous deux négatifs ?",
a: ["I", "II", "III", "IV"],
correct: 2,
explanation: "Les deux coordonnées sont négatives dans le troisième quadrant."
},
{
id: "MAT-500", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Un angle de 360° se trouve :",
a: ["Dans le premier quadrant", "Sur l'axe horizontal positif", "Dans le quatrième quadrant", "Sur l'axe vertical positif"],
correct: 1,
explanation: "360° correspond à un tour complet et revient sur l'axe horizontal positif."
},
{
id: "MAT-501", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle est la somme des angles intérieurs d'un quadrilatère ?",
a: ["180°", "270°", "360°", "540°"],
correct: 2,
explanation: "La somme des angles intérieurs d'un quadrilatère est 360°."
},
{
id: "MAT-502", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Combien de diagonales possède un pentagone convexe ?",
a: ["4", "5", "6", "7"],
correct: 1,
explanation: "La formule n(n - 3)/2 donne 5(5 - 3)/2 = 5 diagonales."
},
{
id: "MAT-503", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle propriété caractérise un rectangle ?",
a: ["Quatre côtés toujours égaux", "Quatre angles droits", "Trois côtés", "Aucun côté parallèle"],
correct: 1,
explanation: "Un rectangle possède quatre angles droits. Ses côtés opposés sont égaux et parallèles."
},
{
id: "MAT-504", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Dans un triangle isocèle, combien de côtés sont égaux au minimum ?",
a: ["Un seul", "Deux", "Trois obligatoirement", "Aucun"],
correct: 1,
explanation: "Un triangle isocèle possède au moins deux côtés de même longueur."
},
{
id: "MAT-505", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel angle mesure exactement 90° ?",
a: ["Aigu", "Obtus", "Droit", "Plat"],
correct: 2,
explanation: "Un angle droit mesure exactement 90°."
},
{
id: "MAT-506", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Deux angles supplémentaires ont une somme de :",
a: ["90°", "180°", "270°", "360°"],
correct: 1,
explanation: "Deux angles supplémentaires ont une somme de 180°."
},
{
id: "MAT-507", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Deux angles complémentaires ont une somme de :",
a: ["45°", "90°", "180°", "360°"],
correct: 1,
explanation: "Deux angles complémentaires ont une somme de 90°."
},
{
id: "MAT-508", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle figure possède quatre côtés et quatre angles droits ?",
a: ["Losange quelconque", "Rectangle", "Trapèze quelconque", "Pentagone"],
correct: 1,
explanation: "Un rectangle est un quadrilatère ayant quatre angles droits."
},
{
id: "MAT-509", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel est le périmètre d'un carré de côté c ?",
a: ["c²", "2c", "3c", "4c"],
correct: 3,
explanation: "Le carré possède quatre côtés égaux : son périmètre est 4c."
},
{
id: "MAT-510", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle formule donne l'aire d'un rectangle de longueur L et largeur l ?",
a: ["L + l", "2(L + l)", "L × l", "L²"],
correct: 2,
explanation: "L'aire d'un rectangle est le produit de sa longueur par sa largeur."
},
{
id: "MAT-511", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Lequel de ces nombres est rationnel ?",
a: ["√2", "π", "7/9", "√7"],
correct: 2,
explanation: "7/9 est le quotient de deux entiers avec un dénominateur non nul : c'est un rationnel."
},
{
id: "MAT-512", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Lequel de ces nombres est un entier relatif ?",
a: ["-12", "2,5", "√9,5", "π"],
correct: 0,
explanation: "-12 est un entier relatif négatif."
},
{
id: "MAT-513", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle fraction est irréductible ?",
a: ["6/8", "9/12", "5/7", "10/15"],
correct: 2,
explanation: "5 et 7 n'ont aucun diviseur commun autre que 1 : 5/7 est irréductible."
},
{
id: "MAT-514", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel nombre est le plus grand ?",
a: ["-0,7", "-0,2", "-0,9", "-1"],
correct: 1,
explanation: "Parmi les nombres négatifs, celui qui est le plus proche de zéro est le plus grand."
},
{
id: "MAT-515", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle écriture décimale correspond à 7/8 ?",
a: ["0,785", "0,875", "0,825", "0,75"],
correct: 1,
explanation: "7 divisé par 8 donne 0,875."
},
{
id: "MAT-516", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel nombre est un carré parfait ?",
a: ["45", "48", "49", "50"],
correct: 2,
explanation: "49 est un carré parfait car 7 × 7 = 49."
},
{
id: "MAT-517", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle affirmation est vraie pour deux fractions de même dénominateur positif ?",
a: ["La plus grande a toujours le plus petit numérateur", "La comparaison dépend des numérateurs", "Elles sont toujours égales", "Leurs dénominateurs doivent être multipliés"],
correct: 1,
explanation: "Avec un même dénominateur positif, la fraction qui a le plus grand numérateur est la plus grande."
},
{
id: "MAT-518", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel nombre appartient à la fois aux entiers relatifs et aux rationnels ?",
a: ["-4", "√3", "π", "√2"],
correct: 0,
explanation: "Tout entier relatif peut s'écrire sous forme de fraction, par exemple -4 = -4/1."
},
{
id: "MAT-519", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quelle est la valeur de √0 ?",
a: ["-1", "0", "1", "Elle n'existe pas"],
correct: 1,
explanation: "La racine carrée de zéro est zéro, car 0 × 0 = 0."
},
{
id: "MAT-520", matiere: "Mathématiques", niveau_scolaire: "secondaire", difficulte: 3,
q: "Quel énoncé décrit correctement les nombres réels ?",
a: ["Ils comprennent les rationnels et les irrationnels", "Ils comprennent seulement les entiers", "Ils excluent les fractions", "Ils sont tous positifs"],
correct: 0,
explanation: "Les nombres réels regroupent les nombres rationnels et les nombres irrationnels."
}
];
