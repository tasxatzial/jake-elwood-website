const openNavBtn = document.getElementById('open-nav-btn');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('.nav-link');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const tabFocusable = document.querySelectorAll('[tabindex="0"]');
const mqList = window.matchMedia("(min-width: 48rem)");

mqList.addEventListener('change', closeNavMqList);
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

function toggleNavVisible() {
    closeNavBtn.classList.toggle('visible');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('visible');
    }
}

function setTabFocusable(val) {
    for (let i = 0; i < tabFocusable.length; i++) {
        tabFocusable[i].setAttribute('tabindex', val);
    }
}

function openNav() {
    nav.classList.add('navigation-open');
    document.body.classList.add('stop-scrolling');
    main.setAttribute('aria-hidden', 'true');
    footer.setAttribute('aria-hidden', 'true');
    toggleNavVisible();
    setTabFocusable("-1");
}

function closeNav() {
    nav.classList.remove('navigation-open');
    document.body.classList.remove('stop-scrolling');
    main.setAttribute('aria-hidden', 'false');
    footer.setAttribute('aria-hidden', 'false');
    toggleNavVisible();
    setTabFocusable("0");
}

function closeNavMqList() {
    if (openNavBtn.getAttribute('tabindex') === '-1' && mqList.matches ) {
        closeNav();
    }
}
