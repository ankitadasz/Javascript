go and learn all the methods for the strings from the google-inspect-console.....
try to print any thing using backticks.
 backOld way:
Let a = name
Let b = age
let a = prompt("What is your name");
      let b = prompt("What is your age");
      document.write("My name is " + a + "and i am " + b + "years old")


New way:
let a = prompt("What is your name");
      let b = prompt("What is your age");
      document.write(`Hello my name is ${a} and I'm ${b} years old `);

We use ` ` to write complete string and will use ${} to inject variables in it.




In JavaScript, you cannot traverse from a higher negative index to a lower negative index using the slice() function or any other standard string method. The slice() function, as well as most other string methods, expects the start index to be less than the end index when using positive indices or zero-based indices.

When using negative indices, you can only traverse from left to right (from lower negative index to higher negative index) or from right to left (from lower positive index to higher positive index). You cannot reverse the start and end indices when using negative indices with slice().

const myString = "Hello, World!";
const slicedString = myString.slice(-1, -8);
console.log(slicedString); // Output: " "


const myString = "Hello, World!";
const slicedString = myString.slice(0, 5);
console.log(slicedString); // Output: "Hello"

const slicedStringNegative = myString.slice(-6, -1);
console.log(slicedStringNegative); // Output: "World"