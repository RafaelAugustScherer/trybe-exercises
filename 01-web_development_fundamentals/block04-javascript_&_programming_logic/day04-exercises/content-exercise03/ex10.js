//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

a = 5
b = 7

function profitThousand(buyValue, sellValue) {
    profit = sellValue - buyValue
    return profit * 1000
}

console.log(profitThousand(a, b))