// const swiper = require('swiper');
let night;

let body = document.querySelector('body'),
    input = document.querySelector('#checkbox_check'),
    btn = document.querySelector('.my-checkbox');

input.addEventListener('click', function() {
    if (night == false) {
        night = true;
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        night = false;
    }
console.log(night);
});