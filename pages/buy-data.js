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


var btn = document.getElementById('btn');
var select1 = document.getElementById("select1")
var network = document.getElementById('network');
var dataType = document.getElementById('dataType');
var gloDiv = document.getElementById('gloDiv');
var etisalatDiv = document.getElementById('etisalatDiv');
var airtelDiv = document.getElementById('airtelDiv');

var mtnCG1 = document.getElementById('cg1Div');
var CG1options = document.getElementById('CG1options');
var mtnCG2 = document.getElementById('cg2Div');
var mtnSME = document.getElementById('smeDiv');



network.addEventListener("input", function() {
    var select = document.getElementById('network');
    var text = select.options[select.selectedIndex].text;
    if (text == "MTN") {
        dataType.removeAttribute("disabled")
        gloDiv.style.display = "none"
        etisalatDiv.style.display = "none"
        airtelDiv.style.display = "none"
    }
    if (text == "GLO") {
        dataType.setAttribute("disabled", "True")
        gloDiv.style.display = "block"
        etisalatDiv.style.display = "none"
        airtelDiv.style.display = "none"
    }
    if (text == "9MOBILE") {
        dataType.setAttribute("disabled", "True")
        gloDiv.style.display = "none"
        etisalatDiv.style.display = "block"
        airtelDiv.style.display = "none"
    }
    if (text == "AIRTEL") {
        dataType.setAttribute("disabled", "True")
        gloDiv.style.display = "none"
        etisalatDiv.style.display = "none"
        airtelDiv.style.display = "block"
    }
})

dataType.addEventListener("input", function() {
    var select2 = document.getElementById('dataType');
    var text2 = select2.options[select2.selectedIndex].text;
    if (text2 == "CG1") {
        mtnCG1.style.display = "block"
        CG1options.removeAttribute("disabled")
        mtnCG2.style.display = "none"
        mtnSME.style.display = "none"
    }
    if (text2 == "CG2") {
        mtnCG1.style.display = "none"
        mtnCG2.style.display = "block"
        mtnSME.style.display = "none"
    }
    if (text2 == "SME") {
        mtnCG1.style.display = "none"
        mtnCG2.style.display = "none"
        mtnSME.style.display = "block"
    }
})