(function($){
  "use strict";

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: true,
    effect: 'fade',    
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
      $('#return_to_top').addClass('td_scroll_up_visible');
    } else {
      $('#return_to_top').removeClass('td_scroll_up_visible');
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

  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });

  $('.humbgr').on('click', function() {
    $(this).toggleClass('active');
    $(this).parents('.header_menu').find('.menu').slideToggle();
  });

  $(document).ready(function(){
    $('.header_menu .menu_item_parent').append('<span class="plus"></span>');
    $('.header_menu .menu_item_parent .plus').click(function(){
      $(this).toggleClass('open').siblings('.menu_item_child').slideToggle();
    });
  });

})(jQuery); // End of use strict





