

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("dropdown-mobile");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});



ScrollReveal().reveal('.nav-container', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'top',
    reset: false
  });


ScrollReveal().reveal('.upper-content .main-heading', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'left',
    reset: false
  });


  ScrollReveal().reveal('.input input',   {
    distance:'50px',
    duration: 1000,
    easing:'ease-in',
    origin:'left',
    reset:false
  });

  ScrollReveal().reveal('.input button',   {
    distance:'50px',
    duration: 1000,
    easing:'ease-in',
    origin:'right',
    reset:false
  });

  ScrollReveal().reveal('.mini-heading',   {
    distance:'50px',
    duration: 1000,
    easing:'ease-in',
    origin:'left',
    reset:false
  });

  ScrollReveal().reveal('.f-heading p',   {
    distance:'50px',
    duration: 1000,
    easing:'ease-in',
    origin:'bottom',
    reset:false
  });


  ScrollReveal().reveal('.f-img-container img', {
  distance: '50px',
  duration: 1000,
  easing: 'ease-in-out',
  origin: 'left',
  rotate: { x: 0, y: 0, z: 15 },
  scale: 0.85,
  reset: false
});




  ScrollReveal().reveal('.f-context .chart-line-1,.f-context .chart-line-2 ',   {
    distance:'50px',
    duration: 1000,
    easing:'ease-in',
    origin:'left',
    reset:false
  });
  



  ScrollReveal().reveal('.testimonial-content img ',   {
    distance:'50px',
    duration: 1000,
    easing:'ease-in',
    origin:'left',
    reset:false
  });
  
  ScrollReveal().reveal('.testimonial-content .comment ',   {
    distance:'50px',
    duration: 1200,
    easing:'ease-in',
    origin:'right',
    reset:false
  });

  ScrollReveal().reveal('.testimonial-content h4 ',   {
    distance:'50px',
    duration: 1450,
    easing:'ease-in',
    origin:'right',
    reset:false
  });


  ScrollReveal().reveal('.testimonial-content .prof',   {
    distance:'50px',
    duration: 1600,
    easing:'ease-in',
    origin:'right',
    reset:false
  });

  ScrollReveal().reveal('.pricing-content h1',   {
    distance:'50px',
    duration: 1100,
    easing:'ease-in',
    origin:'bottom',
    reset:false
  });

  ScrollReveal().reveal('.pricing-content p',   {
    distance:'50px',
    duration: 1300,
    easing:'ease-in',
    origin:'top',
    reset:false
  });


  ScrollReveal().reveal('.pricing-table tr',   {
    distance:'50px',
    duration: 1100,
    easing:'ease-in',
    origin:'left',
    reset:false
  });


  ScrollReveal().reveal('.cta-content img',   {
    distance:'50px',
    duration: 1250,
    easing:'ease-in',
    origin:'top',
    reset:false
  });

  ScrollReveal().reveal('.title h2',   {
    distance:'50px',
    duration: 900,
    easing:'ease-in',
    origin:'top',
    reset:false
  });

   ScrollReveal().reveal('.title p',   {
    distance:'50px',
    duration: 800,
    easing:'ease-in',
    origin:'top',
    reset:false
  });

  ScrollReveal().reveal('.title button',   {
    distance:'50px',
    duration: 700,
    easing:'ease-in',
    origin:'top',
    reset:false
  });


  ScrollReveal().reveal('footer',   {
    distance:'50px',
    duration: 1200,
    easing:'ease-in',
    origin:'bottom',
    reset:false
  });