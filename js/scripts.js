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


   slidesContainer.style.visibility = 'hidden';

    // Откладываем синхронизацию
    setTimeout(() => {
        Reveal.destroy();

        // Заново инициализируем Reveal.js
        Reveal.initialize({
            width: '100%',
            height: '100%',
            transition: 'slide', // Без анимации
        });

        Reveal.slide(1); // Переход на первый слайд
        slidesContainer.style.visibility = 'visible';
    }, 10000);
}


