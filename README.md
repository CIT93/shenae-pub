# Week 3 AI Prompted Notes

---

## Part 1

### Prompt
**Explain the `defer` attribute in HTML `<script>` tags and the `DOMContentLoaded` event in JavaScript.**

---

### `defer` Attribute

The `defer` attribute tells the browser to download the JavaScript file in the background while the HTML is still loading, instead of blocking the page.

A deferred script does **not** run immediately. It waits until the HTML document has been completely parsed before executing.

This ensures that all HTML elements exist before JavaScript tries to access them, preventing errors caused by scripts running too early.

---

### `DOMContentLoaded` Event

The `DOMContentLoaded` event fires when the HTML document has finished loading and parsing, but **before** images, videos, and other external resources finish loading.

JavaScript code placed inside a `DOMContentLoaded` event listener runs only after the DOM is fully available, making it safe to:

- Select elements
- Attach event listeners
- Manipulate the page structure

---

### How `defer` and `DOMContentLoaded` Work Together

When used together, `defer` and `DOMContentLoaded` create a reliable and efficient loading process.

- `defer` ensures the script loads without blocking the page
- `DOMContentLoaded` guarantees the JavaScript runs only after the DOM is ready

This combination prevents timing issues, improves performance, and ensures JavaScript interacts with elements that already exist.

---

### Common JavaScript Events

JavaScript event listeners commonly respond to user interactions such as:

- `click` — user clicks a button or element
- `submit` — user submits a form
- `input` — user types into a field
- `change` — value of an input changes
- `mouseover` / `mouseout` — user hovers over elements
- `keydown` / `keyup` — user presses or releases a key

These events represent how users interact with a web page.

---

## Part 2

### `event.preventDefault()`
```
event.preventDefault()
```
 stops the browser’s default behavior for an event.

---

### For Form Submissions

By default, submitting a form causes the browser to reload or navigate to a new page.

Calling `event.preventDefault()` prevents this automatic behavior.

This allows JavaScript to:

- Validate form input
- Display error or success messages
- Send data using JavaScript (e.g., `fetch`)
- Keep the page from refreshing

---

### Example

javascript
```
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // JavaScript handles the form instead of the browser
});
```

Safe Integer Parsing in JavaScript

When capturing user input from HTML forms, values are always returned as strings.

To safely process these as numbers and provide a fallback for empty or invalid inputs, combine parseInt() with the logical OR (||) operator.

## JavaScript Modules (Beginner Overview)

### What Is a Module?

A **module** is a JavaScript file that contains related code—such as variables, functions, or classes—that is meant to be reused or shared.

Instead of putting all your JavaScript into one large file, modules allow you to split your code into smaller, focused files.

Think of a module as a toolbox:
- Each tool has a purpose
- You only take the tools you need
- Everything stays organized

---

### Why Modules Are Useful

Modules help you:

- Organize code into logical sections
- Avoid cluttered, hard-to-read files
- Reuse code across multiple files
- Prevent variable name conflicts
- Make debugging and maintenance easier

Using modules becomes especially important as projects grow larger.

---

## The `export` Keyword

The `export` keyword makes variables, functions, or classes **available outside of a module.

Only code that is explicitly exported can be used by other files.

### Example

``` 
javascript
// form-handler.js
export function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
 ```

## Explain object literals and their importance in JS
## Object Literals in JavaScript
**Object literals** are a way to create objects using curly braces `{}` that store related data and behavior in one place.
js
```
 const user = {
  name: "Shena",
  age: 42,
  greet() {
    console.log("Hello!");
  }
};
```
### Why object literals matter
	•	They group related data together.
	•	They model real-world things like users, forms, and settings.
	•	They can store both properties and functions (methods).
	•	They keep code organized, readable, and easier to maintain.

Object literals help keep data connected to its meaning instead of scattered across variables.


## How is dot notation different than methods in JS?

Dot notation is how you access properties or methods on an object.
```
user.name      // "Shena"
user.greet     // function reference
user.greet()   // calls the function
```
- Dot notation itself does not run code—it simply accesses what’s inside the object.

### Methods

A method is a function that belongs to an object.
```
const user = {
  greet() {
    console.log("Hello!");
  }
};
```
	•	Methods perform actions.
	•	They often work with the object’s own data.
	•	They are executed using dot notation followed by parentheses.
