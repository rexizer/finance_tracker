$(document).ready(function () {
  $(".wrapper").css("opacity", "1"); 
  $(".wrapper").css("transition", "0s linear opacity !important");
  
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
    slidesToShow: 7.5,
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

  $('.slider-nav').on('afterChange', function(event, slick, currentSlide) {
    $(".wrapper").css("opacity", "1"); 
    $(".wrapper").css("transition", "0s linear opacity !important");
    // Manually center the selected slide
    $('.slider-nav').slick('slickGoTo', currentSlide);
  });
})