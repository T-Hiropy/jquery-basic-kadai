const txtbox = `クリックしました！`;

$(function(){
  // class属性"btn"がクリック
  $('.btn').on('click', function(){
    // console.log(txtbox);
    $('.text-box').val(txtbox);
  });
});