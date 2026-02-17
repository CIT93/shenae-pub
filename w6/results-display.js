const resultsContainer = document.getElementById("order-summary");

const totalDisplay = resultsContainer.querySelector("#display-total");
const qtyDisplay = resultsContainer.querySelector("#display-qty");
const sizeDisplay = resultsContainer.querySelector("#display-size");
const giftWrapDisplay = resultsContainer.querySelector("#display-gift");

export const displayResults = function (order) {
    totalDisplay.textContent = order.totalPrice;
    qtyDisplay.textContent = order.qty;
    sizeDisplay.textContent = order.size;
    giftWrapDisplay.textContent = order.giftWrap ? "yes" : "no";

    resultsContainer.style.display = "block";
};