// Equality -- always reach for ===
console.log(19 == "19");  // true
console.log(19 === "19"); // false

// Emptiness -- undefined vs null
let middleName;          // declared, never given a value
let pendingProject = null; // intentionally empty, set on purpose

console.log(middleName);     // undefined
console.log(pendingProject); // null

// this -- regular method vs arrow method
const obj = {
  name: "Perfecto",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};

obj.regularMethod(); // "Perfecto" - this is set by how the function is called (obj.regularMethod())
obj.arrowMethod();   // undefined  - arrow functions borrow "this" from where they were written, not from obj

// Reference vs copy
const subjects = ["APPDEV1", "IAS", "SAD"];

const copyByReference = subjects;
copyByReference.push("Capstone");
console.log(subjects); // ["APPDEV1", "IAS", "SAD", "Capstone"] - same array, both names see the change

const copyBySpread = [...subjects];
copyBySpread.push("PE");
console.log(subjects);     // untouched by the spread copy
console.log(copyBySpread); // its own separate array
