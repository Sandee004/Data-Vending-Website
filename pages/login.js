    var User= document.getElementById('Username');
var Password= document.getElementById('Password');
var login= document.getElementById('button');
var nameInStorage= localStorage.getItem("user-name")
var passInStorage= localStorage.getItem("user-pass")

login.addEventListener("click", function(ev) {
    if (User.value == nameInStorage && Password.value == passInStorage){
    ev.preventDefault()
    window.open("homepage.html", "_self");
    }
    else{
        ev.preventDefault()
        alert('Invalid Credentials')
    }
                })