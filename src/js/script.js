
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    const swiper = new Swiper(".swiper", {
        loop: true, // ループ
        speed: 1500, // 少しゆっくり(デフォルトは300)
        slidesPerView: 4, // 一度に表示する枚数
        loopedSlides: 20,
        spaceBetween: 20, // スライド間の距離
        centeredSlides: true, // アクティブなスライドを中央にする
        autoplay: {
          // 自動再生
          delay: 1000, // 1秒後に次のスライド
          disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
        },
        // ページネーション
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 前後の矢印
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

});
