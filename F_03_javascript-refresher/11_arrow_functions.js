// Before -- traditional functions
// function greet(name) { return "Hello, " + name; }
// function square(n) { return n * n; }
// function sayHi() { console.log("Hi!"); }

// After -- arrow functions
const greet = name => "Hello, " + name; // implicit return
const square = n => n * n;               // implicit return

const sayHi = () => {
  console.log("Hi! Time for a quick nap.");
};

console.log(greet("Perfecto"));
console.log(square(9));
sayHi();
