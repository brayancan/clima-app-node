const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirrecion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//console.log(argv.direccion);
// argv.direccion;

// lugar.getLugarLatLog(argv.direccion)
//         .then(console.log);

// clima.getClima(40.750000, -74.000000)
//         .then(console.log)
//         .catch(console.log)

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLog(direccion);
        const temp = await clima.getClima(coords.latitud, coords.longitud);
        return `El clima de ${coords.direccion} es de ${temp}.`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)