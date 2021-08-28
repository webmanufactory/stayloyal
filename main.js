$(document).ready(function () {
  if ($(window).width() < 576) {
    $('.menu-mob, .nav__item-button').click(function () {
      $('.menu-mob__button').toggleClass('active');
      $('.menu__nav').slideToggle();
    })
  }
});