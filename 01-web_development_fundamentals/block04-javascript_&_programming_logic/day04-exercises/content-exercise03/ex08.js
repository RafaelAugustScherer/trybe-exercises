//Escreva um programa que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

//Bonus: use somente um if 

a = 3
b = 5
c = 8

function isEven(...nums) {
    for (num of nums) {
        if (num % 2 == 0) {
            return true
        } 
    }
    return false
}

console.log(isEven(a, b, c))