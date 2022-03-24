import { Pizza } from './exercise3';

interface PizzaComum extends Pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni'
}

interface PizzaVegetariana extends Pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo'
}

interface PizzaDoce extends Pizza {
  flavor: 'Nutela' | 'Goiaba com Queijo' | 'Marshmallow'
  slices: 4
}

// Comuns
const PizzaFrangoGrande: PizzaComum = {
  flavor: 'Frango',
  slices: 8
}

const PizzaFrangoPequena: PizzaComum = {
  flavor: 'Frango',
  slices: 4
}

const PizzaPepperoni: PizzaComum = {
  flavor: 'Pepperoni',
  slices: 6
}

// Vegetarianas
const PizzaCogumelo: PizzaVegetariana = {
  flavor: 'Cogumelo',
  slices: 6
}

const PizzaCogumeloPequena: PizzaVegetariana = {
  flavor: 'Cogumelo',
  slices: 4
}

// Doce
const PizzaMarshmallow: PizzaDoce = {
  flavor: 'Marshmallow',
  slices: 4
}
