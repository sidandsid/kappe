//top info btn
var infoBox = ('.js-info-box');
var infoList = ('.js-info-list');

$(infoBox).on('click', function(e){
	e.preventDefault();
	$(infoList).slideToggle();
});