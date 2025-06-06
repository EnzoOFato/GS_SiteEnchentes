document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('application-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Obrigado por se candidatar! Entraremos em contato.');
        this.reset();
    });

    const track = document.querySelector('.carousel-track');
    const items = Array.from(track.children);
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    const updateCarousel = () => {
        const width = items[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentIndex * width}px)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel();
});
