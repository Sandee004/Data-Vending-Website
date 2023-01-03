var fullname= document.getElementById('fullname');
var fullname_error= document.getElementById('fullname_error');

var password= document.getElementById('password');
var confirmation= document.getElementById('confirm_password');
var submit= document.getElementById('submit');

submit.addEventListener("click", function(ev) {
    if (fullname.value == "") {
        ev.preventDefault()
        fullname_error.innerHTML= "Cannot be blank"
        if (fullname.hasFocus()===True){
            alert("Progress")
        }
    }
})