
let teddiesName = document.getElementById('teddies-0-name');
let productName = document.getElementById('single-product-name');

let teddiesColor = document.getElementById('teddies-0-color');
let teddiesImg = document.getElementById('teddies-0-img');
let teddiesPrice = document.getElementById('teddies-0-price');
let teddiesDescription = document.getElementById('teddies-0-description');



// // <><><><><>   Basic Fetch   <><><><><>

// fetch('http://localhost:3000/api/teddies')
// .then(resultat => resultat.json())
// .then(data => teddiesName.textContent = data[0].name);


// fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243')
// .then(resultat => resultat.json())
// .then(data => productName.textContent = data.name);

// fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243')
// .then(resultat => resultat.json())
// .then(data => productName.texteContent = data.name);

// fetch('http://localhost:3000/api/teddies')
// .then((resultat) => resultat.json())
// .then(data => teddiesColor.textContent = data[0].price);

// fetch('http://localhost:3000/api/teddies')
// .then((resultat) => {return resultat.json()})
// .then(data => teddiesDescription.textContent = data[0].description);

// fetch('http://localhost:3000/api/teddies')
// .then(result => result.json())
// .then(data => teddiesImg.src = data[0].imageUrl);


// // <><><><><>   Tedies 1   <><><><><>

// let teddies1Name = document.getElementById('teddies-1-name');
// let teddies1Color = document.getElementById('teddies-1-color');
// let teddies1Img = document.getElementById('teddies-1-img');
// let teddies1Description = document.getElementById('teddies-1-description');
// let teddies1Price = document.getElementById('teddies-1-price');


// fetch('http://localhost:3000/api/teddies')
// .then(resultat => resultat.json())  
// .then(teddiesData => changeTeddiesData (teddiesData) );


// // <><><><><>   Teddies 2   <><><><><>


// let teddies2Name = document.getElementById('teddies-2-name');
// let teddies2Color = document.getElementById('teddies-2-color');
// let teddies2Img = document.getElementById('teddies-2-img');
// let teddies2Price = document.getElementById('teddies-2-price');
// let teddies2Description = document.getElementById('teddies-2-description');

// function changeTeddiesData (teddiesData) {
//     teddies1Name.textContent = teddiesData[1].name;
//     teddies1Color.textContent = teddiesData[1].colors;
//     teddies1Img.src = teddiesData[1].imageUrl;
//     teddies1Description.textContent = teddiesData[1].description;
//     teddies1Price.textContent = teddiesData[1].price; // ??? why not working?

//     teddies2Name.textContent = teddiesData[2].name;
//     teddies2Color.textContent = teddiesData[2].colors;
//     // teddies1Img.textContent = teddiesData[1].imageUrl; // ??? Why not working?
//     teddies2Description.textContent = teddiesData[2].description;
//     teddies2Price.textDescription = teddiesData[2].price;
// }

// fetch('http://localhost:3000/api/teddies')
// .then(resultat => resultat.json())  
// .then(teddiesData => changeTeddiesData (teddiesData) );
 




let test = document.getElementById('text');
let teddies = document.getElementsByClassName('teddies'); //retourne array
let articleFlex = document.getElementsByClassName('article-flex');





// function changeData (data) {
// teddiesName.textContent = data[0].name;


// fetch('http://localhost:3000/api/teddies')
// .then(resultat => resultat.json())  
// .then(data => changeData (data));

// console.log(teddiesName);


// const myUrl = new URL ('https://www.youtube.com/');
// // myUrl.hostname = 'google.com';
// console.log(myUrl);


//  <><><><><><><><><><>  Style <><><><><><><><><><>

let test = document.getElementById('text');
let teddies = document.getElementsByClassName('teddies'); //retourne array
let articleFlex = document.getElementsByClassName('article-flex');


// abi.style.height = "300px";

test.style.color = 'orange';
test.style.backgroundColor = 'teal';
test.style.width = '200px';
test.style.border = "thick solid #0000FF";

// teddies.style.width = '200px';


for (let item of teddies) {
    item.style.width = '200px';
}


teddies0Img.width = "300px"; // net
// abc.style.border = "thick solid #0000FF";

// articleFlex.style.display = 'flex';




















// btnInsert.onclick = function() {
//     localStorage.setItem("id", )
//     console.log(data.name)

//     // console.log('hello');
//     let key = inpKey;
//     let value = inpValue;

//     console.log(key);
//     console.log(value);

//     if (value) {
//         localStorage.setItem(key, value);
//         location.reload();
//     }

//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let value = localStorage.getItem(key);

//         console.log(key);

        // lsOutput.innerHTML += '${key}: ${value}<br'; ???? what is $
//    }



//  <><><><><><><><><><>  LOCAL STORAGE <><><><><><><><><><>

