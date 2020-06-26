input.onButtonPressed(Button.B, function () {
    if (test) {
        pixels.setBrightness(15)
        pixels.showRainbow(1, 360)
        pixels.show()
        test = 0
    } else {
        pixels.clear()
        pixels.range(0, 32).showColor(neopixel.colors(NeoPixelColors.White))
        pixels.setBrightness(50)
        pixels.showColor(neopixel.rgb(white, white, 255))
        white = 255
        fade = 0
        test = 1
    }
})
let fade = 0
let white = 0
let test = 0
let pixels: neopixel.Strip = null
pixels = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
test = 0
pixels.setBrightness(15)
pixels.showRainbow(1, 360)
basic.forever(function () {
    if (test) {
        pixels.showColor(neopixel.rgb(white, white, 255))
        if (fade == 0) {
            white += -8
            if (white < 47) {
                fade = 1
                basic.pause(400)
            }
        } else {
            white += 8
            if (white >= 200) {
                fade = 0
                basic.pause(400)
            }
        }
        basic.pause(100)
    } else {
        pixels.rotate(1)
        pixels.show()
    }
})
