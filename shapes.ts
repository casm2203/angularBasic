class people {
    private edad:number;
    private altura:number;
    private dni:string;

    constructor(edad: number, altura: number, dni: string) {
        this.edad = edad;
        this.altura = altura;
        this.dni = dni;

    }
}

class Alumno extends people {
    private matricula: string;

    constructor(edad: number, altura: number, dni: string, matricula: string) {
        super(edad, altura, dni);
        this.matricula = matricula;

    }
}
let people1  : people = new people (27, 1.69, '36601731');
let alumno: Alumno = new Alumno(27, 1.69, '36601731', '123');

//people1 = alumno;
//alumno = people1; *Shapes*- toda persona no es un alumno y todo alumno es una persona