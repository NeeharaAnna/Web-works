function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};

    let itemElement = document.querySelector(`.menu-item[data-id="${id}"]`);
    let itemName = itemElement.getAttribute("data-name");
    let itemPrice = parseFloat(itemElement.getAttribute("data-price"));

    if (cart[id]) {
        cart[id].quantity += 1;
    } else {
        cart[id] = { name: itemName, price: itemPrice, quantity: 1 };
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || {};
    let count = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById("cart-count").innerText = count;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
