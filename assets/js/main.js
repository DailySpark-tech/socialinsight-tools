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

  loadPartial("header", "assets/partials/header.html", () => {
  initHamburger();
  initMobileHeaderAdSwap();
});
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



function initMobileHeaderAdSwap() {
  if (window.innerWidth > 768) return;

  const header = document.querySelector(".site-header");
  const mobileAd = document.getElementById("mobileAd");

  if (!header || !mobileAd) return;

  let lastScrollY = window.scrollY;
  let scrollDownCount = 0;
  let lastAction = null;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    const delta = currentScroll - lastScrollY;

    // SCROLLING DOWN (meaningful movement)
    if (delta > 20 && currentScroll > 80) {
      if (lastAction !== "down") {
        scrollDownCount++;
        lastAction = "down";
      }

      if (scrollDownCount >= 2) {
        header.classList.add("hidden");
        mobileAd.classList.add("visible");
      }
    }

    // SCROLLING UP
    if (delta < -10) {
      lastAction = "up";
      scrollDownCount = 0;

      header.classList.remove("hidden");
      mobileAd.classList.remove("visible");
    }

    lastScrollY = currentScroll;
  });
}
