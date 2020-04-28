const axios = require("axios");


const getLugarLatLog = async( dir ) => {
    const encodeUrl = encodeURI(dir);
    // console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        //timeout: 1000,
        headers: {
            "x-rapidapi-key": "116b4e47c7mshef7826901dcc660p1cec7ejsnb4b88d0dc146",
        },
    });

    const respuesta = await instance.get()

        if ( respuesta.data.Results.length === 0) {
            throw new Error(`No hay resultado para ${ dir }`);
        }

    const data = respuesta.data.Results[0];
    const direccion = data.name;
    const latitud = data.lat;
    const longitud = data.lon;

    return {
        direccion,
        latitud,
        longitud
    }
}

module.exports = {
  getLugarLatLog,
};
