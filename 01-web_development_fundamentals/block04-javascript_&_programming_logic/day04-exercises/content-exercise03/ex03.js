//Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

a = 1
b = 2
c = 5

function greater(a, b, c) {
    if (a > b & a > c) {
        return a
    }
    else if (b > a & b > c) {
        return b
    }
    else if (c > a & c > b) {
        return c
    }
    else {
        return false
    }
}

greaterNum = greater(a, b, c)

if (greaterNum) {
    console.log('Maior número: ', greaterNum)
}
else {
    console.log('Os números são equivalentes')
}