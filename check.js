const fs = require("fs");
const src = fs.readFileSync("questions.js", "utf8") + "\nmodule.exports = QUESTIONS;";
const fakeModule = { exports: {} };
new Function("module", src)(fakeModule);
const Q = fakeModule.exports;

const ids = new Set();
let errors = 0;
for (const q of Q) {
  if (ids.has(q.id)) { console.log("ID doublé:", q.id); errors++; }
  ids.add(q.id);
  if (q.a.length !== 4) { console.log("Pa 4 repons:", q.id); errors++; }
  if (q.correct < 0 || q.correct > 3) { console.log("Bon repons pa valab:", q.id); errors++; }
}
const par = {};
Q.forEach(q => par[q.matiere] = (par[q.matiere] || 0) + 1);
console.log("Total:", Q.length, par, errors ? `${errors} erè` : "OK");
