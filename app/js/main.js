$(document).ready(function () {
   $(".slider__inner").slick({
      arrows: true,
      dots: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 800,
      easing: 'ease',
      infinite: true,
      initialSlide: 0,
      autoplay: false,
      autoplaySpeed: 1500,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 10,
      touchMove: true,
      waitForAnimate: false,
      centerMode: false,
      variableWidth: false,
   });
   $("#owlcarousel1").owlCarousel({
      items: 1,
      dots: true,
      nav: true,
      loop: true,
      theme: "owl-theme"
   });
   $('.header__btn-menu').on('click', function () {
      $('.menu ul').slideToggle();
   });
});

