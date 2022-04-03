const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const nav = document.getElementById('nav');
const focusable = document.querySelectorAll('[tabindex="0"]');
const navLinks = nav.querySelectorAll('.nav-link');

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

function setFocusable(val) {
    for (let i = 0; i < focusable.length; i++) {
        focusable[i].setAttribute('tabindex', val);
    }
}

function setMenuVisible() {
    closeNavBtn.classList.remove('invisible');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('invisible');
    }
}

function setMenuInvisible() {
    closeNavBtn.classList.add('invisible');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.add('invisible');
    }
}

function openNav() {
    nav.classList.add('navigation-open');
    document.body.classList.add('stop-scrolling');
    setMenuVisible();
    setFocusable('-1');
}

function closeNav() {
    nav.classList.remove('navigation-open');
    document.body.classList.remove('stop-scrolling');
    setMenuInvisible();
    setFocusable('0');
}
