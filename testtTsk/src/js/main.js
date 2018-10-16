 // function staticSlider() {
 //   if($(window).width() <= 768) {
 //    var activeItemPositionVertical = $('.js__levels-item.active').position().top;
 
 //    $('.js__hundle').css({
 //     top: activeItemPositionVertical + 'px'
 //    });

 //    $('.js__slider-range').css({
 //     height: activeItemPositionVertical + 'px'
 //    });

 //  } else {
 //    var activeItemPosition = $('.js__levels-item.active').position().left;
 
 //    $('.js__hundle').css({
 //     top: 'auto',
 //     left: activeItemPosition + 'px'
 //    });

 //    $('.js__slider-range').css({
 //     width: activeItemPosition + 'px'
 //    });
 //   }
 //  }
 //  staticSlider();
  
 //  $(window).resize(function() {
 //  staticSlider();
 //  });
  
 function selectPosition() {
   var header       = $('.header'),
       headerHeight = header.outerHeight();

   $('.main__select').css({
    top: headerHeight + 20 + 'px'
   });
  }
 selectPosition();

 function movementToddler(left, width) {
  $('.header-menu__border').animate({
   left: left + 15 + 'px',
   width: width + 2 + 'px'
  }, 400);
 }
 
$('.nav__link').on('click', function() {

  $('.nav__link').removeClass('nav__link_active');
  $(this).addClass('nav__link_active');
 
  var thisPosition = $(this).position().left,
      thisWidth    = $(this).width();
  
  movementToddler(thisPosition, thisWidth)

});


$(function() {
 $('.mob-open-menu').on('click', function() {
  if($(this).hasClass('active')) {
   $(this).removeClass('active');
  } else {
   $(this).addClass('active');
  }
  
  $('.mob-menu').fadeIn();
 });

 $('.mob-menu__close').on('click', function() {
  $('.mob-menu').fadeOut();
 });
});

$(function() {
 var header = $('.header'),
     headerHeight = header.outerHeight(),
     mainPadding = $('.main').css({paddingTop: headerHeight});
 
 $(window).resize(function() {
  mainPadding;
 });
 
});

$(function() {
  if(('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch) {
    $('body').removeClass('no-touch');
  } else {
    $('body').addClass('no-touch');
  }
});

$(function () {  
 $('.nav__item a').each(function () { 
  var location = window.location.href,
      link = $(this).href;

  if(location == link) { 
   $(this).addClass('active');
  }
 });
});

$(function() {
 $('.shops__tabs-item').on('click', function(e) {

  e.preventDefault();

  $('.shops__tabs-item').removeClass('shops__tabs-item_active');
  $(this).addClass('shops__tabs-item_active');

  var dataId = $(this).data('id');

  $('.shops__floor').removeClass('shops__floor_active');
  $(dataId).addClass('shops__floor_active');
 });
});

function maxHeightItems () {

  var maxHeight = 0;
  
  $('.shops__item').each(function() {
   var shopsItemHeight = $(this).height();

   if(shopsItemHeight > maxHeight) {
    maxHeight = shopsItemHeight;
   }

  });

  $('.shops__item').height(maxHeight);
  
}

maxHeightItems();


function mobileMenuHeight() {
 var headerHeight = $('.header').outerHeight(),
     headerMenuHeight = $('.header-menu').outerHeight();

 if($(window).outerHeight() < headerHeight + headerMenuHeight) {
  $('.header-menu').addClass('active');
 } else {
  $('.header-menu').removeClass('active');
 }
}

mobileMenuHeight();

$(window).on('resize', function() {
  mobileMenuHeight();
});
