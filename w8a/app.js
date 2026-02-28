console.log('Hello from app.js! Your JavaScript is connected and running!');

// Week 7.1: Now supports deleting entries from the table.
// Week 5: Now save entries to localStorage after submission.
import * as formHandler from './form-handler.js';
import * as calculator from './calculator.js';
import * as resultsDisplay from './results-display.js';
import * as storage from './storage.js';
import * as tableRenderer from './table-renderer.js';
// --- Week 6.1 ---We will modify the handleFormSubmit function to trigger the table update after a new entry.

// Declare a 'const' array to hold all submitted carbon footprint entries in memory.
// We use 'const' because the 'carbonFootprintEntries' variable will always refer
// to the same array, even though the array's contents will change (items added).
const carbonFootprintEntries = []; // Empty Array Literal - Global Variable

// References the main carbon footprint form.
const carbonFootprintForm = document.getElementById('carbonFootprintForm');

// References the input field for the number of household members.
// const householdMembersInput = carbonFootprintForm.querySelector('#householdMembers');

// References the clear form button.
const clearFormButton = document.getElementById('clearFormButton');

// Get reference to Clear All Data button
const clearAllDataButton = document.getElementById('clearAllDataButton');
// Handles the Form submission event, preventing the default page reload.

// State variables for in-line confirmation of "Clear All Data" button.
let isConfirmingClearAll = false; // Tracks if the button is in a "confirming" state.
let clearAllTimeoutId = null; // Stores the ID returned by setTimeout, so we can cancel it.



// Resets the "Clear All Data" button to its original text and appearance.

const resetClearAllButton = function() {
    // Clears any pending confirmation timeout.
    if(clearAllTimeoutId) {
        clearTimeout(clearAllTimeoutId);
    }
    // If a timeout is active (meaning the button is in a confirming state), clear it.
    isConfirmingClearAll = false;
    
    clearAllDataButton.textContent = 'Clear All Saved Data';
    clearAllDataButton.classList.remove('danger-button');
    clearAllDataButton.classList.remove('confirm-state');
    // Reset the confirmation state
    clearAllDataButton.classList.add('danger-button');
}


// Resets all UI-related confirmation stated accrocc the application.
const ResetAllUIStates = function() {
    // This function is called when major actions (like form submit, clear, delete) occur, ensuring a clean UI state.
    // Add to any state that updates the DOM.
    // This will be expanded in later weeks to include table row confirmations
    resetClearAllButton();
}



// Handles the form submission event, prevent default page load.
// calculating footprint, creating new entry, and saving it to local storage.
const handleFormSubmit = function(event) {
    event.preventDefault();
    const formData = formHandler.getFormInputs();
   // console.log(formData);
    const calculatedResults = calculator.calculateFootprint(formData);
   
   // Combine the input data with the calculated results into a single entry object.
   // Date.now() gives milliseconds since Jan 1, 1970. .toISOString() formats it nicely.
   // Use the spread operator '...' to quickly copy all properties from formData
   // Copy all properties from calculatedResults
   // Add a timestamp for when this entry was created.
   const newEntry = {
    ...formData,
    ...calculatedResults,
    id: storage.generateUniqueId(),
    timestamp: new Date().toISOString()
   };
   // Add the new entry to our 'carbonFootprintEntries' array.
   carbonFootprintEntries.push(newEntry);
   // Log the full array!
  
    
   // Saves the given array of entries to localStorage.
   storage.saveEntries(carbonFootprintEntries);

    resultsDisplay.displayResults(calculatedResults);
    tableRenderer.renderTable(carbonFootprintEntries, {
        onDelete: handleDeleteEntry,
        onEdit: handleEditEntry
    });
    ResetAllUIStates();

};
// New function to perform the actual clearing of all saved data.
const performClearAllData = function() {
    // Clear the in-memory array.
    // Setting length to 0 efficiently clears the array while keeping its const reference.
    carbonFootprintEntries.length = 0;
    
    storage.clearAllEntries();
    // Re-render table (will show "No entries")
    tableRenderer.renderTable(carbonFootprintEntries, {
        onDelete: handleDeleteEntry,
        onEdit: handleEditEntry
    });
    // Clear form inputs.
    formHandler.clearForm();
    // Hide the results section.
    resultsDisplay.hideResults();
    ResetAllUIStates();
}
// Handles the clear form button click, resetting form fields.
const handleClearForm = function () {
    formHandler.clearForm();
    // carbonFootprintForm.reset();
    // householdMembersInput.value = 1;
    resultsDisplay.hideResults();
    
    ResetAllUIStates();
};
   

