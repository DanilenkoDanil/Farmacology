function generateSlides(slideSet) {
    return slideSet.map(slide => `
        <section
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
            <button class="invisible-button" onclick="Reveal.slide(0);"></button>
            <button class="invisible-left-button" onclick="Reveal.prev();"></button>
            <button class="invisible-right-button" onclick="Reveal.next();"></button>
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
        slidesContainer.appendChild(slide);

    });

    reveal.style.display = 'block';

    Reveal.destroy();

    // Заново инициализируем Reveal.js
    Reveal.initialize({
        width: '100%',
        height: '100%',
        transition: 'slide', // Без анимации
    });

    Reveal.sync(); // Синхронизация
    Reveal.layout();
    Reveal.slide(1); // Переход на первый слайд
}


