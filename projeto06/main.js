//Variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);
let cont = 1;

//Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handdleResetClick);
document.addEventListener("keydown", keyPress);

//Função CallBack -> função que é passada como argumento de outra função, e que irá ser chamada mais tarde
function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#number");
  if(inputNumber.value >= 0 && inputNumber.value <= 10) {
    if(Number(inputNumber.value) == randomNumber) {
      toggleScreen();
      screen2.querySelector("h1").innerText = `Acertou em ${cont} tentativas!`;
      console.log(`Acertou em ${cont} tentativas!`);
    }
  
    inputNumber.value = "";
    cont++;
  } else {
    alert("ERRO! Digite um número entre 0 e 10");
  }
}

function handdleResetClick() {
  toggleScreen();
  randomNumber = Math.round(Math.random() * 10);
  cont = 1;
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function keyPress(event) {
  if(event.key == 'Enter' && scree1.classList.contains('hide')) {
    HanddleResetClick();
  }
}