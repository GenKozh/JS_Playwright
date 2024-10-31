function findArrDiff(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const uniqueInArr1 = [...set1].filter(num => !set2.has(num));

  const uniqueInArr2 = [...set2].filter(num => !set1.has(num));

  const result = [...uniqueInArr1, ...uniqueInArr2].map(String);

  return result;
}

console.log(findArrDiff([5, 10, 20], [0, 10, 20, 30]));  // Output: ["5", "0", "30"]