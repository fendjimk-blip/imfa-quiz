// IMFA QUIZ - CHIMIE, MOYEN, Partie 4B (CHM-376 a CHM-400)
// difficulte 3 = MOYEN
const CHIMIE_MOYEN_P4B = [
  { id: "CHM-376", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "On ajoute de l'eau à une solution acide. Que devient généralement son pH ?",
    a: ["Il augmente", "Il diminue toujours", "Il devient forcément 14", "Il reste toujours identique"], correct: 0,
    explications: [
      "Correct. La dilution diminue la concentration en ions H₃O⁺ et augmente généralement le pH.",
      "La dilution d'un acide ne fait généralement pas diminuer son pH.",
      "La solution ne devient pas automatiquement fortement basique.",
      "La dilution peut modifier le pH."
    ] },
  { id: "CHM-377", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le nombre d'oxydation de l'oxygène dans H₂O ?",
    a: ["-2", "-1", "0", "+2"], correct: 0,
    explications: [
      "Correct. Dans l'eau, l'oxygène possède généralement le nombre d'oxydation -2.",
      "-1 est notamment rencontré dans certains peroxydes.",
      "0 correspond à l'oxygène sous sa forme élémentaire.",
      "+2 n'est pas la valeur de l'oxygène dans l'eau."
    ] },
  { id: "CHM-378", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel matériel permet de mesurer précisément le volume d'un liquide ?",
    a: ["Balance", "Éprouvette graduée", "Thermomètre", "Spatule"], correct: 1,
    explications: [
      "Une balance mesure la masse.",
      "Correct. Une éprouvette graduée permet de mesurer un volume de liquide.",
      "Un thermomètre mesure la température.",
      "Une spatule sert à manipuler de petites quantités de solides."
    ] },
  { id: "CHM-379", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi le volume d'un gaz est-il facilement compressible ?",
    a: ["Ses particules sont très rapprochées", "Ses particules sont très espacées", "Ses particules sont immobiles", "Le gaz ne contient aucune particule"], correct: 1,
    explications: [
      "Dans un gaz, les particules sont relativement éloignées les unes des autres.",
      "Correct. Les espaces entre les particules permettent de réduire le volume.",
      "Les particules d'un gaz sont en mouvement permanent.",
      "Un gaz est constitué de particules."
    ] },
  { id: "CHM-380", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle formule représente le nitrate de potassium ?",
    a: ["KNO₃", "K₂SO₄", "KCl", "KOH"], correct: 0,
    explications: [
      "Correct. Le nitrate de potassium contient K⁺ et NO₃⁻.",
      "K₂SO₄ est le sulfate de potassium.",
      "KCl est le chlorure de potassium.",
      "KOH est l'hydroxyde de potassium."
    ] },
  { id: "CHM-381", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une substance pure possède-t-elle une composition fixe ?",
    a: ["Oui, dans des conditions définies", "Non, sa composition change au hasard", "Elle contient toujours plusieurs solvants", "Elle est nécessairement un mélange"], correct: 0,
    explications: [
      "Correct. Une substance pure possède une composition chimique définie.",
      "Sa composition ne varie pas au hasard.",
      "Une substance pure n'est pas nécessairement constituée de solvants.",
      "Un mélange contient plusieurs substances."
    ] },
  { id: "CHM-382", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel phénomène se produit lorsqu'un liquide devient solide ?",
    a: ["Fusion", "Solidification", "Sublimation", "Vaporisation"], correct: 1,
    explications: [
      "La fusion transforme un solide en liquide.",
      "Correct. La solidification transforme un liquide en solide.",
      "La sublimation transforme directement un solide en gaz.",
      "La vaporisation transforme un liquide en gaz."
    ] },
  { id: "CHM-383", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Combien de moles représentent 18 g d'eau ? (M = 18 g/mol)",
    a: ["0,5 mol", "1 mol", "2 mol", "18 mol"], correct: 1,
    explications: [
      "0,5 mol correspondrait à 9 g d'eau.",
      "Correct. n = m/M = 18/18 = 1 mol.",
      "2 mol correspondraient à 36 g d'eau.",
      "18 mol correspondraient à 324 g d'eau."
    ] },
  { id: "CHM-384", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le rôle du dioxygène dans une combustion ordinaire ?",
    a: ["Comburant", "Combustible", "Solvant", "Produit obligatoire"], correct: 0,
    explications: [
      "Correct. Le dioxygène permet généralement la combustion en jouant le rôle de comburant.",
      "Le combustible est la substance qui brûle.",
      "Le dioxygène n'est pas utilisé ici comme solvant.",
      "Le dioxygène est un réactif, pas un produit obligatoire."
    ] },
  { id: "CHM-385", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel ion est responsable du caractère acide d'une solution aqueuse ?",
    a: ["Na⁺", "H₃O⁺", "Cl⁻", "OH⁻"], correct: 1,
    explications: [
      "Na⁺ est un ion sodium.",
      "Correct. Une solution acide présente une concentration élevée en ions oxonium H₃O⁺.",
      "Cl⁻ est l'ion chlorure.",
      "OH⁻ est associé au caractère basique."
    ] },
  { id: "CHM-386", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi deux liquides de densités différentes peuvent-ils former deux couches ?",
    a: ["Ils sont nécessairement miscibles", "Ils peuvent être non miscibles et se superposer", "Ils ont la même masse", "Ils se transforment en solides"], correct: 1,
    explications: [
      "La miscibilité détermine si les liquides se mélangent, pas seulement leur densité.",
      "Correct. S'ils sont non miscibles, le liquide le plus dense se place généralement en dessous.",
      "La formation de couches ne signifie pas qu'ils ont la même masse.",
      "La séparation en couches ne signifie pas une solidification."
    ] },
  { id: "CHM-387", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel élément chimique est représenté par le symbole Fe ?",
    a: ["Fluor", "Fer", "Francium", "Phosphore"], correct: 1,
    explications: [
      "Le fluor est représenté par F.",
      "Correct. Fe est le symbole chimique du fer.",
      "Le francium est représenté par Fr.",
      "Le phosphore est représenté par P."
    ] },
  { id: "CHM-388", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une réaction chimique se déroule dans un récipient fermé. Que devient la masse totale ?",
    a: ["Elle se conserve", "Elle double toujours", "Elle disparaît", "Elle devient toujours nulle"], correct: 0,
    explications: [
      "Correct. La masse totale se conserve dans un système fermé.",
      "La masse ne double pas automatiquement.",
      "La matière ne disparaît pas au cours de la réaction.",
      "La masse totale ne devient pas nulle."
    ] },
  { id: "CHM-389", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le principal constituant chimique du gaz naturel ?",
    a: ["Méthane", "Dioxygène", "Chlore", "Ammoniac"], correct: 0,
    explications: [
      "Correct. Le gaz naturel est principalement constitué de méthane.",
      "Le dioxygène est un constituant de l'air, pas le principal constituant du gaz naturel.",
      "Le chlore n'est pas le constituant principal du gaz naturel.",
      "L'ammoniac n'est pas le constituant principal du gaz naturel."
    ] },
  { id: "CHM-390", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel phénomène explique la diffusion d'une goutte d'encre dans l'eau ?",
    a: ["Le mouvement des particules", "La disparition de l'eau", "La transformation de l'encre en métal", "La création de nouveaux atomes"], correct: 0,
    explications: [
      "Correct. Les particules se déplacent et se répartissent progressivement dans le liquide.",
      "L'eau ne disparaît pas pendant la diffusion.",
      "L'encre ne se transforme pas en métal.",
      "La diffusion ne crée pas de nouveaux atomes."
    ] },
  { id: "CHM-391", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle est la charge totale d'un atome neutre ?",
    a: ["Positive", "Négative", "Nulle", "Toujours égale à +1"], correct: 2,
    explications: [
      "Un atome neutre n'a pas de charge totale positive.",
      "Un atome neutre n'a pas de charge totale négative.",
      "Correct. Les charges positives des protons compensent les charges négatives des électrons.",
      "Une charge totale de +1 correspond à un ion positif, pas à un atome neutre."
    ] },
  { id: "CHM-392", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel procédé permet de récupérer le sel dissous dans l'eau de mer ?",
    a: ["Évaporation de l'eau", "Aimantation", "Filtration seule", "Décantation seule"], correct: 0,
    explications: [
      "Correct. L'évaporation de l'eau permet de récupérer le sel restant.",
      "Le sel n'est pas attiré par un aimant ordinaire.",
      "Le sel dissous traverse le filtre avec l'eau.",
      "La décantation ne sépare pas le sel dissous de l'eau."
    ] },
  { id: "CHM-393", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une solution de concentration 4 mol/L, combien de moles trouve-t-on dans 0,5 L ?",
    a: ["1 mol", "2 mol", "4 mol", "8 mol"], correct: 1,
    explications: [
      "1 mol correspondrait à une concentration de 2 mol/L dans 0,5 L.",
      "Correct. n = C × V = 4 × 0,5 = 2 mol.",
      "4 mol correspondraient à 1 L de cette solution.",
      "8 mol correspondraient à 2 L de cette solution."
    ] },
  { id: "CHM-394", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel gaz est libéré lors de la réaction entre un acide et certains métaux comme le zinc ?",
    a: ["Dioxygène", "Dihydrogène", "Diazote", "Hélium"], correct: 1,
    explications: [
      "Le dioxygène n'est pas le gaz généralement produit dans cette réaction.",
      "Correct. Le zinc réagit avec un acide pour libérer du dihydrogène.",
      "Le diazote n'est pas produit par cette réaction.",
      "L'hélium est un gaz noble et n'est pas produit ici."
    ] },
  { id: "CHM-395", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi un métal conduit-il généralement bien l'électricité ?",
    a: ["Il possède des électrons mobiles", "Il ne contient aucun électron", "Ses noyaux se déplacent librement", "Il est toujours liquide"], correct: 0,
    explications: [
      "Correct. Les électrons délocalisés peuvent se déplacer dans le métal et transporter une charge électrique.",
      "Les métaux contiennent des électrons.",
      "Les noyaux atomiques ne se déplacent pas librement dans le solide.",
      "De nombreux métaux sont solides à température ambiante."
    ] },
  { id: "CHM-396", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Que signifie une réaction chimique équilibrée ?",
    a: ["Les atomes de chaque élément sont conservés", "Les réactifs et produits ont toujours la même formule", "La réaction ne produit aucune énergie", "Tous les coefficients valent un"], correct: 0,
    explications: [
      "Correct. Chaque élément possède le même nombre d'atomes avant et après la réaction.",
      "Les réactifs et les produits peuvent avoir des formules différentes.",
      "Une réaction équilibrée peut libérer ou absorber de l'énergie.",
      "Les coefficients peuvent être différents de un."
    ] },
  { id: "CHM-397", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est l'effet d'une augmentation de la surface de contact d'un solide réactif ?",
    a: ["Elle peut accélérer la réaction", "Elle arrête toujours la réaction", "Elle diminue toujours la température", "Elle change le numéro atomique"], correct: 0,
    explications: [
      "Correct. Une surface de contact plus grande favorise les collisions entre réactifs.",
      "Une surface plus grande n'arrête pas automatiquement la réaction.",
      "La surface ne détermine pas toujours une baisse de température.",
      "Le numéro atomique ne change pas lors d'une réaction chimique ordinaire."
    ] },
  { id: "CHM-398", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel composé est formé par l'ion calcium Ca²⁺ et l'ion chlorure Cl⁻ ?",
    a: ["CaCl", "CaCl₂", "Ca₂Cl", "Ca₂Cl₂"], correct: 1,
    explications: [
      "CaCl ne neutralise pas les charges +2 et -1.",
      "Correct. Deux ions chlorure compensent la charge d'un ion calcium : CaCl₂.",
      "Ca₂Cl ne respecte pas la neutralité électrique.",
      "Ca₂Cl₂ se simplifie en CaCl, qui ne respecte pas les charges."
    ] },
  { id: "CHM-399", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi faut-il porter des lunettes de protection au laboratoire ?",
    a: ["Pour protéger les yeux des projections", "Pour augmenter la précision d'une balance", "Pour rendre les produits inoffensifs", "Pour mesurer le pH"], correct: 0,
    explications: [
      "Correct. Les lunettes protègent les yeux contre les éclaboussures et les projections.",
      "Les lunettes ne modifient pas la précision d'une balance.",
      "Elles ne rendent pas les produits chimiques inoffensifs.",
      "Le pH se mesure avec un indicateur ou un appareil adapté."
    ] },
  { id: "CHM-400", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution contient 0,2 mole de soluté dans 0,1 litre. Quelle est sa concentration molaire ?",
    a: ["0,2 mol/L", "0,5 mol/L", "2 mol/L", "20 mol/L"], correct: 2,
    explications: [
      "0,2 mol/L ne correspond pas au rapport entre la quantité et le volume.",
      "0,5 mol/L serait obtenu avec 0,05 mole dans 0,1 litre.",
      "Correct. C = n/V = 0,2/0,1 = 2 mol/L.",
      "20 mol/L est dix fois trop élevé."
    ] }
];
