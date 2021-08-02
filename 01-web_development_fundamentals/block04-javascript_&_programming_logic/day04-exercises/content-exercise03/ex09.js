//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

//Bonus: use somente um if 

a = 2
b = 4
c = 8

function isOdd(...nums) {
    for (num of nums) {
        if (num % 2 == 1) {
            return true
        } 
    }
    return false
}

console.log(isOdd(a, b, c))