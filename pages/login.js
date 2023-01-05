import {nameInStorage, passInStorage} from 'register.js'
var User= document.getElementById('Username');
var Password= document.getElementById('Password');
var enter= document.getElementById('enter');

//Trying to test if it's working. Seems its not getting the variable
enter.addEventListener("click", function(ev) {
    if (User.value == nameInStorage) {
    ev.preventDefault()
    alert("Check")
}
}