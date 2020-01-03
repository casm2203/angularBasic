//este es el decorador que extiende de target y sobre escribe la clase "P"
function init(target) {
    return class extends target{
      nombre = 'Alan';
      apellido: 'Buscaglia';
  
      sayMyName() {
        return `${this.nombre} ${this.apellido}`;
      }
    }
  }
  
//   @init este es el decorador de c la clase
  class P{
    constructor () {}
  
    sayMyName() {}
  }
  
  const p: P = new P();
  console.log(p.sayMyName()); // Alan Buscaglia