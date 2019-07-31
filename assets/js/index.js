$(document).ready(function(){
  var $avatar = $('.info-avatar');

  function switchScreen() {
    $('.logo-svg').toggleClass('switch');
    $('.logo-container').toggleClass('switch');
  }
  
  $avatar.on('click', switchScreen);

  console.log('© F7ionsy 🙋 2018-' + (new Date()).getFullYear());
  console.log('萱萱，只是很爱你而已  http://lihengdong.com/xuanxuan');
  
//   if ("serviceWorker" in navigator) {
//     navigator.serviceWorker
//       .register("/sw.js")
//       .then(function() {
//       })
//       .catch(function(error) {
//         console.log("Service worker registration failed:", error);
//       });
//   } else {
//     console.log("Service workers are not supported.");
//   }
  
});
