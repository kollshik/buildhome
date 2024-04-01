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




  /* Жалюзи */
/*   $('.servises__blinds-item').on('click',function(){
    if ($('.servises__blinds-item').hasClass('blinds__item-active')){
      $('.servises__blinds-item').removeClass('blinds__item-active')
    } else {
      $(this).addClass('blinds__item-active')
    }
  })
 
 */

/* 
$(document).ready(function() {
	var windowHeight = $(window).height();
 
	$(document).on('scroll', function() {
		$('.servises').each(function() {
			var self = $(this),
			height = self.offset().top + self.height();
			if ($(document).scrollTop() + windowHeight >= height) {
				self.addClass('active')
			}
		});
	});
}); */

})