scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.setBackgroundColor(2)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 8 8 8 8 8 . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . . . 8 8 8 . . . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . . 8 8 8 8 8 8 8 8 8 . . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
game.onUpdateInterval(500, function () {
	
})
