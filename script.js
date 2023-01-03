const toggle = document.getElementById('toggle')
const options = document.getElementById('option')

document.body.onscroll = function(e) {
    if (e.target.id !== 'options' && e.target.id !== 'toggle') {
        toggle.classList.remove('active')
        options.classList.remove('active')
    }
}

document.body.onclick = function(e) {
    if (e.target.id !== 'options' && e.target.id !== 'toggle') {
        toggle.classList.remove('active')
        options.classList.remove('active')
    }
}

toggle.addEventListener('click', function() {
    toggle.classList.toggle('active')
    options.classList.toggle('active')
})

//To check if passwords match
var password= document.document.getElementById('password');
var confirmation= document.getElementById('confirm_password');
var reg_btn= document.getElementById('submit');

reg_btn.addEventListener("click", function() {
    if (confirmation.value != password.value) {
        alert("Passwords do not match")
    }
}