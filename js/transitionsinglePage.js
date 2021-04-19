
//  <><><><><><><><><><>  GET THE URL ID  <><><><><><><><><><>
let currentUrl = new URL(window.location.href);
let searchIdParams = new URLSearchParams(currentUrl.search);
let urlId = searchIdParams.get('id');
// console.log(urlId);
// console.log('http://localhost:3000/api/teddies/'+urlId);
let singlePageUrl = 'http://localhost:3000/api/teddies/'+urlId;
// console.log(singlePageUrl);

//  <><><><><><><><><><>  GET THE ID PARAM <><><><><><><><><><>
// const queryString = window.location.search;
// console.log(queryString);

//  <><><><><><><><><><>  FETCH PER ID <><><><><><><><><><>

let articleName = document.getElementById('single-product__name');
let articlePrice = document.getElementById('single-product__price');
let articleDescription = document.getElementById('single-product__description');
let articleColors = document.getElementById('single-product__colors');
let articleImg = document.getElementById('single-product__img');

fetch(singlePageUrl)
.then(resultat => resultat.json())
.then(data => fetchSinglePage (data));

function fetchSinglePage(data) {
    articleName.textContent = data.name;
    articlePrice.textContent = '$'+data.price;
    articleDescription.textContent = data.description;
    articleColors.textContent = data.colors;
    articleImg.src = data.imageUrl;


    //LOCAL STORAGE 

    // myFunction(data);
    // console.log(data.name);

    addToCart.addEventListener('click', () => {
            numberOfIteminCart(data); // Number of teddies in cart
            // totalCost(data);


        
    })

    // number of teddies in global cart
    function numberOfIteminCart(data) {

        let productNumbers = localStorage.getItem('numberOfIteminCart');
        productNumbers = parseInt(productNumbers);
    
        if(productNumbers) {
            localStorage.setItem('numberOfIteminCart', productNumbers + 1);
            productInCart.textContent = productNumbers + 1;
    
        } else {
            localStorage.setItem('numberOfIteminCart',  1)
            productInCart.textContent = 1;
        }
    
        setItems(data);
    
    }

    // differenciate the products in my local storage
    function setItems(data) {
    let cartItems = localStorage.getItem('testProductsInCart');
    cartItems = JSON.parse(cartItems);


    if(cartItems != null){

        // allow to take different product in cart (19 min video 3)
        if (cartItems[data.name] == undefined) { //update cartItems
            cartItems = {
                ...cartItems,
                [data.name]: data
            }
        }
        // cartItems[product.name][0].inCart += 1; // not working
        // cartItems["Norbert"][0].inCart += 1;
        console.log(cartItems[data.name])
    } else {
        // data[0].inCart = 1;
        cartItems = {

            [data.name]: data//prendre dans JSON, dans Array? petit résumé
        } 
    }

   
    localStorage.setItem("testProductsInCart", JSON.stringify(cartItems));

}



    
    
}



//  <><><><><><><><><><>  LOCAL STORAGE <><><><><><><><><><>

function myFunction(data) { // mettre en function
    btnInsert.onclick = function () {

    let inpKeyImage = 'procutImage';
    let inpValueImage = data.imageUrl;

    let inpKeyName = 'productName';
    let inpValueName = data.name;

    let inpKeyPrice = 'productPrice';
    let inpValuePrice = '$' + data.price;

    let btnInsert = document.getElementById('btnInsert');
    let lsOutput = document.getElementById('lsOutput');

        // articleName.style.color = 'red';
        localStorage.setItem(inpKeyImage, inpValueImage);
        localStorage.setItem(inpKeyName, inpValueName);
        localStorage.setItem(inpKeyPrice, inpValuePrice);

    }
}

// sum the number of product in local storage

// let carts = document.querySelectorAll('.add-cart');
let addToCart = document.getElementById('add-cart');
let productInCart = document.getElementById('product-in-cart')


let product = [
    {
    "colors": [
        "Tan",
        "Chocolate",
        "Black",
        "White"
    ],
    "_id": "5be9c8541c9d440000665243",
    "name": "pauly",
    "price": 2900,
    "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
    "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "inCart": 0
    }
];

// -> I will need to update the JSON file with the key inCart

// When I click I want:

addToCart.addEventListener('click', () => {
    // console.log('added to cart');
        cartNumbers(product);
        totalCost(product);
    
})


// total number of teddies in cart
function cartNumbers(product) {

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        productInCart.textContent = productNumbers + 1;

    } else {
        localStorage.setItem('cartNumbers',  1)
        productInCart.textContent = 1;
    }

    setItems(product);

}

// differenciate the products in my local storage
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);


    if(cartItems != null){

        // allow to take different product in cart (19 min video 3)
        // if (cartItems[product.name][0] == undefined) { //update cartItems
        //     cartItems = {
        //         ...cartItems,
        //         [product[0].name]: product
        //     }
        // }
        // cartItems[product.name][0].inCart += 1; // not working
        cartItems["Norbert"][0].inCart += 1;
    } else {
        product[0].inCart = 1;
        cartItems = {

            [product[0].name]: product //prendre dans JSON, dans Array? petit résumé
        } 
    }

   
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));

}


function totalCost (product) {
    
    
    
    let cartCost = localStorage.getItem('totalCost')
    

    // console.log("mycartCost price is", cartCost);
    // console.log(typeof cartCost);

    if(cartCost != null) {
        cartCost = parseInt (cartCost);
        localStorage.setItem("totalCost", cartCost + product[0].price );
    } else {
        localStorage.setItem("totalCost", product[0].price );
    }
}

// link the number of product in cart to local storage
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        productInCart.textContent = productNumbers;
    }
}

onLoadCartNumbers();