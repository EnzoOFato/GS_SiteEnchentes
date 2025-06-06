const menuButton = document.getElementById("menu-toggle")
const menu = document.getElementById("mobile-menu")
const body = document.querySelector("body")

menuButton.addEventListener("click", () => {
    menu.classList.toggle("active")
})

document.addEventListener("click", (e) => {
    if (!menuButton.contains(e.target)) {
        menu.classList.remove("active")
    }
})

function mudaCor(btn){
    cor = btn.value
    if(cor === "branco" ){
        body.style.backgroundColor = "white"
    }
    else if(cor === "creme"){
        body.style.backgroundColor = "rgb(255, 245, 235)"
    }
    else if(cor === "azul"){
        body.style.backgroundColor = "lightblue"
    }
}