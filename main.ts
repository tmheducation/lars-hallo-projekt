input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.playMelody("B - - - - - - - ", 120)
    basic.setLedColor(0xffff00)
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    motors.motorPower(100)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.setLedColor(0x00ff00)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    music.playMelody("C5 G E B C A E C5 ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        # . . . #
        . # . # .
        . . # . .
        `)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    music.playMelody("C D E F G A B C5 ", 768)
    basic.setLedColor(0x007fff)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    led.plot(4, 4)
    led.plot(3, 3)
    led.plot(2, 2)
    led.plot(1, 1)
})
basic.showString("Hallo Lars")
music.playMelody("C D E F G A B C5 ", 120)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.setLedColor(0x00ff00)
music.playMelody("C5 B A G F E D C ", 120)
basic.showString("tschüss!")
music.playMelody("C A F C5 B E B C5 ", 120)
basic.forever(function () {
	
})
