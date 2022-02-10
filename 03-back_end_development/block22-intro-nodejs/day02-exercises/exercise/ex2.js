const ex1Function = require('./ex1');

let paramsArr = [];
for (let i = 0; i < 3; i++) {
  paramsArr.push(Math.round(Math.random() * 100));
}

ex1Function(...paramsArr)
  .then(res => console.log(res))
  .catch(err => console.log(err));