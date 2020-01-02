// Declaración de Variables en TypeScript
// ’let’ y ‘const’ son tipos de declaradóres de variables similares a var, que permiten evitar algunos de los “problemas” de JavaScript.
// const, por ejemplo evita la reasignación a una variable.

const numLivesForCat = 9; // no se puede re asignar
// let, impide el block-scoping
// Las variables ‘let’ no son visibles fuera de su bloque o bucle for más cercano.

let hello = "Hello!"; // declaración normal
// block scoping test
var a = 5;
var b = 10;

if (a === 5) {
  let a = 4; // El alcance es dentro del bloque if
  var b = 1; // El alcance es global
  console.log(a);  // 4
  console.log(b);  // 1
} 
console.log(a); // 5
console.log(b); // 1

// Tipos de Datos en TypeScript
// Boolean - El tipo de dato más básico, puede ser true o false

let isDone:boolean = false;
// Number - Los valores numéricos reciben el tipo de dato ‘number’.
// También soporta decimal y hexadecimal. Binario y Octal a partir de ECMAScript 2015.

let decimal: number = 67;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// String - Usamos ‘string’ para referirnos a estos tipos de datos textuales.
// Podemos usar comillas dobles (") o simples (’) para rodear la cadena. Tambien los `` para mezclar las cadenas con otras variables.

let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let sentence: string = `Hola!, mi nombre es ${fullName}`;
// Array - Los tipos de dato Array pueden ser escritos de dos maneras.
// 1 - Colocamos el tipo de datos seguido de un [], señalamos que sera un array de ese tipo

let list1 :number[] = [1, 2, 3];
// 2 - Usamos un generic, Array<elemType>

let list2: Array<number> = [1, 2, 3];
// Any - Cuando aun no sabemos que tipo de dato vamos a utilizar.

let notSure: any = 4;
// ...las reasignamos...
notSure = "quizas es un string";
notSure = false; // ahora es un boolean
// si la usamos en un Array podemos mezclar los tipos de datos
let list3: any[] = [1, true, "free"];
// Void - Lo opuesto a any
// Visto comunmente en las functions y quiere decir que no retorna ningun valor.

function warnUser(): void {
    console.log("Este es mi mensaje");
}