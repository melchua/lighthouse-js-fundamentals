var ingredients = ["eggs", "milk", "flour", "sugar",
"baking soda", "baking powder", "chocolate chips",
"bananas"];

// Write a while loop that prints out the contents of
//ingredients:

// Write a for loop that prints out the
//contents of ingredients:

// Write any loop (while or for) that prints
//out the contents of ingredients backwards:

//while loop
var count = 0;
while (count < ingredients.length) {
  console.log(ingredients[count]);
  count++;
}


// for loop reverse
for (i=0;i<ingredients.length;i++) {
  console.log(ingredients[ingredients.length-1-i]);
}