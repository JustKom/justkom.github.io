$(function () {

  $('.menu__link, .filter__btn').on('click', function () {
    $('.menu__link, .filter__btn').removeClass('selected');
    $(this).addClass('selected');
  });


  $('.slider').slick({
    dots: true,
    fade:true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>'
  });

  var mixer = mixitup('.category');

});