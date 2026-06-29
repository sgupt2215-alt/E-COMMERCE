const cartItems = document.getElementById('cartItems');

const total = document.getElementById('total');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

displayCart();


// Display Cart
function displayCart() {

    let totalPrice = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const itemPrice = Math.round(item.price * 85);

        totalPrice += itemPrice;

        cartItems.innerHTML += `
        
        <div class="cart-card">

            <div class="cart-left">

                <img src="${item.thumbnail}" />

                <div class="cart-info">

                    <h3>${item.title}</h3>

                    <p>
                      ₹${itemPrice.toLocaleString('en-IN')}
                    </p>

                </div>

            </div>

            <button onclick="removeItem(${item.id})">
                Remove
            </button>

        </div>
        `;
    });


    // Update Total Bill
    total.innerHTML = `
        Total Bill : ₹${totalPrice.toLocaleString('en-IN')}
    `;
}


// Remove Item
function removeItem(productId) {

    cart = cart.filter(item => item.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}
