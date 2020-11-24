const request = require('postman-request');

const reverseGeoCode = (coordenada, callback) =>{
    let urlLatLon= `https://us1.locationiq.com/v1/reverse.php?key=pk.3edbe14bcaa367a3bed3ebcddf3e867c&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    request(urlLatLon, function(error, response, body){
        if (error){
            callback('Ocurrio algun error con la busqueda', undefined);

        }else{
            let data=JSON.parse(body);
            callback(undefined,{
                Calle: data.address.road,
                Colonia: data.address.neighbourhood,
                county: data.address.county,
                Estado: data.address.state,
                country: data.address.country,
                postcode: data.address.postcode
            });    
        }
    })
}


module.exports=reverseGeoCode;