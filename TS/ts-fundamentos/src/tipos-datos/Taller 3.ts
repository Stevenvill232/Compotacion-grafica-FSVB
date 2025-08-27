const estudiante = {
    nombre: 'Juan',
    edad: 22,
    curso: 'Matemáticas'
    direccion: {
        calle: 'Av. Siempre Viva'
        ciudad: 'Bogotá'
        pais: 'Colombia'
    }
    mostrarInfo() {
        return '${this.nombre} estudia ${this.curso} en
        ${this.direccion.ciudad}
    }
}