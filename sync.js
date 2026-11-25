// IMFA QUIZ - Anrejistre pwogrè nan Firebase (users/{uid}.progress)
window.syncFromCloud = async function () {
  if (!auth.currentUser) return;
  const d = await db.collection("users").doc(auth.currentUser.uid).get();
  const p = (d.data() && d.data().progress) || {};
  localStorage.setItem(STORE_KEY, JSON.stringify(p));
};

// Ranplase saveProgress nan parties.js: sove lokalman ET nan Firebase
function saveProgress(p) {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  if (auth.currentUser) {
    db.collection("users").doc(auth.currentUser.uid)
      .set({ progress: p }, { merge: true })
      .catch(() => {});
  }
}
