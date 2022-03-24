function myFilter (array: any[], callback: Function): any[] {
  const values: any[] = [];

  array.forEach((value) => {
    if (!!callback(value)) {
      values.push(value);
    }
  });
  return values;
}

const sus: any[] = ['who', 0, 'is', 1, 'Johnny'];

const numbers: number[] = myFilter(sus, (val: any) => {
  return typeof val === 'number'
});

const strings: string[] = myFilter(sus, (val: any) => {
  return typeof val === 'string'
});

console.log(numbers);
console.log(strings);
