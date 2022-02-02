var rawFile = new XMLHttpRequest();
rawFile.open("GET", "/header/header.html", false);
rawFile.onreadystatechange = function() {
  if (rawFile.readyState === 4) {
    if (rawFile.status === 200 || rawFile.status == 0) {
      var header = rawFile.responseText;
      document.write(header);
    }
  }
}
rawFile.send(null);
