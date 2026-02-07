// Menu burger
const toggler = document.getElementById('navbar-toggler');
const nav = document.getElementById('navbar-nav');

toggler.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Carousel formations
const carousel = document.getElementById('formationsCarousel');
const items = carousel.querySelectorAll('.carousel-item');
let index = 0;

document.getElementById('prevFormation').addEventListener('click', () => {
    items[index].classList.remove('active');
    index = (index - 1 + items.length) % items.length;
    items[index].classList.add('active');
});

document.getElementById('nextFormation').addEventListener('click', () => {
    items[index].classList.remove('active');
    index = (index + 1) % items.length;
    items[index].classList.add('active');
});
