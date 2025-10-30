# Arrays — Complete, meticulous guide (JS + interview focus)

Great — arrays are the single most important data structure for coding interviews and real-world engineering. Mastering arrays gives you high leverage: many patterns (two pointers, sliding window, prefix sums, sorting-based techniques, etc.) are just different views on arrays.

I’ll start with a crisp definition, then walk through everything you need to _master arrays_ for FAANG-level interviews: theory, memory, operations, complexity, JavaScript specifics, patterns, pitfalls, dry-runs, common problems (by difficulty), and a practical daily plan.

---

# 1. Definition (simple + precise)

An **array** is an ordered collection of elements stored in contiguous memory locations (conceptually). Elements are accessed by integer indices starting from 0. Arrays support random access (`O(1)` read by index), iteration (`O(n)`), and (in many implementations) amortized `O(1)` append for dynamic arrays.

In JavaScript, arrays are dynamic, high-level objects that behave like dynamic arrays (backed by engine-specific implementations), and they provide many built-in methods.

---

# 2. Core properties & memory model

- **Ordered**: elements have sequence/order.
- **Indexed**: each element has an index (0..n-1).
- **Contiguous memory (concept)**: classical arrays in low-level languages store elements contiguously; JavaScript abstracts this but complexity guarantees still hold for common operations.
- **Random access**: read/write by index is O(1).
- **Resizable (dynamic arrays)**: append often amortized O(1); resizing occasionally O(n) when underlying array grows.

Memory perspective:

- If each element uses `s` bytes, `n` elements use `n*s` bytes (plus overhead).
- In dynamic arrays, resizing typically doubles capacity → amortized `append` cost O(1).

---

# 3. Basic operations, semantics, and complexities

| Operation                     |         Complexity (average) | JS notes                           |
| ----------------------------- | ---------------------------: | ---------------------------------- |
| Access `arr[i]`               |                         O(1) | Random access                      |
| Update `arr[i] = x`           |                         O(1) |                                    |
| Append `push`                 |               Amortized O(1) | `arr.push(x)`                      |
| Pop `pop`                     |                         O(1) | remove last                        |
| Insert at index (shift right) |                         O(n) | `arr.splice(i,0,x)` costs O(n)     |
| Delete at index (shift left)  |                         O(n) | `arr.splice(i,1)` costs O(n)       |
| Iterate                       |                         O(n) | `for`, `forEach`                   |
| Copy / slice                  | O(k) where k = length copied | `arr.slice()` O(n)                 |
| Search (unsorted)             |                         O(n) | linear scan                        |
| Binary search (sorted)        |                     O(log n) | needs sorted array                 |
| Sorting                       |           O(n log n) average | `arr.sort()` uses engine algorithm |
| Reverse                       |                         O(n) | `arr.reverse()`                    |
| Map / filter / reduce         |                         O(n) | higher-order functions             |

Notes:

- Insert/delete at arbitrary index is O(n) because elements must shift.
- Appending & popping from end are cheap; operations at front (`shift`, `unshift`) are O(n).
- When you use JS array methods, check whether they mutate array (e.g., `sort`, `reverse`, `splice` mutate; `map`, `filter`, `slice` return new arrays).

---

# 4. JavaScript-specific behaviors & useful methods

Important JS methods and complexities (practical):

- `arr.push(x)` — append (amortized O(1))
- `arr.pop()` — remove last (O(1))
- `arr.unshift(x)` — add at front (O(n))
- `arr.shift()` — remove front (O(n))
- `arr.splice(i, count, ...items)` — insert/delete at `i` (O(n))
- `arr.slice(start, end)` — shallow copy (O(k))
- `arr.concat(other)` — returns new array (O(n+m))
- `arr.indexOf(x)`, `arr.includes(x)` — O(n)
- `arr.find(fn)` — O(n)
- `arr.map(fn)`, `arr.filter(fn)`, `arr.reduce(fn)` — O(n)
- `arr.sort(fn)` — O(n log n) average (mutates)
- `arr.reverse()` — O(n)
- Spread operator `[...arr]` — shallow copy (O(n))
- `Array.from()` — build array from iterable (O(n))
- `arr.copyWithin()` — O(n)

Best practice: avoid `shift`/`unshift` in heavy loops; prefer operate from the end or use a deque-like data structure.

---

# 5. Patterns built on arrays (must master)

These are recurring patterns in interview questions. Understand, memorize, and practice them.

1. **Two Pointers**

   - Use when array is sorted or when you need pair/triple conditions.
   - Typical use: sum pair equals target, partitioning, removing duplicates in-place.
   - Complexity: O(n) or O(n log n) if sorting required.

2. **Sliding Window**

   - For subarray/subsequence with contiguous constraint: max sum, smallest subarray >= K, count substrings with property.
   - Two-pointer variant but window boundaries move.
   - Complexity: O(n).

