# String Methods and Template Literals in JavaScript

## Old Way: Concatenating Strings with `+`
```javascript
let a = prompt("What is your name");
let b = prompt("What is your age");
document.write("My name is " + a + " and I am " + b + " years old");
New Way: Template Literals with Backticks ( )
Template literals allow embedding expressions in strings using ${}.

javascript
Copy code
let a = prompt("What is your name");
let b = prompt("What is your age");
document.write(`Hello, my name is ${a} and I'm ${b} years old.`);
Key Features:
Use backticks (`) to define a template literal.
Embed variables and expressions directly using ${}.
Traversing Strings Using slice()
General Rules for slice():
When using positive indices, the start index must be less than the end index.
When using negative indices, you traverse from lower negative index to higher negative index.
Example 1: Invalid Negative Index Traversal
javascript
Copy code
const myString = "Hello, World!";
const slicedString = myString.slice(-1, -8);
console.log(slicedString); // Output: ""
Explanation: This fails because -1 (higher index) comes before -8 (lower index).

Example 2: Valid Positive Index Traversal
javascript
Copy code
const myString = "Hello, World!";
const slicedString = myString.slice(0, 5);
console.log(slicedString); // Output: "Hello"
Example 3: Valid Negative Index Traversal
javascript
Copy code
const myString = "Hello, World!";
const slicedStringNegative = myString.slice(-6, -1);
console.log(slicedStringNegative); // Output: "World"
Summary
Use template literals with backticks for cleaner, more readable string interpolation.
When slicing strings, ensure the start index is less than the end index for positive indices, and for negative indices, follow the rule of traversing from a lower to a higher index.
markdown
Copy code
**a.** Experiment with more string methods like `substring()`, `indexOf()`, or `replace()`.
**b.** Write code to handle edge cases, such as invalid inputs or empty strings.









