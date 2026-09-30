
### 00_script_in_html.html

I've learned that to import a JavaScript file inside an HTML document, you need to use a `<script>` tag, either inline or with `src`. I also learned the difference between a regular `<script>` tag and a `<script>` tag with `type="module"`. A module script waits for the whole page to be parsed, has its own scope, and can use `import` and `export`.

### 01_base_syntax.js

I've learned that `console.log()` is the main way to check what my code is doing similar to how the print() works on python, and that JavaScript is case-sensitive, so `myName` and `myname` are two different variables. I used my first name and last name to prove they never collide.

### 02_variables.js

I've learned how to use `typeof` to check if a value is a string, number, or boolean. The part that stood out is that `"3" == 3` is `true` but `"3" === 3` is `false`, because `==` converts the type first while `===` checks both type and value.

### 03_functions.js

I've learned three ways to use functions: a normal function declaration, an arrow function, and a function that returns an object so it can give back more than one result. I also learned the convention that function names should start with a verb, like `greet` or `calculate`.

### 04_objects.js

I've learned that an object groups related data, and a method is just a function stored inside it. Using `this` inside `introduce()` let the method read my own name and course from the same object.

### 05_arrays.js

I've learned that `push()` adds to the end of an array and `shift()` removes the first item. `for...of` made it easy to loop through each food, and `.map()` created a new array without changing the original array.

### 06_control_structures.js

I've learned that `if...else if...else` checks conditions from top to bottom, and only the first true one runs. That's why the order of the conditions matters: if `>= 70` came first, every high score would print "C". I also practiced a `for` loop when I know the count, and a `while` loop for when I'm watching a condition instead.

### 07_dom.html

I've learned that the DOM is the browser's live version of the page, and JavaScript can find an element with `getElementById()` and change it directly. I made a button that asks for a color using `prompt()` and changes the background, and a paragraph that updates itself after 2 seconds using `setTimeout()`.

### 08_essential_features.js

I've learned three features that React uses a lot: `.map()` to go through an array, destructuring to pull `name` and `age` out of an object, and the spread operator to copy an array while adding new items.

### 09_tricky_parts.js

I've learned that `undefined` means a variable was declared but never given a value, while `null` means it was set to empty on purpose. I also saw that copying an array with `=` only copies the reference, so adding something new changed my original subjects list, while the spread copy stayed separate.

### 10_let_const.js

I've learned that `let` can be reassigned, `const` cannot, and `var` should be avoided. I changed my nickname with `let` without problems, but changing my birth year with `const` would throw "Assignment to constant variable," so I left that line commented out.

### 11_arrow_functions.js

I've learned how to convert normal functions into arrow functions. When a function only returns one expression, I can skip the `{}` and the `return` keyword with an implicit return, like `n => n * n`. This will be very useful for short event handlers like `onClick` in React.

### 12_destructuring.js

I've learned how to destructure objects and arrays into their own variables, and how to destructure directly inside a function's parameters, like `printName({ name, course })`.

### 13_spread_rest.js

I've learned that spread (`...`) copies items from an array or object into a new one without changing the original, and rest (`...args`) collects any number of arguments into one array. It's interesting that the same `...` syntax does opposite jobs depending on where it's used.

### 14_classes_inheritance.js

I've learned that a class is a template for creating objects, and `extends` lets a class inherit from another class. My `Student` class inherited `sayHello()` from `Person` and added its own `study()` method. Even without its own constructor, `Student` still got `this.name` from `Person`.

### 15_modules_export.js

I've learned that a file can have only one `export default` but many named exports. I exported my `greet()` function as the default and my `userInfo` object as a named export, so other files can reuse them.

### 16_modules_import.js

I've learned that a default export is imported without curly braces, while a named export needs curly braces and must match the exact name. I imported both from `15_modules_export.js` and printed my info.

### 17_logical_operators.js

I've learned that there are only six falsy values: `false`, `0`, `""`, `null`, `undefined`, and `NaN`. I was surprised that `[]` and `{}` are truthy. I also learned that `&&` and `||` don't just return `true` or `false`; they return actual values, like `"" || "default"` returning `"default"`.

### 18_ternary_nullish.js

I've learned that a ternary puts a whole `if...else` into one line, which is useful inside JSX. Optional chaining (`?.`) lets me safely read `user.address?.city` without crashing when there's no address.

### 19_strings_numbers.js

I've learned common string methods like `trim()`, `split()`, `toUpperCase()`, `includes()`, and `slice()` by cleaning up my own messy full name. For numbers, I used `parseInt()` and `parseFloat()` to pull numbers out of strings, `toFixed(2)` to round.

### 20_array_methods.js

I've learned how `.filter()`, `.find()`, `.some()`, `.every()`, and `.sort()` work using a list of my classmates and their grades. I also learned to copy the array with spread before using `.sort()`, because `.sort()` changes the original array. 

### 21_errors_json.js

I've learned how to use `throw` to create my own error and `try/catch` to handle it without crashing the program. I also learned that `JSON.stringify()` turns an object into text, and `JSON.parse()` turns it back into an object.

### 22_async_javascript.js

I've learned the difference between synchronous and asynchronous code, the `setTimeout` message was written first but printed last. I practiced callbacks, Promises, and `async/await`, and tried a real `fetch()` from an API.

### 23_closures_scope.js

I've learned that `let` and `const` only exist inside the block where they were declared. I also learned what a closure is `createCounter()` returns a function that remembers its own `count`. My `coffeeCounter` and `napCounter` kept separate counts even though both came from the same function.