3. **Prefix Sum (Cumulative Sum)**

   - Compute cumulative sums to query intervals quickly or to find subarrays with target sum using hashmap of prefix sums.
   - Complexity: O(n) for building; O(1) per query.

4. **Sorting + Two-pointers**

   - Sort then two-pointer for closest sum, 3-sum, k-sum variants.
   - Complexity: sort O(n log n) + O(n) scanning.

5. **Hashing / Frequency Counts**

   - Use object/Map/Set for frequency counting and constant-time checks.
   - Typical for anagrams, two-sum (value->index), subarray sum equals k (prefix sum + map).

6. **In-place modification / slow-fast pointer**

   - Remove duplicates, move zeros, partition array.
   - Use `i` (slow) to write valid entries while `j` (fast) iterates.

7. **Divide & Conquer**

   - For merge-sort like approaches; sometimes for specialized problems (max subarray via divide & conquer).

8. **Window + Deque (monotonic queue)**

   - For sliding window maximum (LeetCode 239) — maintain deque of candidates.
   - Complexity O(n).

9. **Binary Search on Answer**

   - Use when answer is monotonic w.r.t some parameter (e.g., capacity to ship within D days) — search over answer space.

---

# 6. Common array interview tasks & solution ideas

Short list of commonly asked problems (and ideas):

- Two Sum — hashmap (value -> index)
- Remove Duplicates from Sorted Array — two pointers (in-place)
- Best Time to Buy and Sell Stock — single pass tracking min price
- Rotate Array — reverse trick (reverse all, reverse halves), or cyclic replacements
- Contains Duplicate — use Set
- Product of Array Except Self — prefix & suffix products
- Maximum Subarray (Kadane) — dynamic programming O(n)
- Merge Intervals — sort by start, merge sequentially
- 3Sum / 4Sum — sort + two pointers
- Container With Most Water — two pointers from both ends
- Move Zeroes — slow-fast pointer
- Sliding Window Maximum — deque
- Subarray Sum Equals K — prefix sum + hashmap
- Longest Consecutive Sequence — set & scanning: O(n)
- Search in Rotated Sorted Array — modified binary search
- Find Median of Two Sorted Arrays — binary search / partition method (hard)
- Trapping Rain Water — two pointers / stacks

I’ll give you a curated problem list by difficulty later. For now, memorize the problem → pattern mapping.

---

# 7. Templates & idioms (JavaScript)

## Two pointers (example skeleton)

```js
// arr sorted or made sorted
function twoPointerPattern(arr, target) {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    const sum = arr[i] + arr[j];
    if (sum === target) return [i, j]; // found
    if (sum < target) i++;
    else j--;
  }
  return null;
}
```

## Sliding window (variable size)

```js
function minSubArrayLen(arr, target) {
  let left = 0,
    sum = 0,
    minLen = Infinity;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= arr[left++];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
```

## Prefix sum + hashmap (subarray sum equals k)

```js
function subarraySum(nums, k) {
  let count = 0,
    sum = 0;
  const map = new Map([[0, 1]]); // prefix sum freq
  for (const num of nums) {
    sum += num;
    if (map.has(sum - k)) count += map.get(sum - k);
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
```

## In-place remove (slow-fast)

```js
function removeElement(nums, val) {
  let idx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[idx++] = nums[i];
  }
  return idx; // new length
}
```

## Rotate array (reverse trick)

```js
function rotate(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

function reverse(arr, i, j) {
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}
```

---

# 8. Dry run (concrete, step-by-step example)

**Problem:** Given sorted array `arr = [1,2,3,4,6,9]`, find if there exist two numbers that sum to `10`.

Approach: two pointers.

Initial: `i=0 (1)`, `j=5 (9)` → sum = 10 => found.
Return indices `[0,5]`.

Edge case: duplicates, negatives. Two pointers correct for sorted input. If input unsorted, either sort (O(n log n)) or use hashmap (O(n) time, O(n) space).

---

# 9. Edge cases & pitfalls interviewers love to test

- Empty array, one-element array.
- Arrays with negative numbers when algorithm assumes non-negative (e.g., sliding window sum).
- Off-by-one errors in loop boundaries.
- Handling duplicates (e.g., unique subsequences).
- Mutating input vs returning new array — clarify with interviewer.
- Integer overflow (rare in JS because numbers are floats, but watch BigInt).
- Precision with floats for sum comparisons.
- Using `for...in` on arrays (bad — use `for`, `for...of`, or indexes).
- Mistaking `slice` vs `splice` (non-mutating vs mutating).
- `sort()` default sorts lexicographically — always provide comparator for numbers:

  ```js
  arr.sort((a, b) => a - b);
  ```

---

# 10. Interview-style checklist when solving array problems

