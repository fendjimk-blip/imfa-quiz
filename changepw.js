// IMFA QUIZ - Chanje kòd 4 chif (elèv konekte sèlman)
function showChangePwd() {
  if (!auth.currentUser) return alert("Konekte anvan.");
  let el = document.getElementById("pwdScreen");
  if (!el) {
    el = document.createElement("section");
    el.id = "pwdScreen";
    el.className = "card hidden";
    el.innerHTML =
      "<h2>Chanje kòd 4 chif</h2>" +
      "<label>Ansyen kòd</label><br>" +
      '<input id="pwdOld" inputmode="numeric" maxlength="4" autocomplete="off"><br>' +
      "<label>Nouvo kòd</label><br>" +
      '<input id="pwdNew" inputmode="numeric" maxlength="4" autocomplete="off"><br>' +
      '<button id="pwdBtn">Sove</button>' +
      '<p id="pwdMsg"></p>' +
      '<button id="pwdBack">⬅ Retounen</button>';
    document.getElementById("selection").after(el);
    document.getElementById("pwdBtn").onclick = changePwd;
    document.getElementById("pwdBack").onclick = () => {
      el.classList.add("hidden");
      document.getElementById("selection").classList.remove("hidden");
    };
  }
  document.getElementById("pwdOld").value = "";
  document.getElementById("pwdNew").value = "";
  document.getElementById("pwdMsg").textContent = "";
  document.getElementById("selection").classList.add("hidden");
  el.classList.remove("hidden");
}

async function changePwd() {
  const msg = t => { document.getElementById("pwdMsg").textContent = t; };
  const oldC = document.getElementById("pwdOld").value.trim();
  const newC = document.getElementById("pwdNew").value.trim();
  if (!/^\d{4}$/.test(oldC) || !/^\d{4}$/.test(newC)) return msg("Kòd yo dwe gen 4 chif.");
  const user = auth.currentUser;
  if (!user || !user.email) return msg("Konekte anvan.");
  msg("Ap chanje...");
  try {
    const cred = firebase.auth.EmailAuthProvider.credential(user.email, "imfa" + oldC);
    await user.reauthenticateWithCredential(cred);
    await user.updatePassword("imfa" + newC);
    msg("✅ Kòd la chanje. Sonje nouvo kòd la.");
  } catch (e) {
    console.error(e);
    if (e.code === "auth/wrong-password" || e.code === "auth/invalid-credential") {
      msg("Ansyen kòd la pa bon.");
    } else {
      msg("Erè: " + (e.code || e.message));
    }
  }
}

function addPwdButton() {
  if (document.getElementById("pwdBtnMain")) return;
  const b = document.createElement("button");
  b.id = "pwdBtnMain";
  b.textContent = "🔑 Chanje kòd mwen";
  b.onclick = showChangePwd;
  document.getElementById("selection").appendChild(b);
}

document.addEventListener("DOMContentLoaded", addPwdButton);
