// ==========================================
// 1. MENU BURGER
// ==========================================
const toggler = document.getElementById('nav-toggle-btn');
const nav = document.getElementById('nav-links');

if (toggler && nav) {
    toggler.addEventListener('click', () => {
        nav.classList.toggle('is-active');
    });
}

// ==========================================
// 2. ANIMATION AU SCROLL (Fade-in)
// ==========================================
const sections = document.querySelectorAll('section');

function checkVisibleSections() {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('is-visible');
        }
    });
}

window.addEventListener('scroll', checkVisibleSections);
window.addEventListener('load', checkVisibleSections);

// ==========================================
// 3. GALERIE LIGHTBOX (Plein écran avec flèches)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const galleryGrids = document.querySelectorAll('.project-gallery-grid');
    
    if (galleryGrids.length === 0) return;

    // Création de la structure HTML de la Lightbox
    const lightbox = document.createElement('div');
    lightbox.id = 'project-lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-overlay"></div>
        <div class="lightbox-content">
            <button class="lightbox-close" aria-label="Fermer">&times;</button>
            <button class="lightbox-prev" aria-label="Précédent">&#10094;</button>
            <img class="lightbox-image" src="" alt="">
            <button class="lightbox-next" aria-label="Suivant">&#10095;</button>
        </div>
    `;
    document.body.appendChild(lightbox);

    const overlay = lightbox.querySelector('.lightbox-overlay');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    const lightboxImg = lightbox.querySelector('.lightbox-image');

    let currentImages = [];
    let currentIndex = 0;

    function openLightbox(images, index) {
        currentImages = images;
        currentIndex = index;
        updateImage();
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateImage() {
        if (currentImages.length === 0) return;
        
        lightboxImg.style.opacity = 0;
        
        setTimeout(() => {
            lightboxImg.src = currentImages[currentIndex].src;
            lightboxImg.style.opacity = 1;
            
            prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
            nextBtn.style.visibility = currentIndex === currentImages.length - 1 ? 'hidden' : 'visible';
        }, 200);
    }

    function showNext() {
        if (currentIndex < currentImages.length - 1) {
            currentIndex++;
            updateImage();
        }
    }

    function showPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateImage();
        }
    }

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', closeLightbox);
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showNext(); });
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showPrev(); });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNext();
        if (e.key === 'ArrowLeft') showPrev();
    });

    galleryGrids.forEach(grid => {
        const images = grid.querySelectorAll('img');
        const imageArray = Array.from(images);

        images.forEach((img, index) => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', () => {
                openLightbox(imageArray, index);
            });
        });
    });
});