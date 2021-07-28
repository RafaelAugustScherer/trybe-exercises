/*
1. Crie uma variável que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;

2. Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
Se a nota for menor que 60, imprima "Você foi reprovada(o)"

3. Crie uma estrutura condicional utilizando o if , else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.

4. Altere o valor da nota para verificar se as condições que você implementou funcionam;
*/

// 1
notaA = 50

// 2
if (notaA >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (notaA >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovada(o)")
}

// 3
number = Math.random()

if (number >= 0.8) {
    console.log("Parabéns, você está na lista dos 20% mais sortudos do Planeta!")
}
else if (number >= 0.6) {
    console.log("Muito bom, você está na lista dos 40% mais sortudos do Planeta!")
}
else if (number >= 0.5) {
    console.log("Boa, você está na lista dos 50% mais sortudos do Planeta!")
}
else if (number >= 0.4) {
    console.log("Sua sorte não está tão boa assim, mas ainda está entre os 60% mais sortudos")
}
else if (number >= 0.2) {
    console.log("Sua sorte não está boa, cerca de 20% conseguem ser piores")
}
else {
    console.log("Hoje não é seu dia de sorte! Está entre os 20% piores do Planeta!")
}

// 4
notaA = 90
if (notaA >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (notaA >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovada(o)")
}