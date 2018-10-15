$(document).ready(function() {
 
 function formOpen() {
  $('.popup').addClass('active');

  if($(window).width() >= 1200){
   $('.overlay').fadeIn();
   $('.content').addClass('blur');
  }
 }

 function formClose() {
  $('.popup').removeClass('active');
  $('.overlay').fadeOut();
  $('.content').removeClass('blur');
 }

 $(window).on('load', function() {
  setTimeout(function() {
   formOpen();
  }, 1000);
 }); 
 
 $('.button_cancel').on('click', function(e) {
   e.preventDefault();
   formClose();
 });

 $('.header__open-form').on('click', function() {
   formOpen();
 });

//Тогглер
 function toggleClick() {
  $('.toggle-input').on('change', function() {
   if($(this).prop('checked')) {
    $(this).parents('.info-block__main').next().slideDown(200);
   } else {
    $(this).parents('.info-block__main').next().slideUp(200);
   }
  });
 }
 toggleClick();

//Шеврон
 function detailClick() {
  $('.info-block__detail-open').on('click', function() {
   if($(this).hasClass('active')) {
    $(this).removeClass('active');
    $(this).parent().next().slideUp(200);
   } else {
    $(this).addClass('active');
    $(this).parent().next().slideDown(200);
   }
  });
 }

 detailClick();

//Общий чекбокс
 function checkAll() {
  $('.options__check-input_all').on('change', function() {
   if($(this).is(':checked')) {
    $('.options__descr').addClass('active');
    $(this).parents('.options').find('input:checkbox').prop('checked', true);
   } else {
    $('.options__descr').removeClass('active');
    $(this).parents('.options').find('input:checkbox').prop('checked', false);
   }
  });
 }
 checkAll();

//Динамический отступ для .form-content
 function formContentPadding() {
  var formButtons = $('.form__buttons'),
      formButtonsHeight = $('.form__buttons').outerHeight(),
      formContent = $('.form__content');


  formContent.css({paddingBottom: formButtonsHeight});
 }
 formContentPadding();

 $(window).on('resize', function() {
  formContentPadding();
 });


//Отправка формы
$('.form').submit(function() {

 $.ajax({
  type: 'POST',
  url: 'functions.php',
  data: $(this).serialize()
 }).done(function(data) {
  formClose();
  if(!($('.popup').hasClass('active'))){
    $('.popup-save').addClass('active');
  }
  $('.popup-save__close').on('click', function() {
   $('.popup-save').removeClass('active');
   $('.form').trigger('reset');
   $('.form input').val('');
  });
 });
 return false;
 });
});



