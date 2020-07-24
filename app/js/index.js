/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////     toggle     /////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const swiper = require('swiper');
let night = false;

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
////////////////////////////////////////     footer  element     ////////////////////////////////////////////////
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
////////////////////////////////////////////////   Like   ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let heart = document.querySelectorAll('.card__add');
    for (let i = 0; i < heart.length; i++) {
        heart[i].addEventListener ('click', function() {
            heart[i].classList.toggle('card__add--active');
    });
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////    Additionals   ////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let images = document.querySelectorAll('.card'),
    back = document.querySelectorAll('.element__image'),
    additionals = document.querySelectorAll(".main-sect__additional");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(event) {
            additionals[i].classList.toggle("active");
            console.log(back[i]);
    });
    back[i].addEventListener('click', function() {
    // additionals[i].addEvent Listener('click', function() {
        additionals[i].classList.remove("active");
        console.log("!23");
    });
    // back[i].addEventListener('click', function() {
    //     additionals[i].classList.remove("active");
    // });
};
