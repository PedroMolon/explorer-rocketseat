let screen1 = document.querySelector(".screen1");
let screen2 = document.querySelector(".screen2");
let btnCookie = document.querySelector(".btnCookie");
let btnAnother = document.querySelector(".btnAnother");

btnCookie.addEventListener("click", handleClick);
btnAnother.addEventListener("click", handleClick);

function handleClick() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}