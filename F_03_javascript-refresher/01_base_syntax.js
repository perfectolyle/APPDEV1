console.log("Hello JavaScript");

// JavaScript is case-sensitive: these are two different variables
let myName = "Perfecto";
let myname = "Gardoce";

console.log(myName); // Perfecto
console.log(myname); // Gardoce

// Naming rules for identifiers
// Valid -- follows every rule
let yearLevel = 3;
let _hometown = "Tarlac";
let $allowance = 150.5;
let courseName = "BSIS"; // camelCase convention

// Invalid -- each one breaks a rule (all throw a SyntaxError)
// let 3rdYear = true;     -- can't start with a digit
// let course-name = "IS"; -- hyphens aren't allowed in a name
// let class = "IS3";      -- "class" is a reserved word

console.log(yearLevel, _hometown, $allowance, courseName);
