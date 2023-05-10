const nav = document.querySelector('nav');
const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const navLinks = nav.querySelectorAll('.nav-link');
const mqList = window.matchMedia("(min-width: 52em)");
let navShouldBeOpen = false;

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
mqList.addEventListener('change', toggleNavOnResize);

/* trap keyboard navigation inside menu when it is open */
nav.addEventListener('keydown', navigateMenu);

function navigateMenu(event) {
    if (!document.body.classList.contains('js-nav-open')) {
        return;
    }
    if (event.key === 'Tab' || event.keyCode === 9) {
        if (event.shiftKey) {
            if (document.activeElement === closeNavBtn) {
                navLinks[navLinks.length - 1].focus();
                event.preventDefault();
            }
        } else {
            if (document.activeElement === navLinks[navLinks.length - 1]) {
                closeNavBtn.focus();
                event.preventDefault();
            }
        }
    }
}

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
    navShouldBeOpen = false;
}

function toggleNavOnResize() {
    if (mqList.matches && document.body.classList.contains('js-nav-open')) {
        closeNav();
        navShouldBeOpen = true;
        return;
    }
    if (navShouldBeOpen) {
        openNav();
    }
}
