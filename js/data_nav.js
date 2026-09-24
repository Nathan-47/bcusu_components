const displayContent = document.getElementById("content");

document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();

    const page = e.target.dataset.page;

    const response = await fetch(`pages/${page}.html`);
    const html = await response.text();

    displayContent.innerHTML = html;
  });
});
