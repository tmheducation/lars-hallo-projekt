basic.showLeds(`
    # # # # #
    # . . . #
    # # . # #
    # . # . #
    # # # # #
    `)
basic.showLeds(`
    # # . # #
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showString("Hallo")
basic.forever(function () {
    music.playMelody("C D E F G A B C5 ", 120)
})
