// Menu burger
const toggler = document.getElementById('navbar-toggler');
const nav = document.getElementById('navbar-nav');
toggler.addEventListener('click', () => { nav.classList.toggle('show'); });

// Carousel formations
const carousel = document.getElementById('formationsCarousel');
const inner = carousel.querySelector('.carousel-inner');
const items = carousel.querySelectorAll('.carousel-item');
let index = 0;

function updateCarousel() {
    inner.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('prevFormation').addEventListener('click', () => {
    index = (index - 1 + items.length) % items.length;
    updateCarousel();
});

document.getElementById('nextFormation').addEventListener('click', () => {
    index = (index + 1) % items.length;
    updateCarousel();
});

// Auto-slide toutes les 5s
setInterval(() => {
    index = (index + 1) % items.length;
    updateCarousel();
}, 5000);

// Fade-in au scroll
const sections = document.querySelectorAll('section');
function checkVisibleSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if(sectionTop < triggerBottom) section.classList.add('visible');
    });
}
window.addEventListener('scroll', checkVisibleSections);
window.addEventListener('load', checkVisibleSections);
