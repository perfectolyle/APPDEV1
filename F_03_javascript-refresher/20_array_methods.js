const classmates = [
  { name: "Juan", grade: 78 },
  { name: "Perfecto", grade: 92 },
  { name: "Maria", grade: 85 },
  { name: "Carlo", grade: 55 },
];

// .filter() -- keep only passing students
const passing = classmates.filter(student => student.grade >= 60);
console.log(passing.map(student => student.name)); // ["Juan", "Perfecto", "Maria"]

// .find() -- first match (or undefined)
const me = classmates.find(student => student.name === "Perfecto");
console.log(me); // { name: "Perfecto", grade: 92 }

// .some() / .every() -- yes/no about the whole array
console.log(classmates.some(student => student.grade < 60));   // true
console.log(classmates.every(student => student.grade >= 60)); // false

// .sort() -- copy first so the original order is kept
const ranked = [...classmates].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(student => student.name)); // ["Perfecto", "Maria", "Juan", "Carlo"]
