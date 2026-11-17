// IMFA QUIZ - CHIMIE, MOYEN, Partie 3B (CHM-326 a CHM-350)
// difficulte 3 = MOYEN
const CHIMIE_MOYEN_P3B = [
  { id: "CHM-326", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle méthode permet de séparer deux liquides miscibles ayant des températures d'ébullition différentes ?",
    a: ["Distillation", "Filtration", "Tamisage", "Aimantation"], correct: 0,
    explications: [
      "Correct. La distillation exploite les différences de température d'ébullition.",
      "La filtration sépare un solide d'un liquide.",
      "Le tamisage sépare des solides selon leur taille.",
      "L'aimantation ne sépare que des substances magnétiques."
    ] },
  { id: "CHM-327", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une réaction exothermique, l'énergie est :",
    a: ["Absorbée par le système", "Libérée vers le milieu extérieur", "Toujours détruite", "Transformée uniquement en matière"], correct: 1,
    explications: [
      "C'est le cas d'une réaction endothermique.",
      "Correct. Une réaction exothermique libère de l'énergie, souvent sous forme de chaleur.",
      "L'énergie ne se détruit pas, elle se transforme.",
      "Une réaction ne transforme pas toute l'énergie en matière."
    ] },
  { id: "CHM-328", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nom du composé Na₂CO₃ ?",
    a: ["Chlorure de sodium", "Carbonate de sodium", "Hydroxyde de sodium", "Oxyde de sodium"], correct: 1,
    explications: [
      "Le chlorure de sodium a pour formule NaCl.",
      "Correct. Na₂CO₃ est le carbonate de sodium.",
      "L'hydroxyde de sodium a pour formule NaOH.",
      "L'oxyde de sodium a pour formule Na₂O."
    ] },
  { id: "CHM-329", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien d'atomes d'hydrogène contient une molécule de C₂H₆ ?",
    a: ["2", "4", "6", "8"], correct: 2,
    explications: [
      "2 correspond au nombre d'atomes de carbone, pas d'hydrogène.",
      "4 ne correspond pas à l'indice de l'hydrogène dans C₂H₆.",
      "Correct. L'indice 6 indique six atomes d'hydrogène.",
      "8 ne correspond à aucun indice de la formule."
    ] },
  { id: "CHM-330", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi un morceau de sucre se dissout-il plus vite dans l'eau chaude que dans l'eau froide ?",
    a: ["La température plus élevée accélère généralement la dissolution", "Le sucre devient un métal", "L'eau chaude n'a plus de molécules", "Le sucre disparaît sans se dissoudre"], correct: 0,
    explications: [
      "Correct. Les particules bougent plus vite, la dissolution est plus rapide.",
      "Le sucre ne devient pas un métal.",
      "L'eau chaude contient toujours des molécules.",
      "Le sucre se dissout réellement, il ne disparaît pas sans se dissoudre."
    ] },
  { id: "CHM-331", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule de l'hydroxyde de potassium ?",
    a: ["KCl", "KOH", "K₂O", "KNO₃"], correct: 1,
    explications: [
      "KCl est le chlorure de potassium.",
      "Correct. L'hydroxyde de potassium est formé d'un ion K⁺ et d'un ion OH⁻ : KOH.",
      "K₂O est l'oxyde de potassium.",
      "KNO₃ est le nitrate de potassium."
    ] },
  { id: "CHM-332", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel élément possède le numéro atomique 7 ?",
    a: ["Carbone", "Azote", "Oxygène", "Fluor"], correct: 1,
    explications: [
      "Le carbone a le numéro atomique 6.",
      "Correct. L'azote possède sept protons, donc Z = 7.",
      "L'oxygène a le numéro atomique 8.",
      "Le fluor a le numéro atomique 9."
    ] },
  { id: "CHM-333", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une réaction de réduction, une espèce chimique :",
    a: ["Perd des électrons", "Gagne des électrons", "Perd toujours des neutrons", "Perd son noyau"], correct: 1,
    explications: [
      "Perdre des électrons correspond à une oxydation.",
      "Correct. La réduction est un gain d'électrons.",
      "Les neutrons ne sont pas concernés par la réduction.",
      "Une réaction chimique ne modifie pas le noyau des atomes."
    ] },
  { id: "CHM-334", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une mole de CO₂ contient combien de moles d'atomes d'oxygène ?",
    a: ["1 mole", "2 moles", "3 moles", "4 moles"], correct: 1,
    explications: [
      "1 mole ne tient compte que d'un seul atome d'oxygène par molécule.",
      "Correct. Chaque molécule de CO₂ contient deux atomes d'oxygène.",
      "3 moles correspond au nombre total d'atomes de la molécule, pas seulement à l'oxygène.",
      "4 moles ne correspond à aucun calcul correct."
    ] },
  { id: "CHM-335", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le rôle principal d'un indicateur coloré dans un titrage acido-basique ?",
    a: ["Mesurer directement la masse", "Repérer le changement de couleur près de l'équivalence", "Augmenter la concentration", "Produire un gaz"], correct: 1,
    explications: [
      "La masse se mesure avec une balance.",
      "Correct. L'indicateur change de couleur près de l'équivalence, ce qui signale la fin du titrage.",
      "Un indicateur ne change pas la concentration de la solution.",
      "Un indicateur ne produit pas de gaz."
    ] },
  { id: "CHM-336", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la formule chimique du sulfate de sodium ?",
    a: ["NaSO₄", "Na₂SO₄", "NaSO₃", "Na₂S"], correct: 1,
    explications: [
      "NaSO₄ ne respecte pas la neutralité électrique du composé.",
      "Correct. Le sulfate de sodium est formé de deux ions Na⁺ et d'un ion SO₄²⁻ : Na₂SO₄.",
      "NaSO₃ est le sulfite de sodium.",
      "Na₂S est le sulfure de sodium."
    ] },
  { id: "CHM-337", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel gaz trouble l'eau de chaux ?",
    a: ["O₂", "H₂", "CO₂", "N₂"], correct: 2,
    explications: [
      "Le dioxygène ne trouble pas l'eau de chaux.",
      "Le dihydrogène ne trouble pas l'eau de chaux.",
      "Correct. Le CO₂ forme un précipité blanc de carbonate de calcium.",
      "Le diazote ne trouble pas l'eau de chaux."
    ] },
  { id: "CHM-338", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle relation exprime la loi de conservation de la masse ?",
    a: ["Masse des réactifs = masse des produits", "Masse des réactifs = 0", "Masse des produits = 2 fois celle des réactifs", "La masse disparaît pendant la réaction"], correct: 0,
    explications: [
      "Correct. Dans un système fermé, la masse totale se conserve.",
      "La masse des réactifs n'est pas nulle.",
      "Les produits n'ont pas forcément le double de la masse des réactifs.",
      "La masse ne disparaît pas pendant une réaction dans un système fermé."
    ] },
  { id: "CHM-339", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le principal gaz responsable de l'effet de serre parmi les suivants ?",
    a: ["Dioxyde de carbone", "Hélium", "Néon", "Argon"], correct: 0,
    explications: [
      "Correct. Le CO₂ est un gaz à effet de serre important, émis notamment par la combustion.",
      "L'hélium est un gaz inerte, sans effet de serre notable.",
      "Le néon est un gaz inerte, sans effet de serre notable.",
      "L'argon est un gaz inerte, sans effet de serre notable."
    ] },
  { id: "CHM-340", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle formule permet de calculer la quantité de matière à partir du nombre de particules ?",
    a: ["n = N × NA", "n = N / NA", "n = m × M", "n = V × T"], correct: 1,
    explications: [
      "Multiplier N par NA ne donne pas la quantité de matière.",
      "Correct. On divise le nombre de particules par la constante d'Avogadro.",
      "m × M ne donne pas la quantité de matière à partir de N.",
      "V × T n'est pas une relation valable ici."
    ] },
  { id: "CHM-341", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nombre d'oxydation du sodium dans NaCl ?",
    a: ["-1", "0", "+1", "+2"], correct: 2,
    explications: [
      "-1 correspond à l'ion chlorure, pas au sodium.",
      "0 correspond à un atome seul, non combiné.",
      "Correct. Le sodium forme l'ion Na⁺, de nombre d'oxydation +1.",
      "+2 ne correspond pas au sodium, qui forme Na⁺."
    ] },
  { id: "CHM-342", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi l'huile et l'eau se séparent-elles en deux couches ?",
    a: ["Elles ont toujours la même densité", "Elles sont peu miscibles", "L'huile se transforme en gaz", "L'eau détruit les molécules d'huile"], correct: 1,
    explications: [
      "Si elles avaient la même densité, elles ne se sépareraient pas ainsi.",
      "Correct. Elles sont peu miscibles, donc elles forment deux phases distinctes.",
      "L'huile ne se transforme pas en gaz.",
      "L'eau ne détruit pas les molécules d'huile."
    ] },
  { id: "CHM-343", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quels sont les produits de la combustion complète du méthane (CH₄) dans le dioxygène ?",
    a: ["CO₂ et H₂O", "CO et H₂", "N₂ et H₂O", "C et O₂"], correct: 0,
    explications: [
      "Correct. CH₄ + 2O₂ → CO₂ + 2H₂O.",
      "CO et H₂ correspondent à une combustion incomplète ou à un autre procédé.",
      "N₂ n'est pas produit par la combustion du méthane.",
      "C et O₂ ne sont pas les produits de cette combustion."
    ] },
  { id: "CHM-344", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la masse de 0,5 mole de dioxygène O₂ ? (M = 32 g/mol)",
    a: ["8 g", "16 g", "32 g", "64 g"], correct: 1,
    explications: [
      "8 g correspond à 0,25 mole de dioxygène.",
      "Correct. m = n × M = 0,5 × 32 = 16 g.",
      "32 g correspond à une mole de dioxygène.",
      "64 g correspond à deux moles de dioxygène."
    ] },
  { id: "CHM-345", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est l'effet principal d'une augmentation de pression sur un gaz, à température constante ?",
    a: ["Son volume augmente", "Son volume diminue", "Sa masse disparaît", "Son nombre de molécules double automatiquement"], correct: 1,
    explications: [
      "Une augmentation de pression fait diminuer le volume.",
      "Correct. Selon la loi de Boyle-Mariotte, pression et volume sont inversement proportionnels à température constante.",
      "La masse du gaz ne disparaît pas.",
      "Le nombre de molécules ne double pas automatiquement."
    ] },
  { id: "CHM-346", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel élément est le plus électronégatif parmi les suivants ?",
    a: ["Sodium", "Fluor", "Calcium", "Potassium"], correct: 1,
    explications: [
      "Le sodium est un métal peu électronégatif.",
      "Correct. Le fluor est l'élément le plus électronégatif du tableau périodique.",
      "Le calcium est peu électronégatif.",
      "Le potassium est peu électronégatif."
    ] },
  { id: "CHM-347", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nom du passage direct de l'état gazeux à l'état solide ?",
    a: ["Fusion", "Déposition", "Vaporisation", "Liquéfaction"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La déposition transforme directement un gaz en solide.",
      "La vaporisation transforme un liquide en gaz.",
      "La liquéfaction transforme un gaz en liquide."
    ] },
  { id: "CHM-348", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle substance peut accélérer une réaction biologique sans être consommée globalement ?",
    a: ["Une enzyme", "Un solvant uniquement", "Un déchet", "Un précipité"], correct: 0,
    explications: [
      "Correct. Les enzymes sont des catalyseurs biologiques.",
      "Un solvant dissout, il n'accélère pas la réaction.",
      "Un déchet est un produit non utilisé, il ne catalyse pas.",
      "Un précipité est un solide formé dans une solution."
    ] },
  { id: "CHM-349", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi faut-il ranger les produits chimiques dans des récipients bien fermés ?",
    a: ["Pour limiter l'évaporation et les réactions avec l'air ou l'humidité", "Pour augmenter leur température", "Pour changer leur masse", "Pour accélérer toutes les réactions"], correct: 0,
    explications: [
      "Correct. Un récipient fermé limite l'évaporation et le contact avec l'air ou l'humidité.",
      "Fermer un récipient ne change pas la température des produits.",
      "Fermer un récipient ne change pas la masse des produits.",
      "Fermer un récipient ne rend pas toutes les réactions plus rapides."
    ] },
  { id: "CHM-350", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution A a un pH de 2 et une solution B un pH de 4. Laquelle est la plus acide ?",
    a: ["La solution A", "La solution B", "Les deux sont identiques", "Aucune n'est acide"], correct: 0,
    explications: [
      "Correct. Plus le pH est bas, plus la solution est acide. Ici, la solution A est 100 fois plus concentrée en H₃O⁺.",
      "La solution B a un pH plus élevé, donc elle est moins acide.",
      "Les pH sont différents, donc les solutions ne sont pas identiques.",
      "Les deux solutions ont un pH inférieur à 7, elles sont donc acides."
    ] }
];
