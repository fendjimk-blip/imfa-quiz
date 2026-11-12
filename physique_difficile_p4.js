// IMFA QUIZ - PHYSIQUE, DIFFICILE, Partie 4 (PHY-561 a PHY-580)
// difficulte 4 = nivo DIFFICILE : rezònman ak kalkil plis konplèks
const PHYSIQUE_DIFFICILE_P4 = [
  { id: "PHY-561", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un vélo qui roule ne tombe-t-il pas quand il est bien équilibré ?",
    a: ["Le mouvement rend le vélo plus stable grâce à l'effet gyroscopique et à la direction des roues", "Le vélo produit une force magnétique", "L'air soulève le vélo", "La gravité est plus faible pour un vélo en mouvement"], correct: 0,
    explications: [
      "Correct. La rotation des roues et la direction donnent une stabilité qui aide à garder l'équilibre.",
      "Le vélo ne produit pas de force magnétique pour rester debout.",
      "L'air ne soulève pas le vélo, il l'oppose plutôt au mouvement.",
      "La gravité reste la même pour un vélo, qu'il roule ou non."
    ] },
  { id: "PHY-562", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi entend-on mieux un son dans l'eau que dans l'air à distance égale ?",
    a: ["Le son est plus fort dans l'eau à cause de la lumière", "Le son se propage plus vite dans l'eau, et il s'atténue moins", "L'eau amplifie la chaleur du son", "Le son ne voyage que dans l'eau"], correct: 1,
    explications: [
      "La lumière n'a pas de rôle dans la propagation du son.",
      "Correct. Le son va environ 4 fois plus vite dans l'eau que dans l'air et il est moins atténué.",
      "Le son n'a pas de chaleur qui serait amplifiée par l'eau.",
      "Le son voyage dans l'air comme dans l'eau, il ne se limite pas à l'eau."
    ] },
  { id: "PHY-563", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une voiture de 1 000 kg passe de 0 à 20 m/s en 10 s. Quelle est la force moyenne exercée par le moteur, en négligeant les frottements ?",
    a: ["2 000 N", "200 N", "20 000 N", "100 N"], correct: 0,
    explications: [
      "Correct. a = Δv / Δt = 20 / 10 = 2 m/s², donc F = m × a = 1 000 × 2 = 2 000 N.",
      "200 N correspond à une erreur sur l'accélération.",
      "20 000 N correspond à m × Δv, il faut diviser par le temps.",
      "100 N correspond à une erreur sur la masse et sur l'accélération."
    ] },
  { id: "PHY-564", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi l'eau de mer est-elle plus dense que l'eau douce ?",
    a: ["Elle contient du sel dissous, ce qui augmente sa masse pour le même volume", "Elle est plus froide par nature", "Elle contient plus d'air", "Elle est plus légère à cause du sel"], correct: 0,
    explications: [
      "Correct. Le sel dissous ajoute de la masse à un même volume d'eau, donc la densité augmente.",
      "La température n'est pas la cause principale de la densité plus élevée de l'eau de mer.",
      "L'air contenu dans l'eau n'explique pas sa densité plus élevée.",
      "Le sel rend l'eau plus lourde, pas plus légère."
    ] },
  { id: "PHY-565", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un bloc de 4 kg est tiré à vitesse constante sur une table, avec une force de 12 N. Quelle est la force de frottement ?",
    a: ["12 N", "48 N", "4 N", "0 N"], correct: 0,
    explications: [
      "Correct. À vitesse constante, la force de frottement est égale et opposée à la force de traction, donc 12 N.",
      "48 N correspond à m × F, ce qui n'est pas la formule.",
      "4 N correspond à la masse en kg, ce n'est pas une force de frottement.",
      "0 N serait le cas sans frottement, mais ici le frottement existe."
    ] },
  { id: "PHY-566", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un morceau de sucre dans l'eau chaude se dissout-il plus vite que dans l'eau froide ?",
    a: ["L'eau chaude est plus dense", "Les particules d'eau chaude bougent plus vite et dissolvent le sucre plus rapidement", "Le sucre fond sous la lumière", "L'eau froide repousse le sucre"], correct: 1,
    explications: [
      "L'eau chaude est en fait moins dense que l'eau froide, ce n'est pas la cause.",
      "Correct. Plus la température est élevée, plus les particules bougent vite et dissolvent le sucre rapidement.",
      "Le sucre ne fond pas sous la lumière dans ce phénomène.",
      "L'eau froide n'exerce pas de répulsion sur le sucre."
    ] },
  { id: "PHY-567", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 6 kg est soulevé de 3 m à vitesse constante (g = 10 N/kg). Quel travail la force de levage fournit-elle ?",
    a: ["18 J", "180 J", "18 000 J", "2 J"], correct: 1,
    explications: [
      "18 J oublie g dans le calcul du poids.",
      "Correct. F = m × g = 6 × 10 = 60 N, et W = F × d = 60 × 3 = 180 J.",
      "18 000 J correspond à une erreur d'un facteur 100.",
      "2 J correspond à m ÷ d, ce qui n'est pas la formule."
    ] },
  { id: "PHY-568", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi la glace à la surface d'un étang gèle-t-elle avant le fond ?",
    a: ["L'eau froide monte à la surface, et la glace se forme en premier car l'eau de surface est la plus froide", "La glace tombe au fond", "L'eau de surface est plus chaude", "Le fond est plus froid que la surface"], correct: 0,
    explications: [
      "Correct. L'eau la plus dense, proche de 4 °C, descend, et la surface refroidit en premier et gèle.",
      "La glace flotte, elle ne tombe pas au fond.",
      "L'eau de surface est la première à se refroidir, donc elle n'est pas plus chaude.",
      "Le fond est généralement plus chaud que la surface en hiver."
    ] },
  { id: "PHY-569", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un courant de 4 A traverse une résistance de 5 Ω pendant 10 s. Quelle énergie est dissipée sous forme de chaleur ?",
    a: ["800 J", "200 J", "2 000 J", "80 J"], correct: 0,
    explications: [
      "Correct. P = R × I² = 5 × 16 = 80 W, et E = P × t = 80 × 10 = 800 J.",
      "200 J correspond à R × I × t / ... sans le carré de l'intensité.",
      "2 000 J correspond à une erreur d'un facteur 2,5 sur la puissance.",
      "80 J correspond à la puissance seule, sans multiplier par le temps."
    ] },
  { id: "PHY-570", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une personne qui se tient debout dans un bus qui freine brusquement avance-t-elle vers l'avant ?",
    a: ["Elle est attirée par le moteur", "Son corps tend à garder sa vitesse, c'est l'inertie", "Le bus la pousse vers l'avant", "L'air la pousse vers l'avant"], correct: 1,
    explications: [
      "Le moteur n'attire pas les passagers.",
      "Correct. Par inertie, le corps garde son mouvement, il continue vers l'avant quand le bus ralentit.",
      "Le bus freine, il ne pousse pas les passagers vers l'avant.",
      "L'air n'est pas la cause principale de ce mouvement."
    ] },
  { id: "PHY-571", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une voiture de 800 kg roule à 15 m/s. Quelle énergie cinétique faut-il dissiper pour l'arrêter ?",
    a: ["90 000 J", "12 000 J", "180 000 J", "7 500 J"], correct: 0,
    explications: [
      "Correct. Ec = ½ × 800 × 15² = ½ × 800 × 225 = 90 000 J.",
      "12 000 J correspond à m × v, sans le carré ni le facteur ½.",
      "180 000 J oublie le facteur ½ dans la formule.",
      "7 500 J correspond à une erreur de calcul sur le carré de la vitesse."
    ] },
  { id: "PHY-572", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi une lampe LED consomme-t-elle moins d'énergie qu'une lampe à incandescence pour la même lumière ?",
    a: ["Elle produit moins de lumière", "Elle transforme davantage l'électricité en lumière et moins en chaleur", "Elle utilise l'air comme source d'énergie", "Elle ne fonctionne qu'avec le soleil"], correct: 1,
    explications: [
      "Une LED produit autant de lumière, elle la produit plus efficacement.",
      "Correct. La LED transforme une grande partie de l'électricité en lumière, la lampe à incandescence perd beaucoup en chaleur.",
      "L'air n'est pas une source d'énergie pour la LED.",
      "Une LED fonctionne avec l'électricité, pas uniquement avec le soleil."
    ] },
  { id: "PHY-573", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 2 kg a une énergie potentielle de 400 J par rapport au sol (g = 10 N/kg). À quelle hauteur se trouve-t-il ?",
    a: ["20 m", "2 m", "200 m", "8 m"], correct: 0,
    explications: [
      "Correct. Ep = m × g × h, donc h = Ep / (m × g) = 400 / (2 × 10) = 20 m.",
      "2 m correspond à une erreur sur la division par g.",
      "200 m correspond à Ep / 2, sans diviser par g.",
      "8 m correspond à une erreur de calcul sur la division."
    ] },
  { id: "PHY-574", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un miroir concave peut-il agrandir l'image d'un visage placé près de lui ?",
    a: ["Il produit une image réelle plus petite", "Il forme une image virtuelle agrandie quand l'objet est proche du miroir", "Il change la couleur du visage", "Il fait disparaître l'image"], correct: 1,
    explications: [
      "Une image réelle plus petite correspond à un objet loin du miroir, ce n'est pas le cas ici.",
      "Correct. Quand l'objet est entre le miroir et son foyer, l'image est virtuelle, droite et agrandie.",
      "Le miroir ne change pas la couleur du visage.",
      "Le miroir ne fait pas disparaître l'image, il la forme."
    ] },
  { id: "PHY-575", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une résistance de 10 Ω est alimentée sous 20 V pendant 30 s. Quelle quantité de chaleur est dégagée ?",
    a: ["1 200 J", "600 J", "6 000 J", "60 J"], correct: 0,
    explications: [
      "Correct. P = U² / R = 20² / 10 = 40 W, puis E = P × t = 40 × 30 = 1 200 J.",
      "600 J correspond à U × t, sans tenir compte de la résistance.",
      "6 000 J correspond à une erreur d'un facteur 5 sur l'énergie.",
      "60 J correspond à une erreur sur la puissance et sur la durée."
    ] },
  { id: "PHY-576", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un pneu de voiture doit-il être gonflé à une pression précise ?",
    a: ["Pour que la voiture soit plus lourde", "Pour assurer la tenue de route, l'usure et la consommation", "Pour produire de l'électricité", "Pour changer la couleur de la route"], correct: 1,
    explications: [
      "Le pneu n'a pas pour but d'alourdir la voiture.",
      "Correct. Une pression adaptée améliore l'adhérence, réduit l'usure et la consommation d'essence.",
      "Un pneu ne produit pas d'électricité.",
      "La couleur de la route ne dépend pas de la pression du pneu."
    ] },
  { id: "PHY-577", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un solide de masse 300 g a un volume de 60 cm³. Va-t-il flotter sur l'eau (ρ_eau = 1 g/cm³) ?",
    a: ["Non, il coule, car sa masse volumique est de 5 g/cm³", "Oui, il flotte, car sa masse volumique est de 0,2 g/cm³", "Oui, il flotte, car sa masse volumique est de 5 g/cm³", "Non, il coule, car sa masse volumique est de 0,2 g/cm³"], correct: 0,
    explications: [
      "Correct. ρ = m / V = 300 / 60 = 5 g/cm³. Comme 5 > 1, le solide est plus dense que l'eau et il coule.",
      "La masse volumique n'est pas 0,2 g/cm³. Et un solide plus dense que l'eau ne flotte pas.",
      "Un solide de 5 g/cm³ est plus dense que l'eau, il ne peut donc pas flotter.",
      "La masse volumique n'est pas 0,2 g/cm³, ce résultat correspond à V / m, l'inverse de la formule."
    ] },
  { id: "PHY-578", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Une onde a une période de 0,004 s. Quelle est sa fréquence ?",
    a: ["250 Hz", "0,004 Hz", "4 000 Hz", "25 Hz"], correct: 0,
    explications: [
      "Correct. f = 1 / T = 1 / 0,004 = 250 Hz.",
      "0,004 Hz correspond à la période seule, il faut la convertir en fréquence.",
      "4 000 Hz correspond à 1 ÷ 0,00025, ce qui est faux.",
      "25 Hz correspond à 1 ÷ 0,04, ce qui est faux."
    ] },
  { id: "PHY-579", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Pourquoi un objet métallique chauffé à rouge émet-il de la lumière ?",
    a: ["Le métal absorbe la lumière du jour", "Il émet un rayonnement thermique visible quand il est très chaud", "Il produit de l'électricité", "Il se transforme en gaz lumineux"], correct: 1,
    explications: [
      "Le métal ne fonctionne pas comme un récepteur de lumière du jour dans ce phénomène.",
      "Correct. Un corps très chaud émet un rayonnement thermique, dont une partie est visible.",
      "Le métal chauffé ne produit pas d'électricité ici.",
      "Le métal ne devient pas un gaz lumineux, il reste solide en émettant de la lumière."
    ] },
  { id: "PHY-580", matiere: "Physique", niveau_scolaire: "primaire", difficulte: 4,
    q: "Un objet de 5 kg glisse sans frottement le long d'une pente de 5 m de haut, en partant du repos (g = 10 m/s²). Quelle est sa vitesse en bas de la pente ?",
    a: ["10 m/s", "50 m/s", "5 m/s", "25 m/s"], correct: 0,
    explications: [
      "Correct. Conservation de l'énergie : v² = 2 × g × h = 2 × 10 × 5 = 100, donc v = 10 m/s.",
      "50 m/s correspond à g × h, il manque le facteur 2 et la racine carrée.",
      "5 m/s correspond à la hauteur seule, ce qui n'est pas la formule.",
      "25 m/s correspond à h², ce qui n'est pas la formule de la vitesse."
    ] }

];
