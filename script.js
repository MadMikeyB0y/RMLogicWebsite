// Simulated Cart Array
const cart = [];

// Function to handle Add to Cart
function addToCart(productName, price) {
    const item = { productName, price };
    cart.push(item);
    alert(`${productName} has been added to your cart!`);
    console.log(cart); // View cart in the browser console
}

// Attach Event Listeners to Buttons
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.product button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productName = document.querySelectorAll('.product h3')[index].innerText;
            const price = document.querySelectorAll('.product p')[index].innerText;
            addToCart(productName, price);
        });
    });
});