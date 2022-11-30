const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Linda'
    },
    {
        id: 3,
        nombre: 'Karen'
    }

];


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1500
    }
];



const getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        const empleado = empleados.find(e => e.id === id);

        empleado ? resolve(empleado) : reject(`No existe un empleado con el id ${id}`);

    });
}


const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id);
    return new Promise((resolve, reject) => {
        salario ? resolve(salario) : reject(`No existe una salario para el id ${id}`);
    }

    );
}

const id = 3;
let nombre;

getEmpleado(id)
    .then(e => {
        nombre = e.nombre;
        return getSalario(id);
    })
    .then(s => console.log(`El usuario ${nombre} tiene un salario ${s.salario}`))
    .catch(e => console.log(e))





