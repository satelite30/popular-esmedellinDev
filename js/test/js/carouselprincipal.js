
    // Lista de imágenes del modal/lightbox para cada slide del carousel
    let carouselModalImageSrcs = [
      './recursos/img/DSC_9320-copy.jpg',
      'https://github.com/satelite30/-logossitio/blob/main/imagenesprom/prom2.jpg?raw=true',
      'https://static.wixstatic.com/media/697903_5754937e97d540729d134900f2f4fc8e~mv2.jpg/v1/fill/w_730,h_487,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/697903_5754937e97d540729d134900f2f4fc8e~mv2.jpg',
      'https://github.com/satelite30/-logossitio/blob/main/imagenesprom/prom6.jpg?raw=true',
      'https://github.com/satelite30/-logossitio/blob/main/imagenesprom/prom6.jpg?raw=true','https://github.com/satelite30/-logossitio/blob/main/imagenesprom/prom7.jpg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true','https://github.com/satelite30/-logossitio/blob/main/Udea1.jpeg?raw=true'
    ];

    // Renderiza inputs para editar los links del modal/lightbox
    function renderCarouselModalImageInputs() {
      const container = document.getElementById('carousel-modal-image-src-list');
      if (!container) return;
      container.innerHTML = '';
      const carouselItems = document.querySelectorAll('.carousel-inner .carousel-item');
      carouselItems.forEach((item, idx) => {
        const currentSrc = carouselModalImageSrcs[idx] || '';
        const div = document.createElement('div');
        div.className = 'mb-2 d-flex align-items-center';
        div.innerHTML = `<span class='me-2'>Slide ${idx + 1}:</span><input type="text" class="form-control me-2" style="width:70%" value="${currentSrc}" onchange="updateCarouselModalImageSrc(${idx}, this.value)">`;
        container.appendChild(div);
      });
    }

    // Actualiza el link del modal/lightbox en la lista
    function updateCarouselModalImageSrc(idx, value) {
      carouselModalImageSrcs[idx] = value;
    }

    // Lightbox: ahora usa el link de la lista, no el src del slide
    function openLightboxFromSlide(idx) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const src = carouselModalImageSrcs[idx] || '';
      lightboxImg.src = src;
      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    // Cerrar lightbox con la tecla ESC
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    });

    // Cerrar lightbox al hacer clic fuera de la imagen
    document.getElementById('lightbox').addEventListener('click', function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    });

    // Inicializar inputs al cargar
    document.addEventListener('DOMContentLoaded', function() {
      renderCarouselModalImageInputs();
      // Asignar onclick a cada imagen del carousel para abrir el modal con el link editable
      const carouselImgs = document.querySelectorAll('.carousel-inner .carousel-item img');
      carouselImgs.forEach((img, idx) => {
        img.onclick = function() { openLightboxFromSlide(idx); };
      });
    });

    
 
  