const shoppingCartQuantity = document.querySelector("#display-shopping-cart-quantity");

let totalCartValue = 0;
function addCartValue() {
    totalCartValue++;
    shoppingCartQuantity.textContent = totalCartValue; 
}

for (let i = 1; i < 9; i++) {
    const buttonId = "#add-to-cart-button" + i;
    const addToCartButton = document.querySelector(buttonId);
    addToCartButton.addEventListener("click", addCartValue);
}
