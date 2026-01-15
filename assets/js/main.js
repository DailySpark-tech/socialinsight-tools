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

  loadPartial("header", "assets/partials/header.html");
  loadPartial("footer", "assets/partials/footer.html");

});
