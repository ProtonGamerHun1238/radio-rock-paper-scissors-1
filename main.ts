enum RadioMessage {
    message1 = 49434,
    novekszikpont = 60749,
    youwin = 7546
}
input.onButtonPressed(Button.A, function () {
    radio.sendValue("ko", 1)
    sendedko = 1
    basic.pause(1000)
})
radio.onReceivedMessage(RadioMessage.youwin, function () {
    for (let index = 0; index < 2; index++) {
        basic.showString("You Won")
    }
    for (let index = 0; index < 10000; index++) {
        if (input.buttonIsPressed(Button.A)) {
            basic.pause(2000)
            if (input.buttonIsPressed(Button.A)) {
                basic.pause(2000)
                if (input.buttonIsPressed(Button.B)) {
                    basic.pause(2000)
                    if (input.buttonIsPressed(Button.B)) {
                        basic.pause(2000)
                        if (input.buttonIsPressed(Button.AB)) {
                            basic.pause(2000)
                            if (input.buttonIsPressed(Button.AB)) {
                                control.reset()
                            }
                        }
                    }
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("ollo", 1)
    sendedollo = 1
    basic.pause(1000)
})
radio.onReceivedString(function (receivedString) {
    ellenfelpont = receivedString
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("papir", 1)
    sendedpapir = 1
    basic.pause(1000)
})
radio.onReceivedValue(function (name, value) {
    if (name == "papir") {
        if (value == 1) {
            if (sendedpapir == 1) {
                radio.sendString("" + (pontszamlocal))
                sendedpapir = 0
            }
        }
    }
    if (name == "papir") {
        if (value == 1) {
            if (sendedko == 1) {
                radio.sendMessage(RadioMessage.novekszikpont)
                radio.sendString("" + (pontszamlocal))
                sendedko = 0
            }
        }
    }
    if (name == "papir") {
        if (value == 1) {
            if (sendedollo == 1) {
                pontszamlocal += 1
                radio.sendString("" + (pontszamlocal))
                sendedollo = 0
            }
        }
    }
    if (name == "ko") {
        if (value == 1) {
            if (sendedko == 1) {
                radio.sendString("" + (pontszamlocal))
                ko = 0
            }
        }
    }
    if (name == "ko") {
        if (value == 1) {
            if (sendedollo == 1) {
                radio.sendMessage(RadioMessage.novekszikpont)
                radio.sendString("" + (pontszamlocal))
                sendedollo = 0
            }
        }
    }
    if (name == "ko") {
        if (value == 1) {
            if (sendedpapir == 1) {
                pontszamlocal += 1
                radio.sendString("" + (pontszamlocal))
                sendedpapir = 0
            }
        }
    }
    if (name == "ollo") {
        if (value == 1) {
            if (sendedollo == 1) {
                radio.sendString("" + (pontszamlocal))
                sendedollo = 0
            }
        }
    }
    if (name == "ollo") {
        if (value == 1) {
            if (sendedpapir == 1) {
                radio.sendMessage(RadioMessage.novekszikpont)
                radio.sendString("" + (pontszamlocal))
                sendedpapir = 0
            }
        }
    }
    if (name == "ollo") {
        if (value == 1) {
            if (sendedko == 1) {
                pontszamlocal += 1
                radio.sendString("" + (pontszamlocal))
                sendedko = 0
            }
        }
    }
})
radio.onReceivedMessage(RadioMessage.novekszikpont, function () {
    pontszamlocal += 1
})
function gameover () {
    basic.showString("GAME OVER")
}
let ko = 0
let pontszamlocal = 0
let sendedpapir = 0
let ellenfelpont = ""
let sendedollo = 0
let sendedko = 0
radio.setGroup(183)
basic.forever(function () {
	
})
basic.forever(function () {
    if (ellenfelpont == "5") {
        for (let index = 0; index < 10; index++) {
            radio.sendMessage(RadioMessage.youwin)
            gameover()
        }
        for (let index = 0; index < 10000; index++) {
            if (input.buttonIsPressed(Button.A)) {
                basic.pause(2000)
                if (input.buttonIsPressed(Button.A)) {
                    basic.pause(2000)
                    if (input.buttonIsPressed(Button.B)) {
                        basic.pause(2000)
                        if (input.buttonIsPressed(Button.B)) {
                            basic.pause(2000)
                            if (input.buttonIsPressed(Button.AB)) {
                                basic.pause(2000)
                                if (input.buttonIsPressed(Button.AB)) {
                                    control.reset()
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
