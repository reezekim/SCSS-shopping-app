$(function(){
  const $gnb = $('.gnb');
  const $gnbHeight = $gnb.height();
  const $toggleBtn = $('.toggle-box__btn');
  const $toggleContent = $('.toggle-box__content');

  function init(){
    mobileGnb();
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
      bodyCSS();
    }
  }

  function bodyCSS() {
    $('body').css('padding-bottom', $gnbHeight + 20);
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