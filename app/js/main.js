$(function () {

  $('.menu__link').on('click', function () {
    $('.menu__link').removeClass('selected');
    $(this).addClass('selected');
  });

  var mixer = mixitup('.category');

})