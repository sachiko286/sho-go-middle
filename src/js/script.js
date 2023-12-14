
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    // ローディング画面
    $(window).on("load", function () {
        $("#loading").delay(800).fadeOut(600); // 画像をフェードアウト
        $("#loadingWrap").delay(1000).fadeOut(600); // 背景色をフェードアウト
        });
        // ページの読み込みが完了しなくても2秒経ったら強制的にローディング画面をフェードアウト
        setTimeout(stoploading, 2000);
        function stoploading() {
        $("#loadingWrap").fadeOut(600);
        }
        
        // ハンバーガーメニュー
        $(".js-hamburger, .sp-nav__list-item a").click(function () {
            if ($('.js-hamburger').hasClass('is-active')) {
                $('.js-hamburger').removeClass("is-active");
                //$("html").toggleClass("is-fixed");
                $(".js-sp-nav").fadeOut(300);
            } else {
                $('.js-hamburger').addClass("is-active");
                $(".js-sp-nav").fadeIn(300);
            }
        });

        // スムーズスクロール
        // href属性が"#"で始まるaタグがクリックされたときの処理
        $('a[href^="#"]').click(function () {
            // クリックされたaタグのhref属性の値を取得
            var href = $(this).attr("href");
            // 対象の要素を特定（hrefが"#"または空文字の場合はhtml要素をターゲットとする）
            var target = $(href == "#" || href == "" ? 'html' : href);
            // ターゲットの位置（トップからの距離）を取得
            var position = target.offset().top;
            // スムーズスクロールの速度を定義
            var speed = 500;
        
            // スムーズスクロールのアニメーション
            $("html, body").animate({
              scrollTop: position
            }, speed, "swing");
        
            // aタグのデフォルトの動作（ページ遷移など）をキャンセル
            return false;
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

