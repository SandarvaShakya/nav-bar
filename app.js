const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");

hamburger.addEventListener("click", function () {
  navBar.classList.toggle("nav__list--toggle");
  hamburger.classList.toggle("hamburger--toggle");
});
