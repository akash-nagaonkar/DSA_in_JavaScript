The difference between `var`, `let`, and `const` in JavaScript revolves around **scope**, **hoisting**, and **mutability**. Below is an expert-level breakdown:

---

## **1. Scope (Global, Function, Block)**

| Keyword | Scope Type | Behavior |

|----------|------------|----------|

| `var` | Function Scope | Accessible throughout the function where declared. |

| `let` | Block Scope | Accessible only within the block `{}` where declared. |

| `const` | Block Scope | Same as `let`, but cannot be reassigned. |

---

## **2. Hoisting (Declaration vs. Initialization)**

- **`var` is hoisted** with an **undefined** value.

- **`let` and `const` are hoisted** but are in a **Temporal Dead Zone (TDZ)** and **cannot be accessed before declaration**.

---

## **3. Re-declaration & Reassignment**

| Keyword | Re-declaration | Reassignment |

|----------|---------------|-------------|

| `var` | ✅ Allowed | ✅ Allowed |

| `let` | ❌ Not Allowed | ✅ Allowed |

| `const` | ❌ Not Allowed | ❌ Not Allowed |

---

## **4. `const` with Objects & Arrays**

Even though `const` does **not allow reassignment**, it **does allow modification** of objects and arrays.

---

## **Interview Questions on `var`, `let`, and `const`**

### **Basic Level**

1. What is the difference between `var`, `let`, and `const`?

2. Why is `let` preferred over `var`?

3. What happens if you access a `let` or `const` variable before its declaration?

### **Intermediate Level**

4. What is the Temporal Dead Zone (TDZ)?

5. Can you reassign an object declared with `const`? Explain with an example.

6. Why should we avoid using `var` in modern JavaScript development?

### **Advanced Level**

7. Explain how `var`, `let`, and `const` are hoisted differently in JavaScript.

8. What is the scope chain behavior when `var` is used inside nested functions?

9. Can you polyfill `let` and `const` behavior using `var`?

---

### **Best Practices**

- Always use `const` by default unless reassignment is needed.

- Use `let` only when you need to update the variable later.

- Avoid `var` in modern JavaScript (ES6+), as it leads to **bugs due to hoisting and global scope pollution**.

---

### **Final Thought**

Understanding `var`, `let`, and `const` is crucial because it affects **memory management, scope, and debugging**. Google interviewers might test how well you know these nuances, especially in **closures, hoisting, and block scope handling**.
