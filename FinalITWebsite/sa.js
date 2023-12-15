function checkSlide() {
    console.log('Scroll event fired!');
}
document.addEventListener("DOMContentLoaded", function () {
    const slideInElements = document.querySelectorAll('.slide-in');

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });

    // Observe each slide-in element
    slideInElements.forEach(element => {
        observer.observe(element);
    });
});

