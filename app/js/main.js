$(function (){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn').toggleClass('menu__btn--active');
    });

    new WOW().init();

    if ($(window).width() < 569){
        $('.advantages__item, .team__item, .top__title, .top__text, .top__arrow-bottom, .page-top__title, .page-top__text, .services-page__item').removeClass('animate__animated');
    }

});
