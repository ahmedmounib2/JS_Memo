/*
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 2000);
    }
}

function showSlide(index) {
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    clearInterval(intervalId);
    slideIndex++;
    showSlide(slideIndex);
}
*/

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", function() {
    initializeSlider();
    startSlider();
});

function initializeSlider() {
    slides[slideIndex].classList.add("displaySlide");
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
    resetInterval();
}

function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
    resetInterval();
}

function startSlider() {
    intervalId = setInterval(function() {
        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }, 5000);
}

function resetInterval() {
    clearInterval(intervalId);
    startSlider();
}
