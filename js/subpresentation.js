let tempSlidesMap = {}; // Карта для хранения временных слайдов и их родительских слайдов
let tempId = 1;

function generateTemporarySlideForSlides(slideData) {
    console.log("generateTemporarySlide");
    console.log("slideData", slideData);

    const animationText = checkSpecAnimation(slideData);
    const text = animationText !== null ? animationText : "";

    const section = document.createElement('section');
    section.id = `${slideData.type}-sub-temp-${tempId}`;
    tempId++;
    section.setAttribute('data-type', slideData.type || '');
    section.setAttribute('class', 'temp-sub-slide');
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

    const parentSlideId = currentSlide.id; // ID текущего слайда
    tempSlidesMap[parentSlideId] = []; // Создаем массив для временных слайдов

    // Создаём и добавляем каждый временный слайд из массива
    slideDataArray.forEach(slideData => {
        const tempSlide = generateTemporarySlideForSlides(slideData);
        slidesContainer.insertBefore(tempSlide, currentSlide); // Вставляем перед текущим слайдом
        tempSlidesMap[parentSlideId].push(tempSlide.id); // Сохраняем ID временного слайда
    });

    Reveal.sync();
    console.log('Временные слайды добавлены');
    Reveal.prev(); // Переходим к началу добавленных слайдов
    Reveal.next();
}

function removeTempSlidesForParent(parentSlideId) {
    if (!tempSlidesMap[parentSlideId]) return;

    // Удаляем временные слайды, связанные с данным родительским слайдом
    tempSlidesMap[parentSlideId].forEach(slideId => {
        const slide = document.getElementById(slideId);
        if (slide) slide.remove();
    });

    // Удаляем запись о временных слайдах для данного родителя
    delete tempSlidesMap[parentSlideId];

    Reveal.sync();
    console.log('Временные слайды удалены для родительского слайда:', parentSlideId);
}

// Логика удаления при возвращении к родительскому слайду
Reveal.on('slidechanged', event => {
    const currentSlideId = event.currentSlide.id;

    // Проверяем, является ли текущий слайд родительским
    if (tempSlidesMap[currentSlideId]) {
        removeTempSlidesForParent(currentSlideId);
    }
});