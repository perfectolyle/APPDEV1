// Spread an array
const quizScores = [18, 20, 15];
const newScores = [...quizScores, 19, 17];
console.log(newScores); // [ 18, 20, 15, 19, 17 ]

// Spread an object
const user = { name: "Perfecto", course: "BSIS" };
const newUser = { ...user, email: "perfecto@example.com" };
console.log(newUser); // { name: 'Perfecto', course: 'BSIS', email: 'perfecto@example.com' }
console.log(user);    // original stays the same

// Rest -- collect any number of arguments into one array
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(...newScores)); // 89
console.log(sum(1, 2, 3, 4));   // 10
