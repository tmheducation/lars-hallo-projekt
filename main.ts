basic.showString("Hallo Lars")
music.playMelody("C D E F G A B C5 ", 120)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
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
