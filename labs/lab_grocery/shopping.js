/*
 * Filename:    shopping.js
 * Description: FILL IN
 * Author:      FILL IN
 */

'use strict'

// CREATE YOUR GLOBAL GROCERY LIST ARRAY
const list = [];

// Global Object Constructor / Class Syntax

const elForm = document.getElementById('list');
elForm.addEventListener('submit', function(e) {
    e.preventDefault();

// Event Listener to Process Form Submission

    //Text input
    const elText = document.getElementById('text');
    list.push(elText.value);
    
    const elQuantity = document.getElementById('num');
    let quantity = elQuantity.value;
    list.push(quantity);
    
    //Select 
    const elSelect = document.getElementsByClassName('grocery');
    
    let currentValue = elSelect.options[elSelect.selectedIndex].value;
    
    Update(list);

    elForm.reset();

)};


// Event Listener to Handle Removal of First Item

const elRemoveFirst = list.shift();

// Event Listener to Handle Removal of Last Item

const elRemoveLast = list.pop();

// Function to Update the Text of the List
function update(list) {
    const elOption document.querySelector('slect');
    let htmlString = '';
    for (let value of list) {
        htmlString += `<option>${elText.value + elQuantity.value}</option>`;
    }
    elOption.innerHTML = htmlString;
}