---

```
Concept               What it is                 What it does
----------------------------------------------------------------------
Dot notation         Syntax            Accesses a property or method
Method        Function inside an object        Executes code
```

---

## Part 3

### Explain the difference between `querySelector` and `querySelectorAll`

Both methods are used to find elements in the DOM using CSS selectors, but they return different results:

* **`querySelector()`**: Returns the **first** element that matches the specified selector. If no matches are found, it returns `null`. This is ideal for selecting unique items or the first instance of a class.
* **`querySelectorAll()`**: Returns a **static NodeList** containing **all** elements that match the selector. If no matches are found, it returns an empty NodeList. This is used when you need to interact with multiple elements (like all buttons in a list).



---

### How are NodeLists and Arrays the same and how are they different?

NodeLists and Arrays look very similar, but they have key differences in how they behave in JavaScript.

**How they are the same:**
* Both are **indexed** collections (ordered starting from 0).
* Both have a **`.length`** property.
* Both can be iterated over using the **`.forEach()`** method.

**How they are different:**
* **Methods**: Arrays have built-in methods like `.map()`, `.filter()`, `.reduce()`, `.push()`, and `.pop()`. A NodeList generally only supports `.forEach()` and requires conversion to an Array (using `Array.from()`) to use other methods.
* **Nature**: An Array is a core JavaScript data structure. A NodeList is a browser-specific collection of DOM nodes returned by the DOM API.

---

### Explain the index for arrays

JavaScript arrays use **zero-based indexing**, meaning the first item is always at position **0**.

* **First element**: `myArray[0]`
* **Second element**: `myArray[1]`
* **Last element**: `myArray[myArray.length - 1]`



Indexing allows you to quickly access, update, or remove specific data within the list based on its position.

---

### How are checkboxes and radio buttons different in JS?

While both are used for user selection, they handle logic differently.

* **Checkboxes (`type="checkbox"`)**: Allow **multiple** selections within a group. Each checkbox is independent; checking one does not affect the others.
* **Radio Buttons (`type="radio"`)**: Allow only **one** selection within a group. To work correctly, all radio buttons in a set must share the same `name` attribute. Checking one will automatically uncheck the others in that group.



**In JavaScript:** You check if either is selected by accessing the **`.checked`** property, which returns a boolean (`true` or `false`).

| Feature | Checkbox | Radio Button |
| :--- | :--- | :--- |
| **Selection Type** | Multi-select | Single-select |
| **Behavior** | Independent | Group-dependent (`name`) |
| **JS Access** | `.checked` | `.checked` |



< ---------------- You Code Challenge Notes w3 ------------------------>
## Debugging with Console Logs
- **Element Check**: Logging variables like `qtyInput` right after selecting them confirms the ID in the HTML matches the ID in the JS.
- **Loop Verification**: Logging inside a `for...of` loop helps track if the code is correctly identifying which radio button is `.checked`.
- **Data Integrity**: Logging the final object ensures that `parseInt()` successfully converted the quantity from a string to a number.

### What is a ReferenceError?
- **Definition**: This error occurs when the JavaScript engine tries to access a variable that has not been declared or is misspelled.
- **Example**: If I declare `const myItem = ...` but try to log `console.log(item)`, I will get a ReferenceError because `item` does not exist.
- **Tip**: Always check that the name you used in your `const` declaration exactly matches the name you use later in your functions.

# Week 3 AI Prompted Notes

---

## Part 1

### Prompt
**Explain the `defer` attribute in HTML `<script>` tags and the `DOMContentLoaded` event in JavaScript.**

---

### `defer` Attribute

The `defer` attribute tells the browser to download the JavaScript file in the background while the HTML is still loading, instead of blocking the page.

A deferred script does **not** run immediately. It waits until the HTML document has been completely parsed before executing.

This ensures that all HTML elements exist before JavaScript tries to access them, preventing errors caused by scripts running too early.

---

### `DOMContentLoaded` Event

The `DOMContentLoaded` event fires when the HTML document has finished loading and parsing, but **before** images, videos, and other external resources finish loading.

JavaScript code placed inside a `DOMContentLoaded` event listener runs only after the DOM is fully available, making it safe to:

