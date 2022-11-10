input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.rotation(Rotation.Roll))
})
input.onButtonPressed(Button.AB, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (input.temperature()))
})
input.onGesture(Gesture.LogoUp, function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
basic.forever(function () {
	
})
