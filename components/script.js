const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-link");

hamburger.addEventListener("click", () => {

  navLinks.classList.toggle("active");
    navLinks.style.transition = 1000, 'ease';
  
  
});