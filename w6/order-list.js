// Step 2 Part --- Select the Table Body ---
const orderTableBody = document.getElementById('order-table-body');




// --- Step 2: Export renderOrders ---
// Main function to render the table ith the order entries.
// @param {array} orders - An array of order objects to display.
export const renderOrdersv= function(orders) {

    // --- Step 3.1: The Logic - Clear ---
    // Clear any existing rows in the table body to avoid duplicates on re-renderOrdersv.apply
    orderTableBody.innerHTML = ' ';
    console.log('Inside renderOrders');

    // --- Step 3.2 : Loop ---
    // Loop through the entry and create a table row for it. 
    // using for... 
    for(const order of orders) {
        // --- Step 3.3: Create Row ---
        // inside the loop, create a new <tr> element
        const row = document.createElement('tr');
        
        //Step 3.5: Populate: Set the innerHTML of the row to create <td> cells for:
        // Date (Optional: format it nicely), Qty, Size, Total Price
        row.innerHTML = `
        <td>${formatDateForDisplay(entry.timestamp)}</td>
        <td>${order.qty}</td> 
        <td>${order.size}</td>
        <td>${order.totalPrice.toFixed(2)}</td>
        <td><button class="delete-btn">Delete</button></td>
        `;
       // Append: Add the new ro to the tbody.
        orderTableBody.appendChild(row);


    }


};