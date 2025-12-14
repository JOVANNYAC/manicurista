document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       BOTÓN DE AGENDAR CITA → REDIRECCIÓN A WHATSAPP
    ============================================================ */
    const citaButton = document.getElementById('citaBtn');

    if (citaButton) {
        citaButton.addEventListener('click', function () {
            const numeroWhatsApp = '573188299868'; // Cambia si es necesario
            const mensaje = 'Hola, me gustaría agendar una cita para manicure.';
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    /* ============================================================
       MODAL PARA AMPLIAR IMÁGENES
    ============================================================ */
    const imagenes = document.querySelectorAll('.carousel img, .carrusel img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('closeModal');

    imagenes.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('activo');
        });
    });

    // Cerrar con la X
    closeModal.addEventListener('click', function (e) {
        e.stopPropagation();
        modal.classList.remove('activo');
    });

    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('activo');
        }
    });

    /* ============================================================
       BOTONES PREV / NEXT DEL CARRUSEL
    ============================================================ */
    const carousel = document.querySelector('.carousel');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');

    if (carousel && btnPrev && btnNext) {
        const desplazamiento = () => carousel.clientWidth * 0.9;

        btnPrev.addEventListener('click', () => {
            carousel.scrollBy({ left: -desplazamiento(), behavior: 'smooth' });
        });

        btnNext.addEventListener('click', () => {
            carousel.scrollBy({ left: desplazamiento(), behavior: 'smooth' });
        });
    }

});
