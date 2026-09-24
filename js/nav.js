console.log("Nav loaded!");

const button = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

button.addEventListener("click", () => {
  nav.classList.toggle("open");

  const expanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", !expanded);
});
