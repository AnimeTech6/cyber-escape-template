// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020202010202020202020202020202020202020102020202020202020202020101010101010101010102020202020202020202020202020201020202020202020202020202020202010101010202020202020202020202020102020101020202020202010101010101020202010202020202020102020202020202020102020202020201010101010101010101020202020202010202020202020202020202010101010102020202020202020202020202020201010202020202020202020202020202020102020202020202020202020202020201010101010101010101030202020202020202020202020202020202020202020202020202020202020202`, img`
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 . . . . 2 2 2 
2 2 2 2 2 2 2 2 2 . 2 2 . . 2 2 
2 2 2 2 . . . . . . 2 2 2 . 2 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 2 
2 2 2 2 . . . . . . . . . . 2 2 
2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.floorLight0,sprites.dungeon.collectibleInsignia], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
