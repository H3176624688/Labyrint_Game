scene.onOverlapTile(SpriteKind.Player, sprites.builtin.brick, function (sprite, location) {
    game.over(false, effects.blizzard)
})
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . f f f . . . . 
    . . . . f 3 3 3 f 3 3 3 f . . . 
    . . . . f 3 3 3 3 3 1 3 f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . . f 3 b b b 3 f . . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let _3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . f f f . . . . 
    . . . . f 3 3 3 f 3 3 3 f . . . 
    . . . . f 3 3 3 3 3 1 3 f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . . f 3 b b b 3 f . . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
let _4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f . f f f . . . . 
    . . . . f 3 3 3 f 3 3 3 f . . . 
    . . . . f 3 3 3 3 3 1 3 f . . . 
    . . . . f 3 3 3 3 3 3 3 f . . . 
    . . . . . f 3 b b b 3 f . . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Projectile)
scene.setBackgroundColor(0)
scene.cameraFollowSprite(mySprite)
mySprite.setPosition(34, 34)
tiles.setTilemap(tilemap`级别1`)
mySprite.startEffect(effects.trail)
controller.moveSprite(mySprite)
mySprite.say("走出迷宫", 2000)
forever(function () {
    music.playMelody("C5 G B A F A C5 B ", 170)
})
forever(function () {
    if (mySprite.isHittingTile(CollisionDirection.Right)) {
        music.stopAllSounds()
        game.over(true, effects.confetti)
    }
})
