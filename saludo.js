var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '315',
    width: '560',
    videoId: '-RoZ-3m3l5k',
    playerVars: {
      'autoplay': 0,
      'controls': 1,
      'rel': 0
    }
  });
}

function playVideo() {
  player.playVideo();
}

function goBack() {
    history.back();
  }
  
  function goNext() {
    // Redireccionar a la siguiente página
    window.location.href = "Numeros.html";
  }
  