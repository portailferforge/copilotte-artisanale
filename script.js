function lancerCopilotte() {
  const status = document.getElementById("status");
  status.textContent = "Copilotte lancée... Système prêt ✅";
  document.body.classList.add("loaded");
}
