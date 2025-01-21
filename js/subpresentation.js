let temp_id = 1;

function generateTemporarySlide(slideData) {
    console.log("generateTemporarySlide");
    console.log("slideData", slideData);

    const section = document.createElement('section');
    section.id = slideData.type + "-sub-temp-" + temp_id;
    temp_id = temp_id + 1;
    section.setAttribute('data-type', slideData.type || '');
    section.setAttribute('class', 'temp-slide');
    section.style.cssText = `
                display: flex !important;
                width: 100%;
                height: 100%;
                border: 3px solid green;
                justify-content: center;
                align-items: center;
    `;

    const container = document.createElement('div');
    container.className = 'background-container';
    container.style = `
        background-image: url('/Farmacology${slideData.image}');
        height: 100%;
        width: 100%;
    `;
    container.innerHTML = `
        <button class="invisible-button" onclick="Reveal.slide(0);"></button>
        <button class="invisible-left-button" onclick="Reveal.prev();"></button>
        <button class="invisible-right-button" onclick="Reveal.next();"></button>
    `;

    section.appendChild(container);
    return section;
}

function addTemporarySlides(slideDataArray) {
    console.log("addTemporarySlides");

    const currentSlide = Reveal.getCurrentSlide();
    if (!currentSlide) {
        console.error('Текущий слайд не найден.');
        return;
    }

    const slidesContainer = document.querySelector('.slides');
    if (!slidesContainer) {
        console.error('Контейнер слайдов не найден.');
        return;
    }

    // Создаём и добавляем каждый слайд из массива
    slideDataArray.forEach(slideData => {
        const tempSlide = generateTemporarySlide(slideData);
        slidesContainer.insertBefore(tempSlide, currentSlide); // Вставляем перед текущим слайдом
    });

    Reveal.sync();
    console.log('Слайды созданы');
    Reveal.prev(); // Переходим к началу добавленных слайдов
    Reveal.next()
}