$(document).ready(function(){
  var $avatar = $('.info-avatar');

  function switchScreen() {
    $('.logo-svg').toggleClass('switch');
    $('.logo-container').toggleClass('switch');
  }
  
  $avatar.on('click', switchScreen);

  console.log('© zchen9 🙋 2015-' + (new Date()).getFullYear());
  console.log('特别鸣谢zchen9小仙女的精彩主题，希望大家去逛逛她的github：https://github.com/zchen9');
  
});

<script text="module">
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js")
      .then(function() {
      })
      .catch(function(error) {
        console.log("Service worker registration failed:", error);
      });
  } else {
    console.log("Service workers are not supported.");
  }
</script>
