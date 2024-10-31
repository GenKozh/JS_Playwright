function deleteItem(arr, item) {
  const index = arr.indexOf(item);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(deleteItem([3, 12, 16, 19, 21, 33], 16));  // Output: [3, 12, 19, 21, 33]