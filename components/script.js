

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("dropdown-mobile");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
