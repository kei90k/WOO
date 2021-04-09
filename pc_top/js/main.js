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
            $('header .icon').css('color', '#707070');
            $('header .sub-title').css('display', 'block');
            $('header .sub-title').css('color', '#707070');
         }
         else if(ssawAreaHeight - humHeight < dy && newitemAreaHeight - humHeight > dy)
         {
            $('header .menu-button span').css('background-color', '#f4f4f4');
            $('header .icon').css('color', '#f4f4f4');
            $('header .sub-title').css('display', 'block');
            $('header .sub-title').css('color', '#f4f4f4');
         }
         else if(newitemAreaHeight - humHeight < dy)
         {
            $('header .menu-button span').css('background-color', '#707070');$('header .icon').css('color', '#707070');
            $('header .sub-title').css('display', 'block');
            $('header .sub-title').css('color', '#707070');
         }
         else
         {
            $('header .menu-button span').css('background-color', '#f4f4f4');
            $('header .icon').css('color', '#f4f4f4');
            $('header .sub-title').css('display', 'none');
            $('header .sub-title').css('color', '#f4f4f4');
         }
     });


// ___________ページ内リンク____________


    $('#navList li a').on('click', function(){
        // クリックしたhref属性の文字列を取得
        // $('要素').attr('属性');
        // 今回の要素は this
        var link = $(this).attr('href');
        console.log(link);
        // 目的のidの高さ取得

        // $('要素').offset().top;
        var linkPosY = $(link).offset().top;

        // 目的のidまで移動
        $('html').animate({
            scrollTop: linkPosY
        }, 1000);

        // リンクの解除
      //   return false;

    });



   //   ____________パララックス_________



   // 1. headerタグの高さ取得(変数headerHeight)
   var aboutAreaHeight= $('.box1').offset().top;
   console.log('about画像のtop：' + aboutAreaHeight);

   // 2. スクロールイベント時
   $(window).on('scroll', function(){
       // 3. スクロール値を変数dyに保存
       var dy = $(this).scrollTop();
      //  var bgPosition = dy / 2;
      //  console.log(bgPosition);

       // 4. スクロール値よりheaderHeightの半分が大きい時（if文）
       if(aboutAreaHeight- $(window).height() < dy)
       {
           // 5. header部分の動き(dyに任意の係数を掛け算)
         //   $('.ss-parallax').css('background-position', 'center bottom -' + bgPosition + 'px');
         
           $('.box1').css('transform', 'translateY(' + dy * 0.12 + 'px)');

           $('.box2').css('transform', 'translateY(' + dy * -0.12 + 'px)');

         //   $('.aw-parallax').css('transform', 'translateY(' + dy * -0.02 + 'px)');
       }
       // 6. それ以外の時（else文）（スクロール値がheaderHeightの半分を超えた時）
      //  else
      //  {
      //      // 7. play部分の動き(dyに任意の係数を掛け算)
      //      $('.stego').css('transform', 'translateX(' + dy * 0.4 + 'px)');
      //      $('.tirano').css('transform', 'translateX(' + dy * -0.4 + 'px)')
      //  }
   });


   $(window).on('scroll', function(){
      var dy = $(this).scrollTop();
      var backgroundPosition = 'top '+dy * 0.2 +'px center';
      $('#header').css('background-position', backgroundPosition);
   });
});