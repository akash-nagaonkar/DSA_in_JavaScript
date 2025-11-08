# 🧩 JavaScript Array Basics Questions & Solutions

This file contains fundamental array questions, their solutions, and time/space complexities — perfect for DSA foundations and interview prep.

---

## **1️⃣ Find Min and Max Numbers**

```js
let maxValue = arr[0];
let minValue = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) maxValue = arr[i];
  if (arr[i] < minValue) minValue = arr[i];
}
```

**🧠 Output:** `Max: 10, Min: 2`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **2️⃣ Sum of All Numbers in an Array**

```js
const sum = arr.reduce((acc, curr) => acc + curr, 0);
```

**🧠 Output:** `Sum: 94`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **3️⃣ Count Even and Odd Numbers (Using Loop)**

```js
let even = 0;
let odd = 0;

for (let num of arr) {
  num % 2 === 0 ? even++ : odd++;
}
```

**🧠 Output:** `Even: 8, Odd: 6`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **4️⃣ Count Even and Odd Numbers (Using reduce)**

```js
const counts = arr.reduce(
  (acc, number) => {
    number % 2 === 0 ? acc.even++ : acc.odd++;
    return acc;
  },
  { even: 0, odd: 0 }
);
```

**🧠 Output:** `Even: 8, Odd: 6`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **5️⃣ Reverse an Array (Without .reverse())**

```js
let i = 0,
  j = arr.length - 1;
while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  i++;
  j--;
}
```

**🧠 Output:** Reversed array

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **6️⃣ Find Second Largest Element**

```js
const findSecondLargest = (arr) => {
  let first = -Infinity,
    second = -Infinity;

  for (const num of arr) {
    if (num > first) [second, first] = [first, num];
    else if (num > second && num < first) second = num;
  }

  return second === -Infinity ? null : second;
};
```

**🧠 Output:** `Second Largest Number: 9`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **7️⃣ Check if Array is Sorted (Ascending)**

```js
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}
```

**🧠 Output:** `false`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(1)

---

## **8️⃣ Count Frequency of Each Element (Using reduce)**

```js
const frequency = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});
```

**🧠 Output:** `{ 2: 3, 4: 1, 5: 2, 6: 1, 7: 2, 8: 1, 9: 2, 10: 2 }`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(n)

---

## **9️⃣ Count Frequency (Using Map)**

```js
const frequencyMap = new Map();
for (let num of arr) {
  frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
}
```

**🧠 Output:** `Map(8) { 2 => 3, 4 => 1, 5 => 2, ... }`

**⏱ Time Complexity:** O(n)
**💾 Space Complexity:** O(n)

---

## **🔟 Remove Duplicates (Without Set)**

```js
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr2.includes(arr[i])) arr2.push(arr[i]);
}
```

**🧠 Output:** `[2, 4, 5, 6, 7, 9, 8, 10]`

**⏱ Time Complexity:** O(n²) _(because of includes)_
**💾 Space Complexity:** O(n)

---

### 🏁 Summary Table

|  #  | Problem                 | Approach    | Time  | Space |
| :-: | :---------------------- | :---------- | :---- | :---- |
|  1  | Find Min/Max            | Loop        | O(n)  | O(1)  |
|  2  | Sum of Array            | reduce      | O(n)  | O(1)  |
|  3  | Even/Odd Count (loop)   | for...of    | O(n)  | O(1)  |
|  4  | Even/Odd Count (reduce) | reduce      | O(n)  | O(1)  |
|  5  | Reverse Array           | Two Pointer | O(n)  | O(1)  |
|  6  | Second Largest          | Loop        | O(n)  | O(1)  |
|  7  | Check Sorted            | Loop        | O(n)  | O(1)  |
|  8  | Frequency (Object)      | reduce      | O(n)  | O(n)  |
|  9  | Frequency (Map)         | Map         | O(n)  | O(n)  |
| 10  | Remove Duplicates       | includes    | O(n²) | O(n)  |

---

📘 _We'll keep adding more problems (medium to advanced) to this file as you progress in your Array DSA mastery._
