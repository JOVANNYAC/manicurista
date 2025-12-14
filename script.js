document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       BOTÓN DE AGENDAR CITA
    ============================================================ */
    const citaButton = document.getElementById('citaBtn');

    if (citaButton) {
        citaButton.addEventListener('click', function () {
            alert('Gracias por tu interés. Escríbenos por WhatsApp para agendar tu cita.');
        });
    }


    /* ============================================================
       MODAL PARA AMPLIAR IMÁGENES DEL CARRUSEL
    ============================================================ */

    // Compatibilidad con .carousel y .carrusel
    const imagenesCarrusel = document.querySelectorAll('.carousel img, .carrusel img');

    // Crear modal si no existe
    let modal = document.getElementById('modal');
    let modalImg = document.getElementById('modalImg');
    let close;

    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal';
        modal.classList.add('modal');

        // Botón cerrar
        close = document.createElement('span');
        close.id = 'closeModal';
        close.innerHTML = '&times;';
        modal.appendChild(close);

        // Imagen ampliada
        modalImg = document.createElement('img');
        modalImg.id = 'modalImg';
        modalImg.classList.add('modal-content');
        modal.appendChild(modalImg);

        document.body.appendChild(modal);

        // Cerrar modal con la X (corregido)
        close.addEventListener('click', (e) => {
            e.stopPropagation();            // <-- evita que el evento llegue al modal
            modal.classList.remove('activo');
        });
    } else {
        close = document.getElementById('closeModal');
    }

    // Abrir modal al hacer clic en una imagen
    imagenesCarrusel.forEach(img => {
        img.addEventListener('click', () => {
            modalImg.src = img.src;
            modal.classList.add('activo');
        });
    });

    // Cerrar modal al hacer clic fuera de la imagen
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('activo');
        }
    });


    /* ============================================================
       BOTONES PREV / NEXT DEL CARRUSEL (ESCRITORIO)
    ============================================================ */
    const carousel = document.querySelector('.carousel');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');

    if (carousel && btnPrev && btnNext) {

        const desplazamiento = () => carousel.clientWidth * 0.9;

        btnPrev.addEventListener('click', () => {
            carousel.scrollBy({
                left: -desplazamiento(),
                behavior: 'smooth'
            });
        });

        btnNext.addEventListener('click', () => {
            carousel.scrollBy({
                left: desplazamiento(),
                behavior: 'smooth'
            });
        });
    }

});
