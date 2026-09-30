// Truthy & falsy
const values = [0, "", "Perfecto", null, undefined, [], {}];

values.forEach((val) => {
  if (val) {
    console.log(val, "-> truthy");
  } else {
    console.log(val, "-> falsy");
  }
});
// [] and {} are truthy -- only false, 0, "", null, undefined and NaN are falsy

// &&, || and !
const username = "perfecto";
const password = "tulog4ever";

const canLogIn = username !== "" && password !== "";
console.log(canLogIn); // true

const isAdmin = false;
const isSubscriber = true;
const canWatch = isAdmin || isSubscriber;
console.log(canWatch); // true

console.log("" || "default");        // "default" (first truthy)
console.log(username && "Welcome!"); // "Welcome!" (both truthy)
console.log(!canLogIn);              // false
