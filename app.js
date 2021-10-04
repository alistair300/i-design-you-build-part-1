const body = document.querySelector('body');
const mobileNav = document.querySelector('.nav-container');
const btn = document.querySelector('.toggler');

btn.addEventListener('click', () => {
    body.classList.toggle('open')
});