var pin1 = document.getElementById("pin1");
        var pin2 = document.getElementById("pin2");
        var pin3 = document.getElementById("pin3");
        var pin4 = document.getElementById("pin4");
        const btn = document.getElementById("btn");
        var a = document.getElementById("submit");

        a.originalLink = a.href

        function movetoNext(current, nextFieldID) {
            if (current.value.length >= current.maxLength) {
                document.getElementById(nextFieldID).focus();
            }
        }

        btn.addEventListener("click", function (ev) {
            if (pin1.value.length == 1 && pin2.value.length == 1 && pin3.value.length == 1 && pin4.value.length == 1) {
                let general_pin= pin1.value + pin2.value + pin3.value + pin4.value
                localStorage.setItem("general_pin", general_pin.value)
                a.href = a.originalLink;
            }
            else {
                ev.preventDefault()
            }
        })