const imgDiv= document.getElementById('imageGrp');
const img= document.getElementById('profile_pic');
const file= document.getElementById('file');
const uploadBtn= document.getElementById('uploadBtn');

file.addEventListener("change", function(){
    const choosedFile = this.files[0]

    if (choosedFile) {
        const reader = new FileReader()
        reader.addEventListener("load", function() {
          img.setAttribute("src", reader.result);D
      });
    reader.readAsDataURL(choosedFile)
    }
})

const fullname= document.getElementById('name');
const username= document.getElementById('username');
const email= document.getElementById('email');
const number= document.getElementById('phone');

fullname.innerHTML= localStorage.getItem("fullname")
username.innerHTML= localStorage.getItem("user-name")
email.innerHTML= localStorage.getItem("user-mail")
number.innerHTML= localStorage.getItem("user-no")