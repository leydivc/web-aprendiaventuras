// carrusel-num.js
(function() {
    const carrusel = document.getElementById('carrusel-numeros');
    const nextBtnN = document.getElementById('next-numeros');
    const prevBtnN = document.getElementById('prev-numeros');

    const imagenes = [
        'images/p-4.png',
        'images/p-5.png',
        'images/p-6.png'
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

    nextBtnN.addEventListener('click', () => {
        carrusel.scrollLeft += getScrollAmount();
    });

    prevBtnN.addEventListener('click', () => {
        carrusel.scrollLeft -= getScrollAmount();
    });
})();