function convertMinutesToHoursAndMinutes(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
}

const inputValue = 82;
const result = convertMinutesToHoursAndMinutes(inputValue);
console.log(result); 