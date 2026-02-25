input.onButtonPressed(Button.A, function () {
    if (random == 1) {
        basic.showString("Sagrada")
    } else if (random == 2) {
        basic.showString("Olympics")
    } else {
        basic.showString("Ramblas")
    }
})
input.onGesture(Gesture.Shake, function () {
    random = randint(1, 3)
})
let random = 0
basic.showString("Hola")
