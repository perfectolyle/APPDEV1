// Block scope -- let only exists inside its {}
if (true) {
  let insideBlock = "only visible here";
  console.log(insideBlock); // works fine
}

try {
  console.log(insideBlock); // ReferenceError
} catch (error) {
  console.log("insideBlock is not defined out here");
}

// Closure -- each counter keeps its own private count alive
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
}

const coffeeCounter = createCounter();
const napCounter = createCounter();

console.log("Coffee:", coffeeCounter()); // 1
console.log("Coffee:", coffeeCounter()); // 2
console.log("Nap:", napCounter());       // 1 -- independent of coffeeCounter
