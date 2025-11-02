const arr = [1, 2, 3, 4, 5];

/** Left rotation by one element **/
// const first = arr[0];
// for (let i = 0; i < arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = first;
// console.log(arr);

/** Right rotation by one element **/
// const last = arr[arr.length - 1];
// for (let i = arr.length - 1; i > 0; i--) {
//   arr[i] = arr[i - 1];
// }
// arr[0] = last;
// console.log(arr);

/** Left and Right rotation by K element: Brute Force **/
// const k = 7;
// const actualRotations = k % arr.length;

// for (let j = 0; j < actualRotations; j++) {
//   const first = arr[0];
//   for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = first;
// }

// console.log(arr);

/** Left rotation by K element: Time Optimized but Space Compromised **/
// const k = 4;
// const tempArray = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   tempArray[i] = arr[(i + k) % arr.length];
// }
// console.log(tempArray);

/** Right rotation by K element: Time Optimized but Space Compromised **/
// const k = 2;
// const tempArray = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//   tempArray[(i + k) % arr.length] = arr[i];
// }
// console.log(tempArray);

/** Left rotation by K element: Most Optimized - Reverse Block Swap AL **/
const k = 2;

const reverse = (i, j) => {
  while (i < j) {
    const temp = arr[i];
    [arr[j], arr[i]] = [temp, arr[j]];
    i++;
    j--;
  }
};
reverse(0, k - 1);
reverse(k, arr.length - 1);
reverse(0, arr.length - 1);

console.log(arr);
