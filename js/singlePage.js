
//  <><><><><><><><><><>  GET THE URL ID  <><><><><><><><><><>
let currentUrl = new URL(window.location.href);
let searchIdParams = new URLSearchParams(currentUrl.search);
let urlId = searchIdParams.get('id');
let singlePageUrl = 'http://localhost:3000/api/teddies/'+urlId;

//  <><><><><><><><><><>  FETCH PER ID <><><><><><><><><><>

let articleName = document.getElementById('single-product__name');
let articlePrice = document.getElementById('single-product__price');
let articleDescription = document.getElementById('single-product__description');
let articleOptionsContainer = document.getElementById('options-container');
let articleImg = document.getElementById('single-product__img');

fetch(singlePageUrl)
.then(resultat => resultat.json())
.then(data => fetchSinglePage (data));

function fetchSinglePage(data) {
    articleName.textContent = data.name;
    articlePrice.textContent = '$'+data.price;
    articleDescription.textContent = data.description;
    articleImg.src = data.imageUrl;

    for (var i=0; i < data.colors.length; i++) {

        var colorDiv = document.createElement('div');

        var colorInput = document.createElement('input');
        var colorLabel = document.createElement('label');

        colorLabel.innerHTML += "   " + data.colors[i];

        colorDiv.classList.add('option');
        colorDiv.setAttribute('id','option' + [i]);
        colorInput.setAttribute("type", "radio");
        colorInput.classList.add('radio');
        colorInput.setAttribute("id", data.colors[i]);
        colorInput.setAttribute("value", data.colors[i]);
        colorInput.setAttribute("name", "category");
        colorLabel.setAttribute("for", data.colors[i]);

        colorDiv.appendChild(colorInput);
        colorDiv.appendChild(colorLabel);

        articleOptionsContainer.appendChild(colorDiv);
    }

    const selected = document.querySelector(".selected");
    const optionsContainer = document.querySelector(".options-container");

    const optionsList = document.querySelectorAll(".option");

    selected.addEventListener('click', () => {
        optionsContainer.classList.toggle("active");
    });

    optionsList.forEach (o => {
        o.addEventListener("click", () => {
            selected.innerHTML = o.querySelector("label").innerHTML;
            optionsContainer.classList.remove("active");
        })
    })

    //set default radio button
    const defaultRadioButton = document.getElementById("option0");
    const defaultRadioButton1 = document.getElementById("option1");
    defaultRadioButton.firstElementChild.setAttribute("checked", "checked");

    // click function

    addToCart.addEventListener('click', () => {
            globalCart(data); // Number of teddies in cart
            setItems(data);
            totalCost(data);
    })

    // Global cart (ls)
    function globalCart(data) {

        let productNumbers = localStorage.getItem('globalCart');
        productNumbers = parseInt(productNumbers);
    
        if(productNumbers) {
            localStorage.setItem('globalCart', productNumbers + 1);
            productInCart.textContent = productNumbers + 1;
    
        } else {
            localStorage.setItem('globalCart',  1)
            productInCart.textContent = 1;
        }
    }

    // console.log(document.querySelector('input[name="category"]:checked').value);
    console.log(document.querySelector('input[name="category"].value'));

    // Product in cart (ls)
    function setItems(data) {
        let cartItems = localStorage.getItem('productsInCart');
        cartItems = JSON.parse(cartItems);

        let radioValue = document.querySelector('input[name="category"]:checked').value;
        

        if (cartItems == null) {
            cartItems = {};
        }
        if (data.name + radioValue in cartItems) {
            cartItems[data.name + radioValue].inCart += 1;
            // cartItems[data.name].colors.push(radioValue);
        } else {
            cartItems[data.name + radioValue] = data;
            
            cartItems[data.name + radioValue].inCart = 1;
            cartItems[data.name + radioValue].colors = radioValue;

        }
        localStorage.setItem("productsInCart", JSON.stringify(cartItems));

    }

    // Total cost (ls)
    function totalCost (data) {
        let cartCost = localStorage.getItem('totalCost')
    
        if(cartCost != null) {
            cartCost = parseInt (cartCost);
            localStorage.setItem("totalCost", cartCost + data.price );
        } else {
            localStorage.setItem("totalCost", data.price );
        }
    }
}

// display the global cart
let addToCart = document.getElementById('add-cart');
let productInCart = document.getElementById('product-in-cart')

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('globalCart');

    if(productNumbers) {
        productInCart.textContent = productNumbers;
    }
}


addToCart.addEventListener('click', () => {
    productInCart.style.add
});


onLoadCartNumbers();











































// //Test 1

// function myFunction(data) { // mettre en function
//     btnInsert.onclick = function () {

//     let inpKeyImage = 'procutImage';
//     let inpValueImage = data.imageUrl;

//     let inpKeyName = 'productName';
//     let inpValueName = data.name;

//     let inpKeyPrice = 'productPrice';
//     let inpValuePrice = '$' + data.price;

//     let btnInsert = document.getElementById('btnInsert');
//     let lsOutput = document.getElementById('lsOutput');

//         // articleName.style.color = 'red';
//         localStorage.setItem(inpKeyImage, inpValueImage);
//         localStorage.setItem(inpKeyName, inpValueName);
//         localStorage.setItem(inpKeyPrice, inpValuePrice);

//     }
// }

// Video 1 to 5]

// //OLD
// let product = [
//     {
//     "colors": [
//         "Tan",
//         "Chocolate",
//         "Black",
//         "White"
//     ],
//     "_id": "5be9c8541c9d440000665243",
//     "name": "pauly",
//     "price": 2900,
//     "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "inCart": 0
//     }
// ];

// //OLD

// addToCart.addEventListener('click', () => {
//     // console.log('added to cart');
//         cartNumbers(product);
//         totalCost(product);
    
// })


// //Old total number of teddies in cart
// function cartNumbers(product) {

//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);

//     if(productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         productInCart.textContent = productNumbers + 1;

//     } else {
//         localStorage.setItem('cartNumbers',  1)
//         productInCart.textContent = 1;
//     }

//     setItems(product);

// }

// //Old differenciate the products in my local storage
// function setItems(product) {
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);


//     if(cartItems != null){

//         // allow to take different product in cart (19 min video 3)
//         // if (cartItems[product.name][0] == undefined) { //update cartItems
//         //     cartItems = {
//         //         ...cartItems,
//         //         [product[0].name]: product
//         //     }
//         // }
//         // cartItems[product.name][0].inCart += 1; // not working
//         cartItems["Norbert"][0].inCart += 1;
//     } else {
//         product[0].inCart = 1;
//         cartItems = {

//             [product[0].name]: product //prendre dans JSON, dans Array? petit résumé
//         } 
//     }

   
//     localStorage.setItem("productsInCart", JSON.stringify(cartItems));

// }


// function totalCost (product) {
    
//     let cartCost = localStorage.getItem('totalCost')
    

//     // console.log("mycartCost price is", cartCost);
//     // console.log(typeof cartCost);

//     if(cartCost != null) {
//         cartCost = parseInt (cartCost);
//         localStorage.setItem("totalCost", cartCost + product[0].price );
//     } else {
//         localStorage.setItem("totalCost", product[0].price );
//     }
// }