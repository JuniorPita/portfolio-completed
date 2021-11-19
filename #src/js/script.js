// Show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Accordion skills
const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open';
    }
    else {
        this.parentNode.className = 'skills__content skills__close';
    }
}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

// Qualification tabs
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active');
        });
        tab.classList.add('qualification__active');
    });
});

// Services modal
const modalViews = document.querySelectorAll('.services__modal');
const modalBtns = document.querySelectorAll('.services__button');
const modalCloses = document.querySelectorAll('.services__modal-close');

// Opening modal window
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

// Closing modal window
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});

// Portfolio swiper
let swiperPortfolio = new Swiper('.portfolio__container', {
    direction: 'horizontal',
    cssMode: true,
    loop: true,
    mousewheel: false,
    keyboard: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Testimonial swiper
let swiperTestimonial = new Swiper('.testimonial__container', {
    direction: 'horizontal',
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    mousewheel: true,
    keyboard: false,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    },
});

// Scroll sections active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
        else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// Change background header
function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80) {
        nav.classList.add('scroll-header');
    }
    else {
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);

// Show scroll up
function scrollTop() {
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
    }
    else {
        scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollTop);

// Dark/Light theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// Scroll reveal animation
// Scroll reveal animation
const sr = ScrollReveal({
    distance: '50px',
    duration: 2500,
    delay: 400,
    reset: false,
});

sr.reveal(`.portfolio__container, .testimonial__container`, {delay: 600});
sr.reveal(`.qualification__sections`, {delay: 700});
sr.reveal(`.qualification__tabs, .footer__container`, {delay: 900, origin: 'top'});
sr.reveal(`.section__title, .section__subtitle`, {origin: 'left', interval: 100});
sr.reveal(`.about__img`, {origin: 'left', interval: 100});
sr.reveal(`.about__data, .contact__container`, {origin: 'right'});
sr.reveal(`.home__img, .home__scroll, .project__bg`, {origin: 'top'});
sr.reveal(`.home__data, .home__social, .skills__content, .footer__copy`);