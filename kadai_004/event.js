// $(window).on('load scroll',(e) => {
//   // loadイベント
//   if(e.type === 'load'){
//     console.log('loadイベントが発生しました')
//   }
//   // scrollイベント
//   if(e.type === 'scroll'){
//     console.log('scrollイベントが発生しました')
//   } 
// });


$(window).on('load',function(){
  console.log('loadイベントが発生しました');
});

$(function(){
  $(window).on('scroll',function(){
    console.log('scrollイベントが発生しました');
  });
});