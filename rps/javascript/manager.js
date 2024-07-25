let value = {
    1:"rock",
    2:"paper",
    3:"scissor"
}
let new_game = document.querySelector(".new-game")
let start_menu = document.querySelector(".start-menu")
let first_menu = document.querySelector(".first-choose")
let round_menu = document.querySelector(".rounds")
let img = {
    1: "assets/images/rock.png",
    2: "assets/images/paper.png",
    3: "assets/images/scissor.png"
}
game = (user) =>{
    var move = Math.floor(Math.random() * (4 - 1) + 1);

    if (move == 1 && user == 2) {
        return ["User", user];
    } else if (move == 2 && user == 1) {
        return ["Computer", move];
    } else if (move == 3 && user == 1) {
        return ["User", user];
    } else if (move == 1 && user == 3) {
        return ["Computer", move];
    } else if (move == 2 && user == 3) {
        return ["User", user];
    } else if (move == 3 && user == 2) {
        return ["Computer", move];
    } else {
        return ["Draw", move];
    }
}
counter = (v) =>{
    if(v == "User"){
    win +=1;
    round +=1;
    }
    else if(v == "Computer"){
    loose +=1;
    round +=1
    }
    else{
        draw +=1;
        round +=1
    }
    document.querySelector('.loose').innerText = loose
    document.querySelector('.win').innerText = win
    document.querySelector('.draw').innerText = draw
    document.querySelector('.round').innerText = `Round : ${round}`
}
function end(){
        setTimeout(() => {
           round_menu.classList.add('hidden') 
        }, 200);
        result()
        document.querySelector('.exit-1').addEventListener('click', () =>{
            document.querySelector('.win-card').classList.add('card-hidden') 
            setTimeout(() => {
                start_menu.classList.remove('hidden')
            }, 200);
        })
    document.querySelector('.exit-2').addEventListener('click', () =>{
            document.querySelector('.loose-card').classList.add('card-hidden') 
            setTimeout(() => {
                start_menu.classList.remove('hidden')
            }, 200);
        })
    document.querySelector('.exit-3').addEventListener('click', () =>{
            document.querySelector('.draw-card').classList.add('card-hidden')
            setTimeout(() => {
                start_menu.classList.remove('hidden')
            }, 200); 
        })
        
        
}
notify = (x) =>{
    document.querySelector('.round-card').classList.remove('card-hidden')
    document.querySelector('.rounds').classList.add('hidden')
    document.querySelector('#winner').innerText = x
    if(winner == "User"){
        document.querySelector('#winner').computedStyleMap.color = "#38FF12"
    }
    else if(winner == "Computer"){
        document.querySelector('#winner').computedStyleMap.color = "#FF3131"
    }
    else{
        document.querySelector('#winner').computedStyleMap.color = "#FFAD00"
    } 
    document.querySelector('.exit-0').addEventListener('click',()=>{
        document.querySelector('.round-card').classList.add('card-hidden')
        setTimeout(() => {
        round_menu.classList.remove('hidden')
        document.querySelector('.last-move').firstElementChild.setAttribute('src',`${img[y]}`)
        document.querySelector('.winner').innerText = `Winner : ${x}`
        document.querySelector('.win')
        counter(x)
        }, 300);
    })
}
result = () =>{
    if(win > loose){
        document.querySelector('.win-card').classList.remove('card-hidden')
    }
    else if(win < loose){
        document.querySelector('.loose-card').classList.remove('card-hidden')
    }
    else if (win == loose){
        document.querySelector('.draw-card').classList.remove('card-hidden')
    }
}
new_game.addEventListener('click', () =>{
     start_menu.classList.add('hidden')
     first_menu.classList.remove('hidden')
     win = 0
     loose = 0
     draw = 0
     round = 0
})
    document.querySelectorAll(".box").forEach((e) =>{
     e.addEventListener('click', () =>{
    first_menu.classList.add('hidden')
    let c = e.getAttribute('data-choice')
    let [x,y] = game(c)
    notify(x)
    counter(x)
    })
})

document.querySelectorAll(".select").forEach((e) =>{
    e.addEventListener('click', () =>{
    let c = e.getAttribute('data-choice')
    let [x,y] = game(c)
    document.querySelector('.last-move').firstElementChild.setAttribute('src',`${img[y]}`)
    document.querySelector('.winner').innerText = `Winner : ${x}`
    document.querySelector('.win')
    counter(x)
    if(round < 9){
        notify(x)
    }
    else if(round>=9){
        end()
    }
})
})
document.querySelector('.surrender').addEventListener('click', () =>{
     document.querySelector('.rounds').classList.add('hidden')
     document.querySelector('.surrender-card').classList.remove('card-hidden')
     document.querySelector('.exit-4').addEventListener('click', () =>{
     document.querySelector('.surrender-card').classList.add('card-hidden')
     setTimeout(() => {
        document.querySelector('.start-menu').classList.remove('hidden')
     }, 300);
})
})
