// IMFA QUIZ - Koneksyon: non + klas (bouton) + kòd 4 chif
const CLASSES = ["8AF", "9AF", "NSI", "NSII", "NSIII"];
let selectedClasse = "";

const authStyle = document.createElement("style");
authStyle.textContent = ".classActive{background:#1d4ed8;color:#fff;} #classGrid button{margin:4px;}";
document.head.appendChild(authStyle);

function normPart(s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toUpperCase().replace(/\s+/g, " ").trim();
}

function emailFor(nom, classe) {
  const slug = (normPart(nom) + "." + normPart(classe)).toLowerCase()
    .replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, "");
  return slug + "@imfa-quiz.app";
}

function setAuthMsg(t) {
  document.getElementById("authMsg").textContent = t;
}

function pickClasse(c, btn) {
  selectedClasse = c;
  document.querySelectorAll(".classBtn").forEach(b => b.classList.remove("classActive"));
  btn.classList.add("classActive");
}

function buildAuthScreen() {
  const el = document.createElement("section");
  el.id = "authScreen";
  el.className = "card hidden";
  el.innerHTML =
    "<h2>Konekte oswa kreye kont</h2>" +
    "<label>Nom et prénom</label><br>" +
    '<input id="authNom" placeholder="Ex : ENRIQUE" autocomplete="off"><br>' +
    "<label>Classe</label>" +
    '<div id="classGrid"></div>' +
    "<label>Mot de passe (4 chiffres)</label><br>" +
    '<input id="authCode" placeholder="Ex : 2010" inputmode="numeric" maxlength="4" autocomplete="off"><br>' +
    '<button id="authBtn">Entrer</button>' +
    '<p id="authMsg"></p>' +
    '<button id="authBack">⬅ Retounen</button>';
  document.getElementById("welcome").after(el);

  const grid = document.getElementById("classGrid");
  CLASSES.forEach(c => {
    const b = document.createElement("button");
    b.className = "subject classBtn";
    b.textContent = c;
    b.onclick = () => pickClasse(c, b);
    grid.appendChild(b);
  });

  document.getElementById("authBtn").onclick = authSubmit;
  document.getElementById("authBack").onclick = () => {
    el.classList.add("hidden");
    document.getElementById("welcome").classList.remove("hidden");
  };
}

async function authSubmit() {
  const nom = normPart(document.getElementById("authNom").value);
  const code = document.getElementById("authCode").value.trim();
  if (!nom) return setAuthMsg("Mete non ak prénom ou.");
  if (!selectedClasse) return setAuthMsg("Chwazi klas ou.");
  if (!/^\d{4}$/.test(code)) return setAuthMsg("Kòd la dwe gen 4 chif.");

  const email = emailFor(nom, selectedClasse);
  const password = "imfa" + code;
  setAuthMsg("Ap konekte...");
  try {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      if (!["auth/invalid-credential", "auth/user-not-found", "auth/wrong-password"].includes(e.code)) throw e;
      try {
        await auth.createUserWithEmailAndPassword(email, password);
      } catch (e2) {
        if (e2.code === "auth/email-already-in-use") {
          return setAuthMsg("Kòd la pa bon pou non sa a nan klas sa a.");
        }
        throw e2;
      }
    }
    const ud = await db.collection("users").doc(auth.currentUser.uid).get();
    if (ud.exists && ud.data().actif === false) {
      await auth.signOut();
      return setAuthMsg("Kont sa a bloke. Kontakte pwofesè a.");
    }
    const pseudo = nom + " " + selectedClasse;
    await db.collection("users").doc(auth.currentUser.uid).set(
      { pseudo: pseudo, nom: nom, classe: selectedClasse, email: email }, { merge: true });

    if (window.syncFromCloud) await window.syncFromCloud();
    playerName = pseudo;
    document.getElementById("authScreen").classList.add("hidden");
    document.getElementById("selection").classList.remove("hidden");
    setAuthMsg("");
  } catch (e) {
    setAuthMsg("Erè: " + e.code);
  }
}

async function showClassmates() {
  if (!auth.currentUser) return alert("Konekte anvan.");
  const me = await db.collection("users").doc(auth.currentUser.uid).get();
  const classe = me.data() && me.data().classe;
  if (!classe) return alert("Pa gen klas ki anrejistre.");

  const snap = await db.collection("users").where("classe", "==", classe).get();
  const names = snap.docs.map(d => d.data().pseudo || "").sort();

  let el = document.getElementById("classmatesScreen");
  if (!el) {
    el = document.createElement("section");
    el.id = "classmatesScreen";
    el.className = "card hidden";
    document.getElementById("selection").after(el);
  }
  el.innerHTML = "";
  const h = document.createElement("h2");
  h.textContent = "Klas " + classe + " (" + names.length + " elèv)";
  el.appendChild(h);
  const ul = document.createElement("ul");
  names.forEach(n => {
    const li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);
  });
  el.appendChild(ul);
  const back = document.createElement("button");
  back.textContent = "⬅ Retounen";
  back.onclick = () => {
    el.classList.add("hidden");
    document.getElementById("selection").classList.remove("hidden");
  };
  el.appendChild(back);

  document.getElementById("selection").classList.add("hidden");
  el.classList.remove("hidden");
}

function addClasseButton() {
  if (document.getElementById("classmatesBtn")) return;
  const b = document.createElement("button");
  b.id = "classmatesBtn";
  b.textContent = "👥 Elèv nan klas mwen";
  b.onclick = showClassmates;
  document.getElementById("selection").appendChild(b);
}

document.addEventListener("DOMContentLoaded", () => {
  buildAuthScreen();
  addClasseButton();
  document.getElementById("selection").classList.add("hidden");
  // Ranplase start() ki nan index.html pou bouton Kòmanse a ale nan koneksyon an
  window.start = function () {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("authScreen").classList.remove("hidden");
  };
});
