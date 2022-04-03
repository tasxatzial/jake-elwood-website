const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const nav = document.getElementById('nav');
const focusable = document.querySelectorAll('[tabindex="0"]');
const navLinks = nav.querySelectorAll('.nav-link');

function setFocusable(val) {
    for (let i = 0; i < focusable.length; i++) {
        focusable[i].setAttribute('tabindex', val);
    }
}

function setNavMenuVisibility(visibility) {
    closeNavBtn.style.visibility = visibility;
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.visibility = visibility;
    }
}

openNavBtn.addEventListener('click', function() {
    nav.classList.add('navigation-open');
    document.body.classList.add('stop-scrolling');
    setNavMenuVisibility('visible');
    setFocusable('-1');
});

closeNavBtn.addEventListener('click', function() {
    nav.classList.remove('navigation-open');
    document.body.classList.remove('stop-scrolling');
    setNavMenuVisibility('hidden');
    setFocusable('0');
});
