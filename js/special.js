const percent_animation = `
            <div class="percent-container">
    <button class="percent" id="percent5" style="background-image: url('/Farmacology/slides/Enterol2560/E1/5.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        "></button>
    <button class="percent" id="percent4" style="background-image: url('/Farmacology/slides/Enterol2560/E1/4.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        "></button>
    <button class="percent" id="percent3" style="background-image: url('/Farmacology/slides/Enterol2560/E1/3.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        "></button>
    <button class="percent" id="percent2" style="background-image: url('/Farmacology/slides/Enterol2560/E1/2.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        "></button>
    <button class="percent" id="percent1" style="background-image: url('/Farmacology/slides/Enterol2560/E1/1.png');" onclick="
            this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 2000);
        "></button>
</div>
 `

const e_26 = `
    <div class="pill"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (28).png', type: 'Enterol',})">
    </div>
    <div class="bubble-text"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (27).png', type: 'Enterol',})">
    </div>
`

const e_9 = `
    <div class="pill-e9"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (11).png', type: 'Enterol',})">
    </div>
    <div class="bubble-text-top-e9"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (27).png', type: 'Enterol',})">
    </div>
    <div class="bubble-text-bottom-e9"
        onclick="addTemporarySlide({image: '/slides/Enterol2560/E (10).png', type: 'Enterol',})">
    </div>
`


const c_2 = `
    <div class="stresam-buttons-container">
        <button style="background-image: url('/Farmacology/slides/Stresam2560/C2/1.png');" class="stresam-buttons" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
        <button style="background-image: url('/Farmacology/slides/Stresam2560/C2/2.png');" class="stresam-buttons" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
        <button style="background-image: url('/Farmacology/slides/Stresam2560/C2/3.png');" class="stresam-buttons" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
        <button style="background-image: url('/Farmacology/slides/Stresam2560/C2/4.png');" class="stresam-buttons" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
        <button style="background-image: url('/Farmacology/slides/Stresam2560/C2/5.png');" class="stresam-buttons" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />

    </div>
`

const visit = `
    <div class="visit-container">
        <button class="visit" id="visit1" style="background-image: url('/Farmacology/slides/Asacol/A0/1.png');" onclick="addTemporarySlides(arrayVisit1)"></button>
        <button class="visit" id="visit2" style="background-image: url('/Farmacology/slides/Asacol/A0/2.png');" onclick="addTemporarySlides(arrayVisit2)"></button>
        <button class="visit" id="visit3" style="background-image: url('/Farmacology/slides/Asacol/A0/3.png');" onclick="addTemporarySlides(arrayVisit3)"></button>
        <button class="visit" id="visit4" style="background-image: url('/Farmacology/slides/Asacol/A0/4.png');" onclick="addTemporarySlides(arrayVisit4)"></button>
        <button class="visit" id="visit5" style="background-image: url('/Farmacology/slides/Asacol/A0/5.png');" onclick="window.location.href='https://drive.google.com/file/d/1hyBtO4NPeKQM0Lc9ZuoL3hBYD6DuX1Kp/view?usp=sharing';"></button>
    </div>
`

const visit_child = `
    <div class="visit-container">
        <button class="visit" id="visit1" style="background-image: url('/Farmacology/slides/Asacol/A0/1.png');" onclick="addTemporarySlides(arrayVisit1)"></button>
        <button class="visit" id="visit2" style="background-image: url('/Farmacology/slides/Asacol/A0/2.png');" onclick=""></button>
        <button class="visit" id="visit3" style="background-image: url('/Farmacology/slides/Asacol/A0/3.png');" onclick=""></button>
        <button class="visit" id="visit4" style="background-image: url('/Farmacology/slides/Asacol/A0/4.png');" onclick=""></button>
        <button class="visit" id="visit5" style="background-image: url('/Farmacology/slides/Asacol/A0/5.png');" onclick="window.location.href='https://drive.google.com/file/d/1hyBtO4NPeKQM0Lc9ZuoL3hBYD6DuX1Kp/view?usp=sharing';"></button>
    </div>
`

const visit_full = `
    <div class="visit-container">
        <button class="visit" id="visit1" style="background-image: url('/Farmacology/slides/Asacol/A0/1.png');" onclick="addTemporarySlides(arrayVisit1)"></button>
        <button class="visit" id="visit2" style="background-image: url('/Farmacology/slides/Asacol/A0/2.png');" onclick="addTemporarySlides(arrayVisit2)"></button>
        <button class="visit" id="visit3" style="background-image: url('/Farmacology/slides/Asacol/A0/3.png');" onclick="addTemporarySlides(arrayVisit3)"></button>
        <button class="visit" id="visit4" style="background-image: url('/Farmacology/slides/Asacol/A0/4.png');" onclick="addTemporarySlides(arrayVisit4)"></button>
        <button class="visit" id="visit5" style="background-image: url('/Farmacology/slides/Asacol/A0/5.png');" onclick="window.location.href='https://drive.google.com/file/d/1hyBtO4NPeKQM0Lc9ZuoL3hBYD6DuX1Kp/view?usp=sharing';"></button>
    </div>
`

