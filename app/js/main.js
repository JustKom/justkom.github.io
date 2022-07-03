$(function () {

  $('.menu__link, .filter__btn').on('click', function () {
    $('.menu__link, .filter__btn').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.header__burger').on('click', function () {
    $('.header__burger, .menu__items').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $('.slider').slick({
    dots: true,
    fade:true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: true,
    
  });

  $('.filter').slick({
    dots: false,
    infinite: false,
    speed: 300,
    centerMode: false,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true
  });

  var mixer = mixitup('.category');

});