let display = document.querySelector(".display")
let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")
let num4 = document.querySelector(".num4")
let num5 = document.querySelector(".num5")
let num6 = document.querySelector(".num6")
let num7 = document.querySelector(".num7")
let num8 = document.querySelector(".num8")
let num9 = document.querySelector(".num9")
let num0 = document.querySelector(".num0")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let multi = document.querySelector(".multi")
let div = document.querySelector(".div")
let solve = document.querySelector(".solve")
let clear = document.querySelector(".clear")

num1.addEventListener("click",()=>{
    display.innerText = display.innerText + "1"
})
num2.addEventListener("click",()=>{
    display.innerText = display.innerText + "2"
})
num3.addEventListener("click",()=>{
    display.innerText = display.innerText + "3"
})
num4.addEventListener("click",()=>{
    display.innerText = display.innerText + "4"
})
num5.addEventListener("click",()=>{
    display.innerText = display.innerText + "5"
})
num6.addEventListener("click",()=>{
    display.innerText = display.innerText + "6"
})
num7.addEventListener("click",()=>{
    display.innerText = display.innerText + "7"
})
num8.addEventListener("click",()=>{
    display.innerText = display.innerText + "8"
})
num9.addEventListener("click",()=>{
    display.innerText = display.innerText + "9"
})
num0.addEventListener("click",()=>{
    display.innerText = display.innerText + "0"
})
plus.addEventListener("click",()=>{
    display.innerText = display.innerText + "+"
})
minus.addEventListener("click",()=>{
    display.innerText = display.innerText + "-"
})
multi.addEventListener("click",()=>{
    display.innerText = display.innerText + "*"
})
div.addEventListener("click",()=>{
    display.innerText = display.innerText + "/"
})
clear.addEventListener("click", ()=>{
    display.innerText = "0"
})
function result() {
    a = display.innerText
    return eval(a)
}


solve.addEventListener("click", ()=>{
    display.innerText = result()
})