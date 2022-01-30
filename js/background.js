class Background {
    constructor(ctx) {
        this.ctx = ctx;
        this.backgroundImg = {
            img: new Image(),
            x: 0,
            y: 0,
            width: 500,
            height:700,
         
            


        }
        this.backgroundImg.img.src = "/images/road.png"

    }
 
    draw() {
        this.ctx.drawImage(
            this.backgroundImg.img,
            this.backgroundImg.x,
            this.backgroundImg.y,
            this.backgroundImg.width,
            this.backgroundImg.height
        )
    }




}