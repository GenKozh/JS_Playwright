function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

const userInput = prompt("Введіть число:");
const number = parseInt(userInput, 10);

if (isNaN(number)) {
  console.log("Будь ласка, введіть коректне число.");
} else if (isPrime(number)) {
  console.log(`${number} is a prime number.`);
} else {
  console.log(`${number} is not a prime number.`);
}
