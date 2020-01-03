function log(target, key) {
    console.log(key + 'se ha llamado');
  }
  
  class Persona3{
    private name: string;
  
    constructor(name:string) {
      this.name = name;
    }
  
    // @log este es el decorador
    sayMyName() {
      console.log(this.name);
    }
  }
  
  const persona3: Persona3 = new Persona3('Alan');
  persona3.sayMyName() // 'Alan' // 'sayMyName se ha llamado'

// Los decorators son muy utilizados en Angular, estos son una declaración que tiene TypeScript para poder extender la funcionalidad 
// de distintos elementos ya sea una clase, un parámetro, una propiedad o una función.
// En una función decorator, el parámetro target hace referencia al objeto que posee el decorador
// y el parámetro propertyKey, o key, hace referencia al elemento que extendemos.