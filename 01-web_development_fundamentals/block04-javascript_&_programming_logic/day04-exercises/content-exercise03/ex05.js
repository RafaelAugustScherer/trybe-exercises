//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

a = 30
b = 80
c = 70

function isTriangle(ang1, ang2, ang3) {
    if (ang1 + ang2 + ang3 === 180) {
        return true
    }
    else if (a < 0 || b < 0 || c < 0) {
        return 'Um dos ângulos é inválido.'
    }
    else {
        return false
    }
}

console.log(isTriangle(a, b, c))