const arr = [2, 2, 2, 4, 5, 6, 7, 9, 7, 8, 5, 10, 9, 10];

// Find min and max numbers
let maxValue = arr[0];
let minValue = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > maxValue) {
    maxValue = arr[i];
  }

  if (arr[i] < minValue) {
    minValue = arr[i];
  }
}

console.log(`Max: ${maxValue}, Min: ${minValue}`);

// Sum of all numbers in an array
const sum = arr.reduce((acc, curr) => acc + curr, 0);

console.log(sum);

// Count Even and Odd Numbers
let even = 0;
let odd = 0;

for (let num of arr) {
  num % 2 === 0 ? even++ : odd++;
}

console.log(`Even: ${even}, Odd: ${odd}`);

// By using a reduce method
const counts = arr.reduce(
  (acc, number) => {
    number % 2 === 0 ? acc.even++ : acc.odd++;
    return acc;
  },
  { even: 0, odd: 0 }
);

console.log(`Even: ${counts.even}, Odd: ${counts.odd}`);

// Reverse an Array (without .reverse())
let i = 0,
  j = arr.length - 1;

while (i < j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]; // swap using destructuring
  i++;
  j--;
}

console.log(arr);

// Find Second Largest Element
const findSecondLargest = (arr) => {
  let first = -Infinity,
    second = -Infinity;

  for (const num of arr) {
    if (num > first) [second, first] = [first, num];
    else if (num > second && num < first) second = num;
  }

  return second === -Infinity ? null : second;
};

console.log(`Second Largest Number: ${findSecondLargest(arr)}`);

// Check if Array is Sorted (Ascending)
let isSorted = true;

for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    isSorted = false;
    break;
  }
}

console.log(isSorted);

// Count Frequency of Each Element
// By using reduce
const frequecyOfNumbers = arr.reduce((acc, num) => {
  acc[num] = (acc[num] || 0) + 1;
  return acc;
}, {});

// By using Map()
const frequencyMap = new Map();

for (let num of arr) {
  if (frequencyMap.has(num)) {
    frequencyMap.set(num, frequencyMap.get(num) + 1);
  } else {
    frequencyMap.set(num, 1);
  }
}

console.log(frequencyMap);

// Even optimised version by using Map()
const freqMap = arr.reduce(
  (map, num) => map.set(num, (map.get(num) || 0) + 1),
  new Map()
);

console.log(freqMap);

// Remove Duplicates (Without Set)
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
  if (!arr2.includes(arr[i])) {
    arr2.push(arr[i]);
  }
}

console.log(arr2);
