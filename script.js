document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = button.getAttribute("data-target");

            // Masquer toutes les sections
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Afficher la section ciblée
            document.getElementById(target).classList.add("active");
        });
    });

    // Afficher la console par défaut
    document.getElementById("console").classList.add("active");
});
