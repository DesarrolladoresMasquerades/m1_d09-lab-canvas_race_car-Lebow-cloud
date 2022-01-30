class Car {
    constructor(ctx){
        this.ctx = ctx;
        this.carImg = {
            img: new Image(),
            x: 210,
            y: 499,
            width: 80,
            height: 160,
            vx: 0,
            //ax: 0.001   --->> ACCELETARION FLAPPY BIRD WILL GO DOWN
        
            
        }
        this.carImg.img.src = "/images/car.png"
    }


    move() {
        
       // this.carImg.vx += this.carImg.ax //ax: 0.001   --->> ACCELETARION FLAPPY BIRD WILL GO DOWN
        
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
            if (possibleKeystrokes.includes(key)) {
              event.preventDefault();
              switch (key) {
                case 37:
                case 65:
                  this.carImg.x -= 20;
                  break;
                case 38:
                case 87:
                   this.carImgy -= 20;
                  break;
                case 39:
                case 83:
                  this.carImg.x += 20;
                  break;
                
                case 68:
                  if (this.carImg.y <= 690 - this.carImg.height) this.carImg.y += 20;
                  break;
              }
            }
        
        }
    }

    draw() {
        this.ctx.drawImage(
            this.carImg.img,
            this.carImg.x,
            this.carImg.y,
            this.carImg.width,
            this.carImg.height,
           
            
        )
    }

    collidesWith(cappuccino){
      return (this.x < cappuccino.x + cappuccino.width) &&
      this.x + this.width > cappuccino.x &&
      this.y < cappuccino.y + cappuccino.height &&
      this.y + this.height > cappuccino.y
    }

    exitsCanvas() {
      console.log("star fuera")
      return this.x > this.ctx.canvas.width || this.x + this.width < 0;
    }



    
}