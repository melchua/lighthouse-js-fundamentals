
function range(start,end,step) {
  var rangeArray = [];
  while (start <= end && step > 0) {
    rangeArray.push(start);
    start += step;
  }
  return rangeArray;
}

console.log(range("adf",10,2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));

