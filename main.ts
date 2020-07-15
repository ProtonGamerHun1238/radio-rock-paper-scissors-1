input.onButtonPressed(Button.A, function () {
    radio.sendValue("ko", 1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("ollo", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("papir", 1)
})
let csoport = 0
basic.forever(function () {
    if (csoport == "1") {
        if (input.buttonIsPressed(Button.A)) {
        	
        }
    } else if (csoport == "2") {
        if (input.buttonIsPressed(Button.A)) {
        	
        }
    } else if (csoport == "3") {
        if (input.buttonIsPressed(Button.A)) {
        	
        }
    } else if (csoport == "4") {
        if (input.buttonIsPressed(Button.A)) {
        	
        }
    } else if (csoport == "5") {
        if (input.buttonIsPressed(Button.A)) {
        	
        }
    } else {
    	
    }
})
