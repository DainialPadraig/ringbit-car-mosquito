RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    RingbitCar.freestyle(50, -50)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . . . .
        `)
})
