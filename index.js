console.log("praticando a soma de dois numeros")


const  nota1= parseInt(prompt("digite o numero: "))
const  nota2= parseInt(prompt("digite o numero: "))
const  nota3= parseInt(prompt("digite o numero: "))
const  nota4= parseInt(prompt("digite o numero: "))


const soma = nota1 + nota2 + nota3 + nota4
const media = soma / 4
console.log("A soma dos numeros é: " + soma)
console.log("A média dos numeros é: " + media)

if (media > 7){
    console.log("Nota a cima da média")
} else if (media === 7){
    console.log("Na média!")
} else {
    console.log("Abaixo da média!")
}