// init work slider 
var $sliderWork = $('.js-work-photo__slider').flickity({
	cellSelector: '.work-photo__img',
	cellAlign: 'left',
	initialIndex: 1,
	wrapAround: true,
	pageDots: true, 
	prevNextButtons: false,
	imagesLoaded: true
});

//init fancybox for project gallery items
$('[data-fancybox="images"]').fancybox({
	transitionEffect : 'slide',
	transitionDuration : 800,
	infobar: false,	
	toolbar: false,
	arrows: true
});