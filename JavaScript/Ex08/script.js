let pacientes = [];

let paciente = {
 nome: '',
 idade: 0,
 peso: 0,
 altura: 0,
}

let nomePacientes = [];

for(let i=0; i<5; i++) {
 pacientes[i].nome = prompt("Nome:");
 paciente[i].idade = prompt("Idade:");
 paciente[i].peso = prompt("Peso:");
 paciente[i].altura = prompt("Altura:");
}

for(let i=0; i<5; i++) {
 nomePacientes[i] = pacientes[i].nome;
}

alert(nomePacientes);