- Select elements
- Attach event listeners
- Manipulate the page structure

---

### How `defer` and `DOMContentLoaded` Work Together

When used together, `defer` and `DOMContentLoaded` create a reliable and efficient loading process.

- `defer` ensures the script loads without blocking the page
- `DOMContentLoaded` guarantees the JavaScript runs only after the DOM is ready

This combination prevents timing issues, improves performance, and ensures JavaScript interacts with elements that already exist.

---

### Common JavaScript Events

JavaScript event listeners commonly respond to user interactions such as:

- `click` — user clicks a button or element
- `submit` — user submits a form
- `input` — user types into a field
- `change` — value of an input changes
- `mouseover` / `mouseout` — user hovers over elements
- `keydown` / `keyup` — user presses or releases a key

These events represent how users interact with a web page.

---

## Part 2

### `event.preventDefault()`
```
event.preventDefault()
```
 stops the browser’s default behavior for an event.

---

### For Form Submissions

By default, submitting a form causes the browser to reload or navigate to a new page.

Calling `event.preventDefault()` prevents this automatic behavior.

This allows JavaScript to:

- Validate form input
- Display error or success messages
- Send data using JavaScript (e.g., `fetch`)
- Keep the page from refreshing

---

### Example

javascript
```
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // JavaScript handles the form instead of the browser
});
```

Safe Integer Parsing in JavaScript

When capturing user input from HTML forms, values are always returned as strings.

To safely process these as numbers and provide a fallback for empty or invalid inputs, combine parseInt() with the logical OR (||) operator.

## JavaScript Modules (Beginner Overview)

### What Is a Module?

A **module** is a JavaScript file that contains related code—such as variables, functions, or classes—that is meant to be reused or shared.

Instead of putting all your JavaScript into one large file, modules allow you to split your code into smaller, focused files.

Think of a module as a toolbox:
- Each tool has a purpose
- You only take the tools you need
- Everything stays organized

---

### Why Modules Are Useful

Modules help you:

- Organize code into logical sections
- Avoid cluttered, hard-to-read files
- Reuse code across multiple files
- Prevent variable name conflicts
- Make debugging and maintenance easier

Using modules becomes especially important as projects grow larger.

---

## The `export` Keyword

The `export` keyword makes variables, functions, or classes **available outside of a module.

Only code that is explicitly exported can be used by other files.

### Example

``` 
javascript
// form-handler.js
export function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
 ```

## Explain object literals and their importance in JS
## Object Literals in JavaScript
**Object literals** are a way to create objects using curly braces `{}` that store related data and behavior in one place.
js
```
 const user = {
  name: "Shena",
  age: 42,
  greet() {
    console.log("Hello!");
  }
};
```
### Why object literals matter
	•	They group related data together.
	•	They model real-world things like users, forms, and settings.
	•	They can store both properties and functions (methods).
	•	They keep code organized, readable, and easier to maintain.

Object literals help keep data connected to its meaning instead of scattered across variables.


## How is dot notation different than methods in JS?

Dot notation is how you access properties or methods on an object.
```
user.name      // "Shena"
user.greet     // function reference
user.greet()   // calls the function
```
- Dot notation itself does not run code—it simply accesses what’s inside the object.

### Methods

A method is a function that belongs to an object.
```
const user = {
  greet() {
    console.log("Hello!");
  }
};
```
	•	Methods perform actions.
	•	They often work with the object’s own data.
	•	They are executed using dot notation followed by parentheses.
---

```
Concept               What it is                 What it does
----------------------------------------------------------------------
Dot notation         Syntax            Accesses a property or method
Method        Function inside an object        Executes code
```

---

## Part 3

### Explain the difference between `querySelector` and `querySelectorAll`

Both methods are used to find elements in the DOM using CSS selectors, but they return different results:

* **`querySelector()`**: Returns the **first** element that matches the specified selector. If no matches are found, it returns `null`. This is ideal for selecting unique items or the first instance of a class.
* **`querySelectorAll()`**: Returns a **static NodeList** containing **all** elements that match the selector. If no matches are found, it returns an empty NodeList. This is used when you need to interact with multiple elements (like all buttons in a list).



---

