$(function(){
  $('.box1').show();
  $('.box1').css({'background-color': '#0000FF'});
});

$(function(){
  $('.box2').slideUp();　// 表示されている要素を隠すアニメーションのためdisplay: none;は不要
});

// jQueryはHTMLが全て読み込まれてから動作するように設定しなければならないため、
// slideDownはCSSでdisplay: none;にし最初は非表示にしておく

$(function(){
  $('.box3').hide();
})