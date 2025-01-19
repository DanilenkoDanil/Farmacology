function generateSlides(slideSet) {
    return slideSet.map(slide => `
        <section
            style="
                display: flex;
                width: 100%;
                height: 100%;
                border: 3px solid green;
                justify-content: center;
                align-items: center;
            ">
            <div class="background-container"
            style="background-image: url('${slide.image}');">
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

    reveal.style.display = 'flex';

    Reveal.destroy();

    // Заново инициализируем Reveal.js
    Reveal.initialize({
        width: '100%',
        height: '100%',
        transition: 'slide', // Без анимации
    });

    document.querySelectorAll('section').forEach(section => {
    section.style.display = 'flex';
    section.style.justifyContent = 'center';
    section.style.alignItems = 'center';
    section.style.width = '100%';
    section.style.height = '100%';
    section.style.boxSizing = 'border-box';
    });

    Reveal.slide(1); // Переход на первый слайд
}


