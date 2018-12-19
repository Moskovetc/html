function showProducts() {
  var content = document.getElementById('search-modal');
  clearNode(content, 'products-list');
  for (var i = 0; i < productsList.length; i++) {
    content.getElementsByClassName('products-list')[0].appendChild(productsList[i].cloneNode(true));
  }
}

function filterProducts() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var productList = document.getElementById('search-modal').getElementsByClassName('products-list')[0];
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

function clearNode(element, className) {
  var node = element.getElementsByClassName(className)[0];
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}