### How are NodeLists and Arrays the same and how are they different?

NodeLists and Arrays look very similar, but they have key differences in how they behave in JavaScript.

**How they are the same:**
* Both are **indexed** collections (ordered starting from 0).
* Both have a **`.length`** property.
* Both can be iterated over using the **`.forEach()`** method.

**How they are different:**
* **Methods**: Arrays have built-in methods like `.map()`, `.filter()`, `.reduce()`, `.push()`, and `.pop()`. A NodeList generally only supports `.forEach()` and requires conversion to an Array (using `Array.from()`) to use other methods.
* **Nature**: An Array is a core JavaScript data structure. A NodeList is a browser-specific collection of DOM nodes returned by the DOM API.

---

### Explain the index for arrays

JavaScript arrays use **zero-based indexing**, meaning the first item is always at position **0**.

* **First element**: `myArray[0]`
* **Second element**: `myArray[1]`
* **Last element**: `myArray[myArray.length - 1]`



Indexing allows you to quickly access, update, or remove specific data within the list based on its position.

---

### How are checkboxes and radio buttons different in JS?

While both are used for user selection, they handle logic differently.

* **Checkboxes (`type="checkbox"`)**: Allow **multiple** selections within a group. Each checkbox is independent; checking one does not affect the others.
* **Radio Buttons (`type="radio"`)**: Allow only **one** selection within a group. To work correctly, all radio buttons in a set must share the same `name` attribute. Checking one will automatically uncheck the others in that group.



**In JavaScript:** You check if either is selected by accessing the **`.checked`** property, which returns a boolean (`true` or `false`).

| Feature | Checkbox | Radio Button |
| :--- | :--- | :--- |
| **Selection Type** | Multi-select | Single-select |
| **Behavior** | Independent | Group-dependent (`name`) |
| **JS Access** | `.checked` | `.checked` |


## Part 4
### What is the toFixed method and how should I use it when writing JS?

# JavaScript toFixed() Cheat Sheet

The `toFixed()` method formats a number to a specific number of decimals and returns it as a **string**.

### 1. Basic Usage
```javascript
const price = 19.995;

// Rounding
console.log(price.toFixed(2)); // "20.00"

// Padding
const wholeNum = 5;
console.log(wholeNum.toFixed(2)); // "5.00"
```
### The String Gotcha
const tax = 1.555;
const formattedTax = tax.toFixed(2); // "1.56" (String)

// Correct way to add:
const total = Number(formattedTax) + 10; // 11.56
. Key Rules
Argument: The number of digits after the decimal (0-20).

Rounding: It rounds to the nearest value (0.5 rounds up).

Return Type: Always a String.

## Part 4.2
### JavaScript Reference Notes
1. Rest Operator (...)
- The rest operator collects multiple elements and "condenses" them into a single array. 
- It is most commonly used in function parameters to handle a variable number of arguments.Syntax: Use three dots (...) followed by the name of the array.
- Usage: It must be the last parameter in a function definition.
        
        function sumAll(...numbers) {
        // 'numbers' is an array [1, 2, 3]
        return numbers.reduce((prev, curr) => prev + curr);
        }
        console.log(sumAll(1, 2, 3)); // 6


2. Date.now()
- The Date.now() method returns the number of milliseconds elapsed since January 1, 1970, 

        00:00:00 UTC (the Unix Epoch).
- Usage: Used for timestamps, measuring code execution speed, or generating unique IDs.
- Note: It is a static method; you call it directly from the Date object, not an instance.

        const timestamp = Date.now(); 
        console.log(timestamp); // e.g., 1700000000000

        // Measuring time difference
        const start = Date.now();
        // ... some code ...
        const end = Date.now();
        console.log(`Elapsed time: ${end - start}ms`);

3. Common Array Update Methods
- JavaScript provides several ways to add, remove, or modify elements in an array.

    Methods that Mutate (Change) the Original Array:

.push() - Adds an element to the end of the array.

.pop() - Removes the element from the end of the array.

.unshift() - Adds an element to the beginning of the array.

.shift() - Removes the element from the beginning of the array.

.splice() - Adds or removes elements at a specific index.

Methods that Return a New Array (No Mutation):

.map() - Creates a new array by applying a function to every element.

