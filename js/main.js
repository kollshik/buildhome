$(function () {


  /* Слайдер */
  $('.header__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  })
  $('.header__arrow').on('click',function(e){
    e.preventDefault()
  })

  $('.header__arrow-left').on('click', function(){
    $('.header__slider').slick('slickPrev')
  });
  $('.header__arrow-right').on('click', function(){
    $('.header__slider').slick('slickNext')
  });


  /* Видео*/
  $('.header__media').on('click',function(){
    $('.overlay').toggleClass('active')
    $('.video-box').toggleClass('active')    
  })
  $('.overlay').on('click', function(){
    $('.overlay').toggleClass('active')
    $('.video-box').toggleClass('active')
  })


  /* Слайдер проэкты */
  $('.project__slider').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    asNavFor: '.project__slider-nav'
  });
  $('.project__slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.project__slider',
    dots: false,
    arrows: false,
    focusOnSelect: true
  })
  $('.project__arrow').on('click',function(e){
    e.preventDefault()
  })

  $('.project__arrow-left').on('click', function(){
    $('.project__slider').slick('slickPrev')
  });
  $('.project__arrow-right').on('click', function(){
    $('.project__slider').slick('slickNext')
  });


  /*Слайдер feetback */
  $('.feetback__slid-box').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    autoplay: false,
    infinite: true,
  })
  $('.feetback__arrow').on('click',function(e){
    e.preventDefault()
  })
  $('.feetback__arrow-left').on('click', function(){
    $('.feetback__slid-box').slick('slickPrev')
  });
  $('.feetback__arrow-right').on('click', function(){
    $('.feetback__slid-box').slick('slickNext')
  });



/* А это ведь костыль..... Нужно фиксироваьт во вью порте*/

  let $header = $('.header');
  let offset = $header.offset().top;
  let headerHeight = $header.outerHeight(); 


  $(window).on('scroll', function(){
    if ($(this).scrollTop() >= offset){
      $('.title').addClass('left__right-anima');
      $('.dec-line').addClass('left__right-anima');
      $('.servises__subtitle').addClass('right__lef-anima');
      $('.servises__blinds-box').addClass('left__right-anima');
    } else {
      $('.title').removeClass('left__right-anima');
      $('.dec-line').removeClass('left__right-anima');
      $('.servises__subtitle').removeClass('right__lef-anima');
      $('.servises__blinds-box').removeClass('left__right-anima');
    }
  })

    $('.burger').on('click', function(){
      $('.header__top').toggleClass('open');

    })


/* $(document).mouseup(function (e){ // событие клика по странице
  if (!$("#menu").is(e.target) && // если клик сделан не по элементу
      $("#menu").has(e.target).length === 0) { // если клик сделан не по вложенным элементам
      $("#menu").fadeOut(); // скрываем блок
  }
});
});
 */

/* Выезд контактов в мобильной версии */

$(document).mouseup(function (e){
  if ($('.header__contact-mobily').is(e.target)){
    $('.header__contact-mobily').addClass('header__contact-mobily--open');
    $('.header__contact-mobily').addClass('dell');
    $('.header__media-m').css('opacity', '0')
    $('.header__contact-box').css('font-size', '17px')
  }
  else{
    $('.header__contact-mobily').removeClass('header__contact-mobily--open');
    $('.header__contact-mobily').removeClass('dell');
    $('.header__media-m').css('opacity', '1');
    $('.header__contact-box').css('font-size', '0')
  }


/* Сырытие видео в мобильной версии */
  if (!$('.video__box-m').is(e.target)){
    $('.video__box-m').removeClass('video__box-m--open')
   }

})


/* Выезд видео в мобильной версии */
  
  $('.header__media-m').on('click', function(){
    $(window).scrollTop(447);
/*     $('main').css('transform', 'translateY(450px)');
 */    $('.video__box-m').addClass('video__box-m--open')
  })


  /* открытие сидибара */

  $('.burger').on('click', function(){
    $('.burger').toggleClass('burger-active');
    $('.burger-line').toggleClass('burger-line-active');
    $('.burger__top-line').toggleClass('burger__top-line-active');
    $('.burger__centr-line').toggleClass('burger__centr-line-active');
    $('.burger__bottom-line').toggleClass('burger__bottom-line-active');
    $('.overlay').toggleClass('overlay-active');
    $('.sidebar').toggleClass('sidebar-active');
  })

  $('.overlay').on('click', function(){
    $('.burger').removeClass('burger-active');
    $('.burger-line').removeClass('burger-line-active');
    $('.burger__top-line').removeClass('burger__top-line-active');
    $('.burger__centr-line').removeClass('burger__centr-line-active');
    $('.burger__bottom-line').removeClass('burger__bottom-line-active');
    $('.overlay').removeClass('overlay-active');
    $('.sidebar').removeClass('sidebar-active');
  })



/* открытие сервисов */
  $('.servises__cart-item').addClass('cart__before')

  $('.servises__cart-item').on('click', function(){
    $(this).toggleClass('servises__cart-item--open');
    $(this).find('h3').toggleClass('servises__cart-title--open');
    $(this).find('article').toggleClass('servises__cart-text--open');
    $(this).toggleClass('cart__before')
  })

  $('.cart-item-1').on('click', function(){
    $('.cart__fillter-1').toggleClass('cart__fillter-1--open')
  })
  $('.cart-item-2').on('click', function(){
    $('.cart__fillter-2').toggleClass('cart__fillter-2--open')
  })
  $('.cart-item-3').on('click', function(){
    $('.cart__fillter-3').toggleClass('cart__fillter-3--open')
  })
  $('.cart-item-4').on('click', function(){
    $('.cart__fillter-4').toggleClass('cart__fillter-4--open')
  })


  }) 
