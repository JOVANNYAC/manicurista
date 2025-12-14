<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', function () {

    /* ============================================================
       BOTÓN DE AGENDAR CITA → REDIRECCIÓN A WHATSAPP
    ============================================================ */
    const citaButton = document.getElementById('citaBtn');

    if (citaButton) {
        citaButton.addEventListener('click', function () {

            const numeroWhatsApp = '573188299868'; // ← tu número
            const mensaje = 'Hola, me gustaría agendar una cita para manicure.';
            const mensajeCodificado = encodeURIComponent(mensaje);

            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
            window.open(urlWhatsApp, '_blank');
        });
    }

    /* ============================================================
       MODAL PARA AMPLIAR IMÁGENES DEL CARRUSEL
    ============================================================ */

    const imagenesCarrusel = document.querySelectorAll('.carousel img, .carrusel img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modalImg');
    const closeModal = document.getElementById('closeModal');

    if (modal && modalImg && closeModal) {

        // Abrir modal
        imagenesCarrusel.forEach(img => {
            img.addEventListener('click', function (e) {
                e.stopPropagation();
                modalImg.src = img.src;
                modal.classList.add('activo');
            });
        });

        // 🔒 Evitar que los clics dentro del modal se propaguen
        modalImg.addEventListener('click', function (e) {
            e.stopPropagation();
        });

        // ❌ Cerrar con la X (AHORA SÍ FUNCIONA)
        closeModal.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            modal.classList.remove('activo');
        });

        // Cerrar haciendo clic fuera de la imagen
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove('activo');
            }
        });

        // Cerrar con tecla ESC
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                modal.classList.remove('activo');
            }
        });
    }

    /* ============================================================
       BOTONES PREV / NEXT DEL CARRUSEL (ESCRITORIO)
    ============================================================ */
    const carousel = document.querySelector('.carousel');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');

    if (carousel && btnPrev && btnNext) {

        const desplazamiento = () => carousel.clientWidth * 0.9;

        btnPrev.addEventListener('click', function (e) {
            e.stopPropagation();
            carousel.scrollBy({
                left: -desplazamiento(),
                behavior: 'smooth'
            });
        });

        btnNext.addEventListener('click', function (e) {
            e.stopPropagation();
            carousel.scrollBy({
                left: desplazamiento(),
                behavior: 'smooth'
            });
        });
    }

});
=======
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
>>>>>>> e1cc3a81040d785dcfdd5165e82ff555eb4fae5d