.filter() - Creates a new array containing only elements that pass a specific test.

.concat() - Joins two or more arrays and returns a new array.

Spread Operator ([...]) - Used to create a shallow copy of an array or combine arrays into a new array.

   

      // Mutating example
      nums.push(4);          
      // Array is now [1, 2, 3, 4]
      nums.splice(1, 1, 9);  
      // Array is now [1, 9, 3, 4] 
      (removes 1 item at index 1, adds 9)

      // Non-mutating example  
      const doubled = nums.map(n => n * 2); 
      // returns [2, 18, 6, 8], nums remains [1, 9, 3, 4]
       const combined = [...nums, 5, 6];     
       // returns [1, 9, 3, 4, 5, 6]

## Technical Concepts Overview

### What are the most common uses of local storage?
Local storage is used to save key-value pairs in a web browser with no expiration date. Common use cases include:
* **User Preferences:** Storing themes (Light/Dark mode), language selection, or layout settings.
* **Shopping Carts:** Persisting cart contents so items remain if the user closes and reopens the browser.
* **Form Data:** Saving partial form inputs to prevent data loss on refresh.
* **Caching:** Storing static data to reduce server requests and speed up load times.

### Persistent vs. In-Memory Data
* **In-Memory Data:** Exists only in the computer's RAM (Random Access Memory). It is very fast but **volatile**—the data is lost immediately when the application stops or the device powers off (e.g., variables in a running function).
* **Persistent Data:** Written to non-volatile storage like a hard drive, SSD, or database. It is **stable** and survives system restarts, crashes, and power cycles (e.g., files saved to disk, database entries).

### Why is it important to learn CRUD functions?
CRUD (Create, Read, Update, Delete) represents the four basic operations of persistent storage. Mastering CRUD is essential because:
* **Foundation of Apps:** Almost every dynamic application (blogs, social media, e-commerce) relies on these four operations to function.
* **Data Management:** It teaches the complete lifecycle of data interaction between a user interface and a database.
* **Transferable Skill:** The concept applies universally across virtually all programming languages and database systems (SQL, MongoDB, etc.).

## JavaScript CRUD Example (using localStorage)

