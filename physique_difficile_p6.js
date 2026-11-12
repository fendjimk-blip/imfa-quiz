// IMFA QUIZ - PHYSIQUE, DIFFICILE, Partie 6 (PHY-601 a PHY-620)
// difficulte 4 = nivo DIFFICILE : rezònman ak kalkil plis konplèks
const PHYSIQUE_DIFFICILE_P6 = [
  { id: "PHY-601", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un ressort de raideur 100 N/m est allongé de 10 cm. Quelle est la force de rappel ?",
    a: ["1 N", "10 N", "100 N", "0,1 N"], correct: 1,
    explications: [
      "1 N correspondrait à un allongement de 1 cm, pas de 10 cm.",
      "Correct. F = k × x = 100 × 0,1 = 10 N.",
      "100 N correspond à k seul, sans multiplier par l'allongement.",
      "0,1 N correspond à x seul, sans multiplier par k."
    ] },
  { id: "PHY-602", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 4 kg tombe de 5 m sans frottement (g = 10 m/s²). Quelle est son énergie cinétique juste avant le sol ?",
    a: ["20 J", "200 J", "50 J", "2 000 J"], correct: 1,
    explications: [
      "20 J correspond à m × g, il manque la hauteur.",
      "Correct. Toute l'énergie potentielle devient cinétique : Ec = m × g × h = 4 × 10 × 5 = 200 J.",
      "50 J correspond à h × 10, il manque la masse.",
      "2 000 J correspond à une erreur d'un facteur 10 sur l'énergie."
    ] },
  { id: "PHY-603", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux résistances de 2 Ω et 6 Ω sont en série sous une tension de 16 V. Quelle est l'intensité du courant ?",
    a: ["8 A", "2 A", "0,5 A", "96 A"], correct: 1,
    explications: [
      "8 A correspond à la tension divisée par la résistance de 2 Ω, sans tenir compte de l'autre résistance.",
      "Correct. En série, R = 2 + 6 = 8 Ω, donc I = U / R = 16 / 8 = 2 A.",
      "0,5 A correspond à R / U, c'est l'inverse de la formule.",
      "96 A correspond à U × R, ce qui n'est pas la loi d'Ohm."
    ] },
  { id: "PHY-604", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi la pression d'un gaz augmente-t-elle quand on le comprime à température constante ?",
    a: ["Les molécules frappent les parois plus souvent", "Le gaz produit de la chaleur", "Le gaz devient plus léger", "Le gaz attire les parois"], correct: 0,
    explications: [
      "Correct. Dans un volume plus petit, les molécules rencontrent les parois plus fréquemment, donc la pression augmente.",
      "Le gaz ne produit pas de chaleur de lui-même dans ce cas.",
      "La masse du gaz ne change pas quand on le comprime, il ne devient pas plus léger.",
      "Les molécules de gaz ne sont pas attirées par les parois de cette manière."
    ] },
  { id: "PHY-605", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un courant de 3 A traverse une résistance de 4 Ω. Quelle puissance est dissipée ?",
    a: ["12 W", "36 W", "7 W", "1,33 W"], correct: 1,
    explications: [
      "12 W correspond à R × I, il manque le carré de l'intensité.",
      "Correct. P = R × I² = 4 × 3² = 4 × 9 = 36 W.",
      "7 W correspond à une addition (4 + 3), ce qui n'est pas la formule.",
      "1,33 W correspond à I / R, ce qui n'est pas la formule de la puissance."
    ] },
  { id: "PHY-606", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une onde a une longueur d'onde de 2 m et se propage à 340 m/s. Quelle est sa fréquence ?",
    a: ["680 Hz", "170 Hz", "342 Hz", "0,006 Hz"], correct: 1,
    explications: [
      "680 Hz correspond à v × λ, la formule demande une division.",
      "Correct. f = v / λ = 340 / 2 = 170 Hz.",
      "342 Hz correspond à une addition (340 + 2), ce qui est faux.",
      "0,006 Hz correspond à λ / v, c'est l'inverse de la formule."
    ] },
  { id: "PHY-607", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi l'eau est-elle plus dense à 4 °C qu'à 0 °C, quand elle est liquide ?",
    a: ["Ses molécules sont plus rapprochées jusqu'à environ 4 °C", "Elle contient plus de sel", "Elle est plus lourde à cause de la lumière", "Elle contient moins d'air"], correct: 0,
    explications: [
      "Correct. Entre 0 °C et environ 4 °C, l'eau liquide se rapproche, sa densité augmente jusqu'à un maximum vers 4 °C.",
      "L'eau douce ne contient pas de sel qui explique cet effet.",
      "La lumière n'a pas d'effet sur la masse de l'eau.",
      "La quantité d'air dissous n'est pas la cause de cette variation de densité."
    ] },
  { id: "PHY-608", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 3 kg se déplace à 4 m/s. Quelle est sa quantité de mouvement p = m × v ?",
    a: ["7 kg·m/s", "12 kg·m/s", "1,33 kg·m/s", "48 kg·m/s"], correct: 1,
    explications: [
      "7 kg·m/s correspond à une addition (3 + 4), ce qui est faux.",
      "Correct. p = m × v = 3 × 4 = 12 kg·m/s.",
      "1,33 kg·m/s correspond à v / m, c'est l'inverse de la formule.",
      "48 kg·m/s correspond à une erreur d'un facteur 4 sur le calcul."
    ] },
  { id: "PHY-609", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une voiture de 1 000 kg roule à 10 m/s et freine avec une force constante de 2 000 N. Quelle est sa distance d'arrêt ?",
    a: ["5 m", "25 m", "50 m", "250 m"], correct: 1,
    explications: [
      "5 m correspond à une erreur sur l'énergie cinétique ou sur la force.",
      "Correct. Ec = ½ × 1 000 × 10² = 50 000 J, et d = Ec / F = 50 000 / 2 000 = 25 m.",
      "50 m correspond à l'énergie cinétique divisée par 1 000, ce qui est faux.",
      "250 m correspond à une erreur d'un facteur 10 sur la distance."
    ] },
  { id: "PHY-610", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un courant de 0,2 A circule pendant 5 min. Quelle charge électrique traverse le circuit ?",
    a: ["1 C", "60 C", "1 500 C", "12 C"], correct: 1,
    explications: [
      "1 C correspond à une erreur sur la conversion des minutes en secondes.",
      "Correct. t = 5 × 60 = 300 s, donc Q = I × t = 0,2 × 300 = 60 C.",
      "1 500 C correspond à 5 × 300, ce qui est faux.",
      "12 C correspond à une erreur sur la durée (1 min au lieu de 5 min)."
    ] },
  { id: "PHY-611", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une fenêtre à double vitrage, avec une couche d'air entre les deux vitres, isole-t-elle mieux ?",
    a: ["L'air emprisonné est un mauvais conducteur de chaleur", "Le verre produit du froid", "Le double vitrage attire la lumière", "Il retient seulement le son"], correct: 0,
    explications: [
      "Correct. L'air emprisonné ralentit fortement le passage de la chaleur entre l'intérieur et l'extérieur.",
      "Le verre ne produit pas de froid.",
      "Le double vitrage ne concentre pas la lumière pour isoler.",
      "L'isolation thermique ne dépend pas seulement du son."
    ] },
  { id: "PHY-612", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 50 g a une masse volumique de 2,5 g/cm³. Quel est son volume ?",
    a: ["125 cm³", "20 cm³", "2,5 cm³", "0,05 cm³"], correct: 1,
    explications: [
      "125 cm³ correspond à m × ρ, c'est l'inverse de la formule.",
      "Correct. V = m / ρ = 50 / 2,5 = 20 cm³.",
      "2,5 cm³ correspond à la masse volumique seule, sans diviser la masse.",
      "0,05 cm³ correspond à une erreur de conversion des grammes."
    ] },
  { id: "PHY-613", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux forces opposées de 15 N et 9 N agissent sur un même objet. Quelle est la force résultante ?",
    a: ["24 N", "6 N dans le sens de la force de 15 N", "6 N dans le sens de la force de 9 N", "0 N"], correct: 1,
    explications: [
      "24 N correspond à une addition, alors que les forces sont opposées.",
      "Correct. Les forces étant opposées, on soustrait : 15 − 9 = 6 N, dans le sens de la plus grande force.",
      "Le sens de la résultante est celui de la plus grande force, pas de la plus petite.",
      "0 N serait le cas si les deux forces étaient égales."
    ] },
  { id: "PHY-614", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une lampe de 40 W est allumée pendant 2 h 30 min. Quelle énergie consomme-t-elle en kWh ?",
    a: ["0,1 kWh", "1 kWh", "100 kWh", "0,016 kWh"], correct: 0,
    explications: [
      "Correct. 40 W = 0,04 kW et 2 h 30 min = 2,5 h, donc E = 0,04 × 2,5 = 0,1 kWh.",
      "1 kWh correspond à une erreur sur la conversion des watts en kilowatts.",
      "100 kWh oublie de convertir les watts en kilowatts.",
      "0,016 kWh correspond à une erreur sur la durée."
    ] },
  { id: "PHY-615", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un pont en fer s'allonge-t-il légèrement en été ?",
    a: ["La chaleur augmente l'agitation des atomes, qui prennent plus de place", "Le fer absorbe la lumière", "Le fer devient plus lourd", "Le soleil ajoute du métal au pont"], correct: 0,
    explications: [
      "Correct. En chauffant, les atomes vibrent davantage et occupent en moyenne plus d'espace : c'est la dilatation.",
      "L'absorption de la lumière ne suffit pas à expliquer l'allongement du pont.",
      "La masse du pont ne change pas avec la chaleur.",
      "Le soleil n'ajoute pas de matière au pont."
    ] },
  { id: "PHY-616", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une fusée accélère en éjectant des gaz vers l'arrière. Quel principe explique cette accélération ?",
    a: ["Le principe d'action-réaction", "La loi d'Ohm", "Le principe d'Archimède", "La loi de Boyle-Mariotte"], correct: 0,
    explications: [
      "Correct. Les gaz sont poussés vers l'arrière, et la fusée reçoit une réaction vers l'avant.",
      "La loi d'Ohm concerne le courant électrique, pas le mouvement de la fusée.",
      "Le principe d'Archimède concerne la poussée d'un fluide sur un objet immergé.",
      "La loi de Boyle-Mariotte concerne la pression et le volume d'un gaz, elle n'explique pas la propulsion."
    ] },
  { id: "PHY-617", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 6 kg est posé sur une surface de 0,3 m² (g = 10 N/kg). Quelle est la pression exercée ?",
    a: ["20 Pa", "200 Pa", "1,8 Pa", "2 000 Pa"], correct: 1,
    explications: [
      "20 Pa correspond à une erreur d'un facteur 10 sur le poids.",
      "Correct. P = F / S = (6 × 10) / 0,3 = 60 / 0,3 = 200 Pa.",
      "1,8 Pa correspond à une multiplication par la surface, ce qui est faux.",
      "2 000 Pa correspond à une erreur sur la division par la surface."
    ] },
  { id: "PHY-618", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une onde sonore a une période de 0,01 s. Quelle est sa fréquence ?",
    a: ["0,01 Hz", "100 Hz", "10 Hz", "1 000 Hz"], correct: 1,
    explications: [
      "0,01 Hz correspond à la période seule, il faut la convertir en fréquence.",
      "Correct. f = 1 / T = 1 / 0,01 = 100 Hz.",
      "10 Hz correspond à 1 ÷ 0,1, ce qui n'est pas la période donnée.",
      "1 000 Hz correspond à 1 ÷ 0,001, ce qui est faux."
    ] },
  { id: "PHY-619", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi le vent donne-t-il une sensation de froid, même quand la température de l'air ne change pas ?",
    a: ["Il accélère l'évaporation de la sueur, qui absorbe de la chaleur", "Il produit du froid par lui-même", "Il éloigne la lumière du corps", "Il augmente la pression sur le corps"], correct: 0,
    explications: [
      "Correct. L'évaporation de la sueur absorbe de la chaleur, le vent l'accélère et le corps se refroidit davantage.",
      "Le vent ne produit pas de froid, il favorise le refroidissement du corps.",
      "La lumière n'a pas de rôle dans cette sensation de froid.",
      "La pression exercée par le vent n'est pas la cause de la sensation de froid."
    ] },
  { id: "PHY-620", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une pile de 9 V alimente un circuit de résistance 3 Ω. Quelle puissance le circuit consomme-t-il ?",
    a: ["3 W", "27 W", "12 W", "0,33 W"], correct: 1,
    explications: [
      "3 W correspond à l'intensité seule, sans tenir compte de la tension.",
      "Correct. I = U / R = 9 / 3 = 3 A, puis P = U × I = 9 × 3 = 27 W.",
      "12 W correspond à une addition (9 + 3), ce qui n'est pas la formule.",
      "0,33 W correspond à R / U, c'est l'inverse de la formule."
    ] }
];
