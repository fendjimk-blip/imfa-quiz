// IMFA QUIZ - CHIMIE, MOYEN, Partie 4A (CHM-351 a CHM-375)
// difficulte 3 = MOYEN
const CHIMIE_MOYEN_P4A = [
  { id: "CHM-351", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "On mélange un acide et une base en quantités adaptées. Quel phénomène peut se produire ?",
    a: ["Neutralisation", "Combustion", "Évaporation", "Oxydation uniquement"], correct: 0,
    explications: [
      "Correct. Un acide et une base peuvent réagir pour former notamment de l'eau et un sel.",
      "La combustion nécessite un combustible et un comburant.",
      "L'évaporation est un changement d'état.",
      "Une neutralisation n'est pas simplement une oxydation."
    ] },
  { id: "CHM-352", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution passe d'un pH de 6 à un pH de 3. Que peut-on conclure ?",
    a: ["Elle devient moins acide", "Elle devient plus acide", "Elle devient neutre", "Son pH ne change pas"], correct: 1,
    explications: [
      "Un pH plus faible indique une acidité plus élevée.",
      "Correct. La diminution du pH indique une augmentation de l'acidité.",
      "Une solution neutre a un pH proche de 7 à température ambiante.",
      "Le pH a bien changé, passant de 6 à 3."
    ] },
  { id: "CHM-353", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi le sel solide ne conduit-il généralement pas le courant électrique ?",
    a: ["Ses ions sont immobiles dans le cristal", "Il ne contient aucun ion", "Il est toujours gazeux", "Il contient uniquement des électrons libres"], correct: 0,
    explications: [
      "Correct. Dans le cristal solide, les ions sont fixés dans un réseau et ne se déplacent pas librement.",
      "Le sel contient des ions, même à l'état solide.",
      "Le sel solide n'est pas gazeux.",
      "Le sel ionique ne conduit pas grâce à des électrons libres."
    ] },
  { id: "CHM-354", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Que devient généralement la vitesse d'une réaction si la température augmente ?",
    a: ["Elle diminue toujours", "Elle augmente généralement", "Elle devient nulle", "Elle ne peut jamais changer"], correct: 1,
    explications: [
      "Une hausse de température accélère généralement les réactions.",
      "Correct. Les particules se déplacent plus vite et les collisions efficaces deviennent plus fréquentes.",
      "La réaction ne s'arrête pas automatiquement.",
      "La température peut influencer la vitesse d'une réaction."
    ] },
  { id: "CHM-355", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Deux atomes du même élément ont-ils nécessairement le même nombre de neutrons ?",
    a: ["Oui, toujours", "Non, ils peuvent être des isotopes", "Ils ont toujours zéro neutron", "Ils ont des nombres de protons différents"], correct: 1,
    explications: [
      "Les isotopes d'un élément peuvent avoir des nombres de neutrons différents.",
      "Correct. Les isotopes ont le même nombre de protons mais des nombres de neutrons différents.",
      "Beaucoup d'atomes possèdent des neutrons.",
      "Le nombre de protons définit l'élément et reste identique pour ses isotopes."
    ] },
  { id: "CHM-356", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans une réaction chimique, que signifie le coefficient 2 devant H₂O ?",
    a: ["Deux molécules d'eau", "Deux atomes d'oxygène seulement", "Deux grammes d'eau", "Deux éléments chimiques"], correct: 0,
    explications: [
      "Correct. Le coefficient 2 indique deux molécules, ou deux unités de quantité correspondantes.",
      "Chaque molécule d'eau contient un atome d'oxygène.",
      "Un coefficient ne représente pas directement une masse en grammes.",
      "L'eau contient deux éléments : hydrogène et oxygène."
    ] },
  { id: "CHM-357", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel phénomène explique la formation de rouille sur le fer humide ?",
    a: ["Une oxydation", "Une fusion", "Une sublimation", "Une neutralisation"], correct: 0,
    explications: [
      "Correct. Le fer réagit avec le dioxygène en présence d'eau et forme des produits de corrosion.",
      "La fusion est le passage du solide au liquide.",
      "La sublimation est le passage direct du solide au gaz.",
      "La rouille ne résulte pas d'une neutralisation acido-basique."
    ] },
  { id: "CHM-358", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi un catalyseur accélère-t-il une réaction chimique ?",
    a: ["Il augmente la masse des réactifs", "Il offre un chemin réactionnel moins énergétique", "Il détruit les produits", "Il rend la réaction impossible"], correct: 1,
    explications: [
      "Un catalyseur ne fonctionne pas en augmentant la masse des réactifs.",
      "Correct. Il permet généralement une réaction avec une énergie d'activation plus faible.",
      "Un catalyseur ne détruit pas les produits.",
      "Un catalyseur accélère la réaction au lieu de la rendre impossible."
    ] },
  { id: "CHM-359", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une solution contient 2 moles dans 1 litre. Quelle est sa concentration molaire ?",
    a: ["0,5 mol/L", "1 mol/L", "2 mol/L", "3 mol/L"], correct: 2,
    explications: [
      "0,5 mol/L serait obtenu avec 1 mole dans 2 litres.",
      "1 mol/L correspondrait à 1 mole dans 1 litre.",
      "Correct. C = n/V = 2/1 = 2 mol/L.",
      "3 mol/L ne correspond pas au rapport donné."
    ] },
  { id: "CHM-360", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Lorsqu'un gaz est refroidi à pression constante, que fait généralement son volume ?",
    a: ["Il augmente", "Il diminue", "Il devient infini", "Il ne peut jamais changer"], correct: 1,
    explications: [
      "À pression constante, le refroidissement diminue généralement le volume du gaz.",
      "Correct. Selon la loi de Charles, le volume est proportionnel à la température absolue.",
      "Le volume ne devient pas infini.",
      "La température influence le volume d'un gaz à pression constante."
    ] },
  { id: "CHM-361", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel est le rôle de l'eau dans une solution aqueuse de sel ?",
    a: ["Soluté", "Solvant", "Précipité", "Catalyseur obligatoire"], correct: 1,
    explications: [
      "Le sel est le soluté dans cette solution.",
      "Correct. L'eau dissout le sel et joue le rôle de solvant.",
      "Le sel dissous ne constitue pas un précipité.",
      "L'eau n'est pas nécessairement un catalyseur."
    ] },
  { id: "CHM-362", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi le dioxyde de carbone peut-il éteindre une petite flamme ?",
    a: ["Il favorise la combustion", "Il peut réduire le contact avec le dioxygène", "Il est un combustible puissant", "Il transforme la flamme en eau"], correct: 1,
    explications: [
      "Le CO₂ ne favorise pas la combustion dans les conditions habituelles.",
      "Correct. Il peut étouffer la flamme en limitant l'accès au dioxygène.",
      "Le CO₂ n'est pas un combustible.",
      "Une flamme ne se transforme pas directement en eau."
    ] },
  { id: "CHM-363", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel changement permet d'augmenter la solubilité de nombreux solides dans l'eau ?",
    a: ["Augmenter la température", "Retirer tout le solvant", "Geler immédiatement la solution", "Ajouter du sable"], correct: 0,
    explications: [
      "Correct. La solubilité de nombreux solides augmente lorsque la température de l'eau augmente.",
      "Sans solvant, il n'y a pas de dissolution possible.",
      "Le gel ne favorise généralement pas la dissolution des solides.",
      "Le sable n'augmente pas la solubilité du solide étudié."
    ] },
  { id: "CHM-364", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quelle particule porte une charge électrique négative ?",
    a: ["Proton", "Neutron", "Électron", "Noyau"], correct: 2,
    explications: [
      "Le proton porte une charge positive.",
      "Le neutron est électriquement neutre.",
      "Correct. L'électron porte une charge négative.",
      "Le noyau est globalement positif dans un atome ordinaire."
    ] },
  { id: "CHM-365", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une réaction libère de la chaleur vers son environnement. Comment la classe-t-on ?",
    a: ["Endothermique", "Exothermique", "Neutre en matière", "Radioactive obligatoirement"], correct: 1,
    explications: [
      "Une réaction endothermique absorbe de l'énergie thermique.",
      "Correct. Une réaction exothermique libère de la chaleur vers l'extérieur.",
      "Cette expression ne décrit pas le transfert thermique.",
      "Une réaction exothermique n'est pas nécessairement radioactive."
    ] },
  { id: "CHM-366", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel ion se forme lorsqu'un atome de magnésium perd deux électrons ?",
    a: ["Mg²⁺", "Mg²⁻", "Mg⁺", "Mg⁰"], correct: 0,
    explications: [
      "Correct. La perte de deux électrons donne à l'atome une charge +2.",
      "Une perte d'électrons produit une charge positive.",
      "Une seule perte d'électron donnerait Mg⁺.",
      "L'atome n'est plus neutre après la perte de deux électrons."
    ] },
  { id: "CHM-367", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi les gaz nobles réagissent-ils généralement peu avec les autres éléments ?",
    a: ["Leur couche électronique externe est stable", "Ils n'ont aucun électron", "Ils sont tous liquides", "Ils possèdent toujours une charge positive"], correct: 0,
    explications: [
      "Correct. Leur couche électronique externe est généralement complète, ce qui les rend peu réactifs.",
      "Les gaz nobles possèdent des électrons.",
      "À température ambiante, les gaz nobles sont gazeux.",
      "Les atomes de gaz nobles sont généralement neutres."
    ] },
  { id: "CHM-368", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Que montre un précipité qui apparaît après le mélange de deux solutions ?",
    a: ["La formation d'un solide peu soluble", "La disparition de toute matière", "Une vaporisation obligatoire", "Une fusion du solvant"], correct: 0,
    explications: [
      "Correct. Un précipité est un solide qui se forme dans une solution lorsqu'un produit est peu soluble.",
      "La matière ne disparaît pas.",
      "Un précipité est un solide, pas la preuve d'une vaporisation.",
      "La fusion ne décrit pas la formation d'un précipité."
    ] },
  { id: "CHM-369", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Dans la formule H₂SO₄, combien d'atomes sont présents au total dans une molécule ?",
    a: ["3", "5", "7", "9"], correct: 2,
    explications: [
      "3 ne compte pas tous les atomes de la formule.",
      "5 oublie certains atomes d'oxygène.",
      "Correct. Il y a 2 H + 1 S + 4 O, soit 7 atomes.",
      "9 est supérieur au total indiqué par les indices."
    ] },
  { id: "CHM-370", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel facteur peut accélérer la dissolution du sucre dans l'eau ?",
    a: ["Agiter la solution", "Utiliser des morceaux plus gros", "Refroidir fortement l'eau", "Empêcher tout contact avec l'eau"], correct: 0,
    explications: [
      "Correct. L'agitation renouvelle le contact entre l'eau et le sucre, ce qui accélère la dissolution.",
      "Des morceaux plus gros se dissolvent généralement plus lentement.",
      "Le refroidissement ralentit généralement la dissolution.",
      "Sans contact avec l'eau, le sucre ne peut pas se dissoudre."
    ] },
  { id: "CHM-371", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel type de liaison se forme généralement entre un métal et un non-métal ?",
    a: ["Liaison ionique", "Liaison métallique uniquement", "Liaison hydrogène uniquement", "Aucune liaison possible"], correct: 0,
    explications: [
      "Correct. Un métal peut céder des électrons à un non-métal, formant des ions attirés électriquement.",
      "La liaison métallique concerne principalement les atomes métalliques.",
      "La liaison hydrogène est une interaction particulière entre molécules.",
      "Les métaux et non-métaux peuvent former des composés ioniques."
    ] },
  { id: "CHM-372", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Si on double le volume d'une solution sans ajouter de soluté, que devient sa concentration ?",
    a: ["Elle double", "Elle est divisée par deux", "Elle reste toujours identique", "Elle devient nulle"], correct: 1,
    explications: [
      "La concentration diminue lorsque le volume augmente à quantité de soluté constante.",
      "Correct. C = n/V : doubler le volume divise la concentration par deux.",
      "La concentration dépend du volume de la solution.",
      "La solution contient encore du soluté."
    ] },
  { id: "CHM-373", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Quel gaz est nécessaire à la respiration cellulaire aérobie ?",
    a: ["Dioxygène", "Diazote", "Hélium", "Dioxyde de carbone uniquement"], correct: 0,
    explications: [
      "Correct. Le dioxygène intervient dans la respiration cellulaire aérobie.",
      "Le diazote de l'air n'est pas utilisé directement pour cette respiration.",
      "L'hélium n'est pas un gaz respiratoire cellulaire.",
      "Le CO₂ est principalement un produit de la respiration cellulaire."
    ] },
  { id: "CHM-374", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Une substance possède un pH de 9. Quelle est sa nature à température ambiante ?",
    a: ["Acide", "Neutre", "Basique", "Toujours dangereuse"], correct: 2,
    explications: [
      "Un pH inférieur à 7 indique une solution acide.",
      "Un pH proche de 7 indique une solution neutre.",
      "Correct. Un pH supérieur à 7 indique une solution basique.",
      "Le pH seul ne permet pas de conclure qu'une substance est toujours dangereuse."
    ] },
  { id: "CHM-375", matiere: "Chimie", niveau_scolaire: "primaire", difficulte: 3,
    q: "Pourquoi faut-il équilibrer une équation chimique ?",
    a: ["Pour respecter la conservation des atomes", "Pour changer les éléments présents", "Pour supprimer les produits", "Pour rendre la réaction plus chaude"], correct: 0,
    explications: [
      "Correct. Le nombre de chaque type d'atome doit être identique des deux côtés de l'équation.",
      "Équilibrer ne transforme pas un élément en un autre.",
      "Les produits restent présents dans l'équation.",
      "L'équilibrage ne modifie pas directement la température."
    ] }
];
