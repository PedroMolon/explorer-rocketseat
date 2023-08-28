import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calcIMC, notNumber } from './utils.js';

const btnImc = document.querySelector("#btnIMC");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");
const alertError = document.querySelector(".alert-error");

btnImc.addEventListener("click", (event) => {
  event.preventDefault();

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const showAlertError = notNumber(weight) || notNumber(height);

  if(showAlertError) {
    AlertError.open();
    return;
  }

  const result = calcIMC(weight, height);
  Modal.message.innerText = `Seu IMC é de ${result}`;
  Modal.open();
})

inputWeight.addEventListener("input", () => {
  AlertError.close();
})

inputHeight.addEventListener("input", () => {
  AlertError.close();
})