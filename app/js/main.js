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

  

  const selectSingle = document.querySelector('.select');
  const selectSingle_title = selectSingle.querySelector('.select__title');
  const selectSingle_labels = selectSingle.querySelectorAll('.select__label');

  // Toggle menu
  selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  });

  // Close when click to option
  for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
      selectSingle_title.textContent = evt.target.textContent;
      selectSingle.setAttribute('data-state', '');
    });
  }


  var mixer = mixitup('.category');

});