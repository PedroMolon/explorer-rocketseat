let n1 = prompt("Digite um número: ");
n1 = Number(n1);

let n2 = prompt("Digite outro número: ");
n2 = Number(n2);

let sum = n1 + n2;
let sub  = n1 - n2;
let multi = n1 * n2;
let div = n1 / n2;
let rest = n1 % n2

alert(`A soma é ${sum}`);
alert(`A subtração é ${sub}`);
alert(`A multiplicação é ${multi}`);
alert(`A divisão é ${div}`);
alert(`O resto da divisão é ${rest}`);