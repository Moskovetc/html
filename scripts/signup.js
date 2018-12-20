var name;
var lastName;
var login;
var password;
var retryPassword;

function signup() {
    window.location.replace('signup.html');
}

function tape(id) {
    switch (id) {
        case 'name':
            {
                name = document.getElementById(id).value;
                break;
            }
        case 'lastname':
            {
                lastName = document.getElementById(id).value;
                break;
            }
        case 'login':
            {
                login = document.getElementById(id).value;
                break;
            }
        case 'pass':
            {
                password = document.getElementById(id).value;
                break;
            }
        case 'retrypass':
            {
                retryPassword = document.getElementById(id).value;
                break;
            }
    }
}

function validation() {
    var pattern = new RegExp('^[a-zA-Z0-9]{8,10}$');
    var check = true;
    var failedFilds = 'Неверно введено:';
    if (!checkString(name, pattern)) {
        failedFilds += ' Имя';
        check = false;
    }
    if (!checkString(lastName, pattern)) {
        failedFilds += ' Фамилия';
        check = false;
    }
    if (!checkString(login, pattern)) {
        failedFilds += ' логин';
        check = false;
    }
    if (!checkString(password, pattern)) {
        failedFilds += ' Пароль';
        check = false;
    }
    var passwordPattern = new RegExp('^' + password + '$');
    if (!passwordPattern.test(retryPassword)) {
        failedFilds += ' Пароли не совпадают';
        check = false;
    }
    if (check) {
        window.location.replace('index.html');
    } else {
        var element = document.getElementsByClassName('alert-info')[0];
        element.style.backgroundColor = 'red';
        element.removeChild(element.firstChild);
        element.appendChild(document.createTextNode(failedFilds));
    }
    
    console.log(checkString(name, pattern));
    console.log(checkString(lastName, pattern));
    console.log(checkString(login, pattern));
    console.log(checkString(password, pattern));
    console.log(checkString(retryPassword, pattern));
}

function checkString(str, pattern) {
    if (pattern.test(str)) {
        return true;
    }
    return false;
}
// function filterProducts() {
//     var input = document.getElementById('myInput');
//     var filter = input.value.toUpperCase();
//     var productList = document.getElementById('search-modal').getElementsByClassName('products-list-search')[0];
//     var elems = productList.getElementsByClassName('product-container-onclick');
//     var name, txtValue;
//     for (i = 0; i < elems.length; i++) {
//       name = elems[i].getElementsByClassName('product-name')[0];
//       txtValue = name.textContent;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         elems[i].style.display = 'flex';
//         elems[i].style.height = '50%'
//       } else {
//         elems[i].style.display = 'none';
//       }
//     }
//   }