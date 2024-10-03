// src/slider.js

export function showSlide(slides, radios, number) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    slides[number - 1].style.display = 'block';

    radios.forEach(radio => {
        radio.checked = (radio.getAttribute('data-slide') === number.toString());
    });
}

export function nextSlide(slides, radios, currentSlide) {
    const totalSlides = slides.length;
    currentSlide.current = currentSlide.current >= totalSlides ? 1 : currentSlide.current + 1;
    showSlide(slides, radios, currentSlide.current);
}

export function initSlider(slides, radios, currentSlide) {
    showSlide(slides, radios, currentSlide.current);

    radios.forEach(radio => {
        radio.addEventListener('click', function () {
            currentSlide.current = parseInt(this.getAttribute('data-slide'));
            showSlide(slides, radios, currentSlide.current);
            resetInterval();
        });
    });

    let slideInterval = setInterval(() => nextSlide(slides, radios, currentSlide), 5000);

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => nextSlide(slides, radios, currentSlide), 5000);
    }
}
