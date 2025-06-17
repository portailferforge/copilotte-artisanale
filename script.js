document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".tab-button");
    const sections = document.querySelectorAll(".tab-content");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-target");

            sections.forEach(section => {
                section.classList.add("hidden");
            });

            document.getElementById(target).classList.remove("hidden");
        });
    });
});
