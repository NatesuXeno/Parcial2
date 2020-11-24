const request = require('postman-request');
/*request('https://us1.locationiq.com/v1/reverse.php?key=pk.3edbe14bcaa367a3bed3ebcddf3e867c&lat=19.253546&lon=-103.751760&format=json', function(error,response,body){
    console.log('error:', error);
    console.log('statusCode:',response && response.statusCode);
    console.log('body:',body);
});*/

const reverseGeoCode = (coordenada, callback) =>{
    let urlLatLon= `https://us1.locationiq.com/v1/reverse.php?key=pk.3edbe14bcaa367a3bed3ebcddf3e867c&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;
    request(urlLatLon, function(error, response, body){
        if (error){
            callback('Ocurrio algun error con la busqueda', undefined);

        }else{
            let data=JSON.parse(body);
            callback(undefined,{
                road: data.address.road,
                neighbourhood: data.address.neighbourhood,
                county: data.address.county,
                state: data.address.state,
                country: data.address.country,
                postcode: data.address.postcode
            });    
        }
    })
}
let coordenada ={
        lat: 19.253546,
        lon: -103.751760
    };
reverseGeoCode(coordenada,(error,dataResponse)=>{
    if(error){
        console.log('Ocurrio un error');
    }else{
        console.log(dataResponse.road);
    }
}) 

