class Game {
    constructor(ctx,background,car,obstacle) {
        this.ctx = ctx;
        this.background = background;
        this.car = car;
        this.obstacle = obstacle;
        this.frameNumber = 0;
        this.newObstacles = [];

    }

    start() {
        
        this.frameNumber += 1
        this.move()
        this.checkCollisions()
        this.draw()
        for(let i = 0; i < this.newObstacles.length; i++){
            this.newObstacles[i].move();
            this.newObstacles[i].draw();
         
            if(this.newObstacles[i].y > 800){      //---- WHEN THE CAR GOES AWAY FROM THE CANVA WE DELETE IT-----
                this.newObstacles.splice(i,1);
            }
        }
        if(this.checkCollisions()) this.gameOver();  
           // IF COLLISION IS TRUE WE GO GAMEOVER
        requestAnimationFrame(this.start.bind(this));

    }

    stop() {
        cancelAnimationFrame(this.frameNumber)
        this.frameNumber = null;
    }

    createObstacles() {
        if(Math.floor(Math.random() *25) % 2 ===0){
            this.newObstacles.push(new Obstacle(ctx,(Math.floor(Math.random() *440 + 50)),0,80,160)) // ERROR HEREE ------
            console.log("New Car, carefull!!!")
        }
        setTimeout(() =>{
            this.createObstacles();
        }, 1500)
    }
    
    init() {
        if(this.frameNumber) this.stop()
        this.createObstacles();
        this.start();
        
    }
        
        //this.sound.stop() ETC
        //background.init()
    

    draw() {
        this.ctx.clearRect(0, 0, ctx.canvas.width,ctx.canvas.height)
        this.background.draw(this.frameNumber)
        this.car.draw(this.frameNumber)
        this.obstacle.draw(this.frameNumber)
        
    }
    
    move(){

        this.car.move(this.frameNumber)
        this.obstacle.move(this.frameNumber)
    }

    checkCollisions() {            // if collisions is TRUE we do GameOver
        let collisions = false;
    
        if (
          this.newObstacles.some((obstacle) =>    // WE LOOK INSIDE THE ARRAY OF OBSTACLES IF SOME COLLIDESWITH THE Car
            this.car.collidesWith(obstacle)
          )
        ) {
          collisions = true;
        }
    
        if (this.car.exitsCanvas()) collisions = true;
    
    
        return collisions;
      }

      gameOver() {
          this.stop()
          this.ctx.save()
          this.ctx.fillText("Game Over",this.ctx.canvas.width / 2,this.ctx.canvas.height / 2)
          this.ctx.restore()
      }
    








}