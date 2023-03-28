const salida = document.getElementById("salida");

function check(){

    const pelota = document.getElementById("pelota").checked;
    const equipoA = document.getElementById("equipoA");
    const equipoB = document.getElementById("equipoB");
    const edad = document.getElementById("edad").checked;
    const clima = document.getElementById("clima").checked;
    
    let output = [];

    if(pelota != true){
        output.push("No hay pelota")
    } 
    if(equipoA.value < 11){
        output.push("No hay suficientes jugadores en el equipo A")
    } 
    if(equipoB.value < 11){
        output.push("No hay suficientes jugadores en el equipo B")
    } 
    if(edad != true){
        output.push("Hay jugadores menores de edad")
    } 
    if(clima != true){
        output.push("El clima no es el ideal")
    } 

    if(output.length == 0){
        output.push("El partido se puede jugar");
        return output;
    } else{
        return output;
    }

    
}

function comprobar(){
    return document.getElementById("salida").innerHTML = check()
}