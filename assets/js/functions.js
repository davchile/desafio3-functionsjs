function paint(id, color) {
    const element = document.querySelector(id)
    element.style.backgroundColor = color
}

const container1 = document.querySelector("#container-1")
const container2 = document.querySelector("#container-2")
const container3 = document.querySelector("#container-3")
const container4 = document.querySelector("#container-4")

container1.addEventListener("click", ()=> {
    paint("#container-1", "black")
})
container2.addEventListener("click", ()=> {
    paint("#container-2", "black")
})
container3.addEventListener("click", ()=> {
    paint("#container-3", "black")
})
container4.addEventListener("click", ()=> {
    paint("#container-4", "black")
})