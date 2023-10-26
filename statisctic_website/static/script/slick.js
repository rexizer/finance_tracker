$(document).ready(function(){

  $('.slider-for').slick({
    centerPadding: '60px',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
    onInit: function() {
      // Set the initial transform value after the slider has initialized
      $(".slick-track").css("transform", "translate3d(0, 0, 0) !important");
    }
  });
  $('.slider-nav').slick({
    centerMode: true,
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
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  setTimeout(function () {
    var initialTransformValue = "translate3d(0, 0, 0)";
    $(".slick-track").css("transform", initialTransformValue);
  }, 1);
});





