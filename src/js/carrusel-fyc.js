// carrusel-num.js
(function() {
    const carrusel = document.getElementById('carrusel-fyc');
    const nextBtnF = document.getElementById('next-fyc');
    const prevBtnF = document.getElementById('prev-fyc');

    const imagenes = [
        'images/p-7.png',
        'images/p-8.png',
        'images/p-9.png'
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

    nextBtnF.addEventListener('click', () => {
        carrusel.scrollLeft += getScrollAmount();
    });

    prevBtnF.addEventListener('click', () => {
        carrusel.scrollLeft -= getScrollAmount();
    });
})();