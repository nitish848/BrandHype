$(document).ready(function () {
    const navbarToggler = $('.navbar-toggler');
    const iconImage = $('.navbar-toggler-icon-custom');

    navbarToggler.on('click', function () {
        if (iconImage.attr('src') === './img/menu.svg') {
            iconImage.attr('src', './img/close.svg');
        } else {
            iconImage.attr('src', './img/menu.svg');
        }
    });
});

const counters = document.querySelectorAll('.counter-number');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = parseInt(entry.target.dataset.target);
            const increment = target / 100;
            let currentValue = 0;
            const interval = setInterval(() => {
                currentValue += increment;
                entry.target.textContent = Math.min(currentValue, target);
                if (currentValue >= target) {
                    clearInterval(interval);
                }
            }, 10);
            observer.unobserve(entry.target);
        }
    });
}, options);

counters.forEach(counter => {
    observer.observe(counter);
});