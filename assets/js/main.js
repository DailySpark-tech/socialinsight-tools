document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (id, file) => {
    const el = document.getElementById(id);
    if (!el) return;

    fetch(file)
      .then(r => {
        if (!r.ok) throw new Error(file + " not found");
        return r.text();
      })
      .then(html => el.innerHTML = html)
      .catch(err => console.error(err));
  };

  loadPartial("header", "assets/partials/header.html");
  loadPartial("footer", "assets/partials/footer.html");
});
