var username;
var lastname;
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
                username = document.getElementById(id).value;
                break;
            }
        case 'lastname':
            {
                lastname = document.getElementById(id).value;
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

function validation(isSignUpPage) {
    var pattern = new RegExp('^[a-zA-Z0-9]{6,10}$');
    var check = true;
    var failedFilds = 'Неверно введено:';
    if (!checkString(username, pattern) && isSignUpPage) {
        failedFilds += ' Имя';
        check = false;
    }
    if (!checkString(lastname, pattern) && isSignUpPage) {
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
    if (!passwordPattern.test(retryPassword) && isSignUpPage) {
        failedFilds += ' Пароли не совпадают';
        check = false;
    }
    if (check && isSignUpPage) {
        window.location.replace('index.html');
    } if (check && !isSignUpPage) {
        window.location.replace('index.html');
    } 
    else {
        var element = document.getElementsByClassName('alert-info')[0];
        element.style.backgroundColor = 'red';
        element.removeChild(element.firstChild);
        element.appendChild(document.createTextNode(failedFilds));
    }
}

function checkString(str, pattern) {
    var undefinedPattern = new RegExp('^undefined$');
    if (pattern.test(str) && !undefinedPattern.test(str)) {
        return true;
    }
    return false;
}
function setUserName() {
    var element = document.getElementsByClassName('username-block')[0];
    element.removeChild(element.firstChild);
    element.appendChild(document.createTextNode(username + ' ' + lastname));
}