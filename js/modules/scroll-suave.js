export default function initScrollSuave() {
  const sections = document.querySelectorAll('.scroll-suave');
  const windowMetade = window.innerHeight * 0.7;
  
  sections[0].classList.add('scroll-ativo');
  
  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if(sectionTop < 0) {
       section.classList.add('scroll-ativo');
      }
    });
  }
  window.addEventListener('scroll', animaScroll);
}