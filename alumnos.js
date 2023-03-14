class Alumnos{
    constructor (nombre, apellido, dni, curso, notas, promedio){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni 
        this.curso = curso
        this.notas = notas
        this.promedio = promedio 
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
        let notas = prompt ("Ingrese sus notas cuatrimestrales")
        let promedio = prompt ("Ingrese su promedio de la cursada")

        let AlumnoRegistrado = new Alumnos (nombre, apellido, curso, dni, notas, promedio)
        alumno.push (AlumnoRegistrado)

    }

    console.log (alumno)
    return alumno
}

crearAlumno ()




//const objetoAlumno = new Alumnos (
//    nombre,
//    apellido,
//    curso,
//    notas,
//    promedio,
//)
//const alumnoUno = crearAlumno ()
//console.log (alumnoUno)

//const alumnoDos = crearAlumno ()
//console.log (alumnoDos)





