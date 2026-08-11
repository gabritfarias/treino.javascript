console.log("Vamos inserir e descobrir o maior número")

const numero1 = parseInt(prompt("Digite o primeiro número:"));
const numero2 = parseInt(prompt("Digite o segundo número:"));
const numero3 = parseInt(prompt("Digite o terceiro número:"));

if (numero1 === numero2 && numero2 === numero3){
    console.log("Todos os números são iguais: "+ numero1);
} else if (numero1 === numero2 && numero1 > numero3){
    console.log("O primeiro e o segundo são iguais e maiores que o terceiro: " + numero1);
} else if (numero1 === numero3 && numero1 > numero2){
    console.log("O primeiro e o terceiro são iguais e maiores que o segundo: " + numero1);
} else if (numero2 === numero3 && numero2 > numero1){
    console.log("O segundo e o terceiro são iguais e maiores que o primeiro: " + numero2);
} else if (numero1 > numero2 && numero1 > numero3) {
    console.log("O primeiro é o maior número: " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O segundo é o maior número: " + numero2);
}else {
    console.log("O terceiro é o maior número: " + numero3);
}