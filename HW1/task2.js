const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));

const sum = num1 + num2;
const difference = Math.abs(num1 - num2);
const product = num1 * num2;
const quotient = num1 / num2;

console.log(`Сума: ${sum}`);
console.log(`Різниця: ${difference}`);
console.log(`Добуток: ${product}`);
console.log(`Частка: ${quotient}`);