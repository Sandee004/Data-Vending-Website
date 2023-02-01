let old_password = document.getElementById('old-password');
let old_password_error = document.getElementById('old-password-error');

let new_password = document.getElementById('new-password');
let new_password_error = document.getElementById('new-password-error');

let save = document.getElementById('save');
let old_pass = localStorage.getItem('user-pass');

a.originalLiml = a.href
save.addEventListener("click", function(ev) {
    //if (old_password !== old_pass){
    if (old_password.value !== old_pass) {
        ev.preventDefault()
        old_password_error.innerHTML= "Old password doesn't match"
        old_password.style.borderColor = "red"
        if (old_password.addEventListener("focus", function() {
            old_password_error.innerHTML= ""
            old_password.style.borderColor = "#1F305E"
        }))
    alert("Useless line of code")
}
    if (new_password.value.length < 8) {
       ev.preventDefault()
       new_password_error.innerHTML = "Password should contain 8 characters or more"
       new_password.style.borderColor = "red"
       new_password_error.style.color = "red"
       if (new_password.addEventListener("focus", function () {
           new_password_error.style.color = "grey"
           new_password.style.borderColor = "#1F305E"
       }))
    alert("Useless line of code")
   }
    if (old_password == old_pass && new_password.value.length >= 8) {
       // ev.preventDefault()
        window.open("dashboard.html", "_self")

        localStorage.setItem("user-pass", new_password.value)
    }
})
    