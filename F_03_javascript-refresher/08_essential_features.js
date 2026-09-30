// .map() -- transform (here, just log) every item
const hobbies = ["sleeping", "coding", "watching anime"];
hobbies.map(hobby => console.log(hobby));

// Destructuring -- pull values straight out of an object
const student = { name: "Perfecto", age: 19, course: "BSIS" };
const { name, age } = student;
console.log(name, age);

// Spread -- copy an array while adding to it
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5]; // [1, 2, 3, 4, 5]
console.log(newNumbers);
