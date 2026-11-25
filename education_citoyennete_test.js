const educationCitoyennete = [
  {
    id: "CIT-001",
    matiere: "Éducation à la citoyenneté",
    niveau_scolaire: "secondaire",
    difficulte: 1,
    q: "Pourquoi un bon leader doit-il écouter les membres de son équipe avant de prendre une décision ?",
    a: [
      "Pour comprendre leurs idées et leurs préoccupations",
      "Pour éviter de prendre ses responsabilités",
      "Pour imposer toujours son opinion",
      "Pour retarder volontairement le travail"
    ],
    correct: 0,
    explications: [
      "Koute ekip la ede lidè a konprann diferan opinyon epi pran pi bon desizyon.",
      "Yon lidè dwe pran responsablite desizyon li yo.",
      "Yon bon lidè pa dwe enpoze opinyon li san reflechi.",
      "Koute ekip la pa vle di retade travay la volontèman."
    ]
  },
  {
    id: "CIT-002",
    matiere: "Éducation à la citoyenneté",
    niveau_scolaire: "secondaire",
    difficulte: 2,
    q: "Dans une communauté, deux groupes sont en désaccord sur un projet. Quelle démarche favorise une solution durable ?",
    a: [
      "Écarter le groupe minoritaire",
      "Organiser un dialogue pour examiner les besoins des deux groupes",
      "Laisser le conflit s'aggraver",
      "Imposer une décision sans consultation"
    ],
    correct: 1,
    explications: [
      "Mete yon gwoup sou kote ka ogmante konfli a.",
      "Dyalòg pèmèt chak gwoup esplike bezwen li epi chèche yon solisyon ki jis.",
      "Kite konfli a grandi ka rann pwoblèm nan pi grav.",
      "Yon desizyon san konsiltasyon ka pa pran enterè kominote a an konsiderasyon."
    ]
  },
  {
    id: "CIT-003",
    matiere: "Éducation à la citoyenneté",
    niveau_scolaire: "secondaire",
    difficulte: 3,
    q: "Un responsable découvre qu'un projet communautaire a dépassé son budget. Quelle est la première attitude responsable ?",
    a: [
      "Cacher les dépenses supplémentaires",
      "Accuser immédiatement les autres",
      "Examiner les comptes et informer les personnes concernées",
      "Abandonner le projet sans explication"
    ],
    correct: 2,
    explications: [
      "Kache depans yo kraze transparans ak konfyans.",
      "Fòk gen verifikasyon anvan yo akize nenpòt moun.",
      "Verifye kont yo epi enfòme moun konsène yo se yon demach transparan ak responsab.",
      "Abandone pwojè a san eksplikasyon pa rezoud pwoblèm nan."
    ]
  }
];

if (educationCitoyennete.length !== 3) {
  throw new Error("Kantite kesyon an pa kòrèk");
}

for (const q of educationCitoyennete) {
  if (q.a.length !== 4 || q.explications.length !== 4 ||
      q.correct < 0 || q.correct > 3) {
    throw new Error("Estrikti pa kòrèk: " + q.id);
  }
}

console.log("TÈS OK:", educationCitoyennete.length, "kesyon valide.");
