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