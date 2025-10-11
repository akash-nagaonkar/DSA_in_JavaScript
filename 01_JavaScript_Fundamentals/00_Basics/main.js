// Type Coercion
let num = 5; // number
let str = "10"; // string

let result = num + str; // "510" (number is coerced to string)
// console.log(result); // Output: "510"

// Type Casting
let num2 = 5; // number
let str2 = "10"; // string
let castedNum = Number(str2); // Explicitly convert string to number
let sum = num2 + castedNum;
// console.log(sum); // Output: 15

// Calculate Electricity Bill
// let unit = Number(prompt("Enter the unit"));

// let amount = 0;

// if (unit > 400) {
//   amount = (unit - 400) * 13;
//   unit = 400;
// }

// if (unit > 200 && unit <= 400) {
//   amount += (unit - 200) * 8;
//   unit = 200;
// }

// if (unit > 100 && unit <= 200) {
//   amount += (unit - 100) * 6;
//   unit = 100;
// }

// amount += unit * 4;

// console.log(amount);

// Calculate number of notes
// let rupees = 4823;

// let fiveHundred = 0;
// let twoHundred = 0;
// let oneHundred = 0;
// let ten = 0;

// if (rupees >= 500) {
//   fiveHundred = Math.floor(rupees / 500);
//   rupees = rupees % 500;
// }

// if (rupees >= 200) {
//   twoHundred = Math.floor(rupees / 200);
//   rupees = rupees % 200;
// }

// if (rupees >= 100) {
//   oneHundred = Math.floor(rupees / 100);
//   rupees = rupees % 100;
// }

// ten = Math.floor(rupees / 10);
// rupees = rupees / 10;

// console.log(
//   `You have ${fiveHundred} five hundreds, ${twoHundred} two hundreds, ${oneHundred} one hundreds and ${ten} ten notes`
// );

// Find a factors of the a number
// const input = prompt("Enter a positive number:");

// if (!input) {
//   console.log("Cancelled!");
// } else {
//   const n = Number(input);
//   if (isNaN(n)) {
//     console.log("Invalid number");
//   } else if (n <= 0) {
//     console.log("Number must be greater than zero");
//   } else {
//     console.log(`Divisors of ${n}:`);
//     for (let i = 1; i <= n / 2; i++) {
//       if (n % i === 0) console.log(i);
//     }
//     console.log(n);
//   }
// }

// Even shorter vesion
// const n = Number(prompt("Enter a positive number:"));
// if (!n) console.log("Cancelled or invalid!");
// else if (n <= 0) console.log("Enter number > 0");
// else for (let i = 1; i <= n / 2; i++) n % i === 0 && console.log(i);
// console.log(n);

// Check if a given number is prime or not
// const n = Number(prompt("Enter a positive number:"));
// if (!n) console.log("Cancelled or invalid");
// else if (n <= 0) console.log("Enter a number which is greater than 0");
// else {
//   let prime = true;
//   for (let i = 2; i <= Math.floor(n / 2); i++) {
//     if (n % i === 0) {
//       prime = false;
//       break;
//     }
//   }
//   console.log(
//     prime ? "A given number is prime!" : "A given number is not prime!"
//   );
// }

// Check if a given number is prime or not with optimised solution
// const n = Number(prompt("Enter a positive number:"));

// const isPrime = (n) => {
//   if (n <= 0) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// if (!n) console.log("Cancelled or invalid");
// else if (n <= 0) console.log("Enter a number which is greater than 0");
// else {
//   const prime = isPrime(n);
//   console.log(
//     prime ? "A given number is prime!" : "A given number is not prime!"
//   );
// }

// Sum of a given number
// const n = Number(prompt("Enter a positive number:"));

// const sumOfNumber = (n) => {
//   let sum = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     sum += rem;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };

// if (!n) console.log("Cancelled or invalid");
// else if (n <= 0) console.log("Enter a number which is greater than 0");
// else {
//   const sum = sumOfNumber(n);
//   console.log(`The sum of the given number is ${sum}`);
// }

// Reverse a given number
// const n = Number(prompt("Enter a positive number:"));

// const sumOfNumber = (n) => {
//   let rev = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   return rev;
// };

// if (!n) console.log("Cancelled or invalid");
// else if (n <= 0) console.log("Enter a number which is greater than 0");
// else {
//   const reverseValue = sumOfNumber(n);
//   console.log(`The reverse value of the give number is ${reverseValue}`);
// }

// Find if given number is Strong or not (Strong number is a number whose sum of factorial of digits is equal to the number itself. e.g. 145 = 1! + 4! + 5! = 145)
// const n = Number(prompt("Enter a positive number:"));


// const sumOfNumber = (n) => {
//   let sum = 0;
//   while (n > 0) {
//     let rem = n % 10;
//     let fact = 1;
//     for (let i = 1; i <= rem; i++) {
//       fact *= i;
//     }
//     sum += fact;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };

// if (!n) console.log("Cancelled or invalid");
// else if (n <= 0) console.log("Enter a number which is greater than 0");
// else {
//   let copyNumber = n;
//   const number = sumOfNumber(n);
//   console.log(
//     number === copyNumber
//       ? "A given number is strong"
//       : "A given number is not striong"
//   );
// }

const prompt = require("prompt-sync")();

const a = prompt("Enter a number ")
console.log(a);