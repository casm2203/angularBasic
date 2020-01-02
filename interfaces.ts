//creación de un tipo de dato
type Dni = number;


// interfaz 
interface Persona {
    altura?: number;
    edad:number;
    nombre: string;
    apellido: string;
    dni: Dni;
}
//un objetos con la interfaz Personas
const persona: Persona = {
    altura: 1.59,
    edad: 24,
    nombre: 'cristian',
    apellido: 'suarez',
    dni: 1140876493
}