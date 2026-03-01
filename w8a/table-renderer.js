
const footprintTable = document.getElementById('footprintTable');
const footprintTableBody = footprintTable.querySelector('tbody');
const noEntriesMessage = document.getElementById('noEntriesMessage');

const clearAllDataButton = document.getElementById('clearAllDataButton');



// Module-level variable to store the most recent callbacks.
// This is the robust way to pass callbacks to the event listener functions.
let _currentCallbacks = {};

// State variables for managing in-line row confirmation (for delete button)

// Stores the element where confirmation is pending
let currentConfirmatingRowElement = null;
// Stores the setTimeout ID for the confirmation timer
let currentConfirmTimeoutId = null;

// Shows "Confirm Delete" and "Cancel" buttons, hiding original action buttons.
// Sets up a timeout to revert if no action is taken.
// @param {HTMLElement} actionCell - The element containing the buttons.
// @param {string} id - The ID of the entry being acted upon.
// @param {Function} onDeleteCallback - The callback to execute if confirmed.


const showDeleteConfirmingButtons = function(actionCell, id, onDeleteCallback) {
    // Hide original buttons
    const editButton = actionCell.querySelector('.action-button.edit');
    const deleteButton = actionCell.querySelector('.action-button.delete');
    if(editButton) editButton.style.display = 'none';
    if(deleteButton) deleteButton.style.display = 'none';

    // Create and append confirmation buttons
    const confirmBtn = document.createElement('button'); // Add styling class
    confirmBtn.textContent = 'Confirm Delete';
    confirmBtn.classList.add('action-button','confirm'); // Add styling class
    confirmBtn.dataset.id = id;

    const cancelBtn = document.createElement('button');
    cancelBtn.textContent = 'Cancel';
    cancelBtn.classList.add('action-button','cancel');
    cancelBtn.dataset.id = id;
    
    // update table with new confirmation buttons
    actionCell.appendChild(confirmBtn);
    actionCell.appendChild(cancelBtn);

    // Set timeout to revert buttons if no action
    currentConfirmTimeoutId = setTimeout(function(){
        resetRowConfirmationState();
    }, 3000)
    confirmBtn.addEventListener('click', function(e){
        e.stopPropagation();
        onDeleteCallback(id);
        resetRowConfirmationState();
    });
    cancelBtn.addEventListener('click', function(e){
        e.stopImmediatePropagation();
        resetRowConfirmationState();
    })
    console.log(`Asking for confirmation for row id ${id}`);

};

// Hides "Confirm Delete" and "Cancel" buttons and shows original action buttons.
// This is called by resetRowConfirmationState
const hideDeleteConfirmationButtons = function() {
    const editButton = currentConfirmatingRowElement.querySelector('.action.button.edit');
    const deleteButton = currentConfirmatingRowElement.querySelector('.action.button.delete');
    const confirmButton = currentConfirmatingRowElement.querySelector('.action.button.confirm');
    const cancelButton = currentConfirmatingRowElement.querySelector('.action.button.cancel');
    if(editButton) editButton.style.display = 'inline-block';
    if(deleteButton) deleteButton.style.display = 'inline-block';
    if(confirmButton) confirmButton.remove();
    if(cancelButton) cancelButton.remove();
}


// Resets any pending row confirmation state.
// This function is exported so app.js can call it when other major actions occur.
export const resetRowConfirmationState = function () {
    if(currentConfirmatingRowElement) {
        if(currentConfirmTimeoutId) {
            clearTimeout(currentConfirmTimeoutId);
            currentConfirmTimeoutId = null;
        }
        hideDeleteConfirmationButtons();
        currentConfirmatingRowElement = null;
    }
}





const formatRadioValue = function(value) {
    switch(value) {
        case 'meatHeavy' : return 'Meat-Heavy ';
        case 'average' : return 'Average';
        case 'vegetarian' : return 'Veg.';
        case 'vegan' : return 'Vegan/Wild';
        case 'prepackaged' : return 'Prepkg.';
        case 'balanced' : return 'Balanced';
        case 'fresh' : return 'Fresh/Local';
        default: return value;
    }
}


// Formats a timestamp into a local date string.
// @param {string} timestamp - ISO string timestamp.

const formatDateForDisplay = function(timestamp) {
    const date = new Date(timestamp);
    // @returns {string} Formatted date string.
    return date.toLocaleDateString('en-US', {
        year: 'numeric', month: 'short', day: 'numeric'
    }); 
}

