function appendProducts() {
    for (var i = 0; i < 30; i++) {
        document.getElementById("smtphns").appendChild(createProductDiscription("Phone", "resources/imgs/smartphone.png", i));
        document.getElementById("smtphns").appendChild(createSmartPhone("Phone", "resources/imgs/smartphone.png", i));
    }
    for (var i = 0; i < 25; i++) {
        document.getElementById("hdphns").appendChild(createProductDiscription("Headphone", "resources/imgs/headphone.png", i));
        document.getElementById("hdphns").appendChild(createSmartPhone("Headphone", "resources/imgs/headphone.png", i));
    }
}
function createProductDiscription(name, imgSrc, number) {
    var discription = document.createElement("div");
    discription.classList = "product-container-onclick";
    discription.id = "hide" + name.toLowerCase() + number.toString();
    var discriptiontImage = document.createElement("img");
    discriptiontImage.src = imgSrc;
    var discriptionProductName = document.createElement("div");
    discriptionProductName.appendChild(document.createTextNode(name));
    min = 1500;
    max = 10001;
    var productPrice = document.createElement("div");
    productPrice.appendChild(document.createTextNode(Math.floor(Math.random() * (max - min)) + min));
    var basketButton = document.createElement("div");
    basketButton.classList = "basket-button";
    basketButton.appendChild(document.createTextNode("В корзину!"));
    discription.appendChild(discriptiontImage);
    discription.appendChild(discriptionProductName);
    discription.appendChild(productPrice);
    discription.appendChild(basketButton);
    discription.onclick = function () {
        productInfo(discription.id, name.toLowerCase() + number.toString());
    };
    return discription;
}

function createSmartPhone(name, imgSrc, number) {
    var productContainer = document.createElement("div");
    var productImage = document.createElement("img");
    var productName = document.createElement("span");
    var textSpan = document.createTextNode(name);
    productContainer.classList = "product-container";
    productContainer.id = name.toLowerCase() + number.toString();
    productImage.src = imgSrc;
    productName.appendChild(textSpan);
    productContainer.appendChild(productImage);
    productContainer.appendChild(productName);
    productContainer.onclick = function () {
        productInfo(productContainer.id, "hide" + name.toLowerCase() + number.toString());
    };
    return productContainer;
}

function productInfo(block_4_close, block_4_open) {
    hideDiscription();
    showProducts();
    document.getElementById(block_4_close).style.display = 'none';
    document.getElementById(block_4_open).style.display = 'flex';
    $("html,body").animate({
        scrollTop: $('#' + block_4_open).offset().top - $('#' + block_4_open).height()
    }, 1000);
}

function hideDiscription() {
    var elems = document.getElementsByClassName('product-container-onclick');
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.display = 'none';
    }
}
function showProducts() {
    var elems = document.getElementsByClassName('product-container');
    for (var i = 0; i < elems.length; i++) {
        elems[i].style.display = 'flex';
    }
}
