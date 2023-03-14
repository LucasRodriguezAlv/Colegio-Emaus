

function InicioDeSesion (){
    const usuario = prompt ("¡Bienvenido Profe! Ingrese su corrreo electronico")
    const contrasenia = prompt ("Ingrese su contraseña")
    alert ("Bienvenido " + usuario)

}
InicioDeSesion ()
console.log (InicioDeSesion)

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

class Alumnos{
    constructor (nombre, apellido, dni, curso){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni 
        this.curso = curso
    }
}


function crearAlumno () {
    let alumno = []
    let agregarAlumnos = prompt ("¿Cuantos alumnos desea ingresar?")
    for (let index = 0; index < agregarAlumnos; index ++){
        let nombre = prompt ("Ingresa tu nombre")
        let apellido = prompt ("Ingresa tu apellido")
        let curso = prompt ("Ingresa tu curso")
        let dni = prompt ("Ingrese su dni")

}

let AlumnoRegistrado = new Alumnos (nombre, apellido, curso, dni)
        alumno.push (AlumnoRegistrado)

console.log (Alumnos)
return Alumnos

}

crearAlumno ()


//for (let index = 1; index <= CALIFICACIONES; index++){
    //const NOTA = prompt ("Ingrese su nota " + index)
    //sumatoria = sumatoria + parseFloat (NOTA) 
    //console.log (sumatoria)
///}

promedio = sumatoria /CALIFICACIONES
alert ("El promedio es " + promedio)   

if  (promedio >= 7){
    alert ("El alumno esta aprobado")

} else{
    alert ("El alumno esta desaprobado")
}

//const objetoAlumno = new Alumnos (
  //  nombre,
    //apellido,
    //curso,
    //notas,
    //promedio,
//)

//function Alumnos(nombre, apellido, curso, notas, promedio){
  //  this.nombre = nombre
    //this.apellido = apellido
    //this.curso = curso
    //this.notas = notas
    //this.promedio = promedio 
//}