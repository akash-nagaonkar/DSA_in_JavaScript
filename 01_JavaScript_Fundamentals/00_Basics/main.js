// Type Coercion
let num = 5; // number
let str = "10"; // string

let result = num + str; // "510" (number is coerced to string)
console.log(result); // Output: "510"

// Type Casting
let num2 = 5; // number
let str2 = "10"; // string
let castedNum = Number(str2); // Explicitly convert string to number
let sum = num2 + castedNum;
console.log(sum); // Output: 15

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
let rupees = 4823;

let fiveHundred = 0;
let twoHundred = 0;
let oneHundred = 0;
let ten = 0;

if (rupees >= 500) {
  fiveHundred = Math.floor(rupees / 500);
  rupees = rupees % 500;
}

if (rupees >= 200) {
  twoHundred = Math.floor(rupees / 200);
  rupees = rupees % 200;
}

if (rupees >= 100) {
  oneHundred = Math.floor(rupees / 100);
  rupees = rupees % 100;
}

ten = Math.floor(rupees / 10);
rupees = rupees / 10;

console.log(
  `You have ${fiveHundred} five hundreds, ${twoHundred} two hundreds, ${oneHundred} one hundreds and ${ten} ten notes`
);
