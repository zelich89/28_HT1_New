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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let fElement = document.querySelectorAll('.footer__element'),
    fNav = document.querySelector('.footer__nav');

    fNav.addEventListener('click', function(event) {
        let target = event.target;

        for (let i = 0; i < fElement.length; i++) {
            if (target == fElement[i]) {
                fElement[i].classList.add('active');
            } else {
                fElement[i].classList.remove('active');

            }
        }
    });