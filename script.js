/*
多分、スクロールで色変える時に使うやつ

const element = document.querySelector('.scroll-animation');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 10) {
    element.classList.add('animated');
  } else {
    element.classList.remove('animated');
  }
});
*/




$('.slider').slick({
    fade:true,//切り替えをフェードで行う。初期値はfalse。
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
    speed:1000,//スライドの動きのスピード。初期値は300。
    infinite: true,//スライドをループさせるかどうか。初期値はtrue。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
    arrows: true,//左右の矢印あり
    prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
    nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
    dots: true,//下部ドットナビゲーションの表示
    pauseOnFocus: false,//フォーカスで一時停止を無効
    pauseOnHover: false,//マウスホバーで一時停止を無効
    pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$('.slider').on('touchmove', function(event, slick, currentSlide, nextSlide){
$('.slider').slick('slickPlay');
});








/*
<<<<<< JSのコード >>>>>>
*/ 

//アコーディオンをクリックした時の動作
$('.title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});

//ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
$(window).on('load', function(){
	$('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
	$(".open").each(function(index, element){	//openクラスを取得
		var Title =$(element).children('.title');	//openクラスの子要素のtitleクラスを取得
		$(Title).addClass('close');				//タイトルにクラス名closeを付与し
		var Box =$(element).children('.box');	//openクラスの子要素boxクラスを取得
		$(Box).slideDown(500);					//アコーディオンを開く
	});
});


$(function() {
    $(".gallery-list").click(function() {
      var imgSrc = $(this).children("img").attr("src");
      $("#gallery-1").children("img").attr("src", imgSrc);
      $("#gallery-1").fadeIn();
    });
    $("#gallery-1").click(function() {
      $(this).fadeOut();
    });
  });
  



  $(function() {
    // サムネイルをクリックした時の処理
    $('.gallery-list').on('click', function() {
      // クリックされたリンクのhref属性の値を取得
      var target = $(this).attr('href');
      // href属性の値に該当するモーダルウィンドウを表示
      $(target).fadeIn();
      // 背景をスクロールさせないようにする
      $('body').addClass('no-scroll');
      // モーダルウィンドウの外側をクリックしても閉じないようにする
      $('.modal_window').on('click', function(event) {
        event.stopPropagation();
      });
    });
    
    // モーダルウィンドウを閉じる処理
    $('.modal_window').on('click', function() {
      $(this).fadeOut();
      $('body').removeClass('no-scroll');
    });
  });
  




$(".openbtn").click(function () {
    $(this).toggleClass('active');
});