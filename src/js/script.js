const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = nav.querySelector('.close-nav-btn');
const navLinks = document.querySelectorAll('.nav-link');
const mqList = window.matchMedia("(min-width: 48rem)");

openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
mqList.addEventListener('change', function() {
    if (mqList.matches && document.body.classList.contains('js-nav-open')) {
        closeNav();
    }
});

function openNav() {
    document.body.classList.add('js-nav-open');
}

function closeNav() {
    document.body.classList.remove('js-nav-open');
}
