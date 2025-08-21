let lastScrollY = window.scrollY;
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            // Scrolling down
            header.style.transform = 'translateY(-200%)';

        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';


        }
        lastScrollY = window.scrollY;
    });