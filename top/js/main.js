$(function(){

    /**
     * ハンバーガーメニュー
     */
     var openImage = 'img/sp/open.svg';
     var closeImage = 'img/sp/close.svg';
 
     $('#menuButton').on('click', function(){
         $('#menuButton').toggleClass('active');
         $('#menuButton > span').toggleClass('menu-color');
         $('#nav').toggleClass('active');
     });

     var humHeight = 61;

     var halfHeight = $(window).height()/2;
     var aboutAreaHeight = $('#aboutArea').offset().top;
     var ssawAreaHeight = $('#ssawArea').offset().top;
     var newitemAreaHeight = $('#newitemArea').offset().top;

     $(window).on('scroll',function(){
         var dy = $(this).scrollTop();

         if(aboutAreaHeight - halfHeight < dy && ssawAreaHeight - halfHeight > dy)
         {
            $('.side-btn01').css('border-color', '#707070');
            $('.side-btn01 > p').css('color', '#707070');
             $('.side-btn02').css('border-color', '#707070');
             $('.side-btn02 > p').css('color', '#707070');
         }
         else if(ssawAreaHeight - halfHeight < dy && newitemAreaHeight - halfHeight > dy)
         {
            $('.side-btn01').css('border-color', '#f4f4f4');
            $('.side-btn01 > p').css('color', '#f4f4f4');
             $('.side-btn02').css('border-color', '#f4f4f4');
             $('.side-btn02 > p').css('color', '#f4f4f4');
         }
         else if(newitemAreaHeight - halfHeight < dy)
         {
            $('.side-btn01').css('border-color', '#707070');
            $('.side-btn01 > p').css('color', '#707070');
             $('.side-btn02').css('border-color', '#707070');
             $('.side-btn02 > p').css('color', '#707070');
         }
         else
         {
            $('.side-btn01').css('border-color', '#f4f4f4');
            $('.side-btn01 > p').css('color', '#f4f4f4');
            $('.side-btn02').css('border-color', '#f4f4f4');
            $('.side-btn02 > p').css('color', '#f4f4f4');
         }


         if(aboutAreaHeight - humHeight < dy && ssawAreaHeight - humHeight > dy)
         {
            $('header .menu-button span').css('background-color', '#707070');
         }
         else if(ssawAreaHeight - humHeight < dy && newitemAreaHeight - humHeight > dy)
         {
            $('header .menu-button span').css('background-color', '#f4f4f4');
         }
         else if(newitemAreaHeight - humHeight < dy)
         {
            $('header .menu-button span').css('background-color', '#707070');
         }
         else
         {
            $('header .menu-button span').css('background-color', '#f4f4f4');
         }
     });
});