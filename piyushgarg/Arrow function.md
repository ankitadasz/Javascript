### Arrow Functions in JavaScript

- When you don't use parentheses and give a single statement, it automatically returns the statement. You don't need any parentheses.

#### Basic Syntax to Write an Arrow Function:
```javascript
const sayHello = () => {
    console.log("hello guys");
};
```

- The `arguments` object that we use in normal functions can't be used in arrow functions. Instead of `arguments`, we can use the **spread operator** (`...`).

#### Unlimited Arguments in Arrow Functions:
- If you want unlimited arguments in an arrow function, use the spread operator.

#### Declaring Arrow Functions:
- When using arrow functions, we have to declare the function with `const` or `let`, whereas normal functions are declared using `function`.

### Hoisting:
- In **hoisting**, when you declare a normal function and call the function before its definition, it will still return the value.
- JavaScript stores the memory, so whether you define the function before or after calling it, it will execute.

#### Arrow Functions and Hoisting:
- In **arrow functions**, you can't call the function before defining it. It will not return the value.

### `this` Keyword:
- When you use `this` in a **normal function**, it refers to the object.
- When you use `this` in an **arrow function**, it refers to the global `window` object because arrow functions do not have their own `this` context.

///****** BASIC DIIFERENCE BETWEEN NORMAL AND ARROW FUNCTION *******\\\
1ST THING IS THE SYNTAX 
2ND THING IS YOU CAN USE ARGUMENTS IN NOMAL FUNCTION BUT CANT USE IT IN ARRRPW FUNCTION YOU HAVE TO USED SPREAD OPERATOR
3RD THING IS HOISTING IN NORMAL FUNCTION IF YOU CALL THE FUNCTION BEFORE DECLARING THEN IT WILL CALL IT BUT IN CASE OG ARRPW IT WILL NOT WORK YOU HAVE TO CALL IT AFTER DECLARING IT
4TH IS THIS KEYWORD
