function done() {
  char = [];
  color = [];
  for(i = 1; i < 8; i++) {
    char[i] = document.getElementById("char" + i).value;
  }

  for(i = 1; i < 8; i++) {
    color[i] = document.getElementById("color" + i).value;
  }

  for(i = 1; i < 8; i++) {
    a = i + 1
    b = i + 2;
    c = i + 3;
    d = i + 4;
    e = i + 5;
    f = i + 6;

    if (a > 7) {
      a = a - 7;
    }
    if (b > 7) {
      b = b - 7;
    }
    if (c > 7) {
      c = c - 7;
    }
    if (d > 7) {
      d = d - 7;
    }
    if (e > 7) {
      e = e - 7;
    }
    if (f > 7) {
      f = f - 7;
    }

    document.write("<p>" + color[i] + char[1] + color[a] + char[2] + color[b] + char[3] + color[c] + char[4] + color[d] + char[5] + color[e] + char[6] + color[f] + char[7] + "</p><br><br>");

    a = 0;
    b = 0;
    c = 0;
    d = 0;
    e = 0;
    f = 0;
  }
}
