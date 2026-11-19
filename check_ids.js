const fs = require("fs");

function load(file) {
  const src = fs.readFileSync(file, "utf8");
  const m = src.match(/const\s+([A-Z0-9_]+)\s*=\s*\[/);
  return new Function(src + "\nreturn " + m[1] + ";")();
}

const base = ["questions.js", "questions_niveau2.js", "questions_niveau1_suite.js"];
const subj = fs.readdirSync(".").filter(f => /^(physique|chimie|sciences)_.*\.js$/.test(f)).sort();
const EXPL = new Function(fs.readFileSync("explications_phy_p0.js", "utf8") + "\nreturn EXPLICATIONS_PHY_P0;")();
const all = [...base, ...subj].flatMap(load);
for (const q of all) if (!q.explications && EXPL[q.id]) q.explications = EXPL[q.id];

const PREFIX = {
  "Chimie": "CHM", "Physique": "PHY", "Mathématiques": "MAT",
  "Biologie": "BIO", "Français": "FRA", "Anglais": "ANG", "Géographie": "GEO",
  "Histoire": "HIS", "Éducation civique": "CIV",
  "Sociologie et éducation civique": "SOC", "Économie": "ECO",
};
const seen = new Set();
let errors = 0;
for (const q of all) {
  const base = q.matiere.split(" - ")[0];
  if (!/^[A-Z]{3}-\d{3}$/.test(q.id)) { console.log("Fòma ID pa bon:", q.id); errors++; }
  if (PREFIX[base] !== q.id.slice(0, 3)) { console.log("Prefiks pa koresponn:", q.id, q.matiere); errors++; }
  if (seen.has(q.id)) { console.log("ID doublé:", q.id); errors++; }
  seen.add(q.id);
  if (q.a.length !== 4) { console.log("Pa 4 repons:", q.id); errors++; }
  if (q.correct < 0 || q.correct > 3) { console.log("Bon repons pa valab:", q.id); errors++; }
  if (!q.explications && !q.explanation) { console.log("Pa gen eksplikasyon:", q.id); errors++; }
  if (q.explications && q.explications.length !== 4) { console.log("Pa 4 eksplikasyon:", q.id); errors++; }
}
const par = {};
for (const q of all) par[q.matiere] = (par[q.matiere] || 0) + 1;
console.log("Total:", all.length, par);
console.log(errors ? errors + " erè" : "OK");
