document.addEventListener("keydown", function(event) {
    if (event.key === "a") {
        roseColor()
    } else if (event.key === "s") {
        orangeColor()
    } else if (event.key === "d") {
        lightBlueColor() 
    } else if (event.key === "q") {
        purpleColor()
    } else if (event.key === "w") {
        greyColor()
    } else if (event.key === "e") {
        cafeColor()
    } 
})

function roseColor() {
    const container = document.querySelector("#key")
    container.style.background = "pink"
}
function orangeColor() {
    const container = document.querySelector("#key")
    container.style.background = "orange"
}
function lightBlueColor() {
    const container = document.querySelector("#key")
    container.style.background = "#85C1E9"
}
function purpleColor() {
    const container = document.querySelector("#key")
    const newElement = document.createElement("div")
    container.appendChild(newElement)
    newElement.style.background = "#8E44AD"
    newElement.style.border ="black solid 2px"
}
function greyColor() {
    const container = document.querySelector("#key")
    const newElement = document.createElement("div")
    container.appendChild(newElement)
    newElement.style.background = "#A6ACAF"
    newElement.style.border ="black solid 2px"
}
function cafeColor() {
    const container = document.querySelector("#key")
    const newElement = document.createElement("div")
    container.appendChild(newElement)
    newElement.style.background = "#AF601A"
    newElement.style.border ="black solid 2px"
}
