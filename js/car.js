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
                  if (this.x >= 10) this.x -= 20;
                  break;
                case 38:
                case 87:
                  if (this.y >= 10) this.y -= 20;
                  break;
                case 39:
                case 83:
                  if (this.x <= 490 - this.width) this.x += 20;
                  break;
                
                case 68:
                  if (this.y <= 690 - this.height) this.y += 20;
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



    
}