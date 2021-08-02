// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false
console.log('\nExercício 1:')

function verificaPalindrome(string) {
    halfPos = string.length / 2

    //Separate first from second half
    firstHalf = string.slice(0, halfPos)
    secondHalf = string.slice(halfPos, string.length)

    // If string is odd remove center character
    if (string.length % 2 == 1) {
        secondHalf = secondHalf.slice(1)
    }
    
    //Reverse second half for comparsion
    secondHalf = secondHalf.split('')
    secondHalf = secondHalf.reverse()
    secondHalf = secondHalf.join('')

    if (firstHalf == secondHalf) {
        return true
    }
    else {
        return false
    }
}

console.log(verificaPalindrome('arara'))

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .
console.log('\nExercício 2:')

function greaterNum(numArr) {
    greater = numArr[0]
    for (idx in numArr) {
        if (numArr[idx] > greater) {
            greater = idx
        }
    }
    return greater
}
testArr = [2, 3, 6, 7, 10, 1]
console.log(greaterNum(testArr))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .
console.log('\nExercício 3:')

function lowerNum(numArr) {
    lower = numArr[0]
    for (idx in numArr) {
        if (numArr[idx] < lower) {
            lower = idx
        }
    }
    return lower
}
testArr = [2, 4, 6, 7, 10, 0, -3]
console.log(lowerNum([2, 3, 6, 7, 10, 1]))

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .
console.log('\nExercício 4:')

function greaterName(nameArr) {
    greater = nameArr[0]
    for (idx in nameArr) {
        if (nameArr[idx].length > greater.length) {
            greater = nameArr[idx]
        }
    }
    return greater
}
testArr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']
console.log(greaterName(testArr))

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .
// console.log('\nExercício 5:')

// function higherCountNumber(numArr) {
//     console.log(numArr.splice(''))
    
//     return false
// }
// testArr = [2, 3, 2, 5, 8, 2, 3]
// console.log(greaterName(testArr))