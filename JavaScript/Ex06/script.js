let guessNumber = prompt("Adivinhe o número que estou pensando? Está entre 0 e 10");
let number = Math.round(Math.random() * 10);
let cont = 0;
while(Number(guessNumber) != number) {
 guessNumber = prompt("Erro, tente novamente");
 cont++;
 if(guessNumber == number) {
  alert(`Parabéns! Você adivinhou o número em ${cont} tentativas`);
  break;
 }
}