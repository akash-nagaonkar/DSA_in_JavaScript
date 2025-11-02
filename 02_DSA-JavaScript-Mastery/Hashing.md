## 🧭 HASHING MASTERY ROADMAP

**Goal:** Build the instinct to solve any array/string problem in _O(n)_ time using _Map, Set, and Hashing logic._

---

### **PHASE 1 — Core Foundations (Day 1–3)**

🎯 **Goal:** Understand Hashing conceptually and technically.

#### 🔹 Step 1: Understand Hashing & Key-Value Concept

- What is Hashing, Hash Table, Hash Map, and why O(1)
- How JS internally stores data in `Map`, `Object`, and `Set`
- Difference between:

  - `Object` vs `Map`
  - `Array.includes()` vs `Set.has()`

🧠 _Example:_

```js
const map = new Map();
map.set("name", "Akash");
console.log(map.get("name")); // 'Akash'
```

---

### **PHASE 2 — Beginner Hashing Problems (Day 4–7)**

🎯 **Goal:** Master frequency-based and lookup-based logic.

#### 🔹 Level 1 Problems

1. **Count frequency of each element**
2. **Find first non-repeating element**
3. **Remove duplicates using Set**
4. **Check if two arrays are equal (using frequency)**
5. **Intersection of two arrays**

#### 🔹 Level 2 Problems

6. **Majority Element** (use Map + Boyer–Moore optimization later)
7. **Find element appearing once when others appear twice**
8. **Find all elements occurring more than n/3 times**
9. **Two Sum Problem (Classic)**
10. **Subarray Sum Equals K**

---

### **PHASE 3 — Intermediate Patterns (Day 8–14)**

🎯 **Goal:** Combine hashing with array/string manipulation.

#### 🔹 Key Patterns:

- Frequency + Condition logic
- Prefix Sum + Map
- String Character Frequency
- Using HashSet for uniqueness

#### 🧩 Problems:

1. **Group Anagrams**
2. **Check for Anagram**
3. **Longest Substring Without Repeating Characters** (Set)
4. **Find Duplicate Number**
5. **Find Missing Number**

---

### **PHASE 4 — Advanced Hashing Combos (Day 15–25)**

🎯 **Goal:** Use Hashing with Sliding Window, Prefix Sum, and Math logic.

#### 🔹 Problems:

1. **Subarray with Given XOR / Sum**
2. **Count Distinct Elements in Window (size k)**
3. **Longest Consecutive Sequence**
4. **Zero Sum Subarray Exists or Not**
5. **Count Pairs with Given Sum/Difference**

---

### **PHASE 5 — Optimization & Space Mastery (Day 26–30)**

🎯 **Goal:** Write clean, O(1)-space optimized solutions.

- Learn **Boyer-Moore Majority Voting** (O(1) space)
- Convert frequency-based logic → math-based pattern
- Identify when to use Map, Set, or variable swap logic

🧠 _Example:_

```js
// Boyer-Moore Majority Element
let count = 0,
  candidate = null;
for (let num of nums) {
  if (count === 0) candidate = num;
  count += num === candidate ? 1 : -1;
}
console.log(candidate);
```

---

### **PHASE 6 — Real Interview Simulation (Ongoing)**

🎯 **Goal:** Train your thinking, not just syntax.

- Solve 1 hashing problem daily → Explain logic aloud
- Practice on: **LeetCode Easy/Medium Hash Table** section
- Track with these tags:

  - `Hash Table`
  - `Array`
  - `Sliding Window`
  - `Prefix Sum`

---

### 🧩 Tools & Techniques to Master Alongside

| Concept                          | Description                  |
| -------------------------------- | ---------------------------- |
| `Map()`                          | Hashing with key-value pairs |
| `Set()`                          | Unique element storage       |
| `Object.keys(), Object.values()` | Quick frequency traversal    |
| `for...of / for...in`            | Efficient iteration          |
| `reduce()`                       | Functional aggregation       |
| `JSON.stringify()`               | Hashing for complex keys     |
| `prefix sum + map`               | Subarray optimization        |
| `two-pointer + hash`             | Space-time tradeoff          |

---

### 💥 Outcome After 30 Days

By the end:
✅ You’ll write _optimized O(n) logic instinctively_
✅ No brute-force thinking — you’ll directly map problems to patterns
✅ Ready for **Google, Amazon, Atlassian-level** array/string interviews

---
