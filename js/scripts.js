

function checkSpecAnimation(slide) {
    if (slide.special_animation === 'Special') {
        return slide.animation_text;
    } else return null;
}

function generateSlides(slideSet) {
    console.log("loadSlidesHoriz");
    console.log("slideSet", slideSet);

    return slideSet.map((slide, index) => {
        // Проверка наличия специальной анимации
        const animationText = checkSpecAnimation(slide);
        const text = animationText !== null ? animationText : "";

        return `
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
                ">
                <div class="background-container"
                    style="
                        background-image: url('/Farmacology${slide.image}');
                        height: 100%;
                        width: 100%;
                    ">
                    <button class="invisible-button" onclick="Reveal.slide(0);"></button>
                    <button class="invisible-left-button" onclick="Reveal.prev();"></button>
                    <button class="invisible-right-button" onclick="Reveal.next();"></button>
                    ${text}
                </div>
            </section>
        `;
    }).join('');
}


function loadSlides(setName) {
    window.imageIndex = 0;

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
                // Проверяем, существует ли кнопка с таким ID
                if (!backgroundContainer.querySelector(`#${button.id}`)) {
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
                } else {
                    console.warn(`Кнопка с ID ${button.id} уже существует на слайде ${slideId}`);
                }
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

let isMouseDown = false; // Флаг для проверки зажатия кнопки мыши

document.addEventListener('mousedown', () => {
    isMouseDown = true;
});

document.addEventListener('mouseup', () => {
    isMouseDown = false;
});

function handleMouseMove(event) {
    if (!isMouseDown) return; // Если кнопка мыши не зажата, ничего не делаем
    if (event.target.classList.contains('no-swipe-zone')) return;
    const humans = document.querySelectorAll('.human');
    const percentageElement = document.querySelector('#percentage');
    let paintedCount = 0;

    humans.forEach(human => {
        const rect = human.getBoundingClientRect();
        if (event.clientX >= rect.left && event.clientX <= rect.right &&
            event.clientY >= rect.top && event.clientY <= rect.bottom) {
            if (!human.classList.contains('painted')) {
                human.classList.add('painted');
                human.style.backgroundImage = 'url(/Farmacology/slides/Asacol/A1/231239.png)';
            }
        }
    });

    paintedCount = document.querySelectorAll('.human.painted').length;
    const totalHumans = humans.length;
    const percentage = Math.round((paintedCount / totalHumans) * 100);

    if (paintedCount > 0) {
        percentageElement.style.display = 'block';
        percentageElement.textContent = `${percentage}%`;
    }
}

function handleTouchMove(event) {
    if (event.target.classList.contains('no-swipe-zone')) {
        event.preventDefault(); // Блокируем перелистывание
        return;
    }
    const humans = document.querySelectorAll('.human');
    const percentageElement = document.querySelector('#percentage');
    let paintedCount = 0;
    const touch = event.touches[0];

    humans.forEach(human => {
        const rect = human.getBoundingClientRect();
        if (touch.clientX >= rect.left && touch.clientX <= rect.right &&
            touch.clientY >= rect.top && touch.clientY <= rect.bottom) {
            if (!human.classList.contains('painted')) {
                human.classList.add('painted');
                human.style.backgroundImage = 'url(/Farmacology/slides/Asacol/A1/231239.png)';
            }
        }
    });

    paintedCount = document.querySelectorAll('.human.painted').length;
    const totalHumans = humans.length;
    const percentage = Math.round((paintedCount / totalHumans) * 100);

    if (paintedCount > 0) {
        percentageElement.style.display = 'block';
        percentageElement.textContent = `${percentage}%`;
    }
}

 function disableRevealSwipe() {
        Reveal.configure({ touch: false });
    }

function enableRevealSwipe() {
    Reveal.configure({ touch: true });
}

Reveal.on('slidechanged', (event) => {
    if (event.currentSlide.querySelector('.no-swipe-zone')) {
        disableRevealSwipe();
    } else {
        enableRevealSwipe();
    }
});