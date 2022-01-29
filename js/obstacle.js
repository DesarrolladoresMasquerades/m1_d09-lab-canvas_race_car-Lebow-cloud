class Obstacle {
    constructor(ctx){
        this.ctx = ctx
        this.obstacleImg = {
            img: new Image(),
            x: Math.floor(Math.random() *440 + 30),
            y: 150,
            width: 80,
            height: 160,
            ay: 0.9
        }
        this.obstacleImg.img.src = "/images/obstacle-middle.png"
    }

    move() {
        
        this.obstacleImg.y += this.obstacleImg.ay
    }
    

    draw() {
        this.ctx.drawImage(
            this.obstacleImg.img,
            this.obstacleImg.x,
            this.obstacleImg.y,
            this.obstacleImg.width,
            this.obstacleImg.height,
           
            
        )
    }
}