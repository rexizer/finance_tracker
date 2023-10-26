$(document).ready(function () {
  $('.slider-for').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 9,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1
        }
      }
    ]
  });
});
