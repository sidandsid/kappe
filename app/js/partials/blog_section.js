//init sliders for blog grid items
var $sliderBlog = $('.js-blog-grid__item-slider').flickity({
  cellSelector: '.blog-grid__item-img',
  cellAlign: 'left',
  initialIndex: 0,
  wrapAround: true, 
  arrowShape: 'm 24.527922,50.919344 c 0,-0.0038 0,-0.0082 0,-0.01266 0,-1.103073 0.534365,-2.102011 1.398822,-2.826483 L 55.325572,23.409078 c 0.864456,-0.727218 2.062496,-1.177449 3.386553,-1.177449 1.324056,0 2.522097,0.450231 3.386218,1.177171 l 3.35e-4,2.78e-4 c 0.866203,0.72974 1.40144,1.734173 1.40144,2.842852 0,1.108679 -0.535237,2.113109 -1.401843,2.843186 l 4.03e-4,-3.38e-4 -26.010193,21.809276 26.010193,21.809277 c 0.865933,0.729123 1.401039,1.732881 1.401039,2.840945 0,1.108063 -0.535106,2.111822 -1.401374,2.841226 h 3.35e-4 c -0.864254,0.726098 -2.061354,1.175486 -3.384269,1.175486 -1.322916,0 -2.520015,-0.449443 -3.384002,-1.175263 h -2.68e-4 L 25.93111,53.727782 c -0.860292,-0.720098 -1.394792,-1.71147 -1.403188,-2.80709 z',
  pageDots: false
});

//init Isotope for blog grid
var $gridBlog = $('.js-blog-grid').isotope({
  itemSelector: '.blog-grid__item',  
  masonry: {
    isFitWidth: true, 
    columnWidth: 294,
    gutter: 20
  }
});

//filter items on button click
$(filter).on( 'click', 'button', function(){
  var filterValue = $(this).attr('data-filter');
  $gridBlog.isotope({ filter: filterValue });

  $(filter).each(function(i, buttonGroup){
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function(){
      $buttonGroup.find('.is-active').removeClass('is-active');
      $(this).addClass('is-active');
    });
  });
}); 

//creating load-more btn for blog grid - https://codepen.io/bebjakub/pen/jWoYEO
var initShow = 14; //number of posts loaded initially
var add = 7;  //number of posts added with Older posts btn
var counter = add; //counter for load more button
var iso = $gridBlog.data('isotope'); //get Isotope instance

  loadMore(initShow);//execute function onload

  function loadMore(toShow){
    $gridBlog.find('.is-hidden').removeClass('is-hidden');

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item){
      return item.element;
    });

    $(hiddenElems).addClass('is-hidden');
    $gridBlog.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0){
      $('.blog-grid__btn').hide();
    } else {
      $('.blog-grid__btn').show();
    };
  }

  //append load more button
  $gridBlog.after('<button class="blog-grid__btn">Older posts</button>');

  //when load more button clicked
  $('.blog-grid__btn').click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      add = add;
    };

    add = add + initShow;

    loadMore(add);
  });