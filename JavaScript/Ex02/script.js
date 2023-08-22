function soma(n1, n2) {
 let soma = Number(n1) + Number(n2);
 return soma;
}

let n1 = prompt("Digite um número: ");
let n2 = prompt("Digite outro número: ");
alert(`A soma de ${n1} + ${n2} é = ${soma(n1, n2)}`);