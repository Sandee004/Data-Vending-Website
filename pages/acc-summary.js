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