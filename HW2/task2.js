function findElem(arr, el) {
  return arr.includes(el);
}

const arr = [1, 2, 3, 4, "Alex", 10, "Nick"];
console.log(findElem(arr, 7));        // Output: false
console.log(findElem(arr, "Alex"));   // Output: true