// @param {number} homeSquareFootage - The square footage of the home.
// @param {boolean} isApartment - True if the dwelling is an apartment.
// @returns {string} Formatted string (e.g., '1500 sqft' or 'Apt.').
const formatHomeSizeDisplay = function(homeSquareFootage, isApartment) {
    if(isApartment) {
        return 'Apt.'
    } else {
        return `${homeSquareFootage.toFixed(0)} sqft`
    };
};


// Creates and returns a single table row () element for a given entry.
// This function encapsulates the logic for building each row's HTML.
// @param {object} entry - the carbon footprint entry object to display.
// @returns {HTMLElement} The created DOM element.






// --- Row Creation Function ---

const createTableRow = function(entry) {
    const row = document.createElement('tr');
     // This is super useful for JavaScript to quickly find a row later for editing or deleting.
     // Store the entry's unique ID directly to the row using a data-id attribute.
    row.dataset.id = entry.id;
     // Set the inner HTML of the row using a template literal.
    row.innerHTML = `
        <td>${formatDateForDisplay(entry.timestamp)}</td>
        <td>${entry.householdMembers}</td>
        <td>${formatHomeSizeDisplay(entry.homeSquareFootage, entry.isApartment)}</td>
        <td>${formatRadioValue(entry.dietType)}</td>
        <td>${formatRadioValue(entry.foodPackaging)}</td>
        <td>${entry.totalFootprint}</td>
        <td class="action-cell">
            <button class="action-button edit" data-id="${entry.id}">Edit</button>
            <button class="action-button delete" data-id="${entry.id}">Delete</button>
        </td>
    `;
    return row;
};

// Main function to render the table with the carbon footprint entries.

// @param {array} entries - An array of carbon footprint entry objects to display.
export const renderTable = function(entries, callbacks) {
    // Store callbacks passed to renderTable so handleTableClick can access them.

    _currentCallbacks = callbacks;
  // Loop through each sorted entry and create a table row for it.
  // Clear any existing rows in the table body to avoid duplicates on re-render.
    footprintTableBody.innerHTML = '';
    console.log('Inside renderTable');
    // using for...of loop for easy iteration.
    // If there are no entries, hide the table and show the "no entries" message.
    if (entries.length === 0) {
       footprintTable.style.display = 'none';
       noEntriesMessage.style.display = 'block';
       clearAllDataButton.style.display = 'none';
       console.log('No entries to display Table hidden');
       return; // Stop the function here
    } else {
        footprintTable.style.display = 'table';
        noEntriesMessage.style.display = 'none';
        clearAllDataButton.style.display = 'block';

    }
    // Sort entries by timestamp (most recent first) before rendering.
    // We use a spread operator [...] to create a shallow copy so we don't modify the original array order.
    // Sorts the array in descending order (newest first)
    const sortedEntries = [...entries].sort (function(a, b){
        return new Date(a.timestamp) - new Date(b.timestamp)
    });

    // Loop through each entry and create a table row for it
    for(const entry of sortedEntries) {
        // Call our helper function to build the row
        const rowElement = createTableRow(entry);
        footprintTableBody.appendChild(rowElement);
    }
};
// Wire Up Basic Table Click Handling
// --- Event Delegation for Table Actions ---
// This single listener handles clicks on all buttons (edit, delete, confirm, cancel) within the table body.
// It's attached only once, even if renderTable is called multiple times.
const handleTableClick = function(event){
    const target = event.target
    const id = target.dataset.id;
    const actionCell = target.closest('td');
    console.log(target);
    // _currentCallbacks.onDelete(id);
    // Handle Delete button click (initial click to show confirmation)
    // Check if the target has the 'delete' class AND if the onDelete callback is provided
    if(target.classList.contains('delete') && typeof _currentCallbacks.onDelete === 'function') {
            currentConfirmatingRowElement = actionCell;
            showDeleteConfirmingButtons(actionCell, id, _currentCallbacks.onDelete);
    } else if ((target.classList.contains('edit') && typeof _currentCallbacks.onedit === 'function')){
        console.log('Edit will be coded later');

    }


};

footprintTableBody.addEventListener('click', handleTableClick);











// Will call hideDeleteConfirmationButtons internally
// Prevent bubbling to tableBody's general listener
// Perform deletion
// Reset state after action
//
// resetRowConfirmationState

// Call the private helper
// Reset the state
//
// hideDeleteConfirmationButtons

// Nothing to hide









