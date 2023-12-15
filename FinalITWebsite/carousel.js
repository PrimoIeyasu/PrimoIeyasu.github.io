document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;

    function showSlide(index) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
    }

    function nextSlide() {
        if (currentIndex < carousel.children.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
});

