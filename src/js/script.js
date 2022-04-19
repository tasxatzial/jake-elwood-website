const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const navLinks = document.querySelectorAll('.nav-link');
const mqList = window.matchMedia("(min-width: 48rem)");

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
mqList.addEventListener('change', function() {
    if (mqList.matches && nav.classList.contains('navigation-open')) {
        closeNav();
    }
});

function openNav() {
    nav.classList.add('navigation-open');
}

function closeNav() {
    nav.classList.remove('navigation-open');
}
