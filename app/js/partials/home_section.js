//fixing object-fit for IE with Modernizr
if ( ! Modernizr.objectfit ) {
  $('.home-grid__item').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('home-grid__img-object-fit');
    }  
  });
}

//init Isotope for home grid
var $gridHome = $('.js-home-grid').isotope({ 
  itemSelector: '.home-grid__item',
  percentPosition: true,
  masonry: {
    columnWidth: '.home-grid__sizer'
  }
});

//filtering items
$(filterNav).on( 'click', 'button', function(){
  var filterValue = $(this).attr('data-filter');
  $gridHome.isotope({ filter: filterValue });

  //adding active class to the current filter group
  $(filter).each(function(i, buttonGroup){
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function(){
      $buttonGroup.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
});

//reveal home grid items on scroll
window.sr = ScrollReveal();
sr.reveal('.home-grid__item', { 
  origin: 'bottom',
  distance: '100px',
  scale: 1,
  easing: 'ease',
  duration: 700, 
  reset: true
});

//fancybox for each home grid item
 $('a.js-home-grid__item-link').fancybox({
    toolbar  : false,    
    btnTpl   : {
      smallBtn : '<button data-fancybox-close="" class="fancybox-button fancybox-button--close home-post__close-btn"></button>'
    }
});