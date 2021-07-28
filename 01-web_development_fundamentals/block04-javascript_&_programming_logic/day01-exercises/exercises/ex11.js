/*
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

INSS (Instituto Nacional do Seguro Social)
- Salário bruto até R$ 1.556,94: alíquota de 8%
- Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
- Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
- Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88

IR (Imposto de Renda)
- Até R$ 1.903,98: isento de imposto de renda
- De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
- De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
- De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
- Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
*/

salario = 3250

//INSS
let salarioINSS;
if (salario > 5189.82) {
    salarioINSS = salario - 570.88
}
else if (salario >= 2594.93) {
    salarioINSS = salario * 0.89
}
else if (salario >= 1556.95) {
    salarioINSS = salario * 0.91
}
else if (salario < 1556.95) {
    salarioINSS = salario * 0.92
}
else {
    console.log('Salário inválido | INSS')
}

//IR
let IR;
if (salarioINSS > 4664.68) {
    IR = (salarioINSS * 0.275) - 869.36
}
else if (salarioINSS >= 3751.06) {
    IR = (salarioINSS * 0.225) - 636.13
}
else if (salarioINSS >= 2826.66) {
    IR = (salarioINSS * 0.15) - 354.80
}
else if (salarioINSS >= 1903.99) {
    IR = (salarioINSS * 0.225) - 142.80
}
else if (salarioINSS < 1903.99) {
    IR = 0
}
else {
    console.log('Salário inválido | IR')
}
salarioFinal = salarioINSS - IR 
console.log(`Salário Bruto: ${salario}`)
console.log(`Salário Base: ${salarioINSS}`)
console.log(`Salário Líquido: ${salarioFinal}`)