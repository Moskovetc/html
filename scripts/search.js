function showProducts() {
    for (var i = 0; i < productsList.length; i++) {
        document.getElementsByClassName('products-list')[0].appendChild(productsList[i].cloneNode(true));
    }
}

function filterProducts() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var productList = document.getElementsByClassName('products-list')[0];
  var elems = productList.getElementsByClassName('product-container');
  var name, txtValue;
  for (i = 0; i < elems.length; i++) {
    name = elems[i].getElementsByTagName("span")[0];
    txtValue = name.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      elems[i].style.display = "flex";
    } else {
      elems[i].style.display = "none";
    }
  }
}
