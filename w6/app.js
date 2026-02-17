// So the browser loads the new file
import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js"; 
import * as resultsDisplay from "./results-display.js";
import * as orderStorage from './order-storage.js';

// --- Part 1: Select the T-shirt from the summary div
const orderFormEl = document.getElementById("order-form");
const summaryDiv = document.getElementById('order-summary');
// Step 3.2 The Array
const orders = [];


// These variables will change as the user interacts with the page.

// --- Part 3.3 Update handleOrderSubmit
    const handleOrderSubmit = function(event) {
    event.preventDefault(); // Stop pagefrom reloading
   
    // 1) Get the form data object
    const data = orderHandler.getOrderInputs();
   
    // 2) --- Calculate --- total price (returns {totalPrice: ...})
    const calculatedPrice = priceCalculator.calculateTotal(data);

    // 3) Timestamp object
    const timestamp = { timestamp: new Date().toISOString() };

    // 4) --- Merge --- into one object (The Spread Operator)
    const newOrder = { ...data, ...calculatedPrice, ...timestamp };

    // 5) --- Store --- new objects in orders array
    orders.push(newOrder);

    orderStorage.saveOrders(orders);

    // 6) --- Verify --- the orders history increases
    console.log(orders);

    resultsDisplay.displayResults(newOrder);
    
    console.log('Order Received!', data);

  }

// 3. Initialize the app
  const init = function () {
    console.log("App Initialized");
   const loadedOrders = orderStorage.loadOrders()
    
   if (loadedOrders.length > 0) {
      orders.push(...loadedOrders);
    console.log('Orders Loaded');
    }
 
   orderFormEl.addEventListener("submit", handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);






