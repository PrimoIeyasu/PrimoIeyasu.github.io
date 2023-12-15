document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');
    const navLinks = document.querySelectorAll('.navbar .links a');

    toggleBtn.addEventListener('click', function () {
        dropDownMenu.classList.toggle('open');
        const isOpen = dropDownMenu.classList.contains('open');

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark fa-beat'
            : 'fa-solid fa-bars fa-beat';
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                dropDownMenu.classList.remove('open'); // Close dropdown menu
                toggleBtnIcon.classList = 'fa-solid fa-bars fa-beat'; // Reset hamburger icon
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                });
            }
        });
    });
});





