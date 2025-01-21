const currentSlides = mapping.pediatr;
let hasContentBeenAdded = false;  // Флаг для отслеживания добавления контента

// Находим контейнер слайдов
const sliderElement = document.getElementById('slides-container');

// Функция для проверки и добавления SVG кружка
const checkAndAddSvg = () => {
  if (hasContentBeenAdded) {
    return;
  }

  // Находим слайд по фону
  const specialSlides = document.querySelector('.background-container[style*="slides/Enterol2560/E (20).png"]');

  // Проверяем, существует ли слайд и не добавлен ли уже блок с классом 'special-content'
  if (specialSlides && !specialSlides.querySelector('.special-content')) {
    const anim = `
      <div class="special-content">
          <img src="slides/Анимация/Кишечник.png" alt="фон" class="overlay-image">
          <img src="slides/Анимация/text1.png" alt="текст" class="text-1">
          <img src="slides/Анимация/text2.png" alt="текст" class="text-2">
          <img src="slides/Анимация/text3.png" alt="текст" class="text-3">
          <img src="slides/Анимация/arr1.png" alt="Стрелка" class="arr-1">

          <div class="image-stack">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 37.png" alt="Наложение 1" class="stacked-image img-1" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 38.png" alt="Наложение 1" class="stacked-image img-3" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 39.png" alt="Наложение 1" class="stacked-image img-4" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 40.png" alt="Наложение 1" class="stacked-image img-5" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 41.png" alt="Наложение 1" class="stacked-image img-6" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 42.png" alt="Наложение 1" class="stacked-image img-7" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 43.png" alt="Наложение 1" class="stacked-image img-8" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 44.png" alt="Наложение 1" class="stacked-image img-9" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 36.png" alt="Наложение 1" class="stacked-image img-10" loading="lazy">
          </div>

          <div class="image-stack2">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 34.png" alt="Наложение 1" class="stacked-image2 img-1" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 35.png" alt="Наложение 1" class="stacked-image2 img-2" loading="lazy">
          </div>

          <div class="image-stack3">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 33.png" alt="Наложение 1" class="stacked-image3 img-1" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 32.png" alt="Наложение 1" class="stacked-image3 img-2" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 31.png" alt="Наложение 1" class="stacked-image3 img-3" loading="lazy">
          </div>

          <div class="image-stack4">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 25.png" alt="Наложение 1" class="stacked-image4 img-1" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 26.png" alt="Наложение 1" class="stacked-image4 img-2" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 27.png" alt="Наложение 1" class="stacked-image4 img-3" loading="lazy">
          </div>

          <div class="image-stack5">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 29.png" alt="Наложение 1" class="stacked-image5 img-1" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 28.png" alt="Наложение 1" class="stacked-image5 img-2" loading="lazy">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Group 30.png" alt="Наложение 1" class="stacked-image5 img-3" loading="lazy">
          </div>

          <div class="image-stack1-r">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Group 29.png" alt="Наложение 1" class="stacked-image1-r img-1">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Group 30.png" alt="Наложение 1" class="stacked-image1-r img-2">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Group 31.png" alt="Наложение 1" class="stacked-image1-r img-3">
          </div>

          <div class="image-stack2-r">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Shape 10.png" alt="Наложение 1" class="stacked-image2-r img-1">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Shape 11.png" alt="Наложение 1" class="stacked-image2-r img-2">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Shape 12.png" alt="Наложение 1" class="stacked-image2-r img-3">
          </div>

          <div class="image-stack3-r">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Shape 13.png" alt="Наложение 1" class="stacked-image3-r img-1">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Shape 14.png" alt="Наложение 1" class="stacked-image3-r img-2">
            <img src="slides/Enterol2560/E19/Новая папка (2)/Зеленые бактерии/Shape 15.png" alt="Наложение 1" class="stacked-image3-r img-3">
          </div>

          <div class="image-f img-1">
        
              <img src="slides/Enterol2560/E19/Новая папка (2)/Кишечник/Mask group 4.png" alt="Наложение 1" class="image-f img-2">

             <div class="image-stack1-l">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Group 7.png" alt="Наложение 1" class="stacked-image1-l img-1">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Group 5.png" alt="Наложение 1" class="stacked-image1-l img-2">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Group 8.png" alt="Наложение 1" class="stacked-image1-l img-3">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Group 4.png" alt="Наложение 1" class="stacked-image1-l img-4">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Group 6.png" alt="Наложение 1" class="stacked-image1-l img-5">
            
            </div>

            <div class="image-stack2-l">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 6.png" alt="Наложение 1" class="stacked-image2-l img-1">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 7.png" alt="Наложение 1" class="stacked-image2-l img-2">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 8.png" alt="Наложение 1" class="stacked-image2-l img-3">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 9.png" alt="Наложение 1" class="stacked-image2-l img-4">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 10.png" alt="Наложение 1" class="stacked-image2-l img-5">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 11.png" alt="Наложение 1" class="stacked-image2-l img-6">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 12.png" alt="Наложение 1" class="stacked-image2-l img-7">
            </div>

            <div class="image-stack3-l">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 2.png" alt="Наложение 1" class="stacked-image3-l img-1">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 3.png" alt="Наложение 1" class="stacked-image3-l img-2">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 4.png" alt="Наложение 1" class="stacked-image3-l img-3">
              <img src="slides/Enterol2560/E19/Новая папка (2)/Синие бактерии/Shape 5.png" alt="Наложение 1" class="stacked-image3-l img-4">
            </div>

          </div>

        </div>
    `;

    // Создаем временный контейнер для преобразования строки в DOM
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = anim;

    // Переносим содержимое временного контейнера в нужный элемент
    specialSlides.appendChild(tempDiv.firstElementChild);
    console.log('Контент добавлен в слайд');
    hasContentBeenAdded = true;  // Устанавливаем флаг, что контент добавлен
    specialSlides.addEventListener('click', (event) => {
      // Проверяем, что клик был по слайду
      const slide = event.target.closest('[data-index]');
      if (slide) {
        const index = slide.getAttribute('data-index');
        handleSlideClick(index);
      }
    });
  }
};

