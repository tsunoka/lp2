//lp2 JS

//Voices(slick)
//画面リサイズ時：横幅が変わったらリロード
$(window).resize(function () {
    var timer = false;
    var prewidth = $(window).width();

    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function () {
        var nowWidth = $(window).width();
        if (prewidth !== nowWidth) {
            // 横幅が変わっていたらリロード
            location.reload();
        }
        prewidth = nowWidth;
    }, 200);
});

//画面ロード時
$(document).ready(slick_resize());


function slick_resize() {
    if (window.matchMedia("(max-width: 767px)").matches) {
        //画面横幅が767px以下のときの処理
        //１個ずつスライド
        $(".voices__customers-list").slick({
            dots: true,
            arrows: true,
            prevArrow: '<button class="custom-arrows custom-arrows__prev"><i class="bi bi-arrow-left-short"></i></button>',
            nextArrow: '<button class="custom-arrows custom-arrows__next"><i class="bi bi-arrow-right-short"></i></button>',
        });
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        //画面横幅が768px以上のときの処理
        //３つずつスライド
        $('.voices__customers-list').slick({
            dots: true,
            arrows: true,
            prevArrow: '<button class="custom-arrows custom-arrows__prev"><i class="bi bi-arrow-left-short"></i></button>',
            nextArrow: '<button class="custom-arrows custom-arrows__next"><i class="bi bi-arrow-right-short"></i></button>',
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
        });
    }
}


//アコーディオンメニュー

// アコーディオンのタイトルがクリックされたら
$('.qa__accordion-title').on('click', function (e) {
    // .accordion-contentを選択
    var content = $(e.target).next();
    console.log(e.target);

    //矢印を取得
    var caret = $(e.target).children("i");
    console.log(caret);


    //矢印の上下を切り替える
    if ($(caret).hasClass("bi bi-caret-down-fill")) {
        $(caret).attr("class", "bi bi-caret-up-fill");
    } else {
        $(caret).attr("class", "bi bi-caret-down-fill");
    }

    // .accordion-contentを表示・非表示
    content.slideToggle();
});

//スムーススクロール
$(function () {
    $('a[href^="#"]').click(function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        var speed = 500;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});