//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

a = 30
b = 80
c = 70

if (a + b + c === 180) {
    console.log(true)
}
else if (a < 0 || b < 0 || c < 0) {
    console.log('Um dos ângulos é inválido.')
}
else {
    console.log(false)
}