const c_14 = `
<div class="stresam-buttons-container-c14">
    <button style="background-image: url('/Farmacology/slides/Stresam2560/C14/1.png');" class="stresam-buttons-c14" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
    <button style="background-image: url('/Farmacology/slides/Stresam2560/C14/2.png');" class="stresam-buttons-c14" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
    <button style="background-image: url('/Farmacology/slides/Stresam2560/C14/3.png');" class="stresam-buttons-c14" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
    <button style="background-image: url('/Farmacology/slides/Stresam2560/C14/4.png');" class="stresam-buttons-c14" onclick="this.classList.add('active');
            setTimeout(() => {
                this.classList.remove('active');
            }, 1000);" />
</div>
`

const e_42 = `
<div class="circle-buttons-container">
    <img src="./slides/Enterol v3/Е42/Group 81.png" class="circle-buttons" id="circle-btn-1" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (48).png', type: 'EnterolV3'});" />
    <img src="./slides/Enterol v3/Е42/Group 82.png" class="circle-buttons" id="circle-btn-2" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (46).png', type: 'EnterolV3'});" />
    <img src="./slides/Enterol v3/Е42/Group 83.png" class="circle-buttons" id="circle-btn-3" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (47).png', type: 'EnterolV3'});" />
    <img src="./slides/Enterol v3/Е42/Group 84.png" class="circle-buttons" id="circle-btn-4" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (49).png', type: 'EnterolV3'});" />
    <img src="./slides/Enterol v3/Е42/Group 85.png" class="circle-buttons" id="circle-btn-5" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (45).png', type: 'EnterolV3'});" />
    <img src="./slides/Enterol v3/Е42/Group 86.png" class="circle-buttons" id="circle-btn-6"
         onclick="const slides6 = [
            { type: 'EnterolV3', image: '/slides/Enterol v3/Е (50).png' },
            { type: 'EnterolV3', image: '/slides/Enterol v3/Е (51).png' },
            { type: 'EnterolV3', image: '/slides/Enterol v3/Е (52).png' },
            { type: 'EnterolV3', image: '/slides/Enterol v3/Е (53).png' },
            { type: 'EnterolV3', image: '/slides/Enterol v3/Е (54).png' },
            { type: 'EnterolV3', image: '/slides/Enterol v3/Е (55).png' }
        ];addTemporarySlides(slides6);" />
    <img src="./slides/Enterol v3/Е42/Group 87.png" class="circle-buttons" id="circle-btn-7" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (44).png', type: 'EnterolV3'});" />
    <img src="./slides/Enterol v3/Е42/Group 88.png" class="circle-buttons" id="circle-btn-8" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (43).png', type: 'EnterolV3'});" />
</div>
`

const e_30 = `
    <div class="circle-buttons-container">
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 74.png" class="circle-buttons2" id="circle-btn-21"
             onclick="const slidesBtn21 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (31).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (32).png' }
            ];addTemporarySlides(slidesBtn21);" />
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 75.png" class="circle-buttons2" id="circle-btn-22"
             onclick="const slidesBtn22 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (33).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (34).png' }
            ];addTemporarySlides(slidesBtn22);" />
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 76.png" class="circle-buttons2" id="circle-btn-23"
             onclick="const slidesBtn23 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (35).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (36).png' }
            ];addTemporarySlides(slidesBtn23);" />
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 77.png" class="circle-buttons2" id="circle-btn-24" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (41).png', type: 'EnterolV3'});" />
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 78.png" class="circle-buttons2" id="circle-btn-25"
             onclick="const slidesBtn25 = [
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (37).png' },
                { type: 'EnterolV3', image: '/slides/Enterol v3/Е (38).png' }
            ];addTemporarySlides(slidesBtn25);" />
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 79.png" class="circle-buttons2" id="circle-btn-26" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (39).png', type: 'EnterolV3'});" />
        <img src="/Farmacology/slides/Enterol v3/Е30/Group 80.png" class="circle-buttons" id="circle-btn-27" onclick="addTemporarySlide({image: '/slides/Enterol v3/Е (40).png', type: 'EnterolV3'});" />
    </div>
`

