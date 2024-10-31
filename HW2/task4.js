function getCircleLength(r) {
  if (typeof r !== 'number' || r <= 0) {
    throw new Error("Incorrect radius - please, enter a positive numeric value!");
  }
  return 2 * Math.PI * r;
}

try {
  console.log(getCircleLength(5));       // Output: 31.41592653589793 (approximately)
  console.log(getCircleLength("five"));  // Throws error: Incorrect radius - please, enter a positive numeric value!
} catch (error) {
  console.error(error.message);
}
