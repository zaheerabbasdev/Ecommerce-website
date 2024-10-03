// src/Slide.js

export function showSlide(slides, radios, number) {
    slides.forEach(slide => {
        slide.style.display = 'none'; // Hide all slides
    });
    slides[number - 1].style.display = 'block'; // Show the current slide

    radios.forEach(radio => {
        radio.checked = (radio.getAttribute('data-slide') === number.toString()); // Update radio button state
    });
}

export function nextSlide(slides, radios, currentSlide) {
    const totalSlides = slides.length;

    // Increment the current slide index
    currentSlide.current = (currentSlide.current % totalSlides) + 1; // Cycle through slides

    showSlide(slides, radios, currentSlide.current); // Show the next slide
}

export function initSlider(slides, radios, currentSlide) {
    showSlide(slides, radios, currentSlide.current); // Show the initial slide

    radios.forEach(radio => {
        radio.addEventListener('click', function () {
            currentSlide.current = parseInt(this.getAttribute('data-slide')); // Update current slide on radio click
            showSlide(slides, radios, currentSlide.current); // Show the selected slide
            resetInterval(); // Reset the interval
        });
    });

    // Change interval to 4 seconds for each slide
    let slideInterval = setInterval(() => nextSlide(slides, radios, currentSlide), 4000); 

    function resetInterval() {
        clearInterval(slideInterval); // Clear the existing interval
        slideInterval = setInterval(() => nextSlide(slides, radios, currentSlide), 4000); // Restart the interval with 4 seconds
    }
}
