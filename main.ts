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
music.playMelody("C5 B A G F E D C ", 120)
basic.showString("tschüss!")
basic.forever(function () {
	
})
