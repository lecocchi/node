const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido}`
    }
}

const {nombre, apellido} = deadpool;

console.log(nombre, apellido);



const heroes = ['Batman', 'Superman', 'Deadpool'];

const [, , h3] = heroes;

console.log(h3);