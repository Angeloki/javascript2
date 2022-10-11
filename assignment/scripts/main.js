// toggle menu in small view
const toggleMenu = () => {
  document.querySelector('#menu').classList.toggle('open');
};

function add(number1, number2){
  return number1 + number2
}

document.querySelector("#addNumbers").addEventListener.onclick = addNumbers;

function addNumbers() {
  let number1 = document.getElementById("addend1").value;
  let number2 = document.getElementById("addend2").value;
  sum = add;
  return document.getElementById("sum").innerHTML= add() ;
}

let subtract = function subtractNumbers(number1, number2){
  let number1 = document.getElementById("minuend").value;
  let number2 = document.getElementById("subtrachend").value;
  subtractNumbers = number1 - number2;
  let difference = subtractNumbers
  return document.getElementById("difference").innerHTML= subtractNumbers();

}
document.querySelector("#subtractNumbers").addEventListener.onclick = difference;

let multiply = "";

multiply = () => {
  return ;
}

document.getElementById("product").innerHTML = multiply();