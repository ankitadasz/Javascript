## Object Declaration in JavaScript

Objects can be declared in two ways:

1. **Literal**
2. **Constructor**

### Constructor Supports Singleton
When you define an object using a **constructor**, it supports the **singleton pattern**, whereas **literal declaration** does not.

### Symbol Keys
When defining a **symbol** as a key in an object, **use square brackets**. Otherwise, the symbol will be treated as a string value.

```javascript
const mySymbol = Symbol('myKey');
const obj = {
  [mySymbol]: 'value'
};
```

If you omit the square brackets, it will be treated as a string:

```javascript
const obj = {
  'mySymbol': 'value'
};
```

### Freezing an Object
You can **modify object properties** by default. If you **want to prevent modifications**, use `Object.freeze()`. After freezing, the object becomes **immutable**.

```javascript
const obj = { name: 'Ankita Das' };
Object.freeze(obj);
obj.name = 'Another Name'; // This will not work
console.log(obj.name); // Output: Ankita Das
```

### Accessing Object Properties
Most people use **dot notation** to access object properties:

```javascript
console.log(object.name);
```

However, if the **key is a string with spaces or special characters**, or if it is a **symbol**, **use bracket notation**:

```javascript
console.log(object['name']);
```

### Key with Special Characters
If an object key is declared as a string with special characters like spaces, **dot notation will not work**:

```javascript
const object = { 'name': 'Ankita Das' };
console.log(object.name); // Undefined
console.log(object['name']); // Ankita Das
```

### Defining Methods in an Object
You can **add methods to an object** after its creation. For example:

```javascript
my_Info.greeting = function(){
    console.log("Hello google employee");
}

my_Info.greetingTwo = function(){
    console.log(`Hello google employee , ${this.name}`);
}

console.log(my_Info.greeting());
console.log(my_Info.greetingTwo());
```

#### Explanation:
- `greeting` is a method that logs a simple greeting message.
- `greetingTwo` is a method that logs a personalized greeting using the `name` property of `my_Info`.
- `this.name` refers to the `name` property within the `my_Info` object.
- When calling the methods, `console.log()` will print `undefined` because the methods themselves do not return any value; they only log a message to the console.

**Summary:**
- Use **dot notation** for simple keys.
- Use **bracket notation** for keys with special characters or symbols.
- You can **add methods** to an object even after its declaration.

