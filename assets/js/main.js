function loadPartial(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("header", "/assets/partials/header.html");
  loadPartial("footer", "/assets/partials/footer.html");
});
