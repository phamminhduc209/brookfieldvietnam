(function($){
  "use strict";

  var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $('#return-to-top').addClass('td-scroll-up-visible');
    } else {
      $('#return-to-top').removeClass('td-scroll-up-visible');
    }
  });
  $('#return-to-top').click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 'slow');
  });

  $(document).ready(function(){
    $(".header_menu").sticky({
      topSpacing: 0,
      zIndex: 99
    });
  });

  $(".bxslider").bxSlider({
    pagerCustom: '.product_thumb_img',
    nextText: '<i class=fa fa-rounded-right"></i>',
    prevText: '<i class="fa fa-rounded-left"></i>'
  });

  $(".product_images_thumb").bxSlider({
    slideMargin: 10,
    maxSlides: 5,
    pager: false,
    controls: false,
    slideWidth: 86,
    infiniteLoop: false
  });

})(jQuery); // End of use strict