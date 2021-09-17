const mainPromise = new Promise((resolve, reject) => {
    let arr = [];
  
    while (arr.length < 10) arr.push(Math.floor(Math.random() * 51));
  
    arr = arr.map((el) => Math.pow(el, 2));
  
    const numberToCheck = arr.reduce((acc, cur) => acc + cur);
    
  
    numberToCheck < 8000 ? resolve(numberToCheck)
    : reject();
  })
    .then((sum) => [2, 3, 5, 10].map((el) => Math.floor(sum / el)))
    .then((arr) => console.log(arr.reduce((acc, cur) => acc + cur)))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
  
mainPromise;

