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