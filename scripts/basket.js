function buy(id) {
    var element = document.getElementById(id);
    var basketModal = document.getElementById('basket-modal');
    var content = basketModal.getElementsByClassName('modal-content')[0].getElementsByClassName('products-list')[0];
    console.log(content.appendChild(element));
}