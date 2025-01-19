function generateSlides(slideSet) {
    return slideSet.map(slide => `
        <section
            style="
                background-image: url('${slide.image}');
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

    // Удаляем все существующие элементы слайдов, кроме первого
    Array.from(slidesContainer.children).forEach((slide, index) => {
        if (index > 0) {
            slidesContainer.removeChild(slide);
        }
    });

    // Создаём новые элементы слайдов и добавляем их в контейнер
    const newSlides = generateSlides(mapping[setName]);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newSlides;

    // Добавляем каждый новый <section> в slidesContainer
    Array.from(tempDiv.children).forEach(slide => {
        slidesContainer.appendChild(slide);
    });

    reveal.style.display = 'block';

    Reveal.layout();
    Reveal.sync();
    Reveal.slide(1);
}


