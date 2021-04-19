
//  <><><><><><><><><><>  Global Cart <><><><><><><><><><>
function onLoadCartNumbers(product, action) {
    let productInCart = document.getElementById('product-in-cart')
    let productNumbers = localStorage.getItem('globalCart');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if( action == 'decrease' ) {
        localStorage.setItem('globalCart', productNumbers - 1);
        productInCart.textContent = productNumbers - 1;
        
    } else if (action == 'increase') {
        localStorage.setItem('globalCart', productNumbers + 1);
        productInCart.te
        productInCart.textContent = productNumbers + 1;

    } else {
        productInCart.textContent = productNumbers;
    }
}
onLoadCartNumbers();

//  <><><><><><><><><><>  Display Cart <><><><><><><><><><>
function displayCart() {
        let cartItems = localStorage.getItem("productsInCart");
        cartItems = JSON.parse(cartItems);
        // console.log(Object.keys(cartItems)[0])
    
        let productContainer = document.querySelector(".products");

        if(cartItems && productContainer) {
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                        <div id="cart__flex">
                                <div id="cart__flex--item1" >
                                        <img class="product__image" src=${item.imageUrl}>
                                </div>
                
                                <div id="cart__flex--item2" >
                                        <div class="cart-product__name">${item.name}</div>
                                        <span class="cart-product__color">color:</span>
                                        <span class="cart-product__color--selected">${item.colors}</span>
                                        
                                        <div  class="cart-product__quantity">
                                                <span class="cart-product__QTY">QTY:</span>
                                                <i class="fas fa-minus cart-product__minus"></i>
                                                <span class="cart-product__number-of-item">${item.inCart}</span>
                                                <i class="fas fa-plus cart-product__plus"></i>
                                        </div>
                                </div>
                
                                <div id="cart__flex--item3" >
                                        <button type="button" class="cart-product__delete" id="btnDelete"><i class="fas fa-times"></i></button>
                                        <div class="cart-product__price">$${item.inCart * item.price}</div>
                                </div>                      
                        </div>
                `;

            });
                let totalCost = localStorage.getItem('totalCost')
                productContainer.innerHTML += `
                        <div class="basket-total__container">
                                <h4 class="basket-total__title">
                                        Sub-total
                                </h4>
                                <h4 class="basket-total__total">
                                        $${totalCost}
                                </h4>
                        </div>
                `;
        }

        deletebuttons();
        manageQuantity();
}

displayCart();

//  <><><><><><><><><><>  Delete Buttons <><><><><><><><><><>
function deletebuttons() {
        let deletebuttons = document.querySelectorAll(".cart-product__delete");
        let productName= document.querySelectorAll(".cart-product__name");
        let productNameContent;

        let productNumbers = localStorage.getItem('globalCart');

        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);
        let cartCost = localStorage.getItem('totalCost');

        for(let i=0; i < deletebuttons.length; i++) {
                deletebuttons[i].addEventListener('click', () => {
                // productNameContent = productName[i].textContent.trim().toLowerCase().replace(/ /g, '');
                productNameContent = Object.keys(cartItems)[i];
                // console.log(productNameContent);
                // console.log(cartItems[productNameContent]);
                // console.log(cartItems[productNameContent].name + "   " + cartItems[productNameContent].inCart);
                
                localStorage.setItem("globalCart", productNumbers - cartItems[productNameContent].inCart )
                localStorage.setItem("totalCost", cartCost - cartItems[productNameContent].price * cartItems[productNameContent].inCart ) 

                delete cartItems[productNameContent];

                localStorage.setItem('productsInCart', JSON.stringify(cartItems));

                displayCart();
                onLoadCartNumbers();

                })
        }
}

//  <><><><><><><><><><>  Quantity buttons <><><><><><><><><><>
function manageQuantity() {
    let  decreaseButtons = document.querySelectorAll('.fa-minus');
    let  increaseButtons = document.querySelectorAll('.fa-plus'); 

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    // console.log(cartItems);
    // console.log(Object.keys(cartItems)[1]);
    
    let currentQuantity = 0;
    let currentProduct = '';

    // Decrease
    for(let i=0; i < decreaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            currentQuantity = decreaseButtons[i].nextElementSibling.textContent;
            console.log(currentQuantity)
            // currentProduct = decreaseButtons[i].parentElement.previousElementSibling.textContent.trim();
            currentProduct = Object.keys(cartItems)[i];
            console.log(currentProduct);

        if(cartItems[currentProduct].inCart > 0) {
            cartItems[currentProduct].inCart -= 1;


            onLoadCartNumbers(cartItems[currentProduct], "decrease");

            //total cost
            let cartCost = localStorage.getItem('totalCost')
            cartCost = parseInt (cartCost);
            localStorage.setItem("totalCost", cartCost - cartItems[currentProduct].price )


            console.log(cartItems[currentProduct].inCart)
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
        }
        })
    }

    // Increase
    for(let i=0; i < increaseButtons.length; i++) {
        increaseButtons[i].addEventListener('click', () => {
            currentQuantity = increaseButtons[i].previousElementSibling.textContent;
            // console.log(currentQuantity)
            currentProduct = Object.keys(cartItems)[i];
            // console.log(currentProduct);

            // global cart
            cartItems[currentProduct].inCart += 1;

            onLoadCartNumbers(cartItems[currentProduct], "increase");

            console.log(cartItems[currentProduct].inCart)
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));


            //total cost
            let cartCost = localStorage.getItem('totalCost')
            cartCost = parseInt (cartCost);
            localStorage.setItem("totalCost", cartCost + cartItems[currentProduct].price )

            displayCart();
        })
    }
}

//  <><><><><><><><><><>  Form  <><><><><><><><><><>

let cartItems = localStorage.getItem('productsInCart');

cartItems = JSON.parse(cartItems);

const form = document.getElementById('form');
const email = document.getElementById('email');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');

// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // if error, do not accomplish the action
    

// })

function checkInputs() {
    const emailValue = email.value.trim();
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const addressValue = address.value.trim();
    const cityValue = city.value.trim();

    if(emailValue =='') {
        setErrorFor(email, 'please enter your email'); 
    // } else if (!isEmail(emailValue)) {
    //     setErrorFor(email, 'email is not valid yet ;)'); 
    } else {
        //add success class
        setSuccessFor(email); //write the username
    }

    if(firstNameValue =='') {
        //show error
        //add error class
        setErrorFor(firstName, 'please enter your first name'); //write the msg instead of username
    } else {
        //add success class
        setSuccessFor(firstName); //write the username
    }

    if(lastNameValue =='') {
        setErrorFor(lastName, 'please enter your last name'); 
    } else {
        //add success class
        setSuccessFor(lastName); //write the username
    }

    if(addressValue =='') {
        setErrorFor(address, 'please enter your address'); 
    } else {
        //add success class
        setSuccessFor(address); //write the username
    }

    if(cityValue =='') {
        setErrorFor(city, 'please enter your city'); 
    } else {
        //add success class
        setSuccessFor(city); //write the username
    }

}

function setErrorFor(input, message) { // input = username and message = "Username cannot be blank"
    const formControl = input.parentElement; // .form__control // = username.parentElement
    const small = formControl.querySelector('small');
    
    //add error message inside small
    small.innerText = message; //???? (OK) why do I declare it in this function since it is already line 152? and why if I swap message and innerText, is it not working anymore? // Hard for me to understand the relation make a function and call it.

    //add error class
    formControl.className = 'form__control form__control--error' // add a class
}

function setSuccessFor(input) {
    const formControl = input.parentElement; // .form__control
    formControl.className = "form__control form__control--success"; //add a class
} 

// function isEmail(email) {
//     return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|
//     (\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|
//     (([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }



//  <><><><><><><><><><> XML <><><><><><><><><><>

const cartItemsArray = Object.entries(cartItems);
let array = [];

// function lsId () {
for (var i=0; i < cartItemsArray.length; i++) {
    array.push(Object.entries(cartItems)[i][1]._id);
}

// Get form elements
const submitButton = document.getElementById('submit-button');

const url = 'http://localhost:3000/api/teddies/order';

// Get DOM elements for showing response
const responseFirstName= document.getElementById('response-first-name');
const responseId = document.getElementById('response-id');

submitButton.addEventListener('click', ($event) => {
  $event.preventDefault();
  checkInputs();
    const post = {
        contact: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
        products: [array]
        }

    console.log(post);
    submitFormData(post);
});

function makeRequest(data) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 201 || request.status === 200) {
          resolve(JSON.parse(request.response));
          console.log('success')
        } else {
          reject(JSON.parse(request.response));
          console.log('failed')
        }
      }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
  });
}


async function submitFormData(post) {
  try { //if any of this code through an error, we will send the catch block
    const requestPromise = makeRequest(post);
    console.log(requestPromise);
    const response = await requestPromise;
    console.log(response);
    console.log(response.orderId);
    
    // print response to the DOM
    responseFirstName.textContent = response.contact.firstName;
    responseId.textContent = response.orderId;
    localStorage.setItem("responseFirstName", response.contact.firstName);
    localStorage.setItem("responseOrderId", response.orderId);
    window.location = 'confirmation.html';
    // responseContent.textContent = response.post.content;

    // contact: req.body.contact,
    // products: teddies,
    // orderId: orderId
    
  } catch (errorResponse) {
    console.log(errorResponse);
    responseMessage.textContent = errorResponse.error;
  }
}