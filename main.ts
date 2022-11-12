input.onButtonPressed(Button.A, function () {
    NP += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(NP)
})
input.onButtonPressed(Button.B, function () {
    if (NP > 0) {
        NP += -1
    }
})
let NP = 0
NP = 0
basic.forever(function () {
    if (NP > 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (NP == 0) {
        basic.showLeds(`
            . . . . .
            # # . # .
            # # . # #
            # # . # #
            # # # # #
            `)
    }
})
