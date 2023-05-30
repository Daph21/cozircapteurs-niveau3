input.onButtonPressed(Button.A, function () {
    COZIR2 = Math.round(COZIR.Co2())
    basic.showNumber(COZIR2)
    basic.showString(" PPM")
    radio.sendValue("PPM", COZIR2)
})
input.onButtonPressed(Button.AB, function () {
    COZIR2 = Math.round(COZIR.relativeHumidity())
    basic.showNumber(COZIR2)
    basic.showString(" %HR")
    radio.sendValue("%HR", COZIR2)
})
input.onButtonPressed(Button.B, function () {
    COZIR2 = Math.round(COZIR.temperature())
    basic.showNumber(COZIR2)
    basic.showString(" C")
    radio.sendValue("C", COZIR2)
})
radio.onReceivedValue(function (name, value) {
    basic.showNumber(value)
    basic.showString(name)
})
let COZIR2 = 0
radio.setGroup(1)
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