// Функция для сброса флага, если в контейнере только секция с id="slide-0"
const resetFlagIfSlide0Only = () => {
  const slidesContainer = sliderElement;
  
  if (slidesContainer) {
    const slideSections = slidesContainer.querySelectorAll('section');
    
    // Находим слайд с id="slide-0"
    const slide0 = Array.from(slideSections).find(slide => slide.id === 'slide-0');
    
    if (slide0) {
      const rect = slide0.getBoundingClientRect();
      
      // Проверяем, находится ли slide-0 в пределах видимой области экрана
      const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
      
      // Если slide-0 видим, сбрасываем флаг
      if (isInViewport) {
        hasContentBeenAdded = false;  // Сбрасываем флаг
        console.log('Флаг сброшен, slide-0 видим на экране');
      }
    }
  }
};

// Создаем Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Проверяем, видим ли slide-0
    if (entry.target.id === 'slide-0' && entry.isIntersecting) {
      // Когда slide-0 появляется на экране, сбрасываем флаг
      hasContentBeenAdded = false;
      console.log('Флаг сброшен, slide-0 видим на экране');
    }
  });
}, { threshold: 0.5 }); // Порог видимости 50%

// Наблюдаем за слайдом с id="slide-0"
const slide0 = document.getElementById('slide-0');
if (slide0) {
  observer.observe(slide0);
}

// Создаем наблюдатель за изменениями
const mutationObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    // Если были добавлены новые элементы
    if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
      // Проверяем и добавляем SVG
      checkAndAddSvg();
    }
  });
});

// Настроим наблюдатель для отслеживания изменений внутри sliderElement
if (sliderElement) {
  mutationObserver.observe(sliderElement, { childList: true, subtree: true });
}

// Первый вызов, чтобы обработать уже существующие элементы
checkAndAddSvg();



