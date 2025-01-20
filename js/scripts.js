function generateSlides(slideSet) {
    if (document.body.classList.contains('reveal-scroll')) {
        console.log('Класс "reveal-scroll" is в теге <body>');
        return loadSlidesVert(slideSet);
    } else {
        console.log('Класс "reveal-scroll" отсутствует в теге <body>');
        return loadSlidesHoriz(slideSet);
    }

}

function loadSlidesHoriz(slideSet) {
    console.log("loadSlidesHoriz")
    console.log("slideSet" + slideSet)
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
            style="background-image: url('/Farmacology${slide.image}'); height: 100%; width: 100%;">
            <button class="invisible-button" onclick="Reveal.slide(0);"></button>
            <button class="invisible-left-button" onclick="Reveal.prev();"></button>
            <button class="invisible-right-button" onclick="Reveal.next();"></button>
            </div>
        </section>
    `).join('');
}

function loadSlidesVert(slideSet) {
    console.log("loadSlidesVert")
    console.log(slideSet)
    return slideSet.map((slide, index) => `
    <div class="scroll-page" style="background: none 0% 0% / auto repeat scroll padding-box border-box rgb(25, 25, 25); --slide-height: auto; --page-scroll-padding: 0px; scroll-snap-align: start;">
    <div class="scroll-page-sticky" style="position: relative;">
    <div class="scroll-page-content"
        <section
            data-type="${slide.type || ''}"
            data-index-h="${index + 1}"
            data-index-v="0"
            id="slide-${index + 1}"
            style="
                display: flex !important;
                width: 130%;
                height: 100%;
                border: 3px solid green;
                justify-content: center;
                align-items: center;
            ">
            <div class="background-container"
            style="background-image: url('/Farmacology${slide.image}'); margin-left: 0; margin-right: 0; width: 100%;">
            <button class="invisible-button" onclick="slideToStart()"></button>
            <button class="invisible-left-button" onclick="Reveal.prev()"></button>
            <button class="invisible-right-button" onclick="Reveal.next()"></button>
            </div>
        </section>
    </div>
    </div>
    <div class="scroll-snap-point"></div>
    </div>
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
    console.log(newSlides)

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newSlides;

    Array.from(tempDiv.children).forEach(slide => {
        slidesContainer.appendChild(slide);

    });

    reveal.style.display = 'flex';

    Reveal.next();
    Reveal.sync(); // Синхронизация
    Reveal.layout();
    Reveal.slide(1); // Переход на первый слайд
}

function addButtonsToBackgroundContainer(slideId, buttons) {
    const section = document.getElementById(slideId); // Находим section по ID
    if (section) {
        const backgroundContainer = section.querySelector('.background-container'); // Находим div с классом background-container
        if (backgroundContainer) {
            buttons.forEach(button => {
                const btn = document.createElement('button');
                btn.className = 'dynamic-button';
                btn.id = button.id;
                btn.style.position = 'absolute';
                btn.style.left = `${button.x}%`;
                btn.style.top = `${button.y}%`;
                btn.style.width = `${button.width}%`;
                btn.style.height = `${button.height}%`;
                btn.style.background = `url(${button.icon}) no-repeat center`;
                btn.style.backgroundSize = 'contain';
                btn.style.border = 'none';
                btn.style.cursor = 'pointer';
                btn.setAttribute('onclick', button.action);

                backgroundContainer.appendChild(btn); // Добавляем кнопку в background-container
            });
        } else {
            console.error('background-container не найден в section:', slideId);
        }
    } else {
        console.error('Section с ID', slideId, 'не найден');
    }
}

Reveal.on('slidechanged', event => {
    console.log('work it')
    const currentSlideId = event.currentSlide.id;
    console.log(event.currentSlide.id);
    const slideType = event.currentSlide.dataset.type;
    console.log(slideType);
    if (slideButtonConfig[slideType]) {
        addButtonsToBackgroundContainer(currentSlideId, slideButtonConfig[slideType]);
    }
});
