const openNavBtn = document.getElementById('open-nav-btn');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('.nav-link');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const tabFocusable = document.querySelectorAll('[tabindex="0"]');
const mqList = window.matchMedia("(min-width: 48rem)");

mqList.addEventListener('change', closeNavMqList);
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);

function setNavLinksVisible() {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('invisible');
        navLinks[i].classList.add('visible');
    }
}

function setNavLinksInvisible() {
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('visible');
        navLinks[i].classList.add('invisible');
    }
}

function setTabFocusable() {
    for (let i = 0; i < tabFocusable.length; i++) {
        tabFocusable[i].setAttribute('tabindex', 0);
    }
}

function unsetTabFocusable() {
    for (let i = 0; i < tabFocusable.length; i++) {
        tabFocusable[i].setAttribute('tabindex', '-1');
    }
}

function setCloseNavBtnVisible() {
    closeNavBtn.classList.remove('invisible');
    closeNavBtn.classList.add('visible');
}

function setCloseNavBtnInvisible() {
    closeNavBtn.classList.remove('visible');
    closeNavBtn.classList.add('invisible');
}

function openNav() {
    nav.classList.add('navigation-open');
    document.body.classList.add('stop-scrolling');
    setCloseNavBtnVisible();
    setNavLinksVisible();
    unsetTabFocusable();
}

function closeNav() {
    nav.classList.remove('navigation-open');
    document.body.classList.remove('stop-scrolling');
    setCloseNavBtnInvisible();
    setNavLinksInvisible();
    setTabFocusable();
}

function closeNavMqList() {
    if (mqList.matches) {
        nav.classList.remove('navigation-open');
        document.body.classList.remove('stop-scrolling');
        setCloseNavBtnInvisible();
        setNavLinksVisible();
        setTabFocusable();
    } else {
        setNavLinksInvisible();
    }
}
