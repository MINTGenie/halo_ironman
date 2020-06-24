let fade = 0
let pixels = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
pixels.range(0, 32).showColor(neopixel.colors(NeoPixelColors.White))
pixels.setBrightness(50)
let white = 255
basic.forever(function () {
    pixels.showColor(neopixel.rgb(white, white, 255))
    if (fade == 0) {
        white += -8
        if (white == 47) {
            fade = 1
            basic.pause(400)
        }
    } else {
        white += 8
        if (white == 255) {
            fade = 0
            basic.pause(400)
        }
    }
    basic.pause(100)
})
