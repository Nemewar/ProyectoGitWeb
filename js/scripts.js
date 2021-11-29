const body = document.querySelector("body");
const botonSaludo = document.createElement("INPUT");
botonSaludo.type = "button";
botonSaludo.value = "hazme click";

botonSaludo.addEventListener("click",function(ev)
{
    console.log("hola mundo gaaa");
})

body.appendChild(botonSaludo);
