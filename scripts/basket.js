var myfunction;
function buy(id) {
    var element = document.getElementById(id);
    var basketModal = document.getElementById('basket-modal');
    var content = basketModal.getElementsByClassName('modal-content')[0].getElementsByClassName('products-list-basket')[0];
    content.appendChild(element);
    counter(content);
    
}
function showDescriptionInBasket() {
    var basketModal = document.getElementById('basket-modal');
    var content = basketModal.getElementsByClassName('modal-content')[0].getElementsByClassName('products-list-basket')[0];
    var listOfElems = content.getElementsByClassName('product-container-onclick');
    var elem;
    for (var i = 0; i < listOfElems.length; i++) {
        elem = listOfElems[i];
        myfunction = elem.onclick;
        elem.onclick = function () {
            return false;
        }
        elem.style.flexDirection = 'row';
        elem.style.width = '95%';
        elem.style.height = '135px';
        elem.getElementsByClassName('price')[0].style.display = 'flex';
        elem.getElementsByClassName('close-button')[0].style.display = 'flex';
    }
}

function removeFromBasket(id) {
    var element = document.getElementById(id);
    var basketModal = document.getElementById('basket-modal');
    var content = basketModal.getElementsByClassName('modal-content')[0].getElementsByClassName('products-list-basket')[0];
    element.onclick = myfunction;
    hideDescription(element);
    if (id.includes('smart')) {
        document.getElementById("smtphns").appendChild(element);
    }
    if (id.includes('head')) {
        document.getElementById("hdphns").appendChild(element);
    }
    counter(content);
}
function counter(elem) {
    var count = document.getElementById('basket-button');
    var quantity = elem.getElementsByClassName('product-container-onclick').length;
    while (count.firstChild) {
        count.removeChild(count.firstChild);
    }
    count.appendChild(document.createTextNode(quantity));
}