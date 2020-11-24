const request = require('postman-request');
const estadoClima = (estado, callback)=>{
    let urlApi=`http://api.weatherstack.com/current?access_key=dc979ed4c38c84649069ee730eab2867&query=${estado}`;
    request(urlApi, function(error, response, body){
        if(error){
            callback('ocurrio un error en la busqueda',undefined)
        }
        else{
            let data=JSON.parse(body);
            callback(undefined,{
               Temperatura: data.current.temperature,
               clima: data.current.weather_descriptions
            
            })
        }
    })
}

module.exports=estadoClima;