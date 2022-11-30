const fs = require('fs');

const crearArchivo = async (base) => {
    console.log('=======================')
    console.log('   Tabla del', base)
    console.log('=======================')

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} X ${i} = ${base * i}\n`;
    }

    console.log(salida);

    try {
        fs.writeFileSync(`Tabla-${base}.txt`, salida);

        return `Tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}