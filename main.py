def on_overlap_tile(sprite, location):
    game.over(False, effects.blizzard)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.brick, on_overlap_tile)

mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(mySprite)
mySprite.set_position(34, 34)
tiles.set_tilemap(tilemap("""
    级别2
"""))
mySprite.start_effect(effects.trail)
controller.move_sprite(mySprite)
mySprite.say("走出迷宫", 2000)

def on_forever():
    music.play_melody("C5 G B A F A C5 B ", 170)
forever(on_forever)

def on_forever2():
    if mySprite.is_hitting_tile(CollisionDirection.RIGHT):
        music.stop_all_sounds()
        game.over(True, effects.confetti)
forever(on_forever2)
