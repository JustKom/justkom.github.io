$(function () {

  $('.prod-catalog__select-style, .product__add-num').styler();


  var $range = $('.inner-filter__input-price');
  var $inputFrom = $('.block-price__input-from');
  var $inputTo = $('.block-price__input-to');
  var instance;
  var min = 0;
  var max = 1200;
  var from = 0;
  var to = 0;

  $range.ionRangeSlider({
    skin: 'round',
    type: 'double',
    min: min,
    max: max,
    from: 100,
    to: 1000,
    onStart: updateInputs,
    onChange: updateInputs,
    onFinish: updateInputs
  });
  instance = $range.data('ionRangeSlider');

  function updateInputs(data) {
    from = data.from;
    to = data.to;

    $inputFrom.prop('value', from);
    $inputTo.prop('value', to);
  }

  $inputFrom.on('change', function () {
    var val = $(this).prop('value');

    // validate
    if (val < min) {
      val = min;
    } else if (val > to) {
      val = to;
    }

    instance.update({
      from: val
    });

    $(this).prop('value', val);

  });

  $inputTo.on('change', function () {
    var val = $(this).prop('value');

    // validate
    if (val < from) {
      val = from;
    } else if (val > max) {
      val = max;
    }

    instance.update({
      to: val
    });

    $(this).prop('value', val);
  });


  $('.product__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.product__tabs-link').removeClass('product__tabs-link--selected');
    $(this).addClass('product__tabs-link--selected');

    $('.product__tabs-items').removeClass('product__tabs-items--active');
    $($(this).attr('href')).addClass('product__tabs-items--active');
  });

  $('.menu__link, .filter__btn, .product__tabs-link').on('click', function () {
    $('.menu__link, .filter__btn, .product__tabs-link').removeClass('selected');
    $(this).addClass('selected');
  });

  $('.pagination__link').on('click', function () {
    $('.pagination__link').removeClass('active');
    $(this).addClass('active');
  });

  $('.header__burger').on('click', function () {
    $('.header__burger, .menu__items').toggleClass('active');
    $('body').toggleClass('lock');
  });


  $('.review-slider').slick({
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
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: "unslick",
    }],
    mobileFirst: true
  });

  $('.sales__items').slick({
    dots: true,
    infinite: false,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 576,
      settings: "unslick",
    }],
    mobileFirst: true
  });

  $('.product__images').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: true
      }
    }],
    mobileFirst: true
  });

  Fancybox.bind("[data-fancybox]", {
    type: 'image'
  });

  $('.offer__category').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          arrows: true,
          dots: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dots: true
        }
      }
    ]
    // mobileFirst: true
  });


  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() > 200) {
        $('.header').css({
          'padding': '15px 0',
          'border-bottom': '1px solid #ff6838'
        });
      } else {
        $('.header').css({
          'padding': '',
          'border-bottom': '1px solid transparent'
        })
      }

    })
  })


  $('.stars').rateYo({
    starWidth: '16px',
    normalFill: '#c1c1c1',
    ratedFill: '#ffb800',
    spacing: '6px',
    halfStar: true
  });

  var mixer = mixitup('.category');

});