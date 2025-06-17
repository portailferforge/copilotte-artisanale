console.log("✅ JS actif !");

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

console.log("Nombre d’onglets détectés :", tabs.length);

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const targetId = tab.getAttribute('data-target');
    console.log("🧪 Clic sur onglet :", targetId);

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    const target = document.getElementById(targetId);
    if (target) {
      target.classList.add('active');
    } else {
      console.warn("⚠️ Aucun élément trouvé avec l’ID :", targetId);
    }
  });
});
