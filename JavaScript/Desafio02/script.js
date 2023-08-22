function calcMedia(n1, n2) {
 return (n1 + n2) / 2;
}

let estudantes = [];

let estudante = {
 nome: '',
 n1: 0,
 n2: 0,
}

for(let i=0; i<5; i++) {
 estudantes[i].nome = prompt("Name:");
 estudantes[i].n1 = prompt("Note 1:");
 estudantes[i].n2 = prompt("Note 2:");
}

for(let i=0; i<5; i++) {
 let media = calcMedia(estudantes[i].n1, estudantes[i].n2);
 if(media >= 7) {
  alert(`${estudantes[i].nome}, you are approved`);
 } else {
  alert(`${estudantes[i].nome}, you are reproved`);
 }
}