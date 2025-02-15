## Slice vs Splice

### Slice
- `slice()` returns a **shallow copy** of a portion of an array into a new array.
- It **does not modify** the original array.
- Syntax: `array.slice(start, end)`
- The `end` index is **not included** in the returned array.

### Splice
- `splice()` **modifies** the original array by adding or removing elements.
- Syntax: `array.splice(start, deleteCount, item1, item2, ...)`
- It **returns the removed elements** as a new array.

---

## Push vs Concat

### Push
- `push()` adds one or more elements to the **end of an array**.
- **Modifies** the original array.
- Returns the **new length** of the array.
- If you push an **array**, it is treated as a **single element** (nested array), and **braces will be present**.

Example:
```javascript
let arr1 = [1, 2, 3];
arr1.push([4, 5]);
console.log(arr1); // [1, 2, 3, [4, 5]]
```

### Concat
- `concat()` **merges arrays** or values to create a **new array**.
- **Does not modify** the original array.
- Treats the second array’s elements **individually** (no braces).

Example:
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let result = arr1.concat(arr2);
console.log(result); // [1, 2, 3, 4, 5]
```

---

## Spread Operator `...`
- **Alternative to `concat()`** and more flexible.
- Used to **spread elements of an array** into another array.
- **Creates a new array**.
- Preferred over `concat()` because it is more concise and can **merge multiple arrays at once**.

Example:
```javascript
let arr1 = [1, 2, 3];
let arr2 = [4, 5];
let result = [...arr1, ...arr2];
console.log(result); // [1, 2, 3, 4, 5]
```

### How to Remember Spread
- Think of a glass falling and **spreading everywhere**.
- The spread operator `...` **spreads elements individually**.

### Key Benefit of Spread Operator
- You can **merge multiple arrays** in one go:

Example:
```javascript
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let result = [...arr1, ...arr2, ...arr3];
console.log(result); // [1, 2, 3, 4, 5, 6]
```

Using `push()` or `concat()` would require **multiple steps** for merging multiple arrays.

