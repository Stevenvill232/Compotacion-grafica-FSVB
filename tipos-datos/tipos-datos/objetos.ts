interface vehiculos{
    marca: string;
    modelo: number;
    motor: number;
    uso: string;
    activo: boolean;
    propietarios: string[];
}

const vehiculo: vehiculos = {
    marca : "Chevrolet",
    modelo : 2002, 
    motor: 2000,
    uso : "Particular",
    activo: false,
    propietarios : ["Jorge", "Juan", "Pedro"],
}


interface computer{
    marca: string;
    cpu: number;
    modelo: string | boolean;
    componentes: string[];
}

const mypc: computer = {
    marca: "Acer",
    cpu: 200,
    modelo: true,
    componentes: ["Linux", "Disco solido"],
}


console.table(vehiculo)
console.table(mypc)
     