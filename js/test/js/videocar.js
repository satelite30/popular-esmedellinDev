/* const carousel = document.getElementById('videoCarousel');
      const videos = carousel.querySelectorAll('video');

      carousel.addEventListener('slid.bs.carousel', (event) => {
        videos.forEach((video) => video.pause()); // Pausar todos los videos
        const activeVideo = event.relatedTarget.querySelector('video');
        if (activeVideo) {
          activeVideo.play(); // Reproducir solo el video activo
        }
      }); */


      /* Script para el video carousel  */
      
       

document.addEventListener('DOMContentLoaded', function() {
  // Configuración del nav flotante
  const nav = document.querySelector('.navbar');
  let lastScroll = 0;
  let scrollTimeout;
  let mouseTimeout;

  // Clonar el nav para el flotante
  const floatingNav = nav.cloneNode(true);
  floatingNav.classList.add('floating-nav');
  document.body.appendChild(floatingNav);

  // Función para manejar el scroll con animación mejorada
  function handleScroll() {
    const currentScroll = window.pageYOffset;
    const scrollDelta = Math.abs(currentScroll - lastScroll);
    
    // Solo reaccionar a cambios significativos de scroll
    if (scrollDelta > 5) {
      if (currentScroll > 150) {
        if (currentScroll > lastScroll + 10) {
          // Scrolling hacia abajo - ocultar con retraso para mejor experiencia
          setTimeout(() => {
            floatingNav.classList.remove('show');
            floatingNav.classList.add('hide');
          }, 100);
        } else if (currentScroll < lastScroll - 10) {
          // Scrolling hacia arriba - mostrar inmediatamente
          floatingNav.classList.remove('hide');
          floatingNav.classList.add('show');
        }
      } else {
        // Al inicio de la página
        floatingNav.classList.remove('show');
        floatingNav.classList.add('hide');
      }
      
      lastScroll = currentScroll;
  }

  // Función mejorada para manejar el movimiento del mouse
  function handleMouseMove(e) {
    // Detectar si el mouse está cerca del borde superior
    if (e.clientY < 120) { 
      // Mostrar el navbar con una transición suave
      floatingNav.classList.remove('hide');
      floatingNav.classList.add('show');
      
      // Reiniciar el temporizador cada vez que el mouse se mueve en la zona
      clearTimeout(mouseTimeout);
      
      // Configurar un temporizador para ocultar el navbar después de un tiempo
      mouseTimeout = setTimeout(() => {
        // Solo ocultar si hemos hecho scroll más allá del navbar original
        if (window.pageYOffset > 150) {
          // Transición suave para ocultar
          floatingNav.classList.remove('show');
          floatingNav.classList.add('hide');
        }
      }, 2500); // Tiempo aumentado para mejor experiencia de usuario
    }
  }

  // Agregar el evento de scroll con debounce mejorado
  window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(handleScroll, 15); // Ligero aumento para mejor rendimiento
  });

  // Agregar el evento de movimiento del mouse
  document.addEventListener('mousemove', handleMouseMove);
  
  // Añadir evento para cuando el usuario hace clic en el navbar flotante
  floatingNav.addEventListener('click', function(e) {
    // Mantener visible el navbar por un tiempo después de hacer clic
    clearTimeout(mouseTimeout);
    mouseTimeout = setTimeout(() => {
      if (window.pageYOffset > 150) {
        floatingNav.classList.remove('show');
        floatingNav.classList.add('hide');
      }
    }, 3000);
  });

  // Inicializar el estado después de un breve retraso para asegurar carga completa
  setTimeout(() => {
    handleScroll();
    // Añadir una clase para indicar que está listo para animaciones
    floatingNav.classList.add('ready');
  }, 300);
});