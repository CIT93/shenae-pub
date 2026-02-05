// --- Part 1: Select Form Elements ---
// Quantity input
const qtyInput = document.getElementById("qty");

// Gift wrap checkboxes
const giftWrapInput = document.getElementById("gift-wrap");

// Size radio buttons 
const sizeRadios = document.querySelectorAll('input[name="size"]');

// Log elements to make sure they are not null
console.log('DOM Elements loaded:', { qtyInput, giftWrapInput, sizeRadios });


// --- Part 2: Helper Function to find the checked radio button ---
// Returns the value of the checked radio button
const getSelectedRadioValue = function () {
    for (const radio of sizeRadios) {
        if (radio.checked) {
            console.log('Found checked radio:', radio.value);
            return radio.value

        }

    }
};
// --- Part 3: Export the main function
export function getOrderInputs() {
   const data = {
        qty: parseInt(qtyInput.value) || 1, //Use parseInt for integers
        size: getSelectedRadioValue(),
        giftWrap: giftWrapInput.checked // Use .checked for booleans (true/false)
    };
    console.log('Order Data Object created:');
console.log('This is my ..', qtyInput.value)
    return data;
}

