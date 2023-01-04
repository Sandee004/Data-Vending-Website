var fullname= document.getElementById('fullname');
var fullname_error= document.getElementById('fullname_error');

var username= document.getElementById('username');
var username_error=document.getElementById('username_error');

var tel=document.getElementById('tel');
var tel_error= document.getElementById('tel_error');


var password= document.getElementById('password');
var confirmation= document.getElementById('confirm_password');
var submit= document.getElementById('submit');

submit.addEventListener("click", function(ev) {
    //Fullname Validation
    if (fullname.value == "") {
        ev.preventDefault()
        fullname.style.borderColor="red"
        fullname_error.innerHTML= "Cannot be blank"
        if (fullname.addEventListener("focus", function() {
            fullname_error.innerHTML= ""
            fullname.style.borderColor="grey"
        }))
    alert("Useless line of code")
    }

    //Username
    if (username.value == "") {
        ev.preventDefault()
        username.style.borderColor="red"
        username_error.innerHTML= "Cannot be blank"
        if (username.addEventListener("focus", function() {
            username_error.innerHTML= ""
            username.style.borderColor="grey"
        }))
    alert("Useless line of code")
    }

    //Phone number Validation 
    if (tel.value == "" || tel.length < 11 || tel.length > 11) {
        ev.preventDefault()
        tel.style.borderColor="red"
        tel_error.innerHTML= "Enter valid phone number"
        if (tel.addEventListener("focus", function() {
            fullname_error.innerHTML= ""
            tel.style.borderColor="grey"
        }))
     alert("Useless line of code")
     }
})