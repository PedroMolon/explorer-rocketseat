function calcIMC(weight, height) {
 let result = Number(weight / (height ** 2))
 return result
}

let patients = [];

let patient = {
 name: '',
 age: 0,
 weight: 0,
 height: 0,
}

for(let i=0; i<5; i++) {
 patients[i].name = prompt("Name:");
 patients[i].age = prompt("Age:");
 patients[i].weight = prompt("Weight:");
 patients[i].height = prompt("Height:");
}

for(let i=0; i<5; i++) {
 alert(`${patients[i].name}, your IMC is ${calcIMC((patients[i].weight), (patients[i].height))}`);
}