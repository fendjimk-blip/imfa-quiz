// IMFA QUIZ - CHIMIE, MOYEN, Partie 2B (CHM-276 a CHM-300)
// difficulte 3 = MOYEN : kesyon ki mande yon fòmil ak yon kalkil senp
const CHIMIE_MOYEN_P2B = [
  { id: "CHM-276", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien d'électrons possède un atome neutre de sodium (Z = 11) ?",
    a: ["10", "11", "12", "23"], correct: 1,
    explications: [
      "10 correspond au nombre d'électrons d'un ion Na⁺.",
      "Correct. Un atome neutre a autant d'électrons que de protons : 11.",
      "12 ne correspond à aucun atome neutre de sodium.",
      "23 est la masse approximative du sodium, pas son nombre d'électrons."
    ] },
  { id: "CHM-277", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel composé est une base parmi les suivants ?",
    a: ["HCl", "NaOH", "CO₂", "H₂SO₄"], correct: 1,
    explications: [
      "HCl est un acide.",
      "Correct. NaOH est une base forte.",
      "CO₂ est un oxyde acide, ce n'est pas une base.",
      "H₂SO₄ est un acide."
    ] },
  { id: "CHM-278", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la masse d'un objet de masse volumique 3 g/cm³ et de volume 20 cm³ ?",
    a: ["6 g", "23 g", "60 g", "0,15 g"], correct: 2,
    explications: [
      "6 g correspond à une erreur de multiplication.",
      "23 g correspond à une addition (3 + 20).",
      "Correct. m = ρ × V = 3 × 20 = 60 g.",
      "0,15 g correspond à V / ρ, ce qui n'est pas la formule."
    ] },
  { id: "CHM-279", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Un corps a une masse de 20 g et un volume de 10 cm³. Quelle est sa masse volumique ?",
    a: ["1 g/cm³", "2 g/cm³", "10 g/cm³", "30 g/cm³"], correct: 1,
    explications: [
      "1 g/cm³ ne correspond pas à 20 ÷ 10.",
      "Correct. ρ = m / V = 20 / 10 = 2 g/cm³.",
      "10 g/cm³ correspond au volume, pas à la masse volumique.",
      "30 g/cm³ correspond à une addition (20 + 10)."
    ] },
  { id: "CHM-280", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel phénomène se produit lorsqu'un métal perd des électrons ?",
    a: ["Réduction", "Oxydation", "Fusion", "Neutralisation"], correct: 1,
    explications: [
      "La réduction correspond à un gain d'électrons.",
      "Correct. L'oxydation est une perte d'électrons.",
      "La fusion change l'état d'un solide en liquide.",
      "La neutralisation est une réaction entre un acide et une base."
    ] },
  { id: "CHM-281", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le pourcentage approximatif d'oxygène dans l'air sec ?",
    a: ["78 %", "21 %", "1 %", "0,04 %"], correct: 1,
    explications: [
      "78 % correspond à la proportion d'azote.",
      "Correct. L'oxygène représente environ 21 % de l'air sec.",
      "1 % correspond à peu près à l'argon.",
      "0,04 % correspond à peu près au dioxyde de carbone."
    ] },
  { id: "CHM-282", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution contient 0,5 mole dans 0,5 litre. Quelle est sa concentration ?",
    a: ["0,5 mol/L", "1 mol/L", "2 mol/L", "5 mol/L"], correct: 1,
    explications: [
      "0,5 mol/L correspondrait à 0,25 mol dans 0,5 L.",
      "Correct. C = n / V = 0,5 / 0,5 = 1 mol/L.",
      "2 mol/L ne correspond à aucun calcul correct avec ces valeurs.",
      "5 mol/L ne correspond à aucun calcul correct avec ces valeurs."
    ] },
  { id: "CHM-283", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le principal effet d'une augmentation de température sur la vitesse de nombreuses réactions ?",
    a: ["Elle diminue toujours la vitesse", "Elle augmente généralement la vitesse", "Elle arrête toutes les réactions", "Elle supprime les réactifs"], correct: 1,
    explications: [
      "Une hausse de température accélère en général la réaction.",
      "Correct. Les particules bougent plus vite et les chocs efficaces sont plus fréquents.",
      "Une hausse de température n'arrête pas les réactions.",
      "La température n'élimine pas les réactifs."
    ] },
  { id: "CHM-284", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien de types d'atomes différents sont présents dans la molécule H₂SO₄ ?",
    a: ["1", "2", "3", "4"], correct: 2,
    explications: [
      "1 type d'atome ne correspond qu'à une molécule simple, comme H₂.",
      "2 types ne correspondent pas à la formule.",
      "Correct. H₂SO₄ contient de l'hydrogène, du soufre et de l'oxygène : 3 types.",
      "4 types d'atomes ne sont pas présents dans cette molécule."
    ] },
  { id: "CHM-285", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nombre d'oxydation habituel de l'oxygène dans H₂O ?",
    a: ["+1", "+2", "-1", "-2"], correct: 3,
    explications: [
      "+1 ne correspond pas à l'oxygène dans l'eau.",
      "+2 ne correspond pas à l'oxygène dans l'eau.",
      "-1 correspond à l'oxygène dans le peroxyde d'hydrogène, pas dans l'eau.",
      "Correct. Dans H₂O, l'oxygène a le nombre d'oxydation -2."
    ] },
  { id: "CHM-286", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle substance est un acide parmi les suivantes ?",
    a: ["NaOH", "KOH", "HCl", "CaO"], correct: 2,
    explications: [
      "NaOH est une base.",
      "KOH est une base.",
      "Correct. HCl libère des ions H⁺ en solution, c'est un acide.",
      "CaO est un oxyde basique, ce n'est pas un acide."
    ] },
  { id: "CHM-287", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si la température d'un gaz augmente à pression constante, son volume :",
    a: ["Diminue généralement", "Augmente généralement", "Devient toujours nul", "Ne change jamais"], correct: 1,
    explications: [
      "Le volume ne diminue pas quand la température augmente à pression constante.",
      "Correct. Selon la loi de Charles, le volume augmente avec la température absolue.",
      "Le volume ne devient pas nul.",
      "Le volume change avec la température."
    ] },
  { id: "CHM-288", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien d'atomes au total contient une molécule de glucose C₆H₁₂O₆ ?",
    a: ["6", "12", "18", "24"], correct: 3,
    explications: [
      "6 correspond seulement aux atomes de carbone.",
      "12 correspond seulement aux atomes d'hydrogène.",
      "18 ne correspond à aucune somme correcte.",
      "Correct. 6 + 12 + 6 = 24 atomes au total."
    ] },
  { id: "CHM-289", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Lors d'une réaction chimique réalisée dans un système fermé, la masse totale :",
    a: ["Augmente toujours", "Diminue toujours", "Se conserve", "Devient nulle"], correct: 2,
    explications: [
      "La masse totale n'augmente pas, elle se conserve.",
      "La masse totale ne diminue pas, elle se conserve.",
      "Correct. La loi de conservation de la masse indique qu'elle se conserve.",
      "La masse ne devient pas nulle dans un système fermé."
    ] },
  { id: "CHM-290", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle méthode permet de séparer le sable de l'eau ?",
    a: ["Filtration", "Distillation fractionnée", "Chromatographie", "Fusion"], correct: 0,
    explications: [
      "Correct. Le filtre retient le sable et laisse passer l'eau.",
      "La distillation fractionnée sépare des liquides de températures d'ébullition différentes.",
      "La chromatographie n'est pas la méthode habituelle pour séparer du sable et de l'eau.",
      "La fusion change l'état d'un solide, elle ne sépare pas ce mélange."
    ] },
  { id: "CHM-291", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule de la loi des gaz parfaits ?",
    a: ["PV = nRT", "P = mV", "V = mR", "PT = nV"], correct: 0,
    explications: [
      "Correct. La loi des gaz parfaits s'écrit PV = nRT.",
      "P = mV ne correspond pas à la loi des gaz parfaits.",
      "V = mR ne correspond pas à la loi des gaz parfaits.",
      "PT = nV ne correspond pas à la loi des gaz parfaits."
    ] },
  { id: "CHM-292", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel élément appartient à la famille des gaz nobles ?",
    a: ["Chlore", "Sodium", "Argon", "Calcium"], correct: 2,
    explications: [
      "Le chlore est un halogène.",
      "Le sodium est un métal alcalin.",
      "Correct. L'argon appartient au groupe 18, celui des gaz nobles.",
      "Le calcium est un métal alcalino-terreux."
    ] },
  { id: "CHM-293", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si une réaction absorbe de la chaleur, elle est dite :",
    a: ["Exothermique", "Endothermique", "Neutre dans tous les cas", "Radioactive"], correct: 1,
    explications: [
      "Une réaction exothermique libère de la chaleur.",
      "Correct. Une réaction endothermique absorbe de la chaleur.",
      "Une réaction échange de l'énergie avec le milieu, elle n'est pas neutre.",
      "La radioactivité concerne les noyaux instables, pas cette classification."
    ] },
  { id: "CHM-294", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la masse de 2 moles de CO₂ ? (M = 44 g/mol)",
    a: ["22 g", "44 g", "66 g", "88 g"], correct: 3,
    explications: [
      "22 g ne correspond à aucun calcul correct avec 2 moles.",
      "44 g correspond à une seule mole de CO₂.",
      "66 g ne correspond à aucun calcul correct.",
      "Correct. m = n × M = 2 × 44 = 88 g."
    ] },
  { id: "CHM-295", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une solution à 25 °C, le pH vaut 9. Quelle est la concentration en ions OH⁻ ?",
    a: ["10⁻⁹ mol/L", "10⁻⁵ mol/L", "10⁻¹ mol/L", "9 mol/L"], correct: 1,
    explications: [
      "10⁻⁹ mol/L est la concentration en ions H₃O⁺, pas en OH⁻.",
      "Correct. À 25 °C, pOH = 14 − 9 = 5, donc [OH⁻] = 10⁻⁵ mol/L.",
      "10⁻¹ mol/L correspondrait à un pOH de 1, ce qui n'est pas le cas.",
      "9 mol/L n'est pas une concentration correcte ici, le pH est un logarithme."
    ] },
  { id: "CHM-296", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel phénomène explique la formation de rouille sur le fer ?",
    a: ["Une oxydation", "Une fusion", "Une sublimation", "Une neutralisation"], correct: 0,
    explications: [
      "Correct. La rouille résulte d'une oxydation du fer.",
      "La fusion change l'état d'un solide en liquide.",
      "La sublimation transforme un solide directement en gaz.",
      "La neutralisation est une réaction entre un acide et une base."
    ] },
  { id: "CHM-297", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une dilution, quelle grandeur reste constante si aucune perte de soluté ne se produit ?",
    a: ["Le volume total", "La concentration", "La quantité de soluté", "La masse du solvant"], correct: 2,
    explications: [
      "Le volume total augmente lors d'une dilution.",
      "La concentration diminue lors d'une dilution.",
      "Correct. La quantité de soluté reste la même, seul le volume change.",
      "La masse du solvant augmente lors d'une dilution."
    ] },
  { id: "CHM-298", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien de neutrons possède un atome de carbone 13 (Z = 6) ?",
    a: ["6", "7", "13", "19"], correct: 1,
    explications: [
      "6 correspond au nombre de protons.",
      "Correct. Neutrons = A − Z = 13 − 6 = 7.",
      "13 correspond au nombre de masse, pas au nombre de neutrons.",
      "19 ne correspond à aucun calcul correct."
    ] },
  { id: "CHM-299", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le principal objectif d'équilibrer une équation chimique ?",
    a: ["Changer les substances", "Respecter la conservation des atomes", "Augmenter la température", "Éliminer les produits"], correct: 1,
    explications: [
      "Équilibrer une équation ne change pas les substances.",
      "Correct. Chaque élément doit avoir le même nombre d'atomes avant et après la réaction.",
      "La température n'est pas l'objectif de l'équilibrage.",
      "On ne supprime pas les produits en équilibrant une équation."
    ] },
  { id: "CHM-300", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux solutions ont le même volume. La première contient 1 mole de soluté et la seconde 2 moles. Laquelle est la plus concentrée ?",
    a: ["La première", "La deuxième", "Elles ont la même concentration", "Impossible à déterminer"], correct: 1,
    explications: [
      "La première contient moins de soluté, elle est donc moins concentrée.",
      "Correct. À volume égal, la solution avec 2 moles a une concentration double.",
      "Les concentrations sont différentes, puisque la quantité de soluté diffère.",
      "On peut déterminer la réponse, car le volume est le même."
    ] }
];
