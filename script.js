document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ JS actif !");
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.getAttribute("data-target");
      const target = document.getElementById(targetId);
      if (target) target.classList.add("active");
    });
  });
});
