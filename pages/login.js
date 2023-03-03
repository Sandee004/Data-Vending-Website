var User= document.getElementById('Username');
var Password= document.getElementById('Password')
var login= document.getElementById('button');
var nameInStorage= localStorage.getItem("user-name")
var passInStorage= localStorage.getItem("user-pass")

login.addEventListener("click", function(ev) {
     if (User.value == "") {
        ev.preventDefault()
        User.style.borderColor="red"
        if (User.addEventListener("focus", function() {
            User.style.borderColor="grey"
        }))
     alert("Useless line of code")
    }

     if (Password.value == "") {
        ev.preventDefault()
        Password.style.borderColor="red"
        if (Password.addEventListener("focus", function() {
            Password.style.borderColor="grey"
        }))
     alert("Useless line of code")
}
    
    if (User.value == nameInStorage && Password.value == passInStorage){
    ev.preventDefault()
    window.open("dashboard.html", "_self");
    }
        
    if (User.value !== nameInStorage && User.value.length > 0 || Password.value !== passInStorage && Password.value.length > 0){
        ev.preventDefault()
        alert('Invalid Credentials')
    }
})