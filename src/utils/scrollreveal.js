import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
  // Configuración básica para todas las animaciones
  const sr = ScrollReveal({
    distance: '50px',
    duration: 800,
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: false,
    delay: 100
  });

  // Animaciones generales
  sr.reveal('.sr', {
    interval: 100
  });

  // Animaciones específicas desde la izquierda
  sr.reveal('.sr-left', {
    origin: 'left',
    distance: '80px'
  });

  // Animaciones específicas desde la derecha
  sr.reveal('.sr-right', {
    origin: 'right',
    distance: '80px'
  });

  // Animaciones desde arriba
  sr.reveal('.sr-top', {
    origin: 'top',
    distance: '60px'
  });

  // Animaciones escalonadas para cards
  sr.reveal('.card-service', {
    interval: 150,
    delay: 200
  });
}
