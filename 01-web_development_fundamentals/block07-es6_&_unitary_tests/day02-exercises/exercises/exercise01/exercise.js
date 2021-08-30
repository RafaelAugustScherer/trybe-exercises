const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

/* 1 */

const customerInfo = (order) => {
  let message = `Olá ${order.order.delivery.deliveryPerson}, `;
  message += `entrega para: ${order.name}, `;
  message += `Telefone: ${order.phoneNumber} `;

  Object.entries(order.address).forEach((entry) => {
    switch (entry[0]) {
      case 'street':
        entry[0] = 'R.';
        break;
      case 'number':
        entry[0] = 'Nº:';
        break;
      case 'apartment':
        entry[0] = 'AP:';
        break;
    }

    message += `${entry[0]} ${entry[1]} `;
  });

  return message;
};

console.log(customerInfo(order));

/* 2 */

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  let message = `Olá ${order.name}, `;
  message += `o total do seu pedido de `;

  const orderInfo = order.order;
  Object.keys(orderInfo.pizza).forEach((saborPizza) => {
    // https://stackoverflow.com/questions/4317456/getting-the-last-item-in-a-javascript-object
    if (saborPizza !== Object.keys(orderInfo.pizza)[Object.keys(orderInfo.pizza).length - 1]) {
      saborPizza += ',';
    }
    message += `${saborPizza} `;
  });

  message += `e `

  Object.keys(orderInfo.drinks).forEach((drink) => {
    let drinkName = orderInfo.drinks[drink].type
    
    if (drink !== Object.keys(orderInfo.drinks)[Object.keys(orderInfo.drinks).length - 1]) {
        drinkName += ',';
      }

      message += `${drinkName} `;
  })

  message += `é R$ ${order.payment.total},00`

  return message;
};

console.log(orderModifier(order));
