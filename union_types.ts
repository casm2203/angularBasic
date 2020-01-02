//Habrá ocasiones en las que necesitemos asignar variables con más de un tipo, 
//para evitar el uso de any debemos usar union types. Utilizando el signo ‘|’ podemos indicarle a TypeScript que utilice uno u otro tipo de dato,
// por ejemplo:

type SumaParameter = string | number;
type SumaReturnType = string | number;

function Suma(num1: SumaParameter, num2: SumaParameter): SumaReturnType{
    return Number(num1) + Number(num2);
}

//Con respecto a las interfaces

interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
}

type InterfaceMix = Interface1 | Interface2;
const interfacemix: InterfaceMix = {
    prop1: 2,
    prop2: 3
}
