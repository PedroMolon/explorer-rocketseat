let list = [];
let option;

while(option != 3) {
 option = prompt(`Olá usuário! Digite o número da opção desejada
 1. Cadastrar um item na lista
 2. Mostrar itens cadastrados
 3. Sair do programa`);
 switch(option) {
  case '1': 
   let newItem = prompt("Digite o item:");
   list.push(newItem);
   break;
  
  case '2': 
   if(list.length == 0) {
    alert("Não existe itens cadastrados");
   } else {
    alert(list);
   }
  break;

  case '3':
   alert("Até mais!")
   break;

  default:
   alert("Opção inválida!");
 }
}