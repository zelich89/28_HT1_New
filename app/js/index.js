// const swiper = require('swiper');
let night;

let body = document.querySelector('body'),
    input = document.querySelector('#checkbox_check'),
    btn = document.querySelector('.my-checkbox');

input.addEventListener('click', function () {
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

fNav.addEventListener('click', function (event) {
    let target = event.target;


    if (target && target.classList.contains('footer__element')) {
        for (let i = 0; i < fElement.length; i++) {
            fElement[i].classList.remove('active');
            if (target == fElement[i]) {
                fElement[i].classList.add('active');
            } else {

            }
        }
    }
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let add = document.querySelectorAll('.card__add');
console.log(add.length);
    for (let i = 0; i < add.length; i++) {
        add[i].addEventListener ('click', function() {
            console.log('123');
            add[i].classList.toggle('card__add--active');
    });
};

// add.addEventListener('click', function (event) {
//     let target = event.target;

//     if (target && target.classList.contains('card__add')) {
//         for (let i = 0; i < add.length; i++) {
//             // add[i].classList.removee('active');
//             if (target == add[i]) {
//                 // add[i].classList.toggle('active');
//                 console.log('123');
//             }
//         }
//     }
// });