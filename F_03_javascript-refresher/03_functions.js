// Function declaration
function greet(name) {
  return "Magandang araw, " + name + "!";
}

// Same idea written as an arrow function
const square = (num) => {
  return num * num;
};

// A function returns one thing -- so bundle several results in an object
function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Perfecto"));
console.log(square(7));
console.log(calculator(12, 4));
