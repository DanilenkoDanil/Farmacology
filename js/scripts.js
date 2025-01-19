function generateSlides(slideSet) {
    return slideSet.map((slide, index) => `
        <section
            data-type="${slide.type || ''}"
            data-index="${index + 1}"
            id="slide-${index + 1}"
            style="
                display: flex !important;
                width: 100%;
                height: 100%;
                border: 3px solid green;
                justify-content: center;
                align-items: center;
                top: 25%;
            ">
            <div class="background-container"
                style="background-image: url('/Farmacology${slide.image}');">
            </div>
        </section>
    `).join('');
}


function loadSlides(setName) {
    const slidesContainer = document.getElementById('slides-container');
    const reveal = document.querySelector('.reveal');

    Array.from(slidesContainer.children).forEach((slide, index) => {
        if (index > 0) {
            slidesContainer.removeChild(slide);
        }
    });

    const newSlides = generateSlides(mapping[setName]);

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newSlides;

    Array.from(tempDiv.children).forEach(slide => {
        slide.style.top = '131px';
        slidesContainer.appendChild(slide);

    });

    reveal.style.display = 'flex';

    Reveal.destroy();

    // Заново инициализируем Reveal.js
    Reveal.initialize({
        width: '100%',
        height: '100%',
        transition: 'slide', // Без анимации
    });


    Reveal.slide(1); // Переход на первый слайд
}


