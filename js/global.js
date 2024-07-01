$(function(){
  const $gnb = $('.gnb');
  const $gnbHeight = $gnb.height();

  function init(){
    mobileGnb();
  }

  function mobileGnb() {
    if($gnb){
      bodyCSS();
    }
  }

  function bodyCSS() {
    $('body').css('padding-bottom', $gnbHeight + 20);
  }

  init();
});