

//  <><><><><><><><><><>  FETCH  <><><><><><><><><><>


let teddies0Img = document.getElementById('teddies-0-img');
let teddies1Img = document.getElementById('teddies-1-img');
let teddies2Img = document.getElementById('teddies-2-img');
let teddies3Img = document.getElementById('teddies-3-img');
let teddies4Img = document.getElementById('teddies-4-img');
let teddies5Img = document.getElementById('teddies-5-img');

fetch('http://localhost:3000/api/teddies')
.then(resultat => resultat.json())
.then(teddiesData => changeTeddiesData (teddiesData) );

let productInCart = document.getElementById('product-in-cart')

function changeTeddiesData (teddiesData) {
    var container = document.getElementById('article-container');
    console.log(teddiesData)

    for (var i=0; i < teddiesData.length; i++) {

        var newDiv = document.createElement ('div');
        newDiv.classList.add('home-item');
        newDiv.classList.add('home-item' +[i]);
        container.appendChild(newDiv);

        var newImageHref = document.createElement('a');
        newImageHref.href = 'single-page.html?id=' + teddiesData[i]._id;
        newImageHref.classList.add('home-a');
        // newImageHref.innerHTML = "Ceci est un lien";
        newDiv.appendChild(newImageHref);

        var newImage = document.createElement ('img');
        newImage.src += teddiesData[i].imageUrl;
        newImage.classList.add('home-image');
        newImage.classList.add('home-image'+[i]);
        newImageHref.appendChild(newImage);

        var newHeading = document.createElement ('h2');
        newHeading.innerHTML += teddiesData[i].name;
        newHeading.classList.add('home-title');
        newImageHref.appendChild(newHeading);
    }
}

//  <><><><><><><><><><>  Global Cart <><><><><><><><><><>

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('globalCart');

    if(productNumbers) {
        productInCart.textContent = productNumbers;
    }
}
onLoadCartNumbers();