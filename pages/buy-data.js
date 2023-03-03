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


var mobile = document.getElementById("mobile")
var network = document.getElementById('network');
var dataType = document.getElementById('dataType');
var gloDiv = document.getElementById('gloDiv');
var etisalatDiv = document.getElementById('etisalatDiv');
var airtelDiv = document.getElementById('airtelDiv');
var mtnCG1 = document.getElementById('cg1Div');
var mtnCG2 = document.getElementById('cg2Div');
var mtnSME = document.getElementById('smeDiv');

var CG1options = document.getElementById('CG1options');
var CG2options = document.getElementById('CG2options');
var SMEoptions = document.getElementById('SMEoptions');
var gloPlans = document.getElementById('gloPlans');
var etisalatPlans = document.getElementById('etisalatPlans');
var airtelPlans = document.getElementById('airtelPlans');


network.addEventListener("input", function() {
    var select = document.getElementById('network');
    var text = select.options[select.selectedIndex].text;
    if (text == "----") {
        dataType.setAttribute("disabled", "True")
        glo.Div.style.display = "none"
        etisalatDiv.style.display = "none"
        airtelDiv.style.display = "none"
    }
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

        mtnCG1.style.display = "none"
        mtnCG2.style.display = "none"
        mtnSME.style.display = "none"
    }
    if (text == "9MOBILE") {
        dataType.setAttribute("disabled", "True")
        gloDiv.style.display = "none"
        etisalatDiv.style.display = "block"
        airtelDiv.style.display = "none"

        mtnCG1.style.display = "none"
        mtnCG2.style.display = "none"
        mtnSME.style.display = "none"
    }
    if (text == "AIRTEL") {
        dataType.setAttribute("disabled", "True")
        gloDiv.style.display = "none"
        etisalatDiv.style.display = "none"
        airtelDiv.style.display = "block"

        mtnCG1.style.display = "none"
        mtnCG2.style.display = "none"
        mtnSME.style.display = "none"
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

var btn = document.getElementById('btn');
var auth = document.getElementById('auth');
var overlay = document.getElementById('overlay');
var confirm = document.getElementById('confirm');
var cancel = document.getElementById('cancel');
var check = document.getElementById('check');
var pin = document.getElementById('pin-auth');
var paragraph = document.getElementById('paragraph');
var pinInStorage = localStorage.getItem("general_pin")


/*overlay.addEventListener("click", function() {
    alert("hghghh")
    
},{capture:true})*/

btn.addEventListener("click", function(ev) {
    overlay.style.opacity = "1"
    overlay.style.pointerEvents = "auto"
    auth.style.pointerEvents = "auto"

    auth.classList.add("activated")
})

cancel.addEventListener("click", function() {
    //e.stopPropagation
    overlay.style.opacity = "0"
    auth.style.pointerEvents = "none"
    overlay.style.pointerEvents = "none"
    auth.classList.remove("activated")
})

confirm.addEventListener("click", function() {
    if (pin.value == pinInStorage) {
        //alert("Check")
        check.style.display = "block"
        paragraph.style.display = "none"
        confirm.style.display = "none"
        cancel.style.display = "none"
        pin.style.display = "none"
    }
    else {
        alert("Wrong pin")
    }
})