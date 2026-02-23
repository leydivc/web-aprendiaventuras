const features = [
    {
        img: "images/img-1.png",
        alt: "Aprendizaje basado en el juego",
        descripcion: "El videojuego convierte el proceso de aprendizaje en una experiencia divertida e interactiva, aumentando la motivación y el interés del niño.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-2.png",
        alt: "Desarrollo cognitivo",
        descripcion: "Estimula habilidades fundamentales como la memoria, la atención y el razonamiento lógico en edades de 3 a 6 años.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-3.png",
        alt: "Reconocimiento de vocales",
        descripcion: "Favorece la identificación y pronunciación de las vocales mediante imágenes y sonidos.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-4.png",
        alt: "Pensamiento lógico-matemático",
        descripcion: "Refuerza el aprendizaje de los números a través del conteo, la asociación número-cantidad y ejercicios visuales sencillos.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-5.png",
        alt: "Identificación de formas",
        descripcion: "Permite reconocer formas geométricas básicas y relacionarlas con objetos del entorno cotidiano del niño.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-6.png",
        alt: "Reconocimiento de colores",
        descripcion: "Desarrolla la percepción visual mediante actividades que ayudan a identificar y diferenciar colores de forma natural.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-7.png",
        alt: "Aprendizaje adaptativo",
        descripcion: "El sistema ajusta automáticamente la dificultad de los juegos según el desempeño del niño, respetando su ritmo de aprendizaje.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-8.png",
        alt: "Estimulación visual y auditiva",
        descripcion: "Utiliza colores llamativos, animaciones suaves y sonidos amigables para mantener la atención y facilitar la comprensión.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-9.png",
        alt: "Refuerzo positivo",
        descripcion: "Motiva al niño mediante recompensas visuales y mensajes alentadores, promoviendo la confianza y el aprendizaje sin frustración.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-10.png",
        alt: "Almacenamiento de datos en la nube",
        descripcion: "Guarda el progreso del niño de forma segura, permitiendo el seguimiento del aprendizaje por parte de padres y docentes.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-11.png",
        alt: "Apoyo a padres y docentes",
        descripcion: "Facilita la visualización del avance del niño, ayudando a identificar fortalezas y áreas que requieren refuerzo.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    },
    {
        img: "images/img-12.png",
        alt: "Accesibilidad e inclusión",
        descripcion: "Diseño simple, intuitivo y adaptable para que todos los niños puedan interactuar fácilmente con el videojuego.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500"
    }
];

const carousel = document.getElementById('carousel');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

features.forEach(feature => {
carousel.innerHTML += `
    <div class="flex-shrink-0 w-full lg:w-[400px] h-full">
    <div class="bg-gradient-to-br ${feature.gradient} 
                rounded-[20px] shadow-2xl 
                h-[480px] lg:h-[580px] 
                flex flex-col items-center w-full gap-10">
        
        <img 
            src="${feature.img}" 
            alt="${feature.alt}" 
            class="w-full h-[250px] lg:h-[400px] object-cover object-top rounded-tl-[20px] rounded-tr-[20px]"
        />

        <!-- Texto -->
        <p class="text-lg text-gray-300 text-center px-10">
        ${feature.descripcion}
        </p>

    </div>
    </div>
`;
});

function getScrollAmount() {
    const card = carousel.querySelector('div');
    const gap = parseInt(getComputedStyle(carousel).gap) || 0;
    return card.offsetWidth + gap;
}

nextBtn.addEventListener('click', () => {
    carousel.scrollLeft += getScrollAmount();
});

prevBtn.addEventListener('click', () => {
    carousel.scrollLeft -= getScrollAmount();
});