// Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'strawberry'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['nuts', 'whipped cream', 'chocolate'];

const fruitSalad = (fruit, additional) => {
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));