function generateSlides(slideSet) {
    return slideSet.map(slide => `
        <section data-background-image="${slide.image}" data-background-size="73%">
        </section>
    `).join('');
}

function loadSlides(setName) {
    const slidesContainer = document.getElementById('slides-container');
    const reveal = document.querySelector('.reveal');

    // Создаём новые элементы слайдов и добавляем их в контейнер
    const newSlides = generateSlides(mapping[setName]);
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = newSlides;

    // Добавляем каждый новый <section> в slidesContainer
    Array.from(tempDiv.children).forEach(slide => {
        slidesContainer.appendChild(slide);
    });

    reveal.style.display = 'block';

    Reveal.layout(); // Перерасчёт макета
    Reveal.sync()
    Reveal.slide(1)
}

