//  <><><><><><><><><><>  Global Cart <><><><><><><><><><>

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('globalCart');
    let productInCart = document.getElementById('product-in-cart')

    if(productNumbers) {
        productInCart.textContent = productNumbers;
    }
}
onLoadCartNumbers();



//  <><><><><><><><><><>  Confirmation <><><><><><><><><><>

let firstName = document.getElementById("first-name");
let numberOfItems = document.getElementById("number-of-items");
let orderId = document.getElementById("order-id");
let totalPrice = document.getElementById("total-price");

firstName.textContent = "Hi " +  localStorage.getItem("responseFirstName") + ", your package will arrive next week";
numberOfItems.textContent = "Number if item: " + localStorage.getItem("globalCart");
orderId.textContent = "Order: #" + localStorage.getItem("responseOrderId");
totalPrice.textContent  = "$" +localStorage.getItem("totalCost");

