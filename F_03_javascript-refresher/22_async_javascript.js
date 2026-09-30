// Synchronous vs asynchronous -- the setTimeout logs last even though it's written first
let name = "Perfecto";
let course = "BSIS 3";
let address = "Tarlac";

setTimeout(() => {
  console.log("This message is printed after 2 seconds");
}, 2000);

console.log("Name:", name);
console.log("Course:", course);
console.log("Address:", address);

// Callback -- a function passed in to be run later
function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Perfecto", age: 19 });
  }, 1000);
}

fetchUserMock((user) => {
  console.log("Callback got user:", user);
});

// Promise + async/await
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Perfecto", course: "BSIS" }), 1000);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("async/await got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();

// Real fetch -- callback with promise
function getTodo(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => callback(null, data))
    .catch(error => callback(error, null));
}

function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error.message);
  } else {
    console.log("Callback todo:", data.title);
  }
}

getTodo(handleTodo);

// Real fetch -- promise function with .then()
function getTodoPromise() {
  return fetch("https://jsonplaceholder.typicode.com/todos/3")
    .then(response => response.json());
}

getTodoPromise()
  .then(todo => console.log("Promise todo:", todo.title))
  .catch(error => console.error("Something went wrong:", error.message));

// Real fetch -- async/await with try/catch
async function getTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  return response.json();
}

async function fetchTodo() {
  try {
    const todo = await getTodoAsync();
    console.log("async/await todo:", todo.title);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

fetchTodo();
