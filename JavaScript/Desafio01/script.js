function parOuImpar(n){
 if(n % 2 == 0) {
  return 'Par!';
 } else {
  return 'Impar!';
 }
}

let n1 = prompt("Digite um número:");
let n2 = prompt("Digite outro número:");
alert(`A soma dos dois números = ${Number(n1)+Number(n2)}`);
alert(`A subtração dos dois números = ${Number(n1-n2)}`);
alert(`A multiplicação dos dois números = ${Number(n1*n2)}`);
alert(`A divisão dos dois números = ${Number(n1/n2)}`);
alert(`O resto da divisão de dois números = ${Number(n1 % n2)}`);
if(n1 == n2) {
 alert('Os valores são iguais');
} else {
 alert('Os valores são diferentes');
}
let soma = n1 + n2;
alert(`A soma de ${n1} + ${n2} é uma valor ${parOuImpar(soma)}`);