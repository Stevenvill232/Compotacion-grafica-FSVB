// 1

interface Direccion {
    calle: string;
    ciudad: string;
    pais: string;
}

interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
    direccion: Direccion;
    mostrarInfo(): string;
}

const estudiante: Estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas',
    direccion: {
        calle: 'Av. Siempre Viva',
        ciudad: 'Bogotá',
        pais: 'Colombia'
    },
    mostrarInfo() {
        return `${this.nombre} estudia ${this.curso} en ${this.direccion.ciudad}`;
    }
};

console.log(estudiante.mostrarInfo());


//2
interface Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    mostrarDetalle(): string;
}

const producto: Producto= {
    id: 1,
    nombre: 'Laptop',
    precio: 3500,
    stock: 10,
    mostrarDetalle() {
        return `${this.nombre} cuesta $${this.precio} y hay ${this.stock}
        unidades disponibles`;
    }
};

console.log(producto.mostrarDetalle())

//3
interface Pelicula {
    titulo: string;
    director: string;
    duracion: number;
    genero: string;
    reproducir(): string;
}

const pelicula: Pelicula = {
    titulo: 'Avengers: Endgame',
    director: 'Anthony y Joe Russo',
    duracion: 181,
    genero: 'Acción',
    reproducir() {
        return `Reproduciendo: ${this.titulo} - Dirigida por 
    ${this.director}`;
    }
};

console.log(pelicula.reproducir());

//4
interface Vehiculo {
    marca: string;
    modelo: string;
    anio: number;
    encender(): string;
}

const vehiculo: Vehiculo = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2022,
    encender() {
        return `${this.marca} ${this.modelo} está encendido`;
    }
};

console.log(vehiculo.encender());

//5
interface Usuario {
    username: string;
    password: string;
    roles: string[];
    login(): string;
}

const usuario: Usuario = {
    username: 'admin01',
    password: '123456',
    roles: ['admin', 'editor'],
    login() {
        return `Usuario ${this.username} ha iniciado sesión con roles: ${this.roles.join(', ')}`;
    }
};

console.log(usuario.login());

//   2.

let myValue: number | string | boolean = 10;

let myBoolean: boolean = true;

let healthPoints: number = 150;

let otherMultipleDataType: number | boolean | "myTag" = "myTag";

let myVar: number | boolean | string | {};
myVar = 123;
myVar = true;
myVar = "texto";
myVar = {};

const myConstant: number = 100;

let inferedDataType: string = "Texto inicial";
inferedDataType = "Nuevo texto";

const isActive: boolean = true;

let mixed: number | string = "true";

let whileVar: string = "Hola";

let myNumber: number = 10;

let numeros: number[] = [1, 2, 3];

let tupla: [string, number] = ["Hola", 10];

let otraTupla: [boolean, string] = [true, "Hola"];

let texto: string | null = "Hola mundo";
texto = null;

let color: "rojo" | "verde" | "azul" | "amarillo" = "amarillo";

let valor: any = "10";
valor.toUpperCase();

let version: number = 1.0;
version = 2.0;

let persona: { nombre: string; apellido?: string } = { nombre: "Ana" };
persona.apellido = "Ruiz";

let edad: number | undefined = undefined;
