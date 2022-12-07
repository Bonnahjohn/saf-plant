const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  links.classList.toggle("navLinks");
});

// navbar pick bg-color
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navs");
  navbar.classList.toggle("change", scrollY > 0);
});
