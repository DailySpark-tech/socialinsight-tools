document.addEventListener("DOMContentLoaded", function () {

  function loadPartial(targetId, filePath, callback) {
    const target = document.getElementById(targetId);
    if (!target) return;

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load " + filePath);
        }
        return response.text();
      })
      .then(html => {
        target.innerHTML = html;
        if (typeof callback === "function") callback();
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  loadPartial("header", "assets/partials/header.html", initHamburger);
  loadPartial("footer", "assets/partials/footer.html");

  function initHamburger() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".site-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

});
