const addToCartButton = document.querySelector("#add-to-cart-button");
const displayShoppingCartQuantity = document.querySelector("#display-shopping-cart-quantity");

let value = 0;
function incrementAndDisplay() {
    value++;
    displayShoppingCartQuantity.textContent = "" + value; 
}


addToCartButton.addEventListener("click", incrementAndDisplay);