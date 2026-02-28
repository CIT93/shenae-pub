// This module handles displaying and hiding the calculated carbon footprint results on the page.

// Get references to the HTML elements where we will display the results.
const resultsContainer = document.getElementById('results');

// Now, we use resultsContainer.querySelector() to get elements inside the resultsContainer.
const totalFootprintDisplay = resultsContainer.querySelector('#totalFootprint');
const householdFootprintDisplay = resultsContainer.querySelector('#householdFootprint');
const homeSizeFootprintDisplay = resultsContainer.querySelector('#homeSizeFootprint');
const foodDietFootprintDisplay = resultsContainer.querySelector('#foodDietFootprint');
const foodPackagingFootprintDisplay = resultsContainer.querySelector('#foodPackagingFootprint');


// Displays the calculated carbon footprint results in the results section.
// @param {Object} results - An object containing the calculated footprint values (points).
// results-display.js

16: export const displayResults = function (results) {
17:   console.log('inside the displayResults function');
18:
19:   totalFootprintDisplay.textContent = `${results.totalFootprint.toFixed(0)} Points`;
20:   householdFootprintDisplay.textContent = `Household Size ${results.householdFootprint.toFixed(0)} Points`;
21:   homeSizeFootprintDisplay.textContent = `Home Size ${results.homeSizeFootprint.toFixed(0)} Points`;
22:   foodDietFootprintDisplay.textContent = `Food Diet ${results.dietTypeFootprint.toFixed(0)} Points`;
23:   foodPackagingFootprintDisplay.textContent = `Food Packaging ${results.foodPackagingFootprint.toFixed(0) Points`;
24:
25:   resultsContainer.style.display = 'block';
26: };
};


// Hides the entire results section.
export const hideResults = function () {
  resultsContainer.style.display = 'none';
};