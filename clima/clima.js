const axios = require("axios");


const getClima = async(latitud, longitud) =>{

  const resp = await  axios.get(`htpps://api.openweathermap.org/data/2.5/weather?lat=${ latitud }&lon=${ longitud }&appid=7c81ced20560d6aba9aa2107311245e7&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}