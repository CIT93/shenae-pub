import * as orderHandler from "./order-handler.js";
import * as priceCalculator from "./price-calculator.js"; 
import * as orderList from './order-list.js';
import * as orderStorage from './order-storage.js';

const orderFormEl = document.getElementById("order-form");
const clearBtnEl = document.getElementById("clear-btn"); 
const orders = [];

const handleOrderSubmit = function(event) {
    event.preventDefault(); 
    
    const orderData = orderHandler.getOrderInputs();
    const qty = orderData.qty;
    const size = orderData.size;
    const calculatedPrice = priceCalculator.calculateTotal(orderData);
    const totalPrice = Number(calculatedPrice);
    const timestamp = { timestamp: new Date().toISOString() };
   

const newOrder = {
    id: Date.now().toString(),
    qty: qty,
    size: size,
    totalPrice: totalPrice,
  
};

    orders.push(newOrder);
    orderStorage.saveOrders(orders);
    orderList.renderOrders(orders);

    console.log('Order Received!', orderData);

    // app.js
orderList.renderOrders(orders, {
    onDelete: handleDelete,
    onEdit: handleEdit
});
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


const handleDelete = function(id) {
    console.log("App.js: Requesting delete for order", id);
};

const handleEdit = function(id) {
    console.log("App.js: Requesting edit for order", id);
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
    // app.js
orderList.renderOrders(orders, {
    onDelete: handleDelete,
    onEdit: handleEdit
});
};


document.addEventListener('DOMContentLoaded', init);