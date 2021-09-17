const promise = new Promise((resolve, reject) => {
    let arr = [];

    while (arr.length < 10) arr.push(Math.floor(Math.random() * 51))
    
    arr = arr.map((el) => Math.pow(el, 2))

    if (arr.reduce((acc, cur) => acc + cur) < 8000) resolve()
    else reject()
})
.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));

promise