console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// TODOS
// Create a global variable named basket and set it to an empty array.
let basket = [];
let maxItems = 5;

function addItem(item) {
    basket.push(item);
    if (isFull()){
        return true;
    }
    return false;
  }

  // Function to list all items in the basket
function listItems() {
    for (let item of basket) {
      console.log(item);
    }
  }

  // Function to empty the basket
function empty() {
    basket.length = 0;
  }

  function removeItem(){
    let index = basket.indexOf(item);
    if(index !== -1){
        return basket.splice(index,1)[0]
    }
    return null;
  }


// Create a function called addItem. It should:
// take an input parameter for a string item
// add the new item to the global array basket.
// return true indicating the item was added
// Create a function called listItems. It should:
// loop over the items in the basket array
// console.log each individual item on a new line
// Create a function called empty. It should:
// reset the basket to an empty array
// do not use basket = [] to reset the array











// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
