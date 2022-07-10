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
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    autoplay: true,

  });



  if (window.matchMedia("(max-width: 768px)").matches) {
    $('.best__list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })}
      else {
        settings: "unslick"
      };

  var mixer = mixitup('.category');

});