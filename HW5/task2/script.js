function countCars(cars) {
  const carCountMap = new Map();

  for (const car of cars) {
    if (carCountMap.has(car)) {
      carCountMap.set(car, carCountMap.get(car) + 1);
    } else {
      carCountMap.set(car, 1);
    }
  }

  return carCountMap;
}

const cars = ["BMW", "Opel", "Audi", "VW", "Toyota", "BMW", "VW", "Nissan", "BMW"];
console.log(countCars(cars));
