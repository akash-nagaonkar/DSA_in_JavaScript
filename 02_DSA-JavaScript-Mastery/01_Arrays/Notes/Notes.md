# 🧮 JavaScript Arrays — Complete Notes

This document covers all essential array concepts and methods to master arrays for DSA and interview preparation.

---

## 📘 Array Overview

---

## 📘 Array Basics

| Concept          | Description                         | Example                                                        |
| ---------------- | ----------------------------------- | -------------------------------------------------------------- |
| **Creation**     | Using literal or constructor syntax | `const arr = [1, 2, 3];`<br>`const arr2 = new Array(3, 4, 5);` |
| **Access**       | Via index (0-based)                 | `arr[0] // 1`                                                  |
| **Length**       | Total elements                      | `arr.length // 3`                                              |
| **Update**       | Direct index assignment             | `arr[1] = 10;`                                                 |
| **Add at end**   | `push()`                            | `arr.push(4);`                                                 |
| **Remove last**  | `pop()`                             | `arr.pop();`                                                   |
| **Add at start** | `unshift()`                         | `arr.unshift(0);`                                              |
| **Remove first** | `shift()`                           | `arr.shift();`                                                 |

---

## 🧩 Common Array Operations

| Method                                 | What it Does                       | Returns          | Example                 |
| -------------------------------------- | ---------------------------------- | ---------------- | ----------------------- |
| `push()`                               | Adds element(s) at the end         | New length       | `arr.push(5)`           |
| `pop()`                                | Removes last element               | Removed element  | `arr.pop()`             |
| `shift()`                              | Removes first element              | Removed element  | `arr.shift()`           |
| `unshift()`                            | Adds element(s) at start           | New length       | `arr.unshift(0)`        |
| `concat()`                             | Combines arrays                    | New array        | `arr.concat(arr2)`      |
| `slice(start, end)`                    | Returns a portion (non-mutating)   | New array        | `arr.slice(1, 3)`       |
| `splice(start, deleteCount, ...items)` | Add/remove elements (mutating)     | Removed elements | `arr.splice(1, 1, 'x')` |
| `indexOf()`                            | Finds index of element             | Index / -1       | `arr.indexOf(3)`        |
| `includes()`                           | Checks existence                   | Boolean          | `arr.includes(5)`       |
| `reverse()`                            | Reverses in-place                  | Modified array   | `arr.reverse()`         |
| `join()`                               | Converts to string                 | String           | `arr.join('-')`         |
| `flat(depth)`                          | Flattens nested arrays             | New array        | `arr.flat(2)`           |
| `at(index)`                            | Access with negative index support | Element          | `arr.at(-1)`            |

---

## ⚙️ Iteration & Transformation Methods

### 1️⃣ `forEach()`

Executes a callback for each element (no return value).

````js
arr.forEach((el, idx) => console.log(idx, el));


Arrays are **ordered collections** that store multiple values in a single variable. Each value has a numeric **index** starting from `0`.

Example:

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // "apple"
````

### Key Properties:

| Property   | Description                         |
| ---------- | ----------------------------------- |
| `length`   | Number of elements in the array     |
| `index`    | Starts from 0                       |
| `mutable`  | You can modify elements             |
| `iterable` | Can be looped using for/forEach/map |

---

## ⚙️ Common Array Methods

### 1. **push() / pop()**

Adds or removes elements from the **end** of an array.

```js
const arr = [1, 2, 3];
arr.push(4); // [1, 2, 3, 4]
arr.pop(); // [1, 2, 3]
```

### 2. **unshift() / shift()**

Adds or removes elements from the **beginning** of an array.

```js
const arr = [2, 3];
arr.unshift(1); // [1, 2, 3]
arr.shift(); // [2, 3]
```

### 3. **map()** — Transform Each Element

Creates a new array by applying a function to each element.

```js
const nums = [1, 2, 3];
const squared = nums.map((n) => n * n);
console.log(squared); // [1, 4, 9]
```

🧠 **Key idea:** The length of the new array = original array. Does **not mutate**.

---

### 4. **filter()** — Select Specific Elements

Returns a new array with elements that satisfy a condition.

```js
const nums = [1, 2, 3, 4, 5];
const even = nums.filter((n) => n % 2 === 0);
console.log(even); // [2, 4]
```

🧠 **Use case:** Extract subsets based on a condition.

---

### 5. **reduce()** — Combine All Elements into One Value

Executes a reducer function on each element, resulting in a single output value.

Syntax:

```js
arr.reduce((accumulator, currentValue) => { ... }, initialValue);
```

