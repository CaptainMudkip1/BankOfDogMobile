function gradeCalc(earned, total) {
  pe = earned * 100;
  x = pe / total;
  x = x + "%"
  return x
}
function CALC() {
  e = document.getElementById("earned").value;
  t = document.getElementById("total").value;
  x = gradeCalc(e, t);
  document.clear();
  fetch('./index.html')
    .then(response => response.text())
    .then((data) => {document.write(data + '<p>Your grade was <b>' + x + '</b></p>')})
}