```javascript
// Data: A sample user object
const userProfile = {
  username: "ShenaCodes",
  theme: "dark",
  language: "en"
};

// --- 1. CREATE (Save) ---
// We use JSON.stringify to turn the object into a string for storage
localStorage.setItem('user', JSON.stringify(userProfile));
console.log("User saved!");


// --- 2. READ (Retrieve) ---
// We get the string back and use JSON.parse to turn it back into an object
const storedData = localStorage.getItem('user');
const parsedUser = JSON.parse(storedData);
console.log(parsedUser.username); // Output: "ShenaCodes"


// --- 3. UPDATE (Edit) ---
// To update, we modify the object and save it again (overwriting the old key)
parsedUser.theme = "light";
localStorage.setItem('user', JSON.stringify(parsedUser));
console.log("User theme updated to light");


// --- 4. DELETE (Remove) ---
// Removes the specific item from storage
localStorage.removeItem('user');
console.log("User data deleted.");

// To clear EVERYTHING in local storage:
// localStorage.clear();

### Why are naming conventions important?
Naming conventions (such as `camelCase` or `snake_case`) are critical for writing professional code because they improve:
* **Readability:** Clear names like `calculateTotal` allow developers to understand what the code does at a glance.
* **Maintainability:** Consistent naming makes it easier for you (or a team) to return to the code later and modify it without confusion.
* **Debugging:** Proper conventions help distinguish between variables, functions, and classes, reducing logic errors.


## Error Handling & Dates

### What is a Try-Catch block?
A `try...catch` statement is used to handle runtime errors so they don't stop the execution of the program.
* **Try:** Contains the code that might throw an exception.
* **Catch:** Contains the code to execute if an exception occurs.

```javascript
try {
  // Code that might fail
  let user = JSON.parse(brokenData);
} catch (error) {
  // Code that runs if it fails
  console.log("Error parsing data:", error);
}
```

    Date Formats: ISO vs. Timestamp
    new Date().toISOString():

    Format: YYYY-MM-DDTHH:mm:ss.sssZ

    Use: Best for storing dates that need to be readable by humans or databases sorting by standard time.

    Output: "2026-02-09T22:55:37.123Z"

    Date.now().toString():

    Format: A string of digits (Unix Timestamp in milliseconds).

    Use: Best for unique IDs, calculating time differences, or performance tracking.

    Output: "1770677737123"

    ## Handling localStorage Data

### Why do we need to convert localStorage data?
`localStorage` is a key-value store that supports **strings only**.
* **Problem:** JavaScript works with Objects and Arrays, but `localStorage` cannot save them directly. Attempting to save an object without conversion results in `"[object Object]"`, losing all data.
* **Solution:**
    * **Write:** Use `JSON.stringify()` to turn the object into a JSON string.
    * **Read:** Use `JSON.parse()` to turn the JSON string back into a usable JavaScript object.

### Common Errors when retrieving data
* **SyntaxError:** The most critical error occurs when `JSON.parse()` tries to read invalid data (like an incomplete string or corrupted JSON).
    * *Impact:* This throws an exception that stops script execution immediately.
    * *Fix:* Always wrap `JSON.parse()` calls in a `try...catch` block to handle potential corruption gracefully.


    < ----- 6.1 Part I----- >
    ## DOM Manipulation

### Using the `dataset` attribute
The `dataset` property provides read/write access to all custom data attributes (`data-*`) on an element.
* **HTML:** Attributes are written with dashes: `data-user-name="Shena"`.
* **JavaScript:** Accessed via camelCase: `element.dataset.userName`.
* **Use Case:** Storing extra information (like IDs or status) directly on an HTML element without using visible text.

### `createElement` vs. `innerHTML`
* **`document.createElement('div')`**:
    * **Mechanism:** Creates a real DOM element object in memory.
    * **Pros:** Safer (prevents Cross-Site Scripting/XSS), better performance for complex updates, keeps event listeners intact.
    * **Cons:** More verbose (requires setting properties line-by-line).

* **`element.innerHTML = '<div>...</div>'`**:
    * **Mechanism:** Parses a string of HTML text and replaces the element's content.
    * **Pros:** Quick and easy for simple content updates.
    * **Cons:** Security risk (XSS), slower (browser has to re-parse the HTML string), destroys existing event listeners on children.

### Updating the DOM: `appendChild` & Alternatives
* **`appendChild(node)`**: The classic method. Moves a specific node to the end of the parent's child list. Returns the appended node.
* **`append(node, "string")`**: Modern version. Can add multiple items (nodes or text strings) at once. Does *not* return the node.
* **`prepend(node)`**: Adds the node to the *start* of the parent's child list (as the first child).
* **`insertBefore(newNode, referenceNode)`**: Inserts a node strictly before another specific child node.


< ----- 6.1 Part II ----- >

## Date Formatting & Helper Functions

### 1. How does `date.toLocaleDateString()` work?
This method converts a JavaScript Date object (which contains complex data like year, month, day, time, and timezone) into a **human-readable string** based on the user's location.

* **Why is it needed?**
    * **Raw Data is Ugly:** Computers store dates as long numbers (milliseconds since 1970) or ISO strings (e.g., `2026-02-14T14:15:51.000Z`). These are hard for humans to read.
    * **Localization:** Date formats vary by country.
        * **US:** `2/14/2026` (Month/Day/Year)
        * **Germany:** `14.2.2026` (Day.Month.Year)
        * **Japan:** `2026/2/14` (Year/Month/Day)
    * **Automation:** It automatically detects the user's browser settings and formats the date correctly without you writing manual logic for every country.

### 2. Why is it called a "Helper Function"?
We call functions like `formatDateForDisplay` **helper functions** because they are small, specialized tools designed to assist the main logic, not to run the entire application.

* **Single Responsibility:** Its only job is to format a timestamp. It doesn't know about the HTML table or the database; it just "helps" by cleaning up one piece of data.
* **Reusability:** You can use this same function in multiple places (e.g., in the main table *and* in a "Last Updated" banner) without rewriting the code.
* **Readability:** It makes the main code (like `renderTable`) cleaner and easier to understand.
    * *Without helper:* `${new Date(entry.timestamp).toLocaleDateString()}` (Cluttered)
    * *With helper:* `${formatDateForDisplay(entry.timestamp)}` (Clear and descriptive)

  < ----- 6.1 Part III ----->
  ## Sorting & Copying Data

### How does the `.sort()` method work?
The `.sort()` method rearranges the elements of an existing array **in place** and returns the sorted array.

* **Default Sorting (Strings):**
    * Converts elements to strings and compares their UTF-16 code units.
    * *Example:* `[10, 2, 5].sort()` becomes `[10, 2, 5]` because "1" comes before "2".

* **Numerical Sorting (Compare Function):**
    * To sort numbers properly, you must provide a **compare function**.
    * *Ascending:* `array.sort((a, b) => a - b)`
    * *Descending:* `array.sort((a, b) => b - a)`

### What is a Shallow Copy?
A shallow copy creates a new top-level structure (array/object), but shares the nested items (objects/arrays) with the original.

* **How to create one:**
    * Array spread: `[...originalArray]`
    * Object spread: `{...originalObject}`
    * `Array.slice()`

* **The Trap:**
    * If the array contains **objects**, the copy only points to the same objects in memory.
    * *Example:*
        ```javascript
        const original = [{ id: 1, score: 10 }];
        const copy = [...original];

        copy[0].score = 99; // Modifying the object in the copy...
        console.log(original[0].score); // ...ALSO changes the original to 99!
        ```
< ----- 6.2 Part I ----->
### What does "In-Memory" mean?
"In-memory" storage refers to data maintained in the computer's **RAM** (Random Access Memory) while a program is running.

* **Characteristics:**
    * **Fast Access:** Reading and writing to RAM is significantly faster than reading from a hard drive or network database.
    * **Volatile:** The data is temporary. It is lost immediately if the application crashes, the browser refreshes, or the device loses power.
* **Examples in JavaScript:**
    * Variables (`let score = 10;`)
    * Arrays and Objects (`const users = []`)
    * DOM nodes before they are saved to a server or Local Storage.


  < ----- 6.2 Part II ----->
  ## Asynchronous JavaScript

### Synchronous vs. Asynchronous Code
* **Synchronous (Sync):**
    * **Blocking:** Code runs sequentially from top to bottom.
    * **Behavior:** The browser will "freeze" if a line of code takes a long time (like a heavy calculation) because it cannot move to the next line until the current one finishes.
    * *Example:* `console.log('First'); console.log('Second');` (Always prints First, then Second).

* **Asynchronous (Async):**
    * **Non-Blocking:** Code initiates a task and immediately moves to the next line.
    * **Behavior:** Used for operations that take time (like fetching data from a server or setting a timer) so the user interface remains responsive.
    * *Example:*
        ```javascript
        console.log('First');
        setTimeout(() => console.log('Second'), 1000);
        console.log('Third');
        // Output: First -> Third -> Second
        ```

### Common Uses of `setTimeout`
The `setTimeout(callback, delay)` function executes code once after a specified delay in milliseconds.

1.  **User Feedback Delays:**
    * Hiding a "Success" notification after 3 seconds.
    * *Code:* `setTimeout(() => message.style.display = 'none', 3000);`

2.  **Debouncing (Performance):**
    * Waiting for a user to *stop* doing something (like resizing a window or typing) before running expensive code.
    * *Example:* Only searching a database 500ms after the user stops typing, rather than on every single letter they type.

3.  **Deferring Execution (The 0ms Hack):**
    * Using `setTimeout(fn, 0)` pushes a task to the end of the execution queue.
    * *Use Case:* Use this to let the browser finish updating the HTML/CSS (rendering) before running a heavy calculation, preventing the UI from freezing.

    < ----- 6.3 Part III ----- >
    ## UI State Management

### Why is UI State Management important?
UI State Management is the practice of keeping the visual interface in sync with the underlying data. It is critical for:

1.  **Consistency (Source of Truth):**
    * Ensures that what the user *sees* (UI) matches what the program *knows* (Data).
    * *Example:* If `isLoading = true`, the button should be disabled and show a spinner. If you manage this manually, you might forget to re-enable the button later.

2.  **Predictability:**
    * State-driven UIs are easier to debug. If the UI looks wrong, you just check the state data.
    * *Rule:* UI = Function(State). The interface is just a reflection of the current data.

3.  **Handling Complexity:**
    * Modern apps have many moving parts (modals, forms, tabs, notifications).
    * Managing these with "spaghetti code" (like `if (button.innerText === 'Save') ...`) leads to bugs.
    * State management separates the *logic* (data) from the *view* (DOM).


    <--------------- AI explinations---------------------->
    Wait for the page to load (defer / DOMContentLoaded).

Listen for a form submission (addEventListener).

Stop the page from reloading (preventDefault).

Save the user's name and theme choice (localStorage & Objects).

Immediately update the page with a greeting (DOM Manipulation).

The Code Example
You can imagine this as two files: index.html and script.js.

1. HTML (index.html)
Notice the defer attribute? That makes sure the HTML loads before the JavaScript runs.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Week 3 Demo</title>
    <script src="script.js" defer></script>
</head>
<body>

    <form id="settings-form">
        <label>Name: <input type="text" id="name-input" required></label>
        
        <label>Theme: 
            <select id="theme-select">
                <option value="light">Light Mode</option>
                <option value="dark">Dark Mode</option>
            </select>
        </label>
        
        <button type="submit">Save Settings</button>
    </form>

    <div id="display-area"></div>

</body>
</html>
JavaScript (script.js)
Here is where we combine all the concepts from your notes.
// 1. DOMContentLoaded
// Even though we used 'defer', this is an extra safety net to ensure
// we don't try to find elements that don't exist yet.
document.addEventListener("DOMContentLoaded", function() {

    // Select the elements we need to work with
    const form = document.querySelector("#settings-form");
    const displayArea = document.querySelector("#display-area");

    // 2. Event Listener & preventDefault
    form.addEventListener("submit", function(event) {
        // STOP the browser from refreshing the page (default behavior)
        event.preventDefault();

        // Get values from the inputs
        const nameInput = document.querySelector("#name-input").value;
        const themeInput = document.querySelector("#theme-select").value;

        // 3. Object Literals
        // Group the data into a single object so it stays organized
        const userSettings = {
            userName: nameInput,
            userTheme: themeInput,
            savedAt: Date.now() // timestamp
        };

        // 4. LocalStorage (CRUD - Create)
        // We MUST convert the object to a string using JSON.stringify
        localStorage.setItem("preferences", JSON.stringify(userSettings));

        // 5. DOM Manipulation
        // Call a helper function to update the screen
        updateScreen(userSettings);
    });

    // Helper Function to update the DOM
    function updateScreen(data) {
        // Clear previous content
        displayArea.innerHTML = ""; 

        // Create a new element (Safe method)
        const message = document.createElement("h2");
        
        // Use Template Literals for the text
        message.textContent = `Welcome back, ${data.userName}!`;

        // Apply style based on the theme selection
        if (data.userTheme === "dark") {
            document.body.style.backgroundColor = "#333";
            document.body.style.color = "#FFF";
        } else {
            document.body.style.backgroundColor = "#FFF";
            document.body.style.color = "#000";
        }

        // Add the new message to the page
        displayArea.appendChild(message);
    }
    
    // BONUS: Check for existing data on load (CRUD - Read)
    const savedData = localStorage.getItem("preferences");
    if (savedData) {
        // Convert string back to object
        const parsedData = JSON.parse(savedData);
        updateScreen(parsedData);
    }
});

defer & DOMContentLoaded:

In the HTML, defer let the browser parse the visible HTML while downloading the script.

In the JS, DOMContentLoaded waited until the very last second to ensure the <form> actually existed before we tried to attach an event listener to it.

event.preventDefault():

Normally, clicking "Save Settings" would refresh the page, wiping out everything the user just typed.

preventDefault() freezes that action, allowing us to grab the data and handle it with JavaScript instead.

Objects & JSON.stringify:

localStorage is like a text file; it only understands strings.

Your notes mentioned that [object Object] error. That happens if you try to save userSettings directly.

Fix: We use JSON.stringify(userSettings) to turn our fancy object { name: "Shena" } into the string "{ "name": "Shena" }".

createElement vs innerHTML:

I used createElement("h2") to build the welcome message. This is safer and cleaner than typing out <h2 class='...'>...</h2> as a string, especially when handling user input (names) which could contain weird characters.