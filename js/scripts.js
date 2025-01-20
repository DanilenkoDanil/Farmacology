function generateSlides(slideSet) {
    if (document.body.classList.contains('reveal-scroll')) {
        console.log('Класс "reveal-scroll" is в теге <body>');
        return loadSlidesVert(slideSet);
    } else {
        console.log('Класс "reveal-scroll" отсутствует в теге <body>');
        return loadSlidesHoriz(slideSet);
    }

}

function checkSpecAnimation(slide) {
    console.log(slide.special_animation);
    console.log(slide.animation_file);
    if (slide.special_animation === 'Special') {
        const text = slide.animation_file;
        return text;
    } else {console.log("null"); return null;}

}

function loadSlidesHoriz(slideSet) {
    console.log("loadSlidesHoriz");
    console.log("slideSet", slideSet);

    let result = ''; // Итоговая строка

    slideSet.forEach((slide, index) => {
        let inSection;
        let htmlCode = checkSpecAnimation(slide);
        console.log("htmlCode " + htmlCode)

        // Проверка специальной анимации
        if (htmlCode !== null) {
            inSection = htmlCode;
        } else {
            inSection = `
                <div class="background-container"
                    >
                    <img class="image" src="${slide.image}">
                    <button class="invisible-button" onclick="Reveal.slide(0);"></button>
                    <button class="invisible-left-button" onclick="Reveal.prev();"></button>
                    <button class="invisible-right-button" onclick="Reveal.next();"></button>
                </div>
            `;
        }

        // Добавляем обработанный слайд к результату
        result += `
            <section
                data-type="${slide.type || ''}"
                data-index="${index + 1}"
                id="slide-${index + 1}"
                style="
                    display: flex !important;
                    width: 100vw;
                    height: 100%;
                    border: 3px solid green;
                    justify-content: center;
                    align-items: center;
                    margin-right: 35%;
                ">
                ${inSection}
            </section>
        `;
    });

    return result; // Возвращаем итоговую строку
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
                width: 100%;
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

function isMobileDevice() {
				return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
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

const width = window.innerWidth;
    const height = window.innerHeight;
    const userAgent = navigator.userAgent;

			    if (width / height >= 16 / 9) {
        console.log("height" + height);
        console.log(width);
        document.querySelectorAll('.background-container').forEach(cont => {
						cont.style.width = 'auto';
						cont.style.height = '100%';
					});
					console.log("set")
    } else {
    console.log("height" + height);
        console.log(width);
        document.querySelectorAll('.background-container').forEach((cont, index) => {

						cont.style.width = '100%';
						cont.style.height = 'auto';

						img = cont.querySelector('.image');
						console.log(img);
						img.style.width = '100%';
						img.style.height = 'auto';

					console.log("set")
					});
    }
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
                btn.style.zIndex = '119999'
                btn.setAttribute('onclick', button.action);
                btn.style.transform = `translate(${button.x}%, ${button.y}%)`;

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
