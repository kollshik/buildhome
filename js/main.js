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





  let $header = $('.header');
  let offset = $header.offset().top;
  let headerHeight = $header.outerHeight(); 

  $(window).on('scroll', function(){
    if ($(this).scrollTop() >= offset){
      $('.servises__title').addClass('left__right-anima');
    } else {
      $('.servises__title').removedClass('left__right-anima');
    }
  })

    
  })