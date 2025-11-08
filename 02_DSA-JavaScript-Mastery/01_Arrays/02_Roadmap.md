## 🧠 GOAL

To master every core **array pattern** (two-pointer, sliding window, hashing, prefix-sum, Kadane, rotation, monotonic stack, etc.)
Each pattern has 5–6 handpicked problems from **LeetCode**, **interview archives**, and **FAANG real tests** — progressing from **Easy → Medium → Hard**.

---

## ⚡ STRUCTURE

Each pattern =

- 🎯 Concept summary
- 🧩 Approach / Template
- 🧠 Problems (with short hint per one)

---

# 🧮 ARRAY MASTER LIST (Pattern-Wise — 50 Problems)

---

## **1️⃣ Two Pointer Pattern (10 problems)**

📘 **When:** Sorted arrays, pairs/triplets, partitions.
📗 **Approach:** Use `left`, `right` pointers; shrink/expand based on condition.

| #   | Problem                                   | Approach / Hint                                         |
| --- | ----------------------------------------- | ------------------------------------------------------- |
| 1   | Two Sum II (LeetCode #167)                | Sorted array → `l=0, r=n-1`, move pointers based on sum |
| 2   | Remove Duplicates from Sorted Array (#26) | `slow-fast` pointer; overwrite duplicates               |
| 3   | Move Zeroes (#283)                        | Compact non-zero using `slow-fast` pointer              |
| 4   | Sort Colors (#75)                         | Dutch national flag (3 pointers)                        |
| 5   | Container With Most Water (#11)           | Max area using left/right pointer                       |
| 6   | 3Sum (#15)                                | Sort + fix + two-pointer                                |
| 7   | Squares of Sorted Array (#977)            | Two-pointer from both ends; fill result backwards       |
| 8   | Remove Element (#27)                      | Partition technique with `slow-fast`                    |
| 9   | Max Consecutive Ones (#485)               | Simple linear scan (fast pointer variant)               |
| 10  | Pair Sum in Sorted Array (Custom)         | Variation of Two Sum II with edge cases                 |

---

## **2️⃣ Sliding Window Pattern (8 problems)**

📘 **When:** Subarrays or substrings — find max/min/length with constraints.
📗 **Approach:** Expand window → check constraint → shrink window if invalid.

| #   | Problem                                               | Approach / Hint                              |
| --- | ----------------------------------------------------- | -------------------------------------------- |
| 11  | Maximum Average Subarray I (#643)                     | Fixed window sum of size `k`                 |
| 12  | Minimum Size Subarray Sum (#209)                      | Shrinking window while sum ≥ target          |
| 13  | Longest Substring Without Repeating Characters (#3)   | Use map to track char indices                |
| 14  | Longest Repeating Character Replacement (#424)        | Frequency + window shrink                    |
| 15  | Fruits Into Baskets (#904)                            | At most 2 types — sliding window + map count |
| 16  | Longest Subarray with Ones After Replacement (custom) | Similar to #424 but binary array             |
| 17  | Subarray Product Less Than K (#713)                   | Maintain product; shrink window if ≥ k       |
| 18  | Max Consecutive Ones III (#1004)                      | Track zeros flipped within window            |

---

## **3️⃣ Hashing / Frequency Map Pattern (7 problems)**

📘 **When:** Need O(1) lookups, frequency counting, complement search.
📗 **Approach:** Use `Map` or `Set` to store seen elements or prefix sums.

| #   | Problem                                      | Approach / Hint                 |
| --- | -------------------------------------------- | ------------------------------- |
| 19  | Two Sum (#1)                                 | Store complement in hash map    |
| 20  | Single Number (#136)                         | XOR trick — a ⊕ a = 0           |
| 21  | Intersection of Two Arrays II (#350)         | Frequency map + intersection    |
| 22  | Contains Duplicate (#217)                    | Use `Set()` to check duplicates |
| 23  | Majority Element (#169)                      | Boyer-Moore voting algorithm    |
| 24  | Subarray Sum Equals K (#560)                 | Prefix sum + map of counts      |
| 25  | Longest Subarray with Equal 0s and 1s (#525) | Convert 0→-1; use prefix + map  |

---

## **4️⃣ Prefix Sum / Kadane’s / Range Sum Pattern (6 problems)**

📘 **When:** Subarray sums, range queries, cumulative totals.
📗 **Approach:** Build prefix array, or use Kadane for contiguous max.

| #   | Problem                                        | Approach / Hint                       |
| --- | ---------------------------------------------- | ------------------------------------- |
| 26  | Maximum Subarray (Kadane’s, #53)               | Maintain current & global max         |
| 27  | Find Pivot Index (#724)                        | Compare prefix & suffix sums          |
| 28  | Running Sum of 1D Array (#1480)                | Simple prefix sum build-up            |
| 29  | Subarray Sum Equals K (#560)                   | Prefix sum + hashmap                  |
| 30  | Continuous Subarray Sum (#523)                 | Prefix mod k + hashmap                |
| 31  | Minimum Value to Get Positive Step Sum (#1413) | Prefix tracking of min cumulative sum |

---

## **5️⃣ Reversal / Rotation / Rearrangement Pattern (5 problems)**

📘 **When:** Need rotation, reversal, cyclic moves.
📗 **Approach:** Reverse whole array → reverse parts, or rotate cyclically.

| #   | Problem                     | Approach / Hint                            |
| --- | --------------------------- | ------------------------------------------ |
| 32  | Rotate Array (#189)         | Reverse-all, reverse-first-k, reverse-rest |
| 33  | Reverse String (#344)       | Two-pointer swap                           |
| 34  | Next Permutation (#31)      | Find pivot, swap, reverse suffix           |
| 35  | Rotate Image (Matrix) (#48) | Transpose + reverse rows                   |
| 36  | Array Partition (#561)      | Sort + sum of pairs                        |

---

## **6️⃣ Monotonic Stack Pattern (6 problems)**

📘 **When:** Need next greater/smaller element, trapped water, rectangles.
📗 **Approach:** Maintain stack (indices) in increasing/decreasing order.

| #   | Problem                              | Approach / Hint                       |
| --- | ------------------------------------ | ------------------------------------- |
| 37  | Next Greater Element I (#496)        | Stack of decreasing values            |
| 38  | Daily Temperatures (#739)            | Store indices, pop smaller temps      |
| 39  | Trapping Rain Water (#42)            | Two-pointer or stack-based            |
| 40  | Largest Rectangle in Histogram (#84) | Monotonic stack for left/right bounds |
| 41  | Sum of Subarray Minimums (#907)      | Monotonic increasing stack            |
| 42  | 132 Pattern (#456)                   | Reverse traversal + stack check       |

---

## **7️⃣ Sorting & Searching Related Patterns (4 problems)**

📘 **When:** Need order, merging, or searching.
📗 **Approach:** Binary search / merge tricks / partial sorting.

| #   | Problem                                | Approach / Hint                  |
| --- | -------------------------------------- | -------------------------------- |
| 43  | Merge Sorted Array (#88)               | Merge from back using 3 pointers |
| 44  | Missing Number (#268)                  | XOR or math sum difference       |
| 45  | Find All Duplicates in an Array (#442) | Index marking trick              |
| 46  | Search in Rotated Sorted Array (#33)   | Modified binary search           |

---

## **8️⃣ Matrix & 2D Array Pattern (4 problems)**

📘 **When:** Need traversal, rotation, or cumulative 2D logic.
📗 **Approach:** Layered traversal, prefix 2D sums, boundary loops.

| #   | Problem                      | Approach / Hint                   |
| --- | ---------------------------- | --------------------------------- |
| 47  | Spiral Matrix (#54)          | Simulate layer-by-layer traversal |
| 48  | Set Matrix Zeroes (#73)      | Use first row/col as markers      |
| 49  | Reshape the Matrix (#566)    | Simple flattening + mapping       |
| 50  | Search a 2D Matrix II (#240) | Start top-right → move left/down  |

---

# 🧩 PRACTICAL 10-DAY SPRINT PLAN

| Day    | Focus Pattern            | Problems to Solve |
| ------ | ------------------------ | ----------------- |
| Day 1  | Two Pointer (Part 1)     | #1–5              |
| Day 2  | Two Pointer (Part 2)     | #6–10             |
| Day 3  | Sliding Window (Part 1)  | #11–14            |
| Day 4  | Sliding Window (Part 2)  | #15–18            |
| Day 5  | Hashing + Frequency Map  | #19–25            |
| Day 6  | Prefix Sum + Kadane      | #26–31            |
| Day 7  | Reversal + Rotation      | #32–36            |
| Day 8  | Monotonic Stack (Part 1) | #37–39            |
| Day 9  | Monotonic Stack (Part 2) | #40–42            |
| Day 10 | Matrix + Mixed Practice  | #43–50            |

After Day 10 → do 2 mock sessions (timed, random 3 problems).

---

# 🧠 Key Pattern Recognition Tips

| Scenario / Keyword                     | Likely Pattern     |
| -------------------------------------- | ------------------ |
| “sorted array”                         | Two-pointer        |
| “maximum/minimum subarray/subsequence” | Kadane / Prefix    |
| “window / substring / subarray length” | Sliding window     |
| “frequency / count / complement”       | Hash map           |
| “next greater / span / histogram”      | Monotonic stack    |
| “rotate / reverse / rearrange”         | Reversal technique |
| “matrix boundaries”                    | Layer traversal    |
| “range queries”                        | Prefix sum         |

---

# 🧩 BONUS

Once you finish this — you’ll have internalized **~90% of array problem patterns** that appear in FAANG and Atlassian interviews.
After this sprint, the next step would be:
👉 **Phase 2:** "Advanced Mix Patterns" — combining Hash + Window + Prefix logic.
