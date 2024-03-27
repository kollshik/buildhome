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

  $('.arrow__left').on('click', function(){
    $('.header__slider').slick('slickPrev')
  });
  $('.arrow__right').on('click', function(){
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


  /* Жалюзи */
/*   $('.servises__blinds-item').on('click',function(){
    if ($('.servises__blinds-item').hasClass('blinds__item-active')){
      $('.servises__blinds-item').removeClass('blinds__item-active')
    } else {
      $(this).addClass('blinds__item-active')
    }
  }) */
 


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