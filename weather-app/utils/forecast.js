const request = require("request");

    const forecast =(longitude,latitude, callback) => {
        const url = "https://api.darksky.net/forecast/fdbcf94302cf6429d85052b2c5bbb642/" + latitude  + "," + longitude;
        request ({ url, json:true}, (err, { body }) => {
            if (err) {
                callback("Unable to connect to network", undefined);
            } else if (body.err) {
                callback("Unable to find location", undefined);
            } else {
                callback(undefined,{
                    summary: body.daily.data[0].summary,
                    temperature: body.currently.temperature,
                    precipProbability:  body.currently.precipProbability
                });
            }
        });
    };


 module.exports= forecast;
