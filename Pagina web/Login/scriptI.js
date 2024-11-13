document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.myswiper', {
        // Configuraciones adicionales
        slidesPerView: 1,
        spaceBetween: 80,
        grabCursor: true,
        loop: true,
        breakpoints: {
            991: {
                slidesPerView: 3
            }
        }
    });
});