// Handles the "Delete" action for a specific entry.
const handleDeleteEntry = function(id) {
  
    console.log(`Delete button clicked for ID: ${id} functionality added in week 7`);
     // 1. Find the index of the entry to delete in our in-memory array.
    const indexToDelete = carbonFootprintEntries.findIndex(function(entry){
            return entry.id === id;
    });
    if(indexToDelete !== -1) {
          // 2. Remove the entry from the in-memory array using splice().
        carbonFootprintEntries.splice(indexToDelete, 1);
        console.log(`Entry removed from memory`);
        // 3. Save the modified (smaller) array back to localStorage.
        storage.saveEntries(carbonFootprintEntries);
        // 4. Re-render the table to reflect the deletion.
        tableRenderer.renderTable(carbonFootprintEntries, {
            onDelete: handleDeleteEntry,
            onEdit: handleEditEntry
            
        });
        // 5. If the table is now empty, hide the results section and clear the form.
        if(carbonFootprintEntries.length === 0){
            resultsDisplay.hideResults();
            formHandler.clearForm();
        }
        // Reset states even if entry not found (e.g., error case)
         ResetAllUIStates();
    } else {
        console.log(`Did not find index`);
        ResetAllUIStates();
    }
    
   
}

// Handles the "Edit" button click for a specific entry.
const handleEditEntry = function(id) {
    console.log(`Edit button clicked for ID: ${id} functionality added in week 7`)
   
    ResetAllUIStates();
}
// Initializes the application by setting up event listeners.
const init = function () {
    console.log('App initialized: DOM is ready! Try submittinf the form or clearing it.')
    carbonFootprintForm.addEventListener('submit', handleFormSubmit);
    clearFormButton.addEventListener('click', handleClearForm);
    resultsDisplay.hideResults();
    // On startup, attempt to load any previously saved entries from localStorage.
    const loadedEntries = storage.loadEntries();
    if (loadedEntries.length > 0) {

        // carbonFootprintEntries array using the spread operator (...).
        carbonFootprintEntries.push(...loadedEntries);
        console.log('Enteries loaded from local storage');
    } else {
      
    }
    // handleDeleteEntry("1771875748068");
    // If there are no entries, hide the table and show the "no entries" message.
    // init function - Event listener for "Clear All Data"
     tableRenderer.renderTable(carbonFootprintEntries, {
        onDelete: handleDeleteEntry,
        onEdit: handleEditEntry
     })
 
     clearAllDataButton.addEventListener('click', function(event){
        event.stopPropagation(); // Prevents this click from potentially triggering other global click listeners.
        if(isConfirmingClearAll) {
            // Second click: User confirms, so perform the action.
            performClearAllData();
        } else {
            // First click: Ask for confirmation by changing button text and state.
             isConfirmingClearAll = true;
             clearAllDataButton.textContent = 'Are you sure? Click again'; 
             // Add a class to change its appearance (defined in style.css).
             clearAllDataButton.classList.add('confirm-state');
             // Set a timeout to automatically revert the button state if the user doesn't click again.
             clearAllTimeoutId = setTimeout(function () {
                resetClearAllButton();
                
             }, 3000); /// 3 seconds
            }
     });   
     // Global click listener to reset the "Clear All Data" button state
    // if the user clicks anywhere else on the page while confirmation is pending.
    // Only reset if we are in a confirming state AND the click was outside the button itself.
     document.addEventListener('click', function(event){
       
        if(isConfirmingClearAll && event.target !== clearAllDataButton) {
            resetClearAllButton();
        }
     });
};

document.addEventListener('DOMContentLoaded', init);






























