const getInTouchButton = document.querySelector("#get-in-touch-button");
const formContainer = document.querySelector("#form-container");

getInTouchButton.addEventListener("click", function() {
    formContainer.style.display = "block";
    getInTouchButton.style.display = "none";
});