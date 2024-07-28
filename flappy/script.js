// game board

let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

// bird
let birdwidth = 34;  //width/height = 408/220px = 17/12 ratio
let birdheight = 24;
let birdX = boardWidth/8;
let birdY = boardHeight/2;
let birdimg = ""

let bird = {
    x : birdX,
    y : birdY,
    width : birdwidth,
    height : birdheight
}

//pipe
let pipeArray = []
let pipewidth = 64;   // 1/8 ratio
let pipeheight = 512;
let pipeX = boardWidth
let pipeY = 0

let toppipeimg;
let bottompipeimg;
//score
let score = 0;
let high_score = 0;

//sound effects
let hit = document.getElementById('hit');
let die = document.getElementById('die');
let point = document.getElementById('point')


// game physics
let velocity_pipe = 0;
let velocity_bird = 0;  //bird jumps up
let gravity = 0; 
let game_over = false;

document.addEventListener('click', () =>{
     velocity_pipe = -2;
     velocity_bird = 0;
     gravity = 0.2; 
     game_started = true
}

)

document.addEventListener('keydown', (event) => {
    const validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' ', 'x', 'X'];
    if (validKeys.includes(event.key)) {
        velocity_pipe = -2;
        velocity_bird = 0;
        gravity = 0.2; 
        game_started = true
    }
});
window.onload = function(){
   board =  document.getElementById("game")
   board.height = boardHeight
   board.width = boardWidth
   context = board.getContext("2d"); // this is used for drawing on board

   //draw bird
//    context.fillStyle = "green"
//    context.fillRect(bird.x, bird.y, bird.width, bird.height)

   //load img
   birdimg = new Image()
   birdimg.src = "assets/img/flappybird.png"
   birdimg.onload = function(){
   context.drawImage(birdimg, bird.x, bird.y, bird.width, bird.height)  
   }
toppipeimg = new Image()
toppipeimg.src = "assets/img/toppipe.png"

bottompipeimg = new Image()
bottompipeimg.src = "assets/img/bottompipe.png"

setInterval(generatepipe, 1500)

requestAnimationFrame(update)


document.addEventListener('keydown', bird_move)
document.addEventListener('click',() => {
    velocity_bird = -6;
    document.querySelector('.click').classList.add('pressed')
        setTimeout(() => {
            document.querySelector('.click').classList.remove('pressed') 
        }, 300);
})
}
function update() {
    requestAnimationFrame(update)
    
    if(game_over) {
        document.getElementById('game_over').setAttribute('style', 'display: block;');
      if(high_score < score){
        high_score = score;
        
        document.querySelector(".high_score").innerHTML = `High Score: ${high_score}`;
        document.querySelector(".high_score2").innerHTML = `High Score: ${high_score}`;
      }
      return;
        }
    context.clearRect(0, 0, boardWidth, boardHeight) // clear the board before redrawing
            //starting x-y, to range

    
    // draw bird
    velocity_bird += gravity 
    // bird.y += velocity_bird
    bird.y = Math.max(bird.y + velocity_bird, 0)
    context.drawImage(birdimg, bird.x, bird.y, bird.width, bird.height) 
    if(bird.y > boardHeight){
        game_over = true;
        die.play()
    }
    // pipe
    for (let index = 0; index < pipeArray.length; index++) {
        const pipe = pipeArray[index];
        pipe.x += velocity_pipe;  //moving 2px per frame
        context.drawImage(pipe.img, pipe.x, pipe.y, pipe.width, pipe.height)
        
        if(!pipe.passed && bird.x > pipe.x + pipe.width ) {
            point.play()
            score += 0.5;
            pipe.passed = true;
        }

        if (collision(bird, pipe)) {
            hit.play();
            game_over = true;
    }
}
while(pipeArray.length > 0 && pipeArray[0].x < -pipewidth){
    pipeArray.shift()  //removes first element of array (pipe)
}
  document.querySelector("#score").innerHTML = score;
}
function generatepipe() {
    if(game_started == false){
        return;
    }
    if(game_over) {
        return;
        }
    random_pipe_y = pipeY - pipeheight / 4 - Math.random() * (pipeheight /2);
    let opening_space = board.height/4
    let top_pipe ={
        img : toppipeimg,
        x : pipeX,
        y : random_pipe_y,
        width : pipewidth,
        height : pipeheight,
        passed : false,
    }
    pipeArray.push(top_pipe)

    let bottom_pipe ={
        img : bottompipeimg,
        x : pipeX,
        y : random_pipe_y + pipeheight + opening_space,
        width : pipewidth,
        height : pipeheight,
        passed : false,   
    }
    
    pipeArray.push(bottom_pipe)
}
function bird_move(e) {
    if(e.code == 'ArrowUp' || e.code == 'Space' || e.code == 'KeyX') {
        if(game_started) {
            velocity_bird = -6;
        }
        
    
    }
    if(game_over) {
        bird.y = birdY;
        score = 0;
        pipeArray = [];
        game_over = false;
        document.getElementById('game_over').setAttribute('style', 'display : none;');
    }
    if(e.code == 'ArrowUp'){
        document.querySelector('.arrow').classList.add('pressed')
        setTimeout(() => {
            document.querySelector('.arrow').classList.remove('pressed') 
        }, 300);
    }
    else if(e.code == 'Space'){
        document.querySelector('.space').classList.add('pressed')
        setTimeout(() => {
            document.querySelector('.space').classList.remove('pressed') 
        }, 300);
    }
    else if(e.code == 'KeyX'){
        document.querySelector('.keyX').classList.add('pressed')
        setTimeout(() => {
            document.querySelector('.keyX').classList.remove('pressed') 
        }, 300);
    }
}

function collision(a, b){ 
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y
}

