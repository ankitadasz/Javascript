# JavaScript: Keywords and Scope

In JavaScript, there are some predefined keywords like `const`, `let`, and `var` used to assign memory for variables. Here’s an overview of their usage and differences:

- **`const`**: Once a variable is declared with `const`, its value cannot be changed in the future. It is generally more beneficial to use `const` when the variable should remain constant.

- **`let`**: Variables declared with `let` can have their values changed in the future. `let` also supports block-level scoping, making it safer and more predictable in certain contexts.

- **`var`**: Variables declared with `var` can be reassigned, but it is not preferable to use `var` due to issues related to block scope and function scope. Historically, `var` was the only way to declare variables in JavaScript, but it has certain limitations with scope, leading to unpredictable behavior in larger codebases.

## Scope in JavaScript

Scope defines where a variable is accessible in the code. It refers to the code within a block or inside curly brackets `{ }`. JavaScript has different types of scope:

- **Function scope**: Variables declared with `var` are limited to the function in which they are declared.
- **Block scope**: Variables declared with `let` or `const` are limited to the block in which they are declared.

This difference in scope led to the introduction of the `let` keyword to handle cases where variables with the same name in different blocks could accidentally interfere with each other’s values.

For example, if one programmer declared a variable named `classRoom` with `var`, and another programmer also declared a variable with the same name in a different part of the code, their values could unintentionally override each other.

## Declaring Variables Without Keywords

It’s possible to assign a value to a variable without using `let`, `const`, or `var`. However, this is not recommended, as it can lead to potential errors and make debugging difficult.

## Important Notes

- In short, except for variables declared with `const`, other variables’ values can be changed in the future.
- If you declare a variable but do not assign it a value, the output will be `undefined`.






 