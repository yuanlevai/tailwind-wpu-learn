// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.add('flex');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// diluar hamburger

window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});

// darkmode toogle
const darkToogle = document.querySelector('#dark-toogle');
const html = document.querySelector('html');

darkToogle.addEventListener('click', function () {
    if (darkToogle.checked) {
        html.classList.add('dark');
        localStorage.theme('dark');
    } else {
        html.classList.remove('dark');
        localStorage.theme('light');
    }
});

// gesr toogle mode
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToogle.checked = true;
} else {
    darkToogle.checked = false;
}
