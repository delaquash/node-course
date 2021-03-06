const request  = require ('request')


const geocode = (address, callback) => {
        const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiZGVsYXF1YXNoIiwiYSI6ImNrMzc3YjUyejA4bWUzaWxpdGp1dHdkcWgifQ.A7H97D5M9-CH0CJdsqNO8w';
        request ({ url, json:true }, (err, { body }) => {
                if(err) {
                    callback("Unable to connect to network", undefined);
                } else if (body.features.length === 0 ){
                    callback("Unable to find location. Try another search", undefined);
                } else {
                    callback(undefined,{
                        latitude:body.features[0].center[0],
                        longitude:body.features[0].center[1],
                        location:body.features[0].place_name
                    });
                }
        });
    };

    module.exports= geocode;

