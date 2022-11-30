const { crearArchivo } = require('./helpers/multiplicar')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption : true,
        
    })
    .argv

console.clear();

console.log(argv)
console.log('base: yargs', argv.base);


// const base = 3;

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
//     .catch(err => console.log(err));