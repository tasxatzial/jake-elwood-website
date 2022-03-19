const openNavBtn = document.getElementById('open-nav-btn');
const closeNavBtn = document.getElementById('close-nav-btn');
const nav = document.getElementById('nav');

openNavBtn.addEventListener('click', function() {
    nav.classList.add('navigation-open');
    document.body.classList.add('stop-scrolling');
});

closeNavBtn.addEventListener('click', function() {
    nav.classList.remove('navigation-open');
    document.body.classList.remove('stop-scrolling');
});
