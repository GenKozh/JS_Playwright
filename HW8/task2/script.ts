function processData(param: string | number | boolean | number[]): string | number | boolean | string | number[] {
  if (typeof param === 'string') {
    return param.toUpperCase();
  } else if (typeof param === 'number') {
    return param * param;
  } else if (typeof param === 'boolean') {
    return !param;
  } else if (Array.isArray(param)) {
    if (param.length === 0) {
      return 'Empty array: []';
    }
    return param.map(num => num * num);
  }
  return 'Invalid input';
}

console.log(processData("text data"));
console.log(processData(3));
console.log(processData(false));
console.log(processData([1, 2, 3, 4]));
console.log(processData([]));
