
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ハンバーガーメニュー
    $(".js-hamburger").click(function () {
        if($('.js-hamburger').hasClass('is-active')) {
        $('.js-hamburger').removeClass("is-active");
        //$("html").toggleClass("is-fixed");
        $(".js-sp-nav").fadeOut(300);
        } else {
            $('.js-hamburger').addClass("is-active");
            $(".js-sp-nav").fadeIn(300);
        }
    });

    // スワイパー
    const swiper = new Swiper(".swiper", {
        loop: true,
        loopAdditionalSlides: 1,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        speed: 3000,          //追記
        slidesPerView: "auto", 
        spaceBetween: 24, // スライド間の余白（px）
        centeredSlides: true, // アクティブなスライドを中央に配置する
        grabCursor: true, // PCでマウスカーソルを「掴む」マークにする
    });


    // アコーディオン
    $('.js-faq__list-title').on('click', function () {
        $(this).next().slideToggle(300);
        $(this).toggleClass('is-open', 300);
    });
    
    
});

