let number = (document.getElementById("number").innerHTML = 0);
function reset() {
  number = 0;
  document.getElementById("number").innerHTML = number;
  document.getElementById("number").style.color = "black";
}
function increse() {
  document.getElementById("number").innerHTML = ++number;
  if (number > 0) {
    document.getElementById("number").style.color = "green";
  }
  if (number == 0) {
    document.getElementById("number").style.color = "black";
  }
}
function decrease() {
  document.getElementById("number").innerHTML = --number;
  if (number < 0) {
    document.getElementById("number").style.color = "red";
  }
  if (number == 0) {
    document.getElementById("number").style.color = "black";
  }
}
