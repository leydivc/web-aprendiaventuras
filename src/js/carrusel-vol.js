// carrusel-vol.js
(function() {
    const carrusel = document.getElementById('carrusel-vocales');
    const nextBtnV = document.getElementById('next-vocales');
    const prevBtnV = document.getElementById('prev-vocales');

    const imagenes = [
        'images/p-1.png',
        'images/p-2.png',
        'images/p-3.png'
    ];

    imagenes.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.className = "h-[80%] w-auto object-cover rounded-xl flex-shrink-0";
        carrusel.appendChild(img);
    });

    function getScrollAmount() {
        const card = carrusel.querySelector('img');
        const gap = parseInt(getComputedStyle(carrusel).gap) || 0;
        return card.offsetWidth + gap;
    }

    nextBtnV.addEventListener('click', () => {
        carrusel.scrollLeft += getScrollAmount();
    });

    prevBtnV.addEventListener('click', () => {
        carrusel.scrollLeft -= getScrollAmount();
    });
})();