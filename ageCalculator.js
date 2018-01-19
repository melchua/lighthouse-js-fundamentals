//name
//yearOfBirth
//currentDate


// calculates age based on currenetDate and yearOfBirth
function ageCalculator(name, yearOfBirth, currentDate) {
  return name + " is " + String(currentDate - yearOfBirth) + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
