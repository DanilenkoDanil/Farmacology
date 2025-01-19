function generateSlides(slideSet) {
    return slideSet.map(slide => `
        <section
            style="
                background-image: url('/Farmacology${slide.image}');
                display: flex;
                width: 100%;
                height: 100%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            ">
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

   slidesContainer.style.visibility = 'hidden';

    // Откладываем синхронизацию
    setTimeout(() => {
        Reveal.sync();
        Reveal.layout();
        Reveal.slide(1); // Переход на первый слайд
        slidesContainer.style.visibility = 'visible';
    }, 10000);
}


