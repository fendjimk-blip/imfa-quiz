// IMFA QUIZ - PHYSIQUE, DIFFICILE, Partie 1 (PHY-501 a PHY-520)
// difficulte 4 = nivo DIFFICILE : kesyon ki mande rezònman, pa sèlman memwa
const PHYSIQUE_DIFFICILE_P1 = [
  { id: "PHY-501", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une voiture met-elle plus de distance à s'arrêter sur une route mouillée ?",
    a: ["Le frottement entre les pneus et la route diminue", "La masse de la voiture augmente", "La gravité devient plus faible", "Le moteur consomme davantage"], correct: 0,
    explications: [
      "Correct. L'eau réduit l'adhérence, donc la force de frottement disponible pour freiner diminue.",
      "La masse de la voiture ne change pas avec la pluie.",
      "La gravité reste la même sur une route mouillée.",
      "Le moteur n'intervient pas directement dans la distance de freinage."
    ] },
  { id: "PHY-502", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un glaçon fond-il plus vite dans un verre d'eau tiède que dans un congélateur ?",
    a: ["La chaleur passe plus vite quand la différence de température est grande", "L'eau tiède est plus lourde", "La glace n'a pas besoin de chaleur", "Le congélateur produit de la lumière"], correct: 0,
    explications: [
      "Correct. Plus l'écart de température est grand, plus la chaleur passe vite vers le glaçon.",
      "Le poids de l'eau ne explique pas la fonte du glaçon.",
      "Toute glace fond si elle reçoit assez de chaleur, elle en a besoin pour fondre.",
      "Le congélateur ne produit pas de lumière qui ferait fondre la glace."
    ] },
  { id: "PHY-503", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une boule de fer et une boule de bois de même taille sont lâchées en même temps dans le vide. Que se passe-t-il ?",
    a: ["La boule de fer tombe plus vite", "La boule de bois tombe plus vite", "Elles tombent en même temps", "La boule de bois reste en l'air"], correct: 2,
    explications: [
      "La boule de fer est plus lourde, mais dans le vide son poids n'accélère pas sa chute plus que celui de la boule de bois.",
      "La boule de bois n'est pas plus rapide dans le vide.",
      "Correct. Dans le vide, sans frottement de l'air, tous les objets tombent avec la même accélération.",
      "Aucune boule ne reste en l'air, elles tombent toutes les deux."
    ] },
  { id: "PHY-504", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une cuillère en métal plongée dans un thé chaud finit-elle par devenir très chaude au niveau du manche ?",
    a: ["Le métal conduit bien la chaleur, qui se propage jusqu'au manche", "Le métal produit sa propre chaleur", "Le thé transforme le métal en gaz", "La cuillère absorbe la lumière"], correct: 0,
    explications: [
      "Correct. Le métal est un bon conducteur thermique, la chaleur se propage de proche en proche.",
      "Le métal ne produit pas de chaleur de lui-même.",
      "Le thé ne transforme pas le métal en gaz.",
      "L'absorption de lumière n'est pas la cause de l'échauffement."
    ] },
  { id: "PHY-505", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi sent-on les vibrations d'un train sur les rails avant d'entendre le bruit dans l'air ?",
    a: ["Le son se propage plus vite dans le métal que dans l'air", "Le train produit le son uniquement sous la terre", "Le métal amplifie la lumière", "L'air arrête le son"], correct: 0,
    explications: [
      "Correct. Le son voyage beaucoup plus vite dans un solide comme le métal que dans l'air.",
      "Le son ne se produit pas uniquement sous la terre, il se propage aussi dans l'air.",
      "Le métal ne concerne pas la lumière dans ce phénomène.",
      "L'air ne bloque pas le son, il le transmet à une vitesse plus lente."
    ] },
  { id: "PHY-506", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Dans une barque immobile sur un lac, une personne saute sur la rive. Que se passe-t-il pour la barque ?",
    a: ["Elle reste immobile", "Elle recule légèrement", "Elle avance plus vite", "Elle disparaît"], correct: 1,
    explications: [
      "La barque ne reste pas immobile, car la personne la pousse en sautant.",
      "Correct. Par le principe d'action-réaction, la barque recule quand la personne saute vers l'avant.",
      "La barque ne peut pas avancer plus vite à cause de ce saut, elle recule.",
      "La barque ne disparaît pas."
    ] },
  { id: "PHY-507", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une fusée peut-elle avancer dans le vide spatial, où il n'y a pas d'air ?",
    a: ["Elle s'appuie sur l'air extérieur", "Elle s'appuie sur les étoiles", "Elle éjecte des gaz vers l'arrière, ce qui la pousse vers l'avant", "Elle est attirée par la Lune"], correct: 2,
    explications: [
      "Il n'y a pas d'air dans le vide spatial, la fusée ne peut pas s'appuyer dessus.",
      "Les étoiles ne poussent pas la fusée.",
      "Correct. En éjectant des gaz vers l'arrière, la fusée reçoit une poussée vers l'avant (action-réaction).",
      "La Lune attire la fusée, mais ce n'est pas la raison pour laquelle elle avance."
    ] },
  { id: "PHY-508", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un talon aiguille enfonce-t-il davantage dans le sol qu'une semelle plate, pour la même personne ?",
    a: ["La force est plus petite", "La force est répartie sur une surface plus grande", "Le talon est plus léger", "Le sol est plus dur sous le talon"], correct: 1,
    explications: [
      "La force exercée par la personne reste la même, quel que soit le pied.",
      "Correct. Avec une surface plus petite, la même force donne une pression plus grande, ce qui enfonce davantage.",
      "Le poids du talon ne change pas le résultat, c'est la surface qui compte.",
      "Le sol n'est pas plus dur sous le talon, c'est la pression qui augmente."
    ] },
  { id: "PHY-509", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Deux ampoules identiques sont branchées en série sur une même pile. Que peut-on dire de leur luminosité ?",
    a: ["Elles brillent toutes les deux avec la même intensité", "L'une brille toujours beaucoup plus que l'autre", "Elles ne brillent jamais", "La première ne reçoit pas de courant"], correct: 0,
    explications: [
      "Correct. Dans un circuit en série, le même courant traverse les deux ampoules identiques, elles brillent donc de la même façon.",
      "Si les ampoules sont identiques, aucune ne doit briller beaucoup plus que l'autre.",
      "Elles brillent normalement, tant que le circuit est fermé.",
      "Dans un circuit en série, le courant passe dans les deux ampoules."
    ] },
  { id: "PHY-510", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un ballon gonflé à l'hélium monte-t-il dans l'air ?",
    a: ["Il est attiré par le Soleil", "L'hélium est moins dense que l'air, la poussée d'Archimède est plus forte que son poids", "L'hélium repousse la Terre", "Le ballon produit de la chaleur"], correct: 1,
    explications: [
      "Le Soleil n'attire pas un ballon de cette manière.",
      "Correct. Le ballon est moins lourd que l'air qu'il déplace, donc la poussée vers le haut l'emporte sur son poids.",
      "L'hélium ne repousse pas la Terre, c'est un phénomène lié à la poussée de l'air.",
      "Le ballon ne produit pas de chaleur qui le ferait monter."
    ] },
  { id: "PHY-511", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un thermos garde-t-il les boissons chaudes pendant longtemps ?",
    a: ["Il produit de la chaleur en continu", "Le vide entre ses parois limite les transferts de chaleur", "La paroi en métal emprisonne la lumière", "Le couvercle retient le son"], correct: 1,
    explications: [
      "Un thermos ne produit pas de chaleur, il évite de la perdre.",
      "Correct. Le vide entre les deux parois bloque la conduction et la convection, ce qui limite la perte de chaleur.",
      "La lumière n'a pas de rôle dans la conservation de la chaleur d'un thermos.",
      "Le son n'a pas de lien avec la température de la boisson."
    ] },
  { id: "PHY-512", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une lentille convergente peut-elle enflammer une feuille de papier au soleil ?",
    a: ["Elle produit sa propre chaleur", "Elle concentre la lumière du Soleil en un petit point très chaud", "Elle absorbe le son", "Elle fait tourner la Terre"], correct: 1,
    explications: [
      "La lentille ne produit pas de chaleur, elle la concentre.",
      "Correct. La lentille convergente rassemble les rayons du Soleil en un point, où l'énergie devient suffisante pour brûler le papier.",
      "Le son n'intervient pas dans ce phénomène.",
      "La lentille ne fait pas tourner la Terre."
    ] },
  { id: "PHY-513", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Dans un circuit en série, si une ampoule grille et coupe le circuit, que se passe-t-il pour les autres ampoules ?",
    a: ["Elles s'éteignent toutes", "Elles brillent plus fort", "Seule la grillée s'éteint", "Elles deviennent magnétiques"], correct: 0,
    explications: [
      "Correct. Dans un circuit en série, il n'y a qu'un seul chemin pour le courant, si ce chemin est coupé, tout s'éteint.",
      "Le courant ne peut pas augmenter, puisque le circuit est coupé.",
      "Dans un circuit en série, une seule coupure interrompt le courant partout.",
      "Une ampoule ne devient pas magnétique à cause d'une coupure."
    ] },
  { id: "PHY-514", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Dans un circuit en dérivation (parallèle), si une lampe grille, que se passe-t-il pour les autres ?",
    a: ["Elles s'éteignent toutes", "Les autres continuent de briller", "Elles clignotent", "Elles changent de couleur"], correct: 1,
    explications: [
      "Dans un circuit en dérivation, chaque lampe a son propre chemin, elles ne s'éteignent pas toutes.",
      "Correct. Chaque branche reste alimentée, donc les autres lampes continuent de briller.",
      "Le clignotement n'est pas causé par une lampe grillée dans ce montage.",
      "Une lampe grillée ne change pas la couleur des autres."
    ] },
  { id: "PHY-515", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une balle lâchée d'une certaine hauteur perd-elle de l'énergie pendant sa chute, si l'on néglige les frottements ?",
    a: ["Oui, elle disparaît", "Non, son énergie potentielle se transforme en énergie cinétique", "Oui, elle se transforme en lumière", "Non, car elle ne tombe pas"], correct: 1,
    explications: [
      "L'énergie ne disparaît pas, elle change de forme.",
      "Correct. En chutant, l'énergie potentielle diminue et l'énergie cinétique augmente, la somme reste la même sans frottement.",
      "Dans ce cas, la balle ne transforme pas son énergie en lumière.",
      "La balle tombe bien, c'est justement ce qui permet cette transformation."
    ] },
  { id: "PHY-516", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une voiture consomme-t-elle davantage d'énergie à grande vitesse ?",
    a: ["La résistance de l'air augmente avec la vitesse", "L'air diminue la masse de la voiture", "L'air produit uniquement de la chaleur", "La vitesse ne change rien à la consommation"], correct: 0,
    explications: [
      "Correct. Plus on roule vite, plus l'air oppose une résistance forte, et le moteur doit fournir plus d'effort.",
      "L'air ne modifie pas la masse de la voiture.",
      "La chaleur n'est pas la seule cause, c'est surtout la résistance de l'air qui augmente.",
      "La vitesse change beaucoup la consommation, notamment à cause de la résistance de l'air."
    ] },
  { id: "PHY-517", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet flotte immobile sur l'eau. Quelle est la relation entre son poids et la poussée d'Archimède ?",
    a: ["Le poids est plus grand", "La poussée est plus grande", "Elles sont égales", "Il n'y a pas de poussée"], correct: 2,
    explications: [
      "Si le poids était plus grand, l'objet coulerait.",
      "Si la poussée était plus grande, l'objet monterait davantage à la surface.",
      "Correct. Un objet qui flotte immobile a un poids égal à la poussée d'Archimède.",
      "Il y a bien une poussée, c'est elle qui permet à l'objet de flotter."
    ] },
  { id: "PHY-518", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi l'eau qui bout à la pression normale reste-t-elle à 100 °C même si le feu est plus fort ?",
    a: ["L'eau refuse la chaleur", "L'énergie apportée sert à transformer l'eau en vapeur", "Le feu s'éteint", "La casserole absorbe toute la chaleur"], correct: 1,
    explications: [
      "L'eau ne refuse pas la chaleur, elle la reçoit.",
      "Correct. Pendant l'ébullition, l'énergie sert à changer l'état de l'eau en vapeur, sa température reste donc stable.",
      "Le feu ne s'éteint pas à cause de l'ébullition.",
      "La casserole ne garde pas toute la chaleur, elle la transmet à l'eau."
    ] },
  { id: "PHY-519", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi entend-on le tonnerre plusieurs secondes après avoir vu l'éclair, quand l'orage est loin ?",
    a: ["Le son est beaucoup plus lent que la lumière, et l'orage est loin", "La lumière est plus lente que le son", "Le tonnerre voyage sous la terre", "Les nuages ralentissent la lumière"], correct: 0,
    explications: [
      "Correct. La lumière arrive presque instantanément, tandis que le son met du temps à parcourir la distance, surtout si l'orage est loin.",
      "C'est l'inverse : la lumière est beaucoup plus rapide que le son.",
      "Le tonnerre ne voyage pas sous la terre, il se propage dans l'air.",
      "Les nuages ne ralentissent pas la lumière de cette manière."
    ] },
  { id: "PHY-520", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Si l'on coupe un aimant en deux morceaux, combien de pôles obtient-on ?",
    a: ["Un seul pôle nord", "Deux aimants, chacun avec un pôle nord et un pôle sud", "Un pôle nord et aucun pôle sud", "Quatre pôles isolés"], correct: 1,
    explications: [
      "Un aimant n'a jamais un seul pôle, il en a toujours deux.",
      "Correct. Chaque morceau devient un aimant complet, avec un pôle nord et un pôle sud.",
      "Un morceau n'a pas un seul pôle, il garde les deux.",
      "On n'obtient pas des pôles isolés, chaque morceau reste un aimant avec deux pôles."
    ] }
];
