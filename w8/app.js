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

// calculator returns an object { totalPrice: number }
const priceResult = priceCalculator.calculateTotal(orderData);
const totalPrice = priceResult.totalPrice;

const newOrder = {
  id: Date.now().toString(),
  timestamp: new Date().toISOString(),
  qty: qty,
  size: size,
  totalPrice: totalPrice
};

orders.push(newOrder);
orderStorage.saveOrders(orders);

// render ONCE, with callbacks (Step 6)
orderList.renderOrders(orders, {
  onDelete: handleDelete,
  onEdit: handleEdit
});
};

// --- New Function: Clear the orders ---
const handleClearClick = function() {
  orders.length = 0;
  orderStorage.saveOrders(orders);

  orderList.renderOrders(orders, {
    onDelete: handleDelete,
    onEdit: handleEdit
  });

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
  }

  orderList.renderOrders(orders, {
    onDelete: handleDelete,
    onEdit: handleEdit
  });

  orderFormEl.addEventListener("submit", handleOrderSubmit);

  if (clearBtnEl) {
    clearBtnEl.addEventListener("click", handleClearClick);
  }
};

document.addEventListener("DOMContentLoaded", init);