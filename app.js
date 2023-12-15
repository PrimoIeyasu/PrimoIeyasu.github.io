document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });

                
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove('active');
                });

                link.classList.add('active');
            }
        });
    });
});


