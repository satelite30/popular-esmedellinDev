document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar el navbar
  const navbar = document.querySelector('.navbar');
  
  // Calcular la duración de la animación fillNav (5.5 segundos según el CSS)
  const fillNavDuration = 5500; // 5.5 segundos en milisegundos
  
  // Agregar la clase 'filled' al navbar cuando termine la animación fillNav
  setTimeout(function() {
    navbar.classList.add('filled');
  }, fillNavDuration);
});