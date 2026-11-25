const fs = require("fs");
const vm = require("vm");

const files = Array.from({length: 8}, (_, i) =>
  `mathematiques_moyen_p${i + 1}.js`
);

const names = Array.from({length: 8}, (_, i) =>
  `mathematiquesMoyenP${i + 1}`
);

let source = "";
for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log("FICHYE MANKE:", file);
    process.exit(1);
  }
  source += fs.readFileSync(file, "utf8") + "\n";
}

const expression = `JSON.stringify([${names.join(",")}])`;
const banks = JSON.parse(vm.runInNewContext(source + "\n" + expression));

const questions = banks.flat();
const ids = questions.map(q => q.id);
const unique = new Set(ids);
const errors = [];

if (questions.length !== 400) {
  errors.push(`Kantite total la se ${questions.length}, olye 400.`);
}

if (unique.size !== questions.length) {
  errors.push("Gen ID ki repete.");
}

for (let n = 171; n <= 570; n++) {
  if (!unique.has(`MAT-${n}`)) {
    errors.push(`ID ki manke: MAT-${n}`);
  }
}

questions.forEach(q => {
  if (q.difficulte !== 3) errors.push(`${q.id}: nivo pa MOYEN`);
  if (!Array.isArray(q.a) || q.a.length !== 4) errors.push(`${q.id}: pa gen 4 chwa`);
  if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct > 3) {
    errors.push(`${q.id}: endis bon repons lan pa valab`);
  }
  if (!q.explanation) errors.push(`${q.id}: eksplikasyon manke`);
});

const html = fs.readFileSync("index.html", "utf8");
const solo = fs.readFileSync("solo.js", "utf8");

files.forEach((file, i) => {
  if (!html.includes(`<script src="${file}"></script>`)) {
    errors.push(`${file}: pa entegre nan index.html`);
  }
  if (!solo.includes(names[i])) {
    errors.push(`${names[i]}: pa anrejistre nan solo.js`);
  }
});

console.log("\n--- RAPÒ VERIFIKASYON MOYEN ---");
banks.forEach((bank, i) => {
  console.log(`P${i + 1}: ${bank.length} kesyon`);
});
console.log("Total:", questions.length);
console.log("ID diferan:", unique.size);
console.log("Premye ID:", ids[0]);
console.log("Dènye ID:", ids[ids.length - 1]);

if (errors.length) {
  console.log("\nPWOBLÈM JWENN:");
  errors.forEach(e => console.log("-", e));
  process.exit(1);
}

console.log("\nOK: Tout 400 kesyon yo pase kontwòl estrikti ak entegrasyon.");
