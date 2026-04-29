let cantidad=document.getElementById("cantidad")
let boton1=document.getElementById("boton1")
let boton2=document.getElementById("boton2")
let contar=0

boton1.addEventListener("click", funcion)

function funcion(){

contar++

cantidad.textContent=contar


}

boton2.addEventListener("click", funcion1)

function funcion1(){

contar--

cantidad.textContent=contar
}
