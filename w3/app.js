// So the browser loads the new file
import * as orderHandler from "./order-handler.js";

// --- Part 1: Select the T-shirt from the summary div
const orderFormEl = document.getElementById("order-form");
const summaryDiv = document.getElementById('order-summary');

// These variables will change as the user interacts with the page.

// --- Part 2: Handle the submit event
  const handleOrderSubmit = function(event) {
    event.preventDefault(); // Stop pagefrom reloading


    //  Get the data object (contains String, Number, and Boolean)
 const data = orderHandler.getOrderInputs();

    // Update the UI
    summaryDiv.textContent = `Order Confirmed: ${data.qty} ${data.size} shirt(s) Gift Wrap: ${data.giftWrap}.`;
    console.log('Order Received!', data);

  }

// 3. Initialize the app
  const init = function () {
    console.log("App Initialized");
   orderFormEl.addEventListener("submit", handleOrderSubmit);
};

document.addEventListener('DOMContentLoaded', init);