function handleSlideClick(index) {
  // Получаем слайд по data-index
  const slide = document.querySelector(`[data-index='${index}']`);
  
  if (!slide) {
    console.warn(`Slide with data-index="${index}" not found.`);
    return; // Завершаем выполнение, если слайд не найден
  }

  // Получаем главное изображение и текст
  const mainImage = slide.querySelector('.image-f');
  const specialContent = slide.querySelector('.special-content .text-1');
  const specialContent2 = slide.querySelector('.special-content .text-2');
  const specialContent3 = slide.querySelector('.special-content .text-3');
  const arrowAnimation = slide.querySelector('.special-content .arr-1');

  // Проверка на наличие главного изображения
  if (!mainImage) {
    console.warn(`Main image (.image-f) not found in slide with data-index="${index}".`);
    return; // Завершаем выполнение, если изображение не найдено
  }

  // Если анимация уже выполнена, выходим
  if (mainImage.dataset.animated === 'true') return;

  // Помечаем анимацию как выполненную
  mainImage.dataset.animated = 'true';

  // Анимация текста, если он есть
  if (specialContent) {
    resetAnimation(specialContent, 'slideDown 1s ease-in-out forwards');
  }

  // Анимация текста 2 (если он есть)
  if (specialContent2) {
    resetAnimation(specialContent2, 'slideUp1 1s ease-in-out forwards');
  }

  // Анимация текста 3 (если он есть)
  if (specialContent3) {
    resetAnimation(specialContent3, 'slideUp2 1s ease-in-out forwards');
  }


  // Анимация главного изображения
  resetAnimation(mainImage, 'slideX 1s ease-in-out forwards', () => {
    console.log('Main image animation completed.');

    // Плавание картинок в `.image-stack3-l` и `.image-stack3-r`
    const imagesToFloat = slide.querySelectorAll('.image-stack3-l .stacked-image3-l, .image-stack3-r .stacked-image3-r');
    imagesToFloat.forEach(img => {
      img.addEventListener('animationend', () => {
        resetAnimation(img, 'floatEffect 15s infinite ease-in-out');
      }, { once: true });
    });

    // Плавание картинок в `.image-stack2-l` и `.image-stack2-r`
    const imagesToFloat2 = slide.querySelectorAll('.image-stack2-l .stacked-image2-l, .image-stack2-r .stacked-image2-r');
    imagesToFloat2.forEach(img => {
      img.addEventListener('animationend', () => {
        resetAnimation(img, 'floatEffect2 15s infinite ease-in-out');
      }, { once: true });
    });

    arrowAnimation.classList.add('growAndFadeIn');

  });

    

  // Анимация исчезновения для обычных изображений
  const stackImages = slide.querySelectorAll('.image-stack .stacked-image, .image-stack2 .stacked-image2, .image-stack3 .stacked-image3, .image-stack4 .stacked-image4, .image-stack5 .stacked-image5');
  const rStackImages = slide.querySelectorAll('.image-stack1-r .stacked-image1-r, .image-stack2-r .stacked-image2-r, .image-stack3-r .stacked-image3-r, .image-stack1-l .stacked-image1-l, .image-stack2-l .stacked-image2-l, .image-stack3-l .stacked-image3-l');

  stackImages.forEach(image => {
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    const randomRotate = Math.random() * 360 - 180;

    image.style.setProperty('--random-x', `${randomX}px`);
    image.style.setProperty('--random-y', `${randomY}px`);
    image.style.setProperty('--random-rotate', `${randomRotate}deg`);

    resetAnimation(image, 'disappear 1s forwards', () => {
      rStackImages.forEach(rImage => {
        resetAnimation(rImage, 'appear 1s ease-out forwards');
      });
    });
  });
}


/**
 * Функция для сброса анимации и запуска новой
 * @param {HTMLElement} element - Элемент для анимации
 * @param {string} animation - Новая анимация
 * @param {Function} [callback] - Колбэк после завершения анимации
 */
function resetAnimation(element, animation, callback) {
  element.style.animation = 'none';
  element.style.animation = animation;

  if (callback) {
    element.addEventListener('animationend', callback, { once: true });
  }
}


