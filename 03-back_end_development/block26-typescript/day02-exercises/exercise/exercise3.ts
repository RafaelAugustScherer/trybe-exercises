interface Pizza {
  flavor: string,
  slices: 4 | 6 | 8
}

const pizzaCalabresa: Pizza = {
  flavor: 'Calabresa',
  slices: 8
}

const pizzaMarguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6
}

const pizzaNutela: Pizza = {
  flavor: 'Nutela',
  slices: 4
}

export {
  Pizza
}