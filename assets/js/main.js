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
    // Close menu when a nav link is clicked (mobile)
nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

  }

});



let lastScrollY = window.scrollY;
const header = document.querySelector(".site-header");
const mobileAd = document.getElementById("mobileAd");

window.addEventListener("scroll", () => {
  if (window.innerWidth > 768) return;

  const currentScroll = window.scrollY;

  if (currentScroll < lastScrollY && currentScroll > 50) {
    // Scrolling UP
    header.classList.add("visible");
    mobileAd.classList.add("hidden");
  } else {
    // Scrolling DOWN
    header.classList.remove("visible");
    mobileAd.classList.remove("hidden");
  }

  lastScrollY = currentScroll;
});
