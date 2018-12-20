var productsList = [];
// var productsDiscriptionList = [];

// function appendProducts() {
//     var smartphone, discriptionSmartphone, headphone, discriptionHeadphone;
//     for (var i = 0; i < 30; i++) {
//         smartphone = createSmartPhone("SmartPhone", "resources/imgs/smartphone.png", i);
//         discriptionSmartphone = createProductDiscription("SmartPhone", "resources/imgs/smartphone.png", i);
//         document.getElementById("smtphns").appendChild(discriptionSmartphone);
//         document.getElementById("smtphns").appendChild(smartphone);
//         productsList.push(smartphone);
//         productsDiscriptionList.push(discriptionSmartphone)
//     }
//     for (var i = 0; i < 25; i++) {
//         headphone = createSmartPhone("Headphone", "resources/imgs/headphone.png", i);
//         discriptionHeadphone = createProductDiscription("Headphone", "resources/imgs/headphone.png", i);
//         document.getElementById("hdphns").appendChild(discriptionHeadphone);
//         document.getElementById("hdphns").appendChild(headphone);
//         productsList.push(headphone);
//         productsDiscriptionList.push(discriptionHeadphone);
//     }
// }
function appendProducts() {
    var headphone, smartphone;
    for (var i = 0; i < 30; i++) {
        smartphone = createProduct('SmartPhone', 'resources/imgs/smartphone.png', 'smart' + i);
        document.getElementById("smtphns").appendChild(smartphone);
        productsList.push(smartphone);
    }
    for (var i = 0; i < 20; i++) {
        headphone = createProduct('HeadPhone', 'resources/imgs/headphone.png', 'head' + i);
        document.getElementById("hdphns").appendChild(headphone);
        productsList.push(headphone);
    }
}

function createProduct(name, imgSrc, id) {
    product = document.createElement('div');
    product.classList = 'product-container-onclick';
    product.id = id;
    product.appendChild(createElementImage(imgSrc));
    product.appendChild(createElementName(name));
    product.appendChild(createElementRandomPrice(1500, 10000));
    product.appendChild(createElementBasketButton());
    product.appendChild(createElementCloseButton());
    return product;
}
function createElementImage(imgSrc) {
    var productImage = document.createElement('div');
    var image = document.createElement('img');
    image.src = imgSrc;
    productImage.appendChild(image);
    productImage.classList = 'image';
    return productImage;
}

function createElementName(name) {
    var productName = document.createElement("div");
    productName.appendChild(document.createTextNode(name));
    productName.classList = 'product-name';
    return productName;
}

function createElementPrice(price) {
    var productPrice = document.createElement("div");
    productPrice.appendChild(document.createTextNode(price));
    productPrice.classList = 'price';
    return productPrice;
}
function createElementRandomPrice(min, max) {
    var productPrice = document.createElement("div");
    productPrice.appendChild(document.createTextNode(Math.floor(Math.random() * (max - min)) + min));
    productPrice.classList = 'price';
    return productPrice;
}
function createElementBasketButton() {
    var basketButton = document.createElement('div');
    basketButton.classList = 'basket-button';
    basketButton.appendChild(document.createTextNode('В корзину!'));
    basketButton.onclick = function () {
        buy(discription.id);
    };
    return basketButton;
}
function createElementCloseButton() {
    var closeButton = document.createElement('div');
    closeButton.classList = 'close-button';
    var x = document.createElement('span');
    var txt = document.createTextNode('×');
    x.appendChild(txt);
    x.classList = 'close';
    closeButton.appendChild(x);
    return closeButton;
}

// function createProductDiscription(name, imgSrc, number) {
//     var discription = document.createElement("div");
//     discription.classList = "product-container-onclick";
//     discription.id = "hide" + name.toLowerCase() + number.toString();
//     var discriptiontImage = document.createElement("img");
//     discriptiontImage.src = imgSrc;
//     var discriptionProductName = document.createElement("div");
//     discriptionProductName.appendChild(document.createTextNode(name));
//     min = 1500;
//     max = 10001;
//     var productPrice = document.createElement("div");
//     productPrice.appendChild(document.createTextNode(Math.floor(Math.random() * (max - min)) + min));
//     var basketButton = document.createElement("div");
//     basketButton.classList = "basket-button";
//     basketButton.onclick = function () {
//         buy(discription.id);
//     };
//     basketButton.appendChild(document.createTextNode("В корзину!"));
//     basketButton.onclick = function () {
//         buy(discription.id);
//     };
//     discription.appendChild(discriptiontImage);
//     discription.appendChild(discriptionProductName);
//     discription.appendChild(productPrice);
//     discription.appendChild(basketButton);
//     discription.onclick = function () {
//         productInfo(discription.id, name.toLowerCase() + number.toString());
//     };
//     return discription;
// }

// function createSmartPhone(name, imgSrc, number) {
//     var productContainer = document.createElement("div");
//     var productImage = document.createElement("img");
//     var productName = document.createElement("span");
//     var textSpan = document.createTextNode(name);
//     productContainer.classList = "product-container";
//     productContainer.id = name.toLowerCase() + number.toString();
//     productImage.src = imgSrc;
//     productName.appendChild(textSpan);
//     productContainer.appendChild(productImage);
//     productContainer.appendChild(productName);
//     productContainer.onclick = function () {
//         productInfo(productContainer.id, "hide" + name.toLowerCase() + number.toString());
//     };
//     return productContainer;
// }
// function productInfo(block_4_close, block_4_open) {
//     hideDiscription();
//     showProducts();
//     document.getElementById(block_4_close).style.display = 'none';
//     document.getElementById(block_4_open).style.display = 'flex';
//     $("html,body").animate({
//         scrollTop: $('#' + block_4_open).offset().top - $('#' + block_4_open).height()
//     }, 100);
// }

// function hideDiscription() {
//     var elems = document.getElementsByClassName('product-container-onclick');
//     for (var i = 0; i < elems.length; i++) {
//         elems[i].style.display = 'none';
//     }
// }
// function showProducts() {
//     var elems = document.getElementsByClassName('product-container');
//     for (var i = 0; i < elems.length; i++) {
//         elems[i].style.display = 'flex';
//     }
// }
