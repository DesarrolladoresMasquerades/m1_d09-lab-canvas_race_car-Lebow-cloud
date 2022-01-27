class Component {
    constructor(width,height,color,x,y){
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;

    }

    update() {
        const ctx = gameArea.context;
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y,this.height,this.width)
    }
}




