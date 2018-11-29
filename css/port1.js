
$.each(["images/apt1.png","images/apt2.png","images/apt3.png"],function(i,url){ 
    var img = new Image(); 
    img.src = url; 
}); 

var swiper = new Swiper('.swiper-container', {
			speed:700,
      slidesPerView: 1,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

var swiper = new Swiper('.swiper-container2', {
			speed:1000,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


/*$('body').delegate('#list2 a', 'click', function(e){
        var _li = $(this).parent('li').addClass('selected').siblings().removeClass('selected'),
            _target = $(this).attr('href'),
            _siblings = '.' + $(_target).attr('class');
        $(_target).show().siblings(_siblings).hide();
        // gExtend ctrl
        var mtab = $(this).parents('#list2:first');
        if($(this).siblings('ul').length > 0){
            if(!mtab.hasClass('gExtend')){
                mtab.addClass('gExtend');
            }
        } else {
            if($(this).parents('ul:first').siblings('a').length <= 0){
                mtab.removeClass('gExtend');
            }
        }
        e.preventDefault();
    });*/
 $('#list2 .c1').on("click",function () {
 	$('#needI').attr("src","images/need1.png");
 	$('.c1').addClass("selected").siblings().removeClass("selected");
 });

  $('#list2 .c2').on("click",function () {
 	$('#needI').attr("src","images/need2.png");
 	$('.c2').addClass("selected").siblings().removeClass("selected");
 });

   $('#list2 .c3').on("click",function () {
 	$('#needI').attr("src","images/need3.png");
 	$('.c3').addClass("selected").siblings().removeClass("selected");
 });