Example:

```js
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
```

🧩 **How it works internally:**

- Starts with `acc = 0`
- Iterates: (0+1) → (1+2) → (3+3) → (6+4)
- Returns final result: `10`

💡 **Real-world use:**

```js
const users = [
  { name: "Alice", team: "A" },
  { name: "Bob", team: "B" },
  { name: "Eve", team: "A" },
];

const grouped = users.reduce((acc, user) => {
  const key = user.team;
  if (!acc[key]) acc[key] = [];
  acc[key].push(user.name);
  return acc;
}, {});

console.log(grouped);
// { A: ["Alice", "Eve"], B: ["Bob"] }
```

🧠 Here, `acc` acts as a **collector**, accumulating results as you iterate.

---

### 6. **find() / findIndex()**

Finds the first element (or its index) that matches a condition.

```js
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(users.find((u) => u.id === 2)); // {id:2}
console.log(users.findIndex((u) => u.id === 2)); // 1
```

---

### 7. **includes() / indexOf()**

Checks whether a value exists in an array.

```js
const arr = ["a", "b", "c"];
arr.includes("b"); // true
arr.indexOf("c"); // 2
```

---

### 8. **concat() / spread syntax**

Used to merge arrays.

```js
const a = [1, 2];
const b = [3, 4];
console.log(a.concat(b)); // [1, 2, 3, 4]
console.log([...a, ...b]); // [1, 2, 3, 4]
```

---

### 9. **slice() / splice()**

- `slice()` → Extracts part of array without changing it.
- `splice()` → Removes/replaces/adds elements (mutates).

```js
const arr = [1, 2, 3, 4, 5];
arr.slice(1, 3); // [2, 3]
arr.splice(2, 1); // removes element at index 2 → [1, 2, 4, 5]
```

---

## 🔢 Array Sorting — `sort()`

### 📘 Definition

`sort()` sorts elements **in place** and returns the same array.
If no compare function is given, elements are converted to strings and compared **lexicographically**.

#### Example (default behavior):

```js
const nums = [1, 10, 2, 21];
nums.sort();
console.log(nums); // [1, 10, 2, 21]
```

😲 Why? → Compared as strings: `["1", "10", "2", "21"]`

---

### ✅ Numeric Sort (Correct Way)

```js
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 10, 21]
```

📖 Rules:

- Return **negative** → `a` before `b`
- Return **zero** → keep same order
- Return **positive** → `a` after `b`

---

### 🔁 Descending Order

```js
nums.sort((a, b) => b - a);
```

---

### 💬 Sorting Strings

```js
const fruits = ["banana", "Apple", "cherry"];
fruits.sort(); // ["Apple", "banana", "cherry"]
```

🔠 Uppercase letters come before lowercase (Unicode order).

👉 Case-insensitive:

```js
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
```

---

### 🌍 Using `localeCompare()`

```js
const words = ["résumé", "resume", "Résumé"];
words.sort((a, b) => a.localeCompare(b));
```

Handles **accents** and **locale rules**.

---

### 🧩 Sorting Objects

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
  { name: "Eve", age: 30 },
];

users.sort((a, b) => a.age - b.age);
// [Bob, Alice, Eve]

users.sort((a, b) => a.name.localeCompare(b.name));
```

---

### ⚙️ Behavior Summary

| Property            | Description                   |
| ------------------- | ----------------------------- |
| **Mutates**         | ✅ Yes                        |
| **Returns**         | Same reference (sorted array) |
| **Stable sort**     | ✅ Since ES2019               |
| **Default compare** | String (UTF-16 code units)    |

---

### ⚡ Performance

| Metric           | Description         |
| ---------------- | ------------------- |
| Time Complexity  | O(n log n)          |
| Space Complexity | O(1)                |
| Algorithm        | Timsort (V8 Engine) |

---

### 🧠 Summary Cheat Sheet

| Task                   | Code                                                                 |
| ---------------------- | -------------------------------------------------------------------- |
| Ascending numbers      | `arr.sort((a, b) => a - b)`                                          |
| Descending numbers     | `arr.sort((a, b) => b - a)`                                          |
| Alphabetical strings   | `arr.sort()`                                                         |
| Case-insensitive       | `arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))` |
| Objects by numeric key | `arr.sort((a, b) => a.age - b.age)`                                  |
| Objects by string key  | `arr.sort((a, b) => a.name.localeCompare(b.name))`                   |

---

🎯 **Next Step:** Move to Searching Algorithms — Linear & Binary Search.
