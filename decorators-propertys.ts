// APLICACIÓN DE PROPIEDADES

// vamos a sobreescribir los setters y getters por nuevas propiedades
function logProperty(target, key) {
  // vamos a obtener el elemento que llega
  let _val = target[key];
  // crearemos los nuevos getters y setters para sobreescribir
  const getter = () => {
    console.log(`Get: ${key} => {_val}`);
    return _val;
  }
  const setter = (newValue) => {
    console.log(`Set: ${key} => ${newValue}`);
    _val = newValue;
  }
  
  // los guardamos en un objeto
  const objectProperty = {
    get: getter,
    set: setter
  }
  
  // sobreescribimos las propiedades 
  Object.defineProperty(target, key, objectProperty);
}

class Persona {
//   @logProperty este el decorator
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const p1 = new Persona('Alan');
p1.name = 'Platzi'; // Set: name => 'Platzi'
const name_new = p1.name; // Get: name => 'Platzi'