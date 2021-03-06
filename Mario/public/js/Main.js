import SpriteSheet from "./SpriteSheet.js"
import {loadImage} from "./Loaders.js"


const canvas = document.getElementById("screen")
const context = canvas.getContext("2d")

context.fillRect(0,0,50,50)

loadImage("/img/tilesets.png")
.then(image => {
    const sprites = new SpriteSheet(image, 16, 16)
    sprites.define("ground", 0, 0)
    sprites.define("sky", 3, 23)
    sprites.draw("sky", context, 50,70)
})