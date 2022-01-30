class Obstacle {
    constructor(ctx,x,y,width,height){
        this.ctx = ctx
        this.x = x
        this.y = y
        this. width = width
        this.height = height
        this.ay = 0.9
        this.img = new Image()
        this.img.src = "/images/obstacle-middle.png"
    }

    move() {
        
        this.y += this.ay
    }
    

    draw() {
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height,
           
            
        )
    }
}