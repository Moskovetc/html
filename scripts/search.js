function showProducts() {
    var elems = document.getElementsByClassName('product-container');
    for (var i = 0; i < elems.length; i++) {
        document.getElementsByClassName('products-list')[0].appendChild(elems[i]);
    }
}

function filterProducts() {
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var elems = document.getElementsByClassName('product-container');
  var name, txtValue;
  // Loop through all list items, and hide those who don't match the search query
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
