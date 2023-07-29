// Активаия пунктов навигации
const navMenu = document.querySelector('.header_nav'),
      navMenuItem = document.querySelectorAll('.nav_item');

navMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        navMenuItem.forEach(element => {
            element.classList.remove('nav_item__active');
        });
        event.target.classList.add('nav_item__active');
    }
});

// Модальное окно
$(document).ready(function(){
    $('.header__burger').click(function(event) {
        $('.header__burger,.header_nav').toggleClass('active');
    });
});

// Слайдер

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    autoplay: {
        delay: 3000,
    },
});

// Активация кнопок смены языка
const switchMenu = document.querySelector('.switch_content'),
      switchMenuItem = document.querySelectorAll('.switch_button');

      switchMenu.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        switchMenuItem.forEach(element => {
            element.classList.remove('switch_button__active');
        });
        event.target.classList.add('switch_button__active');
    }
});