window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrollPosition = window.scrollY;
    var homepageSection = document.getElementById('hero'); // Replace 'hero' with your homepage section ID

    if (homepageSection) {
        var homepageHeight = homepageSection.offsetHeight;
        
        if (scrollPosition >= homepageHeight) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }
});