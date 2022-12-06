const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  links.classList.toggle("navLinks");
});
