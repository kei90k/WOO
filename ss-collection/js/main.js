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

});