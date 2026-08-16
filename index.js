// Exemplo prático de funções
// Exercício 1, converter temperatura
function celconverterCelsiusParaFahrenheitcius (celcius){
    const Fahrenheit = (celcius * 1.8) + 32
    return Fahrenheit;
}
const temperatura = celconverterCelsiusParaFahrenheitcius (28)
console.log(temperatura)

//Exercíco 2, conferir idade para dirigir 
function podeDirigir(idade){
    if (idade >= 18){
       return("Pode dirigir meu caro")
    } else{
      return ("Você ainda não pode dirigir!")
    }
    
}
console.log(podeDirigir(17))


//Exercício 3, calcular média
function calcularMedia(n1,n2,n3,n4){
    const media = (n1 + n2 + n3 + n4) / 4
    if (media >= 6){
        return ("Aprovado")
    } else {
        return ("Reprovado")
    } 
}
console.log(calcularMedia(3,4,3,5))
console.log(calcularMedia(6,8,9,7))