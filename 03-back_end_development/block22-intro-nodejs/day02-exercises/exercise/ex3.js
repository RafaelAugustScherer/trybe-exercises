const ex1Function = require('./ex1');

let paramsArr = [];
for (let i = 0; i < 3; i++) {
  paramsArr.push(Math.round(Math.random() * 100));
}

const callEx1 = async () => {
  try {
    const result = await ex1Function(...paramsArr);
    console.log(result);
  }
  catch (err) {
    console.log(err);
  }
};

callEx1();