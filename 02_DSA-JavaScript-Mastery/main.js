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
// const k = 2;

// const reverseLeft = (i, j) => {
//   while (i < j) {
//     const temp = arr[i];
//     [arr[j], arr[i]] = [temp, arr[j]];
//     i++;
//     j--;
//   }
// };
// reverseLeft(0, k - 1);
// reverseLeft(k, arr.length - 1);
// reverseLeft(0, arr.length - 1);

// console.log(arr);

/** Right rotation by K element: Most Optimized - Reverse Block Swap AL **/
// const reverseRight = (i, j) => {
//   while (i < j) {
//     const temp = arr[i];
//     [arr[j], arr[i]] = [temp, arr[j]];
//     i++;
//     j--;
//   }
// };
// reverseRight(0, arr.length - 1);
// reverseRight(0, k - 1);
// reverseRight(k, arr.length - 1);

// console.log(arr);

/** Remove Dublicates from an sorted array and return array length**/
// const removeDuplicates = function (nums) {
//   let j = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[j] = nums[i + 1];
//       j++;
//     }
//   }

//   return j;
// };

// console.log(removeDuplicates(arr));

/** Merge Two Sorted Array **/
// const arr1 = [1, 3, 5, 6, 9];
// const arr2 = [4, 8, 10, 12];
// const mergerdArray = new Array(arr1.length + arr2.length);
// let i = 0;
// j = 0;
// k = 0;

// while (i < arr1.length && j < arr2.length) {
//   arr1[i] < arr2[j]
//     ? (mergerdArray[k++] = arr1[i++])
//     : (mergerdArray[k++] = arr2[j++]);
// }

// while (j < arr2.length) {
//   mergerdArray[k++] = arr2[j++];
// }

// while (i < arr1.length) {
//   mergerdArray[k++] = arr1[i++];
// }

// console.log(mergerdArray);

/**
 * Merge nums2 into nums1 in-place.
 * nums1 has length m + n; first m entries are valid, last n are zeros (placeholders).
 * Time: O(m + n), Space: O(1)
 */
// const arr3 = [1, 3, 5, 6, 9];
// const arr4 = [4, 8, 10, 12];
// let m = arr3.length;
// let n = arr4.length;

// merge(arr3, m, arr4, n);
// console.log(arr3);

// function merge(nums1, m, nums2, n) {
//   let i = m - 1; // last valid element in nums1
//   let j = n - 1; // last element in nums2
//   let k = m + n - 1; // last index in nums1 (target position)

//   // Fill nums1 from the back
//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }

//   // If nums2 still has elements, copy them (nums1's remaining elements already in place)
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
// }

/* Trapping Water */
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const trappingWater = (height) => {
  let n = height.length;
  if (n <= 2) return 0;

  let left = 0;
  let right = n - 1;
  let leftMax = 0;
  let rightMax = 0;
  let ans = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        ans += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        ans += rightMax - height[right];
      }
      right--;
    }
  }

  return ans;
};

console.log(trappingWater(height));
