## 🧱 PREREQUISITES TO MASTER ARRAY PROBLEMS

You can think of them as **3 pillars**:

1. **Language-level foundations (JS-specific logic)**
2. **Core DSA concepts (mental models for problem-solving)**
3. **Algorithmic intuition (pattern recognition + optimization)**

---

### 🪄 **1️⃣ JavaScript Foundations You Must Master**

These are tools you'll use in _every single array question_. You should be able to recall and apply them effortlessly — no syntax hesitation.

#### 🧩 Array Essentials

- `for`, `for...of`, `forEach`, `map`, `filter`, `reduce`, `sort`, `slice`, `splice`
- Spread syntax `[...arr]`
- Destructuring swap: `[a, b] = [b, a]`
- Deep understanding of **reference vs copy**
- How **mutating methods** (`push`, `pop`, `shift`, `splice`) differ from **non-mutating** (`map`, `filter`)

✅ _Mini Practice:_

- Reverse array manually without `.reverse()`
- Flatten nested arrays
- Implement `.map()` and `.filter()` manually (for deeper intuition)

---

#### ⚙️ Hashing Tools (Maps/Sets)

- Difference between `Map()`, `Set()`, and plain `{}` objects
- Using `map.get()`, `map.set()`, `map.has()`
- Frequency counting with Map / Object
- Converting between Map ⇆ Array
  (`Array.from(map.entries())`, `[...map.keys()]`, etc.)

✅ _Mini Practice:_

- Count frequency of elements
- Check for duplicates using Set

---

#### ⚡ Bitwise Operators (for XOR-based logic)

- `^` → XOR (important for **Single Number**, **Missing Number**)
- `&`, `|`, `~`, `<<`, `>>` → not deeply required yet, but know what they mean
- Core idea:
  `a ^ a = 0`, `a ^ 0 = a`, and XOR is commutative & associative

✅ _Mini Practice:_
Simulate `2 ^ 2 ^ 1` step by step.

---

#### 🔁 Destructuring & Swapping

- `[nums[i], nums[j]] = [nums[j], nums[i]]` → clean swaps for two-pointer logic
- Reverse and rotate logic depend on it.

---

---

### 🧭 **2️⃣ Core DSA Concepts You Must Internalize**

These are **mental frameworks** behind all array problems — the difference between brute force and optimization.

#### 🧮 1. Time & Space Complexity

- Understand Big-O intuitively, not just formulaically.

  - O(1): Constant
  - O(N): Linear
  - O(N²): Nested loop (slow)
  - O(N log N): Sorting

- **Goal:** Recognize if you can improve O(N²) → O(N) by:

  - Using a HashMap (trading space for speed)
  - Using Two Pointers (removing nested loop)
  - Using Prefix Sum (precomputation)

✅ _Exercise:_
For every question, before solving, ask:
👉 “Can I solve it faster than nested loops?”

---

#### 🧠 2. Array Indexing Logic

- Master how `i`, `j`, `left`, `right`, and `mid` pointers move
- Know **why** `while (i < j)` vs `while (i <= j)` matters
- Internalize:

  - `left++`, `right--` for shrinking windows
  - `i++` only when you’ve processed or swapped elements
  - Visualize the array state after each iteration (draw small examples!)

✅ _Drill:_
Trace manually with pen and paper 3–4 two-pointer problems.

---

#### 💡 3. Prefix & Suffix Concepts

- Prefix sum → cumulative computation
- Suffix max → right-side precomputation
- Many problems (e.g. Trapping Water, Kadane’s) are based on _knowing something before and after each index_

✅ _Mini Practice:_
For array `[2,1,3,4]`, build prefix sum `[2,3,6,10]` and suffix max `[4,4,4,4]`.

---

#### 🧱 4. Space-Time Tradeoff

- Map/Set can reduce time (O(N)) at cost of extra space (O(N))
- Two-pointer can reduce space (O(1))
- Prefix array may increase memory slightly but simplify computation.

✅ _Mental Model:_
Ask before solving:

> "Can I trade space for time here?"

---

---

### 🧩 **3️⃣ Algorithmic Intuition & Pattern Recognition**

This is where you move from _solving individual problems_ → _identifying hidden similarities_ between them.

| Pattern             | When to Use                    | Core Idea                            |
| ------------------- | ------------------------------ | ------------------------------------ |
| **Two Pointer**     | Sorted array, pairs/triplets   | Compare two ends and move inward     |
| **Sliding Window**  | Subarray / substring range     | Grow and shrink window dynamically   |
| **Hash Map**        | Frequency, complement, lookup  | Store info to avoid nested loops     |
| **Prefix Sum**      | Cumulative sums, subarray sums | Store “running total”                |
| **Kadane’s**        | Max subarray sum               | Extend or restart based on sign      |
| **Monotonic Stack** | Next greater/smaller element   | Maintain increasing/decreasing order |
| **Reversal Logic**  | Rotation, rearrangement        | Divide + reverse trick               |

---

### 🧩 Bonus: Problem-Solving Framework (Follow for Every Question)

1. **Understand Input-Output:**
   Draw small examples manually.

2. **Think Brute Force First:**
   Helps you visualize relationships.

3. **Look for Pattern or Relation:**
   Sorted array → two pointers?
   Sum/average → prefix?
   Frequency → map?

4. **Optimize Step-by-Step:**
   Replace inner loop with hashing.
   Replace extra space with pointer logic.

5. **Dry Run With Example:**
   Use pen and paper, trace 2–3 iterations.

6. **Always Analyze:**
   ✅ Time complexity
   ✅ Space complexity
   ✅ Edge cases (`empty array`, `1 element`, negatives, duplicates)

---

### 💪 Mental Habits to Accelerate Mastery

- 🧭 After solving: summarize pattern in one line
  (“Ah, this is sliding window with sum condition.”)
- 🔁 Revisit 2 days later → rewrite from scratch
- 📚 Group similar patterns
  (e.g., "Max subarray", "Max average subarray" → both Kadane-based)
- 🧩 Always visualize indices movement with examples

---

## 🧠 ROADMAP TO START ARRAYS LIKE A PRO

| Phase   | Focus                     | Goal                                        |
| ------- | ------------------------- | ------------------------------------------- |
| Phase 1 | JS foundations            | Map, Set, reduce, spread, destructuring     |
| Phase 2 | Core DSA logic            | Time/space complexity, prefix/suffix logic  |
| Phase 3 | Pattern identification    | Know which approach fits which problem      |
| Phase 4 | Hands-on practice         | Solve 50 problems from easy → hard          |
| Phase 5 | Review & pattern grouping | Internalize solutions as reusable templates |
