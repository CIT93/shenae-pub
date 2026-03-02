const orderTableBody = document.getElementById('order-table-body');
export function renderOrders(orders) {
    // Clear tale first
    orderTableBody.innerHTML = ' ';

    for (const order of orders) {
        const row = document.createElement('tr');

            row.innerHTML = `
            <td>${order.timestamp}</td>
            <td>${order.qty}</td>
            <td>${order.size}</td>
            <td>$${order.totalPrice.toFixed(2)}</td>
            <t class = "action-cell">
                <button class = "action-button edit" data-id="${order.id}">Edit</button>
                <button class="action-button delete" data-id=${order.id}">Delete</button> 
            `;
            orderTableBody.appendChild(row);
    }
}