const openNavBtn = document.getElementById('open-nav-btn');
const nav = document.querySelector('nav');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const navLinks = nav.querySelectorAll('.nav-link');
const mqList = window.matchMedia("(min-width: 48rem)");

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
mqList.addEventListener('change', function() {
    if (mqList.matches && document.body.classList.contains('js-nav-open')) {
        closeNav();
    }
});

nav.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.keyCode === 9) {
        if (e.shiftKey) {
            if (document.activeElement === closeNavBtn) {
                navLinks[navLinks.length - 1].focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === navLinks[navLinks.length - 1]) {
                closeNavBtn.focus();
                e.preventDefault();
            }
        }
    }
});

function openNav() {
    document.body.classList.add('js-nav-open', 'stop-scrolling');
}

function closeNav() {
    document.body.classList.remove('js-nav-open', 'stop-scrolling');
    openNavBtn.focus();
}
