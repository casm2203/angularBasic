// creamos nuestra classe utilizando 'class'
class Transporte {
    // asignamos el acceso de sus atributos
    private velocidad: number;
    private formaDeMovilidad: string;
  
    // creamos un constructor para setear las variables
    // remarcamos que tipos de datos van a ser esas variables
    constructor(velocidad: number, formaDeMovilidad: string) {
      this.velocidad = velocidad;
      this.formaDeMovilidad = formaDeMovilidad;
    }
    
    // creamos nuestros métodos 'getters' y 'setters'
    getVelocidad() {
      return this.velocidad;
    }
    setVelocidad(velocidad: number) {
      this.velocidad = velocidad;
    }
    getFormaDeMovilidad() {
      return this.formaDeMovilidad;
    }
    setFormaDeMovilidad(formaDeMovilidad: string) {
      this.formaDeMovilidad = formaDeMovilidad;
    }
  }
  
  // probamos nuestra clase
  const transporte: Transporte = new Transporte(20, 'suelo');
  
  // creamos otra clase 'extendiendo' transporte
  // hacemos uso de la herencia de programacion Or. a Objetos
  class Auto extends Transporte {
    // agregamos más parametros
    private cantidadDePuertas: number;
    
    constructor(
      velocidad: number, 
      formaDeMovilidad: string,
      // agregamos un nuevo elemento
      cantidadDePuertas: number
    ) {
      // usamos super para sobrescribir el constructor
      // hacemos uso del constructor del padre
      super(velocidad, formaDeMovilidad);
      // seteamos nuestro nuevo elemento
      this.cantidadDePuertas = cantidadDePuertas;
    }
  
    // sobreescribimos funciones de la 'clase padre'
    getVelocidad() {
      return super.getVelocidad() + 10;
    }
    // o también creamos las nuevas
    getCantidadDePuertas() {
      return this.cantidadDePuertas;
    }
    setCantidadDePuertas(cantidadDePuertas: number) {
      this.cantidadDePuertas = cantidadDePuertas;
    }
  }
  
  // probamos nuestra nueva class
  const auto: Auto = new Auto (20, "suelo", 4 );