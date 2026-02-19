import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js"; 
import * as orderList from './order-list.js';
import * as orderStorage from './order-storage.js';

const orderFormEl = document.getElementById("order-form");
const clearBtnEl = document.getElementById("clear-btn"); // Add this to your HTML!
const orders = [];

const handleOrderSubmit = function(event) {
    event.preventDefault(); 
   
    const data = orderHandler.getOrderInputs();
    const calculatedPrice = priceCalculator.calculateTotal(data);
    const timestamp = { timestamp: new Date().toISOString() };
    const newOrder = { ...data, ...calculatedPrice, ...timestamp };

    orders.push(newOrder);
    orderStorage.saveOrders(orders);
    orderList.renderOrders(orders);

    console.log('Order Received!', data);
};

// --- New Function: Clear the orders ---
const handleClearClick = function() {
    // 1. Empty the array (set length to 0 keeps the same array reference)
    orders.length = 0;
    
    // 2. Update storage (saves the now-empty array)
    orderStorage.saveOrders(orders);
    
    // 3. Update the table (renders nothing)
    orderList.renderOrders(orders);
    
    console.log("Orders Cleared");
};

const init = function () {
    console.log("App Initialized");
    const loadedOrders = orderStorage.loadOrders();
    
    if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        orderList.renderOrders(orders);
    }
 
    orderFormEl.addEventListener("submit", handleOrderSubmit);
    
    // 4. Listen for the clear click
    if (clearBtnEl) {
        clearBtnEl.addEventListener("click", handleClearClick);
    }
};

document.addEventListener('DOMContentLoaded', init);