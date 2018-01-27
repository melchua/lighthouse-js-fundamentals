// sort a single array
// ie. [3,4,7,1,2]
// method, concate, then merge


function concat(firstArray, secondArray) {
  for (var i = 0; i < secondArray.length; i++) {
    firstArray.push(secondArray[i]);
  }
  return firstArray;
}

function bubbleSort(mainArray) {

  // Swaps -> moves bigger value on left, to the right
  for (var i = 0; i < mainArray.length - 1; i++) {
    for (var j = 0; j < mainArray.length - 1 - i; j++) {
      if (mainArray[j] > mainArray[j + 1]) {
        var swap = mainArray[j];
        mainArray[j] = mainArray[j + 1];
        mainArray[j + 1] = swap;
      }
    }
  }
  return mainArray;
}

function merge(array1, array2) {
  return bubbleSort(concat(array1,array2));
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
