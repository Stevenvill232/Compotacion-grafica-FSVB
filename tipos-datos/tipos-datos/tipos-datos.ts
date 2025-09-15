let myvariable: string = "Steven"
let mynumber: number = 500
const myurl: string = "https:/ayuda.com"
let othervariable : any

let multipleData: string | number | boolean // MANEJAME ESTOS TIPOS DE DATOS más NO se guardan los valores que uno le pase
othervariable = 222
multipleData = "holi"
multipleData = 2003
multipleData = 2.222

let multipleData2: number | "texto X"
multipleData2 = 223
multipleData2 = "texto X"

let arreglohabilidades: string[] = ['Golpear, Correr, Saltar', "si so0y"]

let otheraShillsArrayd: (string | boolean | number) [] = ["Hola", 20.01, 120]

let othervariable2: boolean[] = [true, false, true]


console.log(myvariable, mynumber, "Holaaaaaaaaaaaaaas", myurl)
console.log(othervariable)
console.log(multipleData)
console.log(multipleData2)
console.log(arreglohabilidades)
console.table(arreglohabilidades)
console.table(otheraShillsArrayd)
console.table(othervariable2)