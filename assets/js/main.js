document.addEventListener("DOMContentLoaded", function () {

  function loadPartial(targetId, filePath) {
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
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  loadPartial("header", "assets/partials/header.html");
  loadPartial("footer", "assets/partials/footer.html");

});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("active");
  });
}
