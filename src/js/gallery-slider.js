$(document).ready(function () {
  $('.single-item').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    fade: true,
    fadeSpeed: 1000,
  });

  $('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });
});
