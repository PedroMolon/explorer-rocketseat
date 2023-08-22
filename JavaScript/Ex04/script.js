let nome = prompt("Digite o seu nome: ");
let n1 = prompt("Digite a nota1: ");
let n2 = prompt("Digite a nota2: ");
let n3 = prompt("Digite a nota3: ");
let media = (Number(n1) + Number(n2) + Number(n3)) / 3;
media = media.toFixed(2);
if(media > 6) {
 alert(`Parabéns, ${nome}, você passou de ano, sua media foi ${media}`);
} else {
 alert(`Infelizmente ${nome}, você reprovou de ano, sua média foi ${media}`);
}