const m_1 = `
    <div class="m_1_button_ing"
        onclick="addTemporarySlides(arrayM1_1)">
    </div>
    <div class="m_1_button_asp"
        onclick="addTemporarySlides(arrayM1_2)">
    </div>
    <div class="m_1_button_izo"
        onclick="addTemporarySlides(arrayM1_3)">
    </div>
`

const m_1_1 = `
    <div class="m_1_button_asp"
        onclick="addTemporarySlides(arrayM1_2)">
    </div>
    <div class="m_1_button_izo"
        onclick="addTemporarySlides(arrayM1_3)">
    </div>
`

const m_1_2 = `
    <div class="m_1_button_ing"
        onclick="Reveal.next()">
    </div>
`

const a_1 = `
      <div class="human-container" 
          onmousemove="handleMouseMove(event)" 
          ontouchmove="handleTouchMove(event)">
      
          <!-- Зона без свайпа -->
          <div class="no-swipe-zone" 
              style="
                  position: absolute;
                  width: 100%;
                  height: 100%;
                  z-index: 1212121222222221122221212212;
                  touch-action: none; 
              ">
          </div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div class="human"></div>
          <div id="percentage" 
            style="
                position: absolute;
                top: 140%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 3rem;
                font-weight: bold;
                color: red;
                display: none;
            ">
            </div>
      </div>
`

const numbers = `
    <div id="main-block" class="main-block">
        <div class="columns">
            <!-- Колонка с изображениями -->
            <div class="column-texts">
                <div class="text-row">
                    <div class="image-group">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index); // Возвращаем индекс в очередь
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Дисбіоз, пов’язаний с застосуванням АБТ</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index); // Возвращаем индекс в очередь
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Синдром подразненного кішківника</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Запальні захворювання кішківника</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Захворювання шкіри</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Діарея (дисбіоз) будь-якого генезу</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Призначення ІПП</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Метаболічні порушенні (ожиріння)</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Використання АТБ при урологічних захворюваннях</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Метаболічно асоційована стеатотична хвороба печінки</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Хелікобактер пілорі інфекція</p>
                </div>
                <div class="text-row">
                    <div class="image-group ">
                        <img src="/Farmacology/slides/Enterol2560/E2/1.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/2.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/3.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/4.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/5.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/6.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/7.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/8.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/9.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/10.png" class="text-image">
                        <img src="/Farmacology/slides/Enterol2560/E2/11.png" class="text-image">
                    </div>
                    <p class="text" onclick="
                        const textElement = this;
                        const imageGroup = this.previousElementSibling;
                        const images = Array.from(imageGroup.querySelectorAll('.text-image'));

                        if (!this.dataset.id) {
                            this.dataset.id = Math.random().toString(36).substr(2, 9);
                        }
                        const textId = this.dataset.id;

                        if (!window.globalImageQueue) {
                            window.globalImageQueue = [];
                        }

                        if (!window.imageStates) {
                            window.imageStates = {};
                        }

                        if (window.imageStates[textId]) {
                            // Отмена выбора: убираем видимость
                            window.imageStates[textId].forEach(index => {
                                if (images[index]) {
                                    images[index].style.opacity = 0;
                                    images[index].classList.remove('visible');
                                    window.globalImageQueue.push(index);
                                    window.globalImageQueue.sort((a, b) => b - a)
                                }
                            });
                            delete window.imageStates[textId];
                        } else {
                            // Новый выбор: показываем изображения
                            if (window.globalImageQueue.length === 0) {
                                window.globalImageQueue = images.map((_, i) => i).reverse(); // Инициализируем очередь
                            }
                            let localIndices = [];
                            while (window.globalImageQueue.length > 0) {
                                const index = window.globalImageQueue.pop();
                                if (images[index] && !images[index].classList.contains('visible')) {
                                    images[index].style.opacity = 1;
                                    images[index].classList.add('visible');
                                    localIndices.push(index);
                                    break; // Показать одно изображение за раз
                                }
                            }
                            window.imageStates[textId] = localIndices;
                        }
                    ">Інші …</p>
                </div>
                <!-- Add similar blocks for other rows -->
            </div>
        </div>
    </div>
`

