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
console.log('\nExercício 5:')

function higherCountNumber(numArr) {
    //For loop to count numbers in array and store in object
    numbers = {}
    for (num of numArr) {
        if (numbers[num] === undefined) {
            numbers[num] = 1
        }
        else {
            numbers[num] += 1
        }
    }

    //For loop to store higher count value in variable
    countHigher = Object.keys(numbers)[0]
    for (count in numbers) {
        if (numbers[count] > numbers[countHigher]) {
            countHigher = count
        }
    }
    
    return countHigher
}
testArr = [2, 3, 3, 5, 8, 2, 3]
console.log(higherCountNumber(testArr))

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
console.log('\nExercício 6:')

function sumUpTo(num) {
    sum = 0
    for (idx = 1; idx <= num; idx += 1) {
        sum += idx
    }
    return sum
}

n = 5
console.log(sumUpTo(n))

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false
console.log('\nExercício 7:')

function testStringEnding(string, ending) {
    stringArr = string.split('')
    endingArr = ending.split('')

    for (idx = 0; idx < string.length; idx += 1) {
        stringArr.shift()
        if (stringArr.join('') == endingArr.join('')) {
            return true
        }
    }
    return false
}

word = 'trybe'
ending = 'be'

console.log(testStringEnding(word, ending))