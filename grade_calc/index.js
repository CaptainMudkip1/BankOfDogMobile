function gradeCalc(earned, total) {
  pe = earned * 100;
  x = pe / total;
  x = x + "%"
  return x
}
function CALC(e, t) {
  x = gradeCalc(e, t);
  document.write('<p>Your grade was <b>' + x + '</b></p>');
}
