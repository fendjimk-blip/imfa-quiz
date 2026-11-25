// IMFA QUIZ - Pam (admin sèlman)
let isAdminUser = false;

function mkBtn(label, fn) {
  const b = document.createElement("button");
  b.textContent = label;
  b.onclick = fn;
  return b;
}

async function refreshAdminButton() {
  const b = document.getElementById("adminBtn");
  if (!b) return;
  isAdminUser = false;
  if (auth.currentUser) {
    const d = await db.collection("users").doc(auth.currentUser.uid).get();
    isAdminUser = !!(d.exists && d.data().role === "admin");
  }
  b.classList.toggle("hidden", !isAdminUser);
}

function addAdminButton() {
  if (document.getElementById("adminBtn")) return;
  const b = mkBtn("⚙ Pam (admin)", showAdmin);
  b.id = "adminBtn";
  b.classList.add("hidden");
  document.getElementById("selection").appendChild(b);
}

async function setField(uid, field, value) {
  await db.collection("users").doc(uid).update({ [field]: value });
  showAdmin();
}

async function deleteUserDoc(uid, pseudo, email) {
  if (!confirm("Efase dosye " + pseudo + "?")) return;
  await db.collection("users").doc(uid).delete();
  alert("Dosye efase. Pou elèv la pa ka rantre ankò, efase kont lan nan Authentication: " + (email || "(email pa konnen)"));
  showAdmin();
}

async function showAdmin() {
  if (!isAdminUser) return alert("Aksè refize.");
  const snap = await db.collection("users").get();
  let el = document.getElementById("adminScreen");
  if (!el) {
    el = document.createElement("section");
    el.id = "adminScreen";
    el.className = "card hidden";
    document.getElementById("selection").after(el);
  }
  el.innerHTML = "";
  const h = document.createElement("h2");
  h.textContent = "Pam — " + snap.size + " kont";
  el.appendChild(h);

  const docs = snap.docs.filter(d => d.data().role !== "admin");
  docs.sort((a, b) =>
    ((a.data().classe || "") + (a.data().nom || "")).localeCompare((b.data().classe || "") + (b.data().nom || "")));

  docs.forEach(d => {
    const u = d.data();
    const row = document.createElement("div");
    row.className = "adminRow";
    const info = document.createElement("div");
    info.textContent = (u.pseudo || "?") +
      (u.actif === false ? " 🚫 bloke" : "") +
      (u.challengeAccess ? " ⚔ challenge" : "");
    row.appendChild(info);
    row.appendChild(mkBtn(u.actif === false ? "Débloquer" : "Bloquer",
      () => setField(d.id, "actif", u.actif === false)));
    row.appendChild(mkBtn(u.challengeAccess ? "Retirer challenge" : "Donner challenge",
      () => setField(d.id, "challengeAccess", !u.challengeAccess)));
    row.appendChild(mkBtn("Supprimer", () => deleteUserDoc(d.id, u.pseudo, u.email)));
    el.appendChild(row);
  });

  el.appendChild(mkBtn("⬅ Retounen", () => {
    el.classList.add("hidden");
    document.getElementById("selection").classList.remove("hidden");
  }));
  document.getElementById("selection").classList.add("hidden");
  el.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", addAdminButton);
auth.onAuthStateChanged(() => refreshAdminButton());
