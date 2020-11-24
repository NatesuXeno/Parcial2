let reverseGeoCode=require('./geocode');

let estadoClima=require('./clima');

let coordenada ={
    lat: 19.253546,
    lon: -103.751760
};


reverseGeoCode(coordenada,(error,dataResponse)=>{
    if(error){
        console.log('Ocurrio un error');
    }else{
        console.log(dataResponse.Estado);
        estadoClima(dataResponse.Estado,(error,dataResponse)=>{
            if(error){
                console.log('Ocurrio un error');
            }
            else{
                console.log(dataResponse.Temperatura,"C°", dataResponse.clima)
            }
        })
    }
}) 

