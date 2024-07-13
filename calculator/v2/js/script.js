box =`
<link rel="stylesheet" href="dark.css">`
document.querySelector(".line").addEventListener("click", (e) =>{
    e.stopPropagation()
    document.querySelector(".button").classList.add("side_button")
    setTimeout(() => {
        document.querySelector(".button").classList.remove("side_button")
    }, 100);
    document.querySelector(".side_bar_hidden").classList.toggle("side_bar")
})
document.addEventListener("click", () =>{
    document.querySelector(".side_bar_hidden").classList.remove("side_bar")
    document.querySelector(".settings_section_hidden").classList.remove("settings_section")
    document.querySelector(".prime").style.display = "none"
    document.querySelector(".select-options-box").classList.add("hidden-box")
})

document.querySelector(".settings").addEventListener("click", (e) =>{
    e.stopPropagation()
    document.querySelector("#settings").classList.add("rotate")
    setTimeout(() => {
        document.querySelector("#settings").classList.remove("rotate")
    }, 300);
    setTimeout(() => {
        document.querySelector(".settings_section_hidden").classList.add("settings_section")
    }, 70);
    // document.querySelector(".side_bar_hidden").classList.toggle("side_bar")
    
    document.querySelector(".prime").style.display = "inline-block"
})
document.querySelector(".box-1").addEventListener("click", (e) =>{
    e.stopPropagation()
    document.querySelector(".shown_box").classList.toggle("hidden_box")
    document.querySelector(".arrow") .classList.toggle("arrow-rotate")
    // document.querySelector(".side_bar_hidden").classList.toggle("side_bar")
})
document.querySelector(".box-2").addEventListener("click", (e) =>{
    e.stopPropagation()
    document.querySelector(".shown_box-2").classList.toggle("hidden_box")
    document.querySelector(".arrow-2") .classList.toggle("arrow-rotate")
    // document.querySelector(".side_bar_hidden").classList.toggle("side_bar")
})
document.querySelector(".shown_box").addEventListener("click", (e) =>{
    e.stopPropagation()
})
document.querySelector(".shown_box-2").addEventListener("click", (e) =>{
    e.stopPropagation()
})
document.querySelector("#dark").addEventListener("click", (e) =>{
    e.stopPropagation()
    sheet = document.getElementById("theme")
    if (sheet.getAttribute("href") == "css/theme/light.css"){
        sheet.setAttribute("href", "css/theme/dark.css")
    }
})
document.querySelector("#light").addEventListener("click", (e) =>{
    e.stopPropagation()
    sheet = document.getElementById("theme")
    if (sheet.getAttribute("href") == "css/theme/dark.css"){
        sheet.setAttribute("href", "css/theme/light.css")
    }
})
// document.querySelector("#custom").addEventListener("click", (e) =>{
//     e.stopPropagation()
//     sheet = document.getElementById("theme")
//     if (sheet.getAttribute("href") == "css/theme/dark.css"){
//         sheet.setAttribute("href", "css/theme/light.css")
//         }
//         alert("Feature not available")
// })
document.querySelectorAll(".err").forEach(error =>{
    error.addEventListener("click", () =>{
        document.querySelector(".error").classList.remove("hidden")
        setTimeout(() => {
            document.querySelector(".error").classList.add("hidden")
        }, 1000);
    })
    
})


document.querySelector("#standard").addEventListener("click", ()=>{
document.querySelector(".calculator").hidden = false
document.querySelector(".binary").hidden = true
})
document.querySelector("#binary").addEventListener("click", ()=>{
document.querySelector(".calculator").hidden = true
document.querySelector(".binary").hidden = false
})
