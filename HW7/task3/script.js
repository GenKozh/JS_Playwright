function getLetterCount(text) {
  const letterCount = {};
  const letters = text.toLowerCase().match(/[a-z]/g); 
  
  if (letters) {
    letters.forEach(letter => {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    });
  }

  return letterCount;
}

console.log(getLetterCount("banana"));

console.log(getLetterCount("The short text"));
