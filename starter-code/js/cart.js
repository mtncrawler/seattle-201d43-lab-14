/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var t = document.getElementsByTagName('tbody');
  console.log(t[0].parentNode.remove(1));
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
var cartTable = document.getElementsByTagName('tbody');
function showCart() {

  // TODO: Find the table body
  // TODO: Iterate over the items in the cart
  for (var i in cart.items) {
    var cartTableRow = document.createElement('tr');
    cartTable[0].appendChild(cartTableRow);

    var cartTableDelete = document.createElement('td');
    var deleteLink = document.createElement('BUTTON');
    deleteLink.textContent = 'Delete';
    deleteLink.setAttribute('data-index', i);
    cartTableDelete.appendChild(deleteLink);
    cartTableRow.appendChild(cartTableDelete);

    var cartProductName = document.createElement('td');
    cartProductName.textContent = cart.items[i].product;
    cartTableRow.appendChild(cartProductName);

    var cartProductQuantity = document.createElement('td');
    cartProductQuantity.textContent = cart.items[i].quantity;
    cartTableRow.appendChild(cartProductQuantity);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  cart.removeItem(event.target.dataset.index);
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
