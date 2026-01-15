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

  // Load header and attach hamburger AFTER it loads
  loadPartial("header", "assets/partials/header.html", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const siteNav = document.querySelector(".site-nav");

    if (menuToggle && siteNav) {
      menuToggle.addEventListener("click", () => {
        siteNav.classList.toggle("active");
      });
    }
  });

  // Load footer normally
  loadPartial("footer", "assets/partials/footer.html");

});
