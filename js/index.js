
const myObstacles = [];
// bring the road image
var road = new Image();
road.src = "/m1_d09-lab-canvas_race_car-Lebow-cloud/images/road.png";

var car = new Image();
car.src = "/m1_d09-lab-canvas_race_car-Lebow-cloud/images/car.png";

// LOAD
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    gameArea.start();
  };
};

// CREATE OUR BOARD ----------

const gameArea = {
  canvas: document.getElementById("canvas"),
  frames: 0,
  start: function () {
    context = this.canvas.getContext("2d");
    context.drawImage(road, 0, 0, 500, 700); // DRAW THE ROAD IMAGE
    context.drawImage(car, 200, 550, 100, 100);
    

    this.interval = setInterval(updateGameArea, 5);
  },

  /*/ ----PROBLEM 111
  clear: function () {
    ctx.clearRect(0, 0,this.canvas.width,this.canvas.height);
  },*/
};

function updateGameArea() {
   //gameArea.clear();  // 111
  updateObstacles();
}

function updateObstacles() {     // NEED TO FIND THE RIGHT ALGORITHIM
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update()
    
  }
  gameArea.frames += 1;
  if (gameArea.frames % 120 === 0) {
    let x = gameArea.canvas.width;
    
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(19, height, "orange", x, 0));
    myObstacles.push(
      new Component(19, x - height - gap, "orange", x, height + gap)
    );
  }
}

// -----ATTACH CAR TO THE KEYBORAD------MOVEMENT

document.addEventListener("keydown", (e) => {
  switch (e.keyCode) {
    case 37:
      car.speedX -= 1;
      break;
    case 39:
      car.speedX -= 1;
      break;
  }
  console.log("keys running");
});

document.addEventListener("keyup", (e) => {
  car.speedX = 0;
  car.speedY = 0;
});

// ----------------------------------
