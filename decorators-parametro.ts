function logParameter(target:any, propertyName:any, index:any) {
    // identificamos cada parametro que tenemos
    const metadataKey = `log_${propertyName}_parameters`;
    // checkeamos si es o no un arreglo
    if (Array.isArray(target[metadataKey])) {
      // agregamos nuestro index al array
      target[metadataKey].push(index);
    } else {
      // creamos un arreglo con index como único parametro
      target[metadataKey] = [index];
    }
    console.log(target[metadataKey]);
  }
  
  class P {
    greet (message: string, /*@logParameter este es el decorador en la propiedad correspondiente*/additional:string): string {
      return message;
    }
  }
  
  const p = new P();
  p.greet('Hola','Enrique');