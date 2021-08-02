//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.

a = 5
b = 10

function greater(a, b) {
    if (a > b) {
        return a
    }
    else if (b > a) {
        return b
    }
    else {
        return false
    }
}

greaterNum = greater(a, b)

if (greaterNum) {
    console.log('Maior número: ', greaterNum)
}
else {
    console.log('Os números são equivalentes')
}