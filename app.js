const burger = document.querySelector(".fa-bars");
const links = document.querySelector(".links");
burger.addEventListener("click", () => {
  links.classList.toggle("navLinks");
});

// navbar pick bg-color
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navs");
  navbar.classList.toggle("change", scrollY > 0);
});
