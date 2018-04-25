//Allow external svg usage for IE
svg4everybody({ 
  polyfill: true 
});

//Highlighting active menu item - Stackoverflow
var menuNavItem = ('.js-menu-nav a');
var menuNavItemInitial = ('.js-menu-nav__item_initial');

$(function(){
  $(menuNavItemInitial).addClass('is-active');
  $(menuNavItem).filter(function(){return this.href==location.href}).addClass('is-active').siblings().removeClass('is-active')
});

//Calling for mobile menu
var menuMobile = ('.js-menu-mobile');
var menuMobileBox = ('.js-menu-mobile__box');
var menuSection = ('.js-menu-section');

$(menuMobile).on('click', function(){    
  $(menuMobileBox).toggleClass('is-clicked');
  $(menuSection).toggleClass('is-called');
});

//Expanding filter for mobile menu
var filter = $('.js-menu-filter');
var filterNav = $('.js-menu-filter__nav');
var filterTitle = $('.js-menu-filter__title');

$(filterTitle).on('click', function(){
  $(filterNav).slideToggle();
});

//Expanding social-media list for mobile menu
var smTitle = $('.js-menu-sm__title');
var smList = $('.js-menu-sm__list');

$(smTitle).on('click', function(){
  $(smList).slideToggle();
});