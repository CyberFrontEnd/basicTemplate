$(document).ready(function () {
  $('.sliderBlockSlider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    arrows: false,
  });

  $('.sliderItem').slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  });

  $('.newsSlider').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  });


  // Start top slider main page
  var $slider = $('.collectionTopLeftItem');
  var $currentSlide = $('.current-slide');
  var $totalSlides = $('.total-slides');

  $slider.on('init afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $currentSlide.text(i);
    $totalSlides.text(slick.slideCount);
  });

  $slider.slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });


});