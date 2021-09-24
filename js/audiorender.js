function PlayAudio(music) {
  var musicplayer = new Audio(music);
  musicplayer.play();
  musicplayer.loop = false;
}
