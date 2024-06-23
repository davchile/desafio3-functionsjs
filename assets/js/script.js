//Ejercicio 2.1
function pintar() {
    ele.style.backgroundColor = 'yellow'
}
const ele = document.querySelector("#ele1")
ele.addEventListener("click", pintar)

//Función anónima 2.2
// const element = document.querySelector("#ele1")
// element.addEventListener("click", ()=> {
// element.style.backgroundColor = "yellow"
// })

//Función anónima 2.3
// function cambiarColor(color = "green") {
//     const element = document.querySelector("#ele1")
//     element.style.backgroundColor = color
// }
// const elementUno = document.querySelector("#ele1")
// elementUno.addEventListener("click", ()=> {
//     cambiarColor("yellow")
// })
//**Por favor descomentar cada ejercicio para evaluar funcionalidad */