const a_2 = `
    <button class="play-button"
        onclick="
            const video = document.querySelector('#hidden-video');
            video.style.display = 'block';
            video.play();
            this.style.display = 'none';
        "
        style="
            position: absolute;
            top: 55%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: transparent;
            border: none;
            cursor: pointer;
            z-index: 1001;
        ">
        <img src="/Farmacology/slides/Asacol/A2/31232009.png" alt="Play" style="width: 80px; height: 80px;">
    </button>

    <!-- Спрятанное видео -->
    <video id="hidden-video"
        style="
            display: none;
            position: absolute;
            top: 49.9%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            height: auto;
            z-index: 999;
        "
        controls
        disablepictureinpicture
        controlslist="nodownload noplaybackrate">
        <source src="/Farmacology/slides/Asacol/A2/asacol.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>

    <div class="bottom-corner" style="position: absolute; top: 66.3%; left: -3%; width: 20%; height: 20%; z-index: 999;">
        <img src="/Farmacology/slides/Asacol/A2/bottom-corner.png" />
    </div>
    <div class="top-corner" style="position: absolute; top: 19.8%; right: -3%; width: 20%; height: 20%; z-index: 999;">
        <img src="/Farmacology/slides/Asacol/A2/top-corner.png" />
    </div>
    <div class="video-title" style="position: absolute; top: 11%; right: 0; width: 105%; height: fit-content; aspect-ratio: 1363 / 118; z-index: 999; margin: 0; left: -2.7%;">
        <img src="/Farmacology/slides/Asacol/A2/title.png" style="margin: 0;"/>
    </div>
`

const e_20 = `
<div id="e20-container" style="position: absolute; opacity: 0; width: 100%; height: 100%; z-index: 500;" onclick="document.getElementById('e20-container').style.opacity = '1';">
    <div>
        <img src="/Farmacology/slides/Enterol2560/e20-title.png" style="position: absolute; top: 7%; right: 0; width: 100%; height: fit-content; max-width: 200%; max_height: 200%; aspect-ratio: 1454 / 161; margin: 0; left: 0;" />
    </div>
</div>
`

const m_16 = `
<div id="m_16-1" class="m_16-buttons" onclick="addTemporarySlide({image: '/slides/Marimer2560/M (20).png', type: 'Marimer'});"></div>
<div id="m_16-2" class="m_16-buttons" onclick="addTemporarySlide({image: '/slides/Marimer2560/M (20).png', type: 'Marimer'});"></div>
<div id="m_16-3" class="m_16-buttons" onclick="addTemporarySlide({image: '/slides/Marimer2560/M (21).png', type: 'Marimer'});"></div>
<div id="m_16-4" class="m_16-buttons" onclick="addTemporarySlide({image: '/slides/Marimer2560/M (19).png', type: 'Marimer'});"></div>
<div id="m_16-5" class="m_16-buttons" onclick="addTemporarySlide({image: '/slides/Marimer2560/M (18).png', type: 'Marimer'});"></div>
<div id="m_16-6" class="m_16-buttons" onclick="addTemporarySlide({image: '/slides/Marimer2560/M (17).png', type: 'Marimer'});"></div>
`

const o_2 = `
<div id="o_2-1" class="o_2-buttons" onclick="addTemporarySlide({image: '/slides/Otipax2560/O (3).png', type: 'Otipax'});"></div>
<div id="o_2-2" class="o_2-buttons" onclick="addTemporarySlide({image: '/slides/Otipax2560/O (7).png', type: 'Otipax'});"></div>
<div id="o_2-3" class="o_2-buttons" onclick="addTemporarySlide({image: '/slides/Otipax2560/O (8).png', type: 'Otipax'});"></div>
<div id="o_2-4" class="o_2-buttons" onclick="addTemporarySlide({image: '/slides/Otipax2560/O (6).png', type: 'Otipax'});"></div>
<div id="o_2-5" class="o_2-buttons" onclick="addTemporarySlide({image: '/slides/Otipax2560/O (5).png', type: 'Otipax'});"></div>
`



const m_15 = `
    <div class="m_15_button_1"
        onclick="addTemporarySlide({image: '/slides/Marimer2560/M (2).png', type: 'Marimer',})">
    </div>
    <div class="m_15_button_2"
        onclick="addTemporarySlide({image: '/slides/Marimer2560/M (3).png', type: 'Marimer',})">
    </div>
    <div class="m_15_button_3"
        onclick="addTemporarySlide({image: '/slides/Marimer2560/M (4).png', type: 'Marimer',})">
    </div>
    <div class="m_15_button_4"
        onclick="addTemporarySlide({image: '/slides/Marimer2560/M (6).png', type: 'Marimer',})">
    </div>
    <div class="m_15_button_5"
        onclick="addTemporarySlide({image: '/slides/Marimer2560/M (5).png', type: 'Marimer',})">
    </div>
    <div class="m_15_button_6"
        onclick="addTemporarySlide({image: '/slides/Marimer2560/M (7).png', type: 'Marimer',})">
    </div>
`