function buy(id) {
    console.log(document.getElementById(id));
    var cart = document.getElementById('basket-modal');
    var cartContent = cart.getElementsByClassName('products-list')[0];
    var product = document.getElementById(id);
    cartContent.appendChild(product);
}