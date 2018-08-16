/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i of Product.allProducts) {
    var createOptionTag = document.createElement('option');
    createOptionTag.textContent = i.name;
    selectElement.appendChild(createOptionTag);
  }

}
populateForm();

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

var cartQuantity = 0;


// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {

  var itemQuantity = document.getElementById('quantity').value;
  var itemPicked = document.getElementById('items').value;
  // TODO: suss out the item picked from the select list

  // TODO: get the quantity

  // TODO: using those, add one item to the Cart
  console.log(`${itemPicked} item and ${itemQuantity} quantity`);
  cart.addItem(itemPicked, itemQuantity);
  console.log(cart.items);
  console.log(cartQuantity);
  cartQuantity += Number(itemQuantity);
  console.log(cartQuantity);
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

  var productCounter = document.getElementById('itemCount');
  productCounter.textContent = cartQuantity;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var itemQuantity = document.getElementById('quantity').value;
  var itemPicked = document.getElementById('items').value;
  // TODO: Get the item and quantity from the form
  var cartPreview = document.getElementById('cartContents');

  // TODO: Add a new element to the cartContents div with that information
  var cartList = document.createElement('ul');
  cartPreview.appendChild(cartList);
  var cartListItem = document.createElement('li');
  cartListItem.textContent = `Item = ${itemPicked} Quantity = ${itemQuantity}`;
  cartList.appendChild(cartListItem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
