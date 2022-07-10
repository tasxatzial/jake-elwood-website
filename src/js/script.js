const openNavBtn = document.getElementById('open-nav-btn');
const nav = document.querySelector('nav');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const navLinks = nav.querySelectorAll('.nav-link');
const mqList = window.matchMedia("(min-width: 48em)");

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
mqList.addEventListener('change', function() {
    if (mqList.matches && document.body.classList.contains('js-nav-open')) {
        closeNav();
    }
});

nav.addEventListener('keydown', function(e) {
    if (!document.body.classList.contains('js-nav-open')) {
        return;
    }
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
    document.body.classList.add('js-nav-open');
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
        document.body.classList.add('js-no-scroll');
    }
    closeNavBtn.focus();
}

function closeNav() {
    document.body.classList.remove('js-nav-open', 'js-no-scroll');
    openNavBtn.focus();
}
