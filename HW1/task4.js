let score = prompt("Введіть ваш бал (0-100):");
score = parseInt(score, 10);


//if-else

if (score >= 0 && score <= 49) {
  console.log("Unsatisfied!");
} else if (score >= 50 && score <= 70) {
  console.log("Satisfied!");
} else if (score >= 71 && score <= 87) {
  console.log("Good!");
} else if (score >= 88 && score <= 100) {
  console.log("Excellent!");
} else {
  console.log("Incorrect assessment!!");
}

//switch


switch (true) {
  case (score >= 0 && score <= 49):
    console.log("Unsatisfied!");
    break;
  case (score >= 50 && score <= 70):
    console.log("Satisfied!");
    break;
  case (score >= 71 && score <= 87):
    console.log("Good!");
    break;
  case (score >= 88 && score <= 100):
    console.log("Excellent!");
    break;
  default:
    console.log("Incorrect assessment!!");
}