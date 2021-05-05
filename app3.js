$(function(){
  $('.box1').slideDown(function(){     // jsでは引数の中に関数を入れることができる
    $('.box1').css({                   // slideDown()の引数にfunctionを書き加えることで、
      'background-color': '#0000FF',   // スライドダウンした後にfunctionを実行することができるようになる。
      'width': '200px',
      'height': '100px'
    }).slideUp();
  });
});