const score = 88;
const result = score >= 75 ? "Pass" : "Fail";
console.log(result); // "Pass"

const num = 19;
console.log(num % 2 === 0 ? "even" : "odd"); // "odd"

const user = { name: "Perfecto" }; // no address property

console.log(user.address?.city); // undefined, no crash

const age = 0;
console.log(age || 19); // 19 -- wrong! 0 is falsy, so || overrides it
console.log(age ?? 19); // 0  -- right, ?? only replaces null/undefined
