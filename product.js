// Simple product interaction
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});
const cartItems = [];
const cartTotal = document.getElementById('cart-total');
const cartItemsList = document.getElementById('cart-items');

function updateCart() { 
    cartItemsList.innerHTML = '';
    let total = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });
    cartTotal.textContent = total;
}

// Redirect to the Signup/Login page
function redirectToSignup() {
    // Replace 'signup.html' with the actual path to your signup/login page
    window.location.href = 'signup.html';
  }

const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'), 10);
        const item = { name, price };
        cartItems.push(item);
        updateCart();
    });
});
