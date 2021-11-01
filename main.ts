let start = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    start = input.runningTime()
})
start = 0
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let elapsed = input.runningTime() - start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
