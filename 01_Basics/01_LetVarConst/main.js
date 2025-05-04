/* 1. Scope (Global, Function, Block) */

function testScope() {
  if (true) {
    var a = 10; // Function-scoped
    let b = 20; // Block-scoped
    const c = 30; // Block-scoped
  }
  console.log(a); // ✅ Works (Function Scope)
  console.log(b); // ❌ ReferenceError: b is not defined
  console.log(c); // ❌ ReferenceError: c is not defined
}

testScope();

/* 2. Hoisting (Declaration vs. Initialization) */

console.log(x); // ✅ undefined (hoisted)
var x = 5;
console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 10;
console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 15;

/* 3. Re-declaration & Reassignment */

var a = 10;
var a = 20; // ✅ Allowed
let b = 30;
// let b = 40; // ❌ SyntaxError: 'b' has already been declared
b = 40; // ✅ Allowed
const c = 50;
// c = 60; // ❌ TypeError: Assignment to constant variable.

/* 4. `const` with Objects & Arrays */

const obj = { name: "Shub" };
obj.name = "Google Dev"; // ✅ Allowed (modifying properties)
// obj = {}; // ❌ TypeError: Assignment to constant variable.
const arr = [1, 2, 3];
arr.push(4); // ✅ Allowed (modifying content)
// arr = [5, 6]; // ❌ TypeError: Assignment to constant variable.