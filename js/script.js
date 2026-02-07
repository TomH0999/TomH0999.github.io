// NAVBAR TOGGLER
const toggler = document.getElementById('navbar-toggler');
const nav = document.getElementById('navbar-nav');

toggler.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// FORMATIONS CAROUSEL
let currentSlide = 0;
const slides = document.querySelectorAll('#formationsCarousel .carousel-item');
const totalSlides = slides.length;

document.getElementById('nextFormation').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
});

document.getElementById('prevFormation').addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
});

