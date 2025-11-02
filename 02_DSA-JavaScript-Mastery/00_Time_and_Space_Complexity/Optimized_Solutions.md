## 🧱 PHASE 0: Core JavaScript Foundations (Must Master Before Advanced DSA)

These are not “syntax topics” — they’re _thinking tools_. You must understand their **behavior, internal working, and time complexity**.

---

### 1. **Map, Set, WeakMap, WeakSet**

Used in 80% of optimized problems.

| Concept                   | Description                                         | Time Complexity             |
| ------------------------- | --------------------------------------------------- | --------------------------- |
| **Map()**                 | Stores key-value pairs (keys can be any type)       | O(1) avg for get/set        |
| **Set()**                 | Stores unique values                                | O(1) avg for add/has/delete |
| **WeakMap() / WeakSet()** | Keys must be objects (garbage-collected references) | —                           |

**👉 Why they matter:**

- For frequency counting (`Map`)
- Removing duplicates (`Set`)
- Tracking seen elements efficiently (O(1) lookups)
- Detecting cycles or visited nodes in Graphs (`Set`)

**🧠 Master how to:**

- `.set()`, `.get()`, `.has()`, `.delete()`
- Iterate using `.entries()` / `.keys()` / `.values()`
- Convert `Map → Object` and `Set → Array`

---

### 2. **Object fundamentals**

Objects behave like hashmaps — but keys are only strings/symbols.
You must know:

- `Object.keys()`, `Object.values()`, `Object.entries()`
- `for...in` vs `for...of`
- Destructuring and shorthand syntax

---

### 3. **Array Higher-Order Methods**

Master these deeply, as most interview logic stems from chaining and transforming data.

| Method                 | Purpose                                  | Internal Concept         |
| ---------------------- | ---------------------------------------- | ------------------------ |
| `map()`                | transform each element → new array       | 1-to-1 mapping           |
| `filter()`             | filter based on condition → new array    | selective inclusion      |
| `reduce()`             | accumulate / transform → single output   | accumulator pattern      |
| `find()`               | returns first element matching condition | search pattern           |
| `some()` / `every()`   | boolean checkers                         | validation logic         |
| `forEach()`            | iterate (no return)                      | side effects             |
| `sort()`               | sorting (custom comparator)              | comparison logic mastery |
| `flat()` / `flatMap()` | flatten arrays                           | nested manipulation      |

---

### 4. **Spread Operator / Rest Parameter / Destructuring**

- `[...arr]`, `{...obj}` cloning (avoiding mutation)
- Combining arrays/objects immutably
- Rest parameters for flexible arguments
- Used heavily in both frontend architecture _and_ DSA questions

---

### 5. **Loops & Iteration**

- Classic `for`, `while`, `for...of` (for arrays, sets, maps)
- Difference between `for...in` (objects) and `for...of` (iterables)
- Break and continue properly to control flow
- Know when to avoid nested loops (O(n²)) and how to replace them with maps/sets

---

### 6. **Sorting & Custom Comparators**

- Understand **lexicographic sorting** vs **numeric sorting**
- Learn how `.sort((a,b) => a - b)` actually works
- Sorting objects/arrays based on keys
- Sorting frequency counts and tuples (`[key, value]` pairs)

---

### 7. **Time and Space Complexity**

You can’t optimize what you don’t measure.
Be fluent in:

- O(1), O(log n), O(n), O(n log n), O(n²)
- Space complexity (extra memory usage)
- How different JS methods behave internally (`includes`, `indexOf`, `reduce`, etc.)

---

### 8. **Primitive vs Reference Types**

Understanding mutability and how arrays/objects are passed by reference is **critical** for debugging and optimization.

---

### 9. **Recursion Basics**

You’ll need this for:

- Divide & Conquer (binary search, merge sort)
- Backtracking (subsets, combinations)
- Tree and Graph traversals

---

### 10. **ES6+ Syntax Fluency**

Not for showing off — for cleaner, efficient thinking:

- Arrow functions
- Default parameters
- Template literals
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- Modules (`import/export`)

---

## 🚀 Summary — The “Optimization Toolkit”

Before you go deeper into DSA, **master these JS weapons**:

| Category            | Core Tools                                  |
| ------------------- | ------------------------------------------- |
| Data Storage        | `Map`, `Set`, `Object`                      |
| Transformation      | `map`, `filter`, `reduce`                   |
| Iteration           | `for`, `for...of`, `forEach`                |
| Search & Sort       | `find`, `includes`, `sort`, `indexOf`       |
| Logic Control       | `break`, `continue`, ternary, destructuring |
| Performance Mindset | Time & Space complexity intuition           |

---
