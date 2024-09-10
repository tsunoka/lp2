//lp2 JS

//Voices(slick)
//画面リサイズ時
$(window).resize(slick_resize());

function slick_resize(){
    if (window.matchMedia("(max-width: 767px)").matches) {
        //画面横幅が767px以下のときの処理
        //１個ずつスライド
        $(".voices__customers-list").slick({
            dots:true,
        });
    } else if(window.matchMedia("(min-width: 768px)").matches) {
        //画面横幅が768px以上のときの処理
        //３つずつスライド
        $('.voices__customers-list').slick({
            dots:true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }
}

//画面ロード時
$(slick_resize());
