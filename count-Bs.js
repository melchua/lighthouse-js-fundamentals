
/*
You can get the Nth character, or letter, from a string
by writing "string".charAt(N), similar to how you get
its length with "s".length. The returned value will be
a string containing only one character (for example, "b").
e first character has position zero, which causes the
last one to be found at position string.length - 1.
In other words, a two-character string has length 2,
and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only
argument and returns a number that indicates how many
uppercase “B” characters are in the string.
*/


function countBs(thestring) {
  return countChar(thestring, "B");
}

function countChar(thestring, thechar) {
  var count = 0;
  for (i=0; i < thestring.length; i++) {
    if (thestring.charAt(i) == thechar) {
      count++
    }
  }
  return count;
}


console.log(countChar("HannaH","H"));
console.log(countBs("BaBaBahBlackSheep"));