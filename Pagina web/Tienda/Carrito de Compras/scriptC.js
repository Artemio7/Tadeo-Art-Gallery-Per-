
        document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
            document.querySelector('.nav-list').classList.toggle('active');
        });

    // Código existente...

    // Funcionalidad del lightbox
    function openLightbox(img) {
        var lightbox = document.getElementById("lightbox");
        var lightboxImg = document.getElementById("lightbox-img");
        var captionText = document.getElementById("lightbox-caption");
        
        lightbox.style.display = "block";
        lightboxImg.src = img.src;
        captionText.innerHTML = img.alt;
    }

    // Cerrar el lightbox
    document.querySelector('.close-lightbox').onclick = function() { 
        document.getElementById('lightbox').style.display = "none";
    }

    // Cerrar el lightbox al hacer clic fuera de la imagen
    window.onclick = function(event) {
        var lightbox = document.getElementById('lightbox');
        if (event.target == lightbox) {
            lightbox.style.display = "none";
        }
    }

    // Código existente...

    // Funcionalidad del carrusel
    document.addEventListener('DOMContentLoaded', function() {
        const carousel = document.querySelector('.carousel');
        const slides = document.querySelectorAll('.carousel-slide');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');
        const dotsContainer = document.querySelector('.carousel-dots');

        let currentIndex = 0;

        // Crear puntos indicadores
        slides.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Cambio automático de diapositivas cada 5 segundos
        setInterval(nextSlide, 5000);

        // Inicializar el carrusel
        updateCarousel();
    });


    let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})