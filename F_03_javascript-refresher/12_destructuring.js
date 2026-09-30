// Object destructuring
const person = { name: "Perfecto", age: 19, course: "BSIS" };
const { name, age } = person;
console.log(name, age); // "Perfecto 19"

// Array destructuring
const hobbies = ["sleeping", "coding", "gaming"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); // "sleeping coding"

// Destructuring in the parameter list
function printName({ name, course }) {
  console.log(`${name} -- ${course}`);
}
printName(person); // "Perfecto -- BSIS"
