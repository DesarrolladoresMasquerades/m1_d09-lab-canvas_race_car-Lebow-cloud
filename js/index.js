



const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")



const background = new Background(ctx)
const car = new Car(ctx)
const obstacle = new Obstacle(ctx,(Math.floor(Math.random() *440 + 30)),150,80,160)

const game = new Game (ctx,background,car,obstacle)



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.init();
  };


};

