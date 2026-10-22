const displayContent = document.getElementById("content");

document.querySelectorAll("[data-page]").forEach((link) => {
  link.addEventListener("click", async (e) => {
    e.preventDefault();

    const page = e.target.dataset.page;

    const res = await fetch(`pages/${page}.html`);
    const html = await res.text();

    // Will dynamically display individual component pages 
    displayContent.innerHTML = html;
  });
});
