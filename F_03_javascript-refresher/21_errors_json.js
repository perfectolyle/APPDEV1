// try, catch & throw
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(24, 3)); // 8
  console.log(divide(8, 0));  // throws -- jumps to catch
} catch (error) {
  console.log("Something went wrong:", error.message);
}

// JSON.stringify & JSON.parse
const user = { name: "Perfecto", age: 19, isStudent: true, course: "BSIS" };

const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Perfecto","age":19,...}'

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.course); // "BSIS"
console.log(typeof jsonString, typeof parsedUser); // string object