1. Read problem fully, ask constraints (n size, value ranges, sorted? unique?).
2. Clarify return type: indices, values, boolean? Sorted input?
3. Brute force approach — state complexity.
4. Optimize: show pattern (hashmap, two pointers, sliding window).
5. Write clean code (edge cases handled).
6. Dry-run the solution with 2-3 test cases (including edge).
7. State final complexity (time & space).
8. If in-place required, show how to modify input safely.

---

# 11. Mastery roadmap for arrays (practice plan)

- **Day 1:** Fundamentals (definition, indexing, JS methods, complexity).
- **Day 2–4:** Two pointers (5–10 problems): two sum variants, container with most water, remove duplicates.
- **Day 5–7:** Sliding window (5–10 problems): min subarray length, max sum of subarray of size k, longest substring w/o repeating chars.
- **Day 8–10:** Prefix sum & hashmap (5–10): subarray sum equals k, equi-leaders, 4-sum variants.
- **Week 2:** Sorting-based techniques + in-place transforms (rotate, merge sorted arrays, partition).
- **Week 3:** Advanced: monotonic queue (sliding maximum), median of two arrays (hard), window with constraints.
- **Ongoing:** Mixed problems, timed mocks, explain patterns aloud.

---

# 12. Curated problem list (starter)

**Easy**

- Two Sum
- Remove Duplicates from Sorted Array
- Best Time to Buy and Sell Stock (I)
- Move Zeroes
- Intersection of Two Arrays II
- Contains Duplicate

**Medium**

- 3Sum
- Container With Most Water
- Product of Array Except Self
- Subarray Sum Equals K
- Longest Substring Without Repeating Characters
- Rotate Array (in-place)
- Merge Intervals

**Hard**

- Trapping Rain Water
- Sliding Window Maximum
- Median of Two Sorted Arrays
- Longest Consecutive Sequence (can be medium/hard depending)
- 4Sum / k-Sum generalization

(We’ll expand to 20+ for each pattern as you progress.)

---

# 13. Useful tips & micro-habits to build mastery

- When you see an array problem, always ask: _Sorted? Contiguous? Need indices or values?_ That tells you which pattern applies.
- Practice writing a small template in VSCode for each pattern (two-pointer, sliding window, prefix sum).
- Time yourself on medium/hard problems — build speed and clarity.
- When stuck, explain brute force and then incremental optimization to an imaginary interviewer.
- Maintain a `patterns.md` cheat sheet inside `01_Arrays/README.md` and add 1–2 lines summary for each solved problem.
- Revisit problems: after solving once, revisit after 7 days and 30 days (spaced repetition).

---

# 14. Example solved problem (full code + explanation)

**Problem:** Remove Duplicates from Sorted Array — in-place, return new length.

```js
/**
 * Remove duplicates in-place from sorted array nums.
 * Return new length k, and first k elements should hold unique values.
 * Time: O(n), Space: O(1)
 */
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1; // index to write next unique
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[write++] = nums[i];
    }
  }
  return write;
}

// Example
const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const k = removeDuplicates(arr);
console.log(k, arr.slice(0, k)); // 5 [0,1,2,3,4]
```

**Explanation:** Use slow (`write`) and fast (`i`) pointers. When the fast pointer finds a new value, write it at `write` and increment `write`. This is classic slow-fast pattern.

---

# 15. What to document in your repo for the Arrays folder

- `README.md` — list of patterns, complexities cheat sheet, study order
- `problems/` — `Easy/Medium/Hard` with numbered files
- `solutions/` — each file contains:

  - problem statement (brief)
  - constraints
  - approach (brute + optimized)
  - complexity analysis
  - JS code with comments
  - test cases

- `patterns.md` — small notes on when to use each pattern
- `notes.md` — mistakes you made & lessons learned

---

# 16. Quick reference: complexity cheat sheet (for arrays)

- Access by index: O(1)
- Search (unsorted): O(n)
- Insert/Delete at end: amortized O(1)
- Insert/Delete at front or middle: O(n)
- Sort: O(n log n)
- Copy: O(n)
- Space for additional array: O(n)

---

# 17. Next actions for you (immediate)

1. Create `01_Arrays/README.md` with:

   - patterns list: two pointers, sliding window, prefix sum, sorting+two-pointer, in-place modify, monotonic queue
   - complexity table

2. Add skeleton files: `Easy/01_TwoSum.js`, `Medium/01_ThreeSum.js`, `Hard/01_TrappingRainWater.js`
3. Solve first 5 problems (two pointers + sliding window) and push with detailed notes.

If you want, I’ll now:

- produce `01_Arrays/README.md` content for your repo (ready-to-paste), **and**
- drop the first **10 array problems** (easy→hard) with full JS solutions, dry runs, and edge cases.

Which one do you want next? `README.md for Arrays` and problem set? Or jump directly to problems?
