function buy(id) {
    var element = document.getElementById(id);
    var basketModal = document.getElementById('basket-modal');
    var content = basketModal.getElementsByClassName('modal-content')[0].getElementsByClassName('products-list')[0];
    content.appendChild(element);
}
function showDescriptionInBasket() {
    var basketModal = document.getElementById('basket-modal');
    var content = basketModal.getElementsByClassName('modal-content')[0].getElementsByClassName('products-list')[0];
    var listOfElems = content.getElementsByClassName('product-container-onclick');
    var elem;
    for (var i = 0; i < listOfElems.length; i++) {
        elem = listOfElems[i];
        elem.onclick = function() {
            return false;
        }
        elem.style.flexDirection = 'row';
        elem.style.width = '100%';
        elem.style.height = '135px';
        elem.getElementsByClassName('price')[0].style.display = 'flex';
        elem.getElementsByClassName('close-button')[0].style.display = 'flex';
    }
}