document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les boutons d'onglet
    const buttons = document.querySelectorAll(".tab-button");
    // Sélectionne toutes les sections de contenu des onglets
    const sections = document.querySelectorAll(".tab-content");

    // Pour chaque bouton d'onglet
    buttons.forEach(button => {
        // Ajoute un écouteur d'événement 'click'
        button.addEventListener("click", function() {
            // Récupère la cible de l'onglet à partir de l'attribut 'data-target'
            const target = button.getAttribute("data-target");

            // Masque toutes les sections de contenu
            sections.forEach(section => {
                section.classList.remove("active"); // Retire la classe 'active'
            });

            // Affiche la section ciblée en ajoutant la classe 'active'
            document.getElementById(target).classList.add("active");

            // LOGIQUE SPÉCIFIQUE : Si l'onglet est "image-gen", génère une image de remplacement
            if (target === "image-gen") {
                const imageContainer = document.getElementById("image-gen");
                // Vérifie si une image existe déjà pour éviter d'en ajouter plusieurs
                if (!imageContainer.querySelector('img')) {
                    imageContainer.innerHTML += `<img src="https://via.placeholder.com/400x300?text=Image+Générée" alt="Image générée">`;
                }
            }
        });
    });

    // Au chargement de la page, affiche l'onglet "Console" par défaut
    document.getElementById("console").classList.add("active");

    // Message de confirmation dans la console du navigateur
    console.log("JavaScript chargé et fonctionnel !");
});
