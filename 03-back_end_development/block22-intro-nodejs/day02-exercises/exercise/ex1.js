const ex1Function = (a, b, c) => {
  const promise = new Promise((resolve, reject) => {
    const paramsArr = [a, b, c];

    paramsArr.forEach(param => {
      if(typeof param !== 'number') reject('Informe apenas números');
    });
    const result = (a + b) * c;
    if (result < 50) reject('Valor muito baixo');
    resolve(result);
  });

  return promise;
}

module.exports = ex1Function;
