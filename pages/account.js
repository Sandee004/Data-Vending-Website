const menu = document.getElementById('menu')
const option = document.getElementById('options')

document.body.onscroll = function(e) {
    if (e.target.id !== 'option' && e.target.id !== 'menu') {
        menu.classList.remove('active')
        option.classList.remove('active')
    }
}

document.body.onclick = function(e) {
    if (e.target.id !== 'option' && e.target.id !== 'menu') {
        menu.classList.remove('active')
        option.classList.remove('active')
    }}
    

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

