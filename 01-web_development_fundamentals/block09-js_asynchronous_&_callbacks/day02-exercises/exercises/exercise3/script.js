const promise = new Promise((resolve, reject) => {
  let arr = [];

  while (arr.length < 10) arr.push(Math.floor(Math.random() * 51));

  arr = arr.map((el) => Math.pow(el, 2));

  const numberToCheck = arr.reduce((acc, cur) => acc + cur);
  const numbersToDivide = [2, 3, 5, 10];

  if (numberToCheck < 8000) resolve(numbersToDivide.map((el) => Math.floor(numberToCheck / el)));
  else reject();
})
  .then((arr) => console.log(arr))
  .catch(() => console.log('Promise rejeitada'));

promise;