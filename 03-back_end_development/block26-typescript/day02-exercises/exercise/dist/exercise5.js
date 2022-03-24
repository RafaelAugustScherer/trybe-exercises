"use strict";
function myFilter(array, callback) {
    const values = [];
    array.forEach((value) => {
        if (!!callback(value)) {
            values.push(value);
        }
    });
    return values;
}
const sus = ['who', 0, 'is', 1, 'Johnny'];
const numbers = myFilter(sus, (val) => {
    return typeof val === 'number';
});
const strings = myFilter(sus, (val) => {
    return typeof val === 'string';
});
console.log(numbers);
console.log(strings);
