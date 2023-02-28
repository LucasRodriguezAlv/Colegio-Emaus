//const JUEGO = prompt("Ingrese su juego favorito")
//const ANIO = prompt ("Ingresa fecha en que lo jugaste")

//const FRASE = "Yo jugue al " + JUEGO + " en el año " + ANIO
//alert (FRASE)

function InicioDeSesion (){
    const usuario = prompt ("¡Bienvenido alumno! Ingrese su corrreo electronico")
    const contrasenia = prompt ("Ingrese su contraseña")
    alert ("Bienvenido " + usuario)

}
InicioDeSesion ()

let seleccionMateria  = parseInt (
    prompt (
        "¿Que materia desea ver? \n 1. Biologia \n 2. Matematica \n 3. Lengua \n 4. Quimica"
    )
);

if (seleccionMateria === 1) {
    alert ("La materia escogida es Biologia")
} else if (seleccionMateria === 2) {
    alert ("La materia escogida es Matematica")
} else if (seleccionMateria === 3) {
    alert ("La materia escogida es Lengua")
} else if (seleccionMateria === 4) {
    alert ("La materia escogida es Quimica")
} else {
    alert ("No escogio ninguna materia" )
}



const CALIFICACIONES = prompt ("Ingresa la cantidad de calificaciones trimestrales")
let sumatoria = 0
let promedio = 0

for (let index = 1; index <= CALIFICACIONES; index++){
    const NOTA = prompt ("Ingrese su nota " + index)
    sumatoria = sumatoria + parseFloat (NOTA) 
    console.log (sumatoria)
}

promedio = sumatoria /CALIFICACIONES
alert ("El promedio es " + promedio)   

if  (promedio >= 7){
    alert ("El alumno esta aprobado")

} else{
    alert ("El alumno esta desaprobado")
}