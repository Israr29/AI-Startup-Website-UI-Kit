window.onload = () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("dropdown-mobile");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  
const sr = ScrollReveal({
  distance: '50px',
  duration: 1200,
  easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
  scale: 0.95,
  opacity: 0,
  reset: false,
  viewFactor: 0.45,
  viewOffset: { top: 80, bottom: 80 },
  mobile: true
});


  sr.reveal('.nav-container', { origin: 'top' });
  sr.reveal('.upper-content .main-heading', { origin: 'left' });
  sr.reveal('.mini-heading', { origin: 'left' });
  sr.reveal('.input input', { origin: 'left' });
  sr.reveal('.input button', { origin: 'right' });
  sr.reveal('.f-heading p', { origin: 'bottom' });
  sr.reveal('.f-img-container img', { origin: 'left', rotate: { z: 15 }, scale: 0.9, duration: 1400 });
  sr.reveal('.f-context .chart-line-1, .f-context .chart-line-2', { origin: 'left' });
  sr.reveal('.testimonial-content img', { origin: 'left' });
  sr.reveal('.testimonial-content .comment', { origin: 'right', duration: 1400 });
  sr.reveal('.testimonial-content h4', { origin: 'right', duration: 1450 });
  sr.reveal('.testimonial-content .prof', { origin: 'right', duration: 1600 });
  sr.reveal('.pricing-content h1', { origin: 'bottom' });
  sr.reveal('.pricing-content p', { origin: 'top' });
  sr.reveal('.pricing-table tr', { origin: 'left', interval: 150 });
  sr.reveal('.cta-content img', { origin: 'top' });
  sr.reveal('.title h2', { origin: 'top', duration: 900 });
  sr.reveal('.title p', { origin: 'top', duration: 800 });
  sr.reveal('.title button', { origin: 'top', duration: 700 });
  sr.reveal('footer', { origin: 'bottom' });
};
