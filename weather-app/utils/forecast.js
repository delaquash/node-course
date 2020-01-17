    const request = require("request");

    const forecast =(longitude,latitude, callback) => {
        const url = "https://api.darksky.net/forecast/fdbcf94302cf6429d85052b2c5bbb642/" + latitude  + "," + longitude;
        request ({ url, json:true}, (err, res) => {
            if (err) {
                callback("Unable to connect to network", undefined);
            } else if (res.body.err) {
                callback("Unable to find location", undefined);
            } else {
                callback(undefined,{
                    summary: res.body.daily.data[0].summary,
                    temperature: res.body.currently.temperature,
                    precipProbability:  res.body.currently.precipProbability
                });
            }
        });
    };


 module.exports= forecast;
