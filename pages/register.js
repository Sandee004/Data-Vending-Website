var fullname= document.getElementById('fullname');
var fullname_error= document.getElementById('fullname_error');

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
})