# JavaScript String Methods and Usage

## Using Backticks for String Interpolation

### Old Way:
```javascript
let a = prompt("What is your name");
let b = prompt("What is your age");
document.write("My name is " + a + " and I am " + b + " years old");
New Way:
javascript
Copy code
let a = prompt("What is your name");
let b = prompt("What is your age");
document.write(`Hello, my name is ${a} and I'm ${b} years old`);
We use backticks ( ) to write a complete string.
Use ${} to inject variables into the string.
Traversing Strings with slice() Function
In JavaScript, you cannot traverse from a higher negative index to a lower negative index using the slice() function or other standard string methods.

Rules for slice():
The start index must be less than the end index when using positive or zero-based indices.
With negative indices, you can only traverse:
From lower negative index to higher negative index.
From lower positive index to higher positive index.
Reversing the start and end indices is not allowed with slice().
Examples:
Example 1: Traversing with Negative Indices (Incorrect)
javascript
Copy code
const myString = "Hello, World!";
const slicedString = myString.slice(-1, -8);
console.log(slicedString); // Output: " "
Example 2: Traversing with Positive Indices
javascript
Copy code
const myString = "Hello, World!";
const slicedString = myString.slice(0, 5);
console.log(slicedString); // Output: "Hello"
Example 3: Traversing with Negative Indices (Correct)
javascript
Copy code
const myString = "Hello, World!";
const slicedStringNegative = myString.slice(-6, -1);
console.log(slicedStringNegative); // Output: "World"