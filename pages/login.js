var User= document.getElementById('Username');
var User_error= document.getElementById('User_error');
var Password= document.getElementById('Password');
var Password_error= document.getElementById('Password_error');
var login= document.getElementById('button');
var nameInStorage= localStorage.getItem("user-name")
var passInStorage= localStorage.getItem("user-pass")
//ar grp= document.getElementByClassName("error-messages")

login.addEventListener("click", function(ev) {
    if (User.value == "") {
        ev.preventDefault()
        User.style.borderColor="red"
        User_error.style.color= "red"
        User_error.innerHTML= "Cannot be blank"
        if (User.addEventListener("focus", function() {
            User.style.borderColor="grey"
            User_error.innerHTML= ""
            User_error.style.color= "grey"
        }))
     alert("Useless line of code")
    }

     if (Password.value == "") {
        ev.preventDefault()
        Password.style.borderColor="red"
        Password_error.style.color= "red"
        Password_error.innerHTML= "Passwords do not match"
        if (Password.addEventListener("focus", function() {
            Password.style.borderColor="grey"
            Password_error.innerHTML= ""
            Password_error.style.color= "grey"
        }))
     alert("Useless line of code")
     }
    
    if (User.value == nameInStorage && Password.value == passInStorage){
    ev.preventDefault()
    window.open("homepage.html", "_self");
    }
        
    else{
        ev.preventDefault()
        alert('Invalid Credentials')
    }
                })