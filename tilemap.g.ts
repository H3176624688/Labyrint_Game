// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别2":
            case "级别2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010000000001000000010000000100010100000100010001000000010001000101010101000101010101010100010001010000000001000000000000000000010101010001010001010101000101010101000100010000000000010001010000010001000101010101000100010000010100010000000000000001000100010101000101010100010101010101000001010000000000000100000000000001010100010101010101000101010100000101000100000000000000010001010001010001010101010101000100010000010100000000000000000000000100010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick], TileScale.Sixteen);
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`190011000101010101010101010101010101010101010101010101010101020404030403040404040403040404040404040304000001010404040404040404020404040404030404040404040000010104040304020404040404030404040404030204040400000101030404040404040204040404040404040404040404000001010402040304040404020404040204040304040404030000010104040404040204040404040404040404040304040400000101040403040404040404020404040404040204040304000001010304040402040403040404040404030404040404040000010104040403040404030404040402040404040402040400000101040404040404030404020404040403040404040404000001010000000003000300000000000000000000000000000000010104040404040404030404030402040404040204040400000101040404030404040404040304040404040404040404000001010404040404040404040403040204040304040404040000010102040404040403040404040404040404040304040400000101010101010101010101010101010101010101010101010101`, img`
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
.........................
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。