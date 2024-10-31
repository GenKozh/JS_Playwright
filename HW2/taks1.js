function processData(num1 = 0, num2 = 0, action = "sum") {
  switch (action) {
    case "sum":
      return num1 + num2;
    case "product":
      return num1 * num2;
    case "square":
      return Math.pow(num1, num2);
    default:
      return "Invalid action";
  }
}

console.log(processData(10, 4, "product"));  // Output: 40
console.log(processData(2, 3, "square"));    // Output: 8
console.log(processData(5, 5));              // Output: 10 (default action "sum")
