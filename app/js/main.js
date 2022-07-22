$(function () {

  $('.prod-catalog__select-style').styler();


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




  $('.menu__link, .filter__btn').on('click', function () {
    $('.menu__link, .filter__btn').removeClass('selected');
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
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      }
    ],
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


  var mixer = mixitup('.category');

});