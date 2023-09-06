setInterval(() => {
  const player = document.querySelector(
    "#movie_player > div.html5-video-container > video"
  );
  if (player) {
    console.log("player found");
    console.log(player.currentTime);
  } else {
    console.log("no player");
  }
}, 1000);
