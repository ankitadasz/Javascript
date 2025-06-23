// Example 1
console.log("1" + 2 + 2);
// Output: "122"
// Explanation: The first value "1" is a string, so the entire expression is treated as a string.
// The numbers 2 and 2 are concatenated as strings, resulting in "122".

// Example 2
console.log(1 + 2 + "2");
// Output: "32"
// Explanation: The first two values (1 and 2) are numbers, so they are added together to get 3.
// Then, the result 3 is concatenated with the string "2", resulting in "32".

// Note:
"" // An empty string will always be treated as zero when used in a mathematical operation.
console.log("" + 2); // Output: "02"
console.log("" + 2 + 2); // Output: "022"
console.log("" - 2); // Output: -2
