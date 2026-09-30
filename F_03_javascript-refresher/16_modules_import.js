import greet from "./15_modules_export.js";       // default export -- no curly braces
import { userInfo } from "./15_modules_export.js"; // named export -- curly braces, exact name

console.log(greet());
console.log(`User: ${userInfo.name}, Age: ${userInfo.age}, Course: ${userInfo.course}`);
