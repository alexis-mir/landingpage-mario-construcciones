import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
  // Configuración base para todos los elementos con clase 'sr'
  ScrollReveal().reveal('.sr', {
    distance: '50px',
    duration: 800,
    origin: 'bottom',
    reset: false,
    easing: 'ease-out',
    interval: 200
  });

  // Configuraciones específicas para diferentes tipos de elementos
  ScrollReveal().reveal('.sr-left', {
    distance: '80px',
    duration: 1000,
    origin: 'left',
    reset: false
  });

  ScrollReveal().reveal('.sr-right', {
    distance: '80px',
    duration: 1000,
    origin: 'right',
    reset: false
  });

  ScrollReveal().reveal('.sr-scale', {
    scale: 0.8,
    duration: 1000,
    reset: false
  });
}
