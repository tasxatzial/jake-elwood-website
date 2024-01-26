'use strict';

const nav = document.querySelector('nav');
const toggleNavBtn = nav.querySelector('.nav-btn');
const navLinks = nav.querySelectorAll('.nav-link');
const mqList = window.matchMedia("(min-width: 52em)");
let navShouldBeOpen = false;

toggleNavBtn.addEventListener('click', toggleNav);
mqList.addEventListener('change', toggleNavOnResize);

/* trap keyboard navigation inside menu when it is open */
nav.addEventListener('keydown', navigateMenu);

function navigateMenu(event) {
    if (!document.body.classList.contains('js-nav-open')) {
        return;
    }
    if (event.key === 'Tab' || event.keyCode === 9) {
        if (event.shiftKey) {
            if (document.activeElement === toggleNavBtn) {
                navLinks[navLinks.length - 1].focus();
                event.preventDefault();
            }
        } else {
            if (document.activeElement === navLinks[navLinks.length - 1]) {
                toggleNavBtn.focus();
                event.preventDefault();
            }
        }
    }
}

function toggleNav() {
    document.body.classList.toggle('js-nav-open');
    if (document.body.classList.contains('js-nav-open')) {
        openNav();
    } else {
        closeNav();
    }
}

function closeNav() {
    document.body.classList.remove('js-nav-open', 'js-no-scroll');
    toggleNavBtn.innerText = '☰';
    toggleNavBtn.setAttribute('aria-label', 'open navigation');
    toggleNavBtn.setAttribute('aria-expanded', 'false');
    toggleNavBtn.focus();
    navShouldBeOpen = false;
}

function openNav() {
    document.body.classList.add('js-nav-open');
    if (document.documentElement.scrollHeight > document.documentElement.clientHeight) {
        document.body.classList.add('js-no-scroll');
    }
    toggleNavBtn.innerText = '✖';
    toggleNavBtn.setAttribute('aria-label', 'close navigation');
    toggleNavBtn.setAttribute('aria-expanded', 'true');
    toggleNavBtn.focus();
}

function toggleNavOnResize() {
    if (mqList.matches && document.body.classList.contains('js-nav-open')) {
        closeNav();
        navShouldBeOpen = true;
    } else if (navShouldBeOpen) {
        openNav();
    }
}
