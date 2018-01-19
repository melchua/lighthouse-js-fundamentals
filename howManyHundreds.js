function howManyHundreds(num) {
  return (num - (num % 100)) / 100;
}

console.log(howManyHundreds(1234), "=?", 12);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);