class Game {
    constructor(ctx,background,car,obstacle) {
        this.ctx = ctx;
        this.background = background;
        this.car = car;
        this.obstacle = obstacle;
        this.frameNumber = 0;
        this.newObstacles =[];

    }

    start() {
        
        this.frameNumber += 1
        this.move()
         //this.checkCollisions()
        this.draw()
        for(let i = 0; i < this.newObstacles.length; i++){
            this.newObstacles[i].move();
            this.newObstacles[i].draw();
            if(this.newObstacles[i].y > 800){      //---- WHEN THE CAR GOES AWAY FROM THE CANVA WE DELETE IT-----
                this.newObstacles.splice(i,1);
            }
        }
        requestAnimationFrame(this.start.bind(this));

    }

    createObstacles() {
        if(Math.floor(Math.random() *25) % 2 ===0){
            this.newObstacles.push(new Obstacle(this)) // ERROR HEREE ------
            console.log("New Car, carefull!!!")
        }
        setTimeout(() =>{
            this.createObstacles();
        }, 3000)
    }
    
    init() {
        this.start();
        this.createObstacles();
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








}