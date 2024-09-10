//lp2 JS

//Voices(slick)
//画面リサイズ時：横幅が変わったらリロード
$(window).resize(function() {
    var timer=false;
    var prewidth = $(window).width();

    if (timer !== false) {
    clearTimeout(timer);
    }
    timer = setTimeout(function() {
    var nowWidth = $(window).width();
    if(prewidth !== nowWidth){
    // 横幅が変わっていたらリロード
    location.reload();
    }
    prewidth = nowWidth;
    }, 200);
    });

    //画面ロード時
$(document).ready(slick_resize());


function slick_resize(){
    if (window.matchMedia("(max-width: 767px)").matches) {
        //画面横幅が767px以下のときの処理
        //１個ずつスライド
        $(".voices__customers-list").slick({
            dots:true,
            arrows:true,
        });
    } else if(window.matchMedia("(min-width: 768px)").matches) {
        //画面横幅が768px以上のときの処理
        //３つずつスライド
        $('.voices__customers-list').slick({
            dots:true,
            arrows:true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }
}

