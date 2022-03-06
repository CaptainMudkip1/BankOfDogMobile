function copyIP() {
  navigator.clipboard.writeText("play.bankofdog.ml");
}

function onLoadDynmap() {
  document.getElementsByClassName("dynmap-iframe").src = "http://bankofdog.my.pebble.host:8067/index.html";
  document.getElementsByClassName("dynmap-iframe").contentWindow.location.reload();
}
