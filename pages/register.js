var fullname = document.getElementById('fullname');
var fullname_error = document.getElementById('fullname_error');

var username = document.getElementById('username');
var username_error = document.getElementById('username_error');

var email = document.getElementById('email');
var email_error = document.getElementById('email_error');

var tel = document.getElementById('tel');
var tel_error = document.getElementById('tel_error');

var password = document.getElementById('password');
var password_error = document.getElementById('password_error');

var confirmation = document.getElementById('confirm_password');
var confirm_error = document.getElementById('confirm_error');

const togglePassword = document.getElementById('eye-icon1');
const toggleConfirmPassword = document.getElementById('eye-icon2');
var submit = document.getElementById('submit');

togglePassword.addEventListener("click", function() {
    // toggle the type attribute
    const type1 = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type1)
});

toggleConfirmPassword.addEventListener("click", function() {
    // toggle the type attribute
    const type2 = confirmation.getAttribute("type") === "password" ? "text" : "password";
    confirmation.setAttribute("type", type2)
});


submit.addEventListener("click", function(ev) {
    //Fullname Validation
    if (fullname.value == "") {
        ev.preventDefault()
        fullname.style.borderColor = "red"
        fullname_error.innerHTML = "Cannot be blank"
        if (fullname.addEventListener("focus", function() {
            fullname_error.innerHTML = ""
            fullname.style.borderColor = "grey"
        }))
            alert("Useless line of code")
    }

    //Username Validation
    if (username.value == "") {
        ev.preventDefault()
        username.style.borderColor = "red"
        username_error.innerHTML = "Cannot be blank"
        if (username.addEventListener("focus", function() {
            username_error.innerHTML = ""
            username.style.borderColor = "grey"
        }))
            alert("Useless line of code")
    }

    //Email Validation
    if (email.value == "") {
        ev.preventDefault()
        email.style.borderColor = "red"
        email_error.innerHTML = "Cannot be blank"
        if (email.addEventListener("focus", function() {
            email_error.innerHTML = ""
            email.style.borderColor = "grey"
        }))
            alert("Useless line of code")
    }

    //Phone number Validation 
    if (tel.value == "" || tel.value.length < 11 || tel.length > 11) {
        ev.preventDefault()
        tel.style.borderColor = "red"
        tel_error.innerHTML = "Enter valid phone number"
        if (tel.addEventListener("focus", function() {
            tel_error.innerHTML = ""
            tel.style.borderColor = "grey"
        }))
            alert("Useless line of code")
    }

    //Password Validation
    if (password.value == "" || password.value.length < 8) {
        ev.preventDefault()
        password.style.borderColor = "red"
        password_error.style.color = "red"
        password_error.innerHTML = "Enter valid password"
        if (password.addEventListener("focus", function() {
            password.style.borderColor = "grey"
            password_error.innerHTML = "Password should contain 8 characters or more"
            password_error.style.color = "grey"
        }))
            alert("Useless line of code")
    }

    //Password Confirmation
    if (confirmation.value !== password.value) {
        ev.preventDefault()
        confirmation.style.borderColor = "red"
        confirm_error.style.color = "red"
        confirm_error.innerHTML = "Passwords do not match"
        if (confirmation.addEventListener("focus", function() {
            confirmation.style.borderColor = "grey"
            confirm_error.innerHTML = ""
            confirm_error.style.color = "grey"
        }))
            alert("Useless line of code")
    }

    if (fullname.value !== "" && username.value !== "" && email.value !== "" && tel.value !== "" && tel.value.length == 11 && password.value.length >= 8 && confirmation.value == password.value) {
        ev.preventDefault()
        window.open("dashboard.html", "_self")


        localStorage.setItem("fullname", fullname.value)
        localStorage.setItem("user-name", username.value)
        localStorage.setItem("user-pass", password.value)
        localStorage.setItem("user-mail", email.value)
        localStorage.setItem("user-no", tel.value)
    }
})

