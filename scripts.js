const ligar = document.querySelector("#ligar");
const desligar = document.querySelector("#desligar");
const lamp = document.querySelector("#lamp");

function lampOn() {
  lamp.src = "./assets/img/ligada.jpg";
}

ligar.addEventListener("click", lampOn);

function lampOff() {
  lamp.src = "./assets/img/desligada.jpg";
}

desligar.addEventListener("click", lampOff);

lamp.addEventListener("mouseenter", lampOn);
lamp.addEventListener("mouseout", lampOff);

function lampBroken() {
  lamp.src = "./assets/img/quebrada.jpg";
}

lamp.addEventListener("dblclick", lampBroken);
