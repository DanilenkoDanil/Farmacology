let temp_id = 1;
let lastTempSlide = null;

function generateTemporarySlide(slideData) {
    console.log("generateTemporarySlide");
    console.log("slideData", slideData);

    const animationText = checkSpecAnimation(slideData);
    const text = animationText !== null ? animationText : "";

    const section = document.createElement('section');
    section.id = slideData.type + "-temp-" + temp_id
    temp_id = temp_id + 1;
    section.setAttribute('data-type', slideData.type || '');
    section.setAttribute('class', 'temp-slide');
    section.style.cssText = `
                display: flex !important;
                width: 100%;
                height: 100%;
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
        ${text}
    `;

    section.appendChild(container);
    return section;
}

function addTemporarySlide(slideData) {
    console.log("addTemporarySlide");

    const currentSlide = Reveal.getCurrentSlide();
    if (!currentSlide) {
        console.error('Текущий слайд не найден.');
        return;
    }

    const tempSlide = generateTemporarySlide(slideData);
    lastTempSlide = tempSlide;
    const slidesContainer = document.querySelector('.slides');
    if (!slidesContainer) {
        console.error('Контейнер слайдов не найден.');
        return;
    }

    slidesContainer.insertBefore(tempSlide, currentSlide.nextSibling);

    Reveal.sync();
    console.log('Слайд создан');
    Reveal.next()
}


const slideListener = (event) => {
    const tempSlides = document.querySelectorAll('.temp-slide'); // Находим все временные слайды

    if (tempSlides.length > 0) {
        console.log('Переход между слайдами');

        tempSlides.forEach((tempSlide) => {
            if (tempSlide !== event.currentSlide) {
                console.log('Удаление временного слайда');
                tempSlide.remove();
            }
        });

        Reveal.sync();

        if (!event.currentSlide.classList.contains('temp-slide')) {
            Reveal.removeEventListener('slidechanged', slideListener);
        }
    }
};