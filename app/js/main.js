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

  $('.best__list').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows:false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: "unslick"
        
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  var mixer = mixitup('.category');

});