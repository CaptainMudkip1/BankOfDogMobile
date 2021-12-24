function gradeCalc(earned, total) {
  pe = earned * 100;
  x = pe / total;
  return x
}
function CALC() {
  e = document.getElementById("earned").value;
  t = document.getElementById("total").value;
  o = document.getElementById("outputText");
  if(e == ""){o.innerHTML = "";}
  else if(t == ""){o.innerHTML = "";}
  else {
    x = gradeCalc(e, t);
    console.log(x);
    o.innerHTML = "Your score was <b>" + x + "%</b>";
  }
}
