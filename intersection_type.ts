interface Interface1 {
    prop1: number;
}

interface Interface2 {
    prop2: number;
    prop3: boolean;
}

interface Interface3 {
    prop2: number;
}

type InterfaceX = Interface1 & Interface2 & Interface3;


const interfaceX: InterfaceX = {
    prop1: 3,
    prop2: 2, // Error: El tipo 'string' no se puede asignar al tipo 'string & number'.
    prop3: true
}