// let addCart = document.getElementById('single-product__add-cart');
// console.log(addCart);

// for(var i = 0; i < addCart.length; i++) {
//     addCart[i].addEventListener('Click', () =>  {
//         cartCount();
//     })
// }

// let productNumbers = localStorage.getItem('cartNumbers');
// procutNumbers = parseInt(productNumbers);

// if(productNumers) {
//     localStorage.setItem('cartNumber', productNumbers + 1);
//     document.getElementById('nav').textContent =  productNumbers + 1;
// } else {
//     localStorage.setItem('cartNumber', 1);
//     document.getElementById('nav').textContent = 1;
// }

//  <><><><><><><><><><>  LOCAL STORAGE <><><><><><><><><><>
// let myObj = {
//     name: 'Domenic',
//     age: 56

// };

// let myObj_serialized = JSON.stringify(myObj);
 
// localStorage.setItem("myObj", myObj_serialized);

// console.log(myObj_serialized);

// let myObj_deserialized = JSON.parse(localStorage.getItem("myObj"));

// console.log(myObj_deserialized);
    
//  <><><><><><><><><><>  LOCAL STORAGE <><><><><><><><><><>
// let inpKey = 'product';
// let inpValue = 'norbert';
// let btnInsert = document.getElementById('btnInsert');
// let lsOutput = document.getElementById('lsOutput');

// btnInsert.onclick = function() {
//     // console.log('hello');
//     let key = inpKey;
//     let value = inpValue;

//     console.log(key);
//     console.log(value);

//     if (value) {
//         localStorage.setItem(key, value);
//         location.reload();
//     }

//     for (let i = 0; i < localStorage.length; i++) {
//         let key = localStorage.key(i);
//         let value = localStorage.getItem(key);

//         console.log(key);

//         // lsOutput.innerHTML += '${key}: ${value}<br'; ???? what is $
//     }
    


//};











//  <><><><><><><><><><>  GET THE URL ID  <><><><><><><><><><>
let currentUrl = new URL(window.location.href);
let searchIdParams = new URLSearchParams(currentUrl.search);
let urlId = searchIdParams.get('id');
// console.log(urlId);
console.log('http://localhost:3000/api/teddies/'+urlId);
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

let image = 'hello';

console.log(image);

function fetchSinglePage(data) {
    articleName.textContent = data.name;
    articlePrice.textContent = '$'+data.price;
    articleDescription.textContent = data.description;
    articleColors.textContent = data.colors;
    articleImg.src = data.imageUrl;


    //<><><><><><> LOCAL STORAGE <><><><><><>

    myFunction(data);
    console.log(data.name);

    let product = data

    addToCart.addEventListener('click', () => {
        // console.log('added to cart');
            cartNumbers(product);
            totalCost(product);
            console.log(totalCost(product))
        
    })
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


// let product = [
//     {
//     "colors": [
//         "Tan",
//         "Chocolate",
//         "Black",
//         "White"
//     ],
//     "_id": "5be9c8541c9d440000665243",
//     "name": "Norbert",
//     "price": 2900,
//     "imageUrl": "http://localhost:3000/images/teddy_1.jpg",
//     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "inCart": 0
//     }
// ];

// -> I will need to update the JSON file with the key inCart

console.log(product);

// When I click I want:

// addToCart.addEventListener('click', () => {
//     // console.log('added to cart');
//         cartNumbers(product);
//         totalCost(product);
    
// })


// the number of product to be updated
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
    

    console.log("mycartCost price is", cartCost);
    console.log(typeof cartCost);

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








//  <><><><><><><><><><> Submit +  Post fetch  <><><><><><><><><><>
form.addEventListener('submit', (e) => {
    e.preventDefault(); // if error, do not accomplish the action
    checkInputs();

    // const dataObject = JSON.stringify( {
    //     contact: {
    //         firstName: firstName.value,
    //         lastName: lastName.value,
    //         address: address.value,
    //         city: city.value,
    //         email: email.value
    //         },
    //     products: [Object.entries(cartItems)[0][1]._id]
    //     // products: ['_id' + Object.entries(cartItems)[0][1]._id]
    // });
    // console.log(firstName.value);
    // console.log(dataObject);  

    // fetch('http://localhost:3000/api/teddies/order', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         contact: {
    //             firstName: firstName.value,
    //             lastName: lastName.value,
    //             address: address.value,
    //             city: city.value,
    //             email: email.value
    //             },
    //         products: [Object.entries(cartItems)[0][1]._id]
    //         // products: ['_id' + Object.entries(cartItems)[0][1]._id]
    //     }),
        
        
    //     header: {
    //         'Content-Type': 'application/json'
    //     }

    // })
    // .then(function(response){
    //     return response.json();
    // })
    // .then(function(data){
    //     console.log(data)
    // })
})