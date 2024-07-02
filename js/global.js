$(function(){
  const $gnb = $('.gnb');
  const $btmfix = $('.bottom-fix');
  const $gnbHeight = $gnb.height();
  const $btmfixHeight = $btmfix.height();
  const $toggleBtn = $('.toggle-box__btn');
  const $toggleContent = $('.toggle-box__content'); // ???

  function init(){
    mobileGnb();
    bottomFix();
    setting();
    bindEvent();
  }

  function bindEvent() {
    $toggleBtn.on('click', toggleContnet);
  }

  function setting() {
    $toggleBtn.each(function () {
      $(this).hasClass('active') ? $(this).next().show() : $(this).next().hide();
    })
  }

  function mobileGnb() {
    if($gnb){
      bodyCSS($gnbHeight);
    }
  }

  function bottomFix() {
    if($btmfix){
      bodyCSS($btmfixHeight);
    }
  }

  function bodyCSS($value) {
    $('body').css('padding-bottom', $value + 20);
  }

  // 토글 콘텐츠
  function toggleContnet() {
    // .active 버튼에 존재하면
    if( $(this).hasClass('active')) {
      $(this).next().hide();
      $(this).removeClass('active');
    }else{
      $(this).next().show();
      $(this).addClass('active');
    }
  }

  init();
});