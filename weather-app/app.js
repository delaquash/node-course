// const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");


// DarkskyAPI Code

// const url = "https://api.darksky.net/forecast/fdbcf94302cf6429d85052b2c5bbb642/37.8267,-122.4233";

// request({ url, json:!false}, (err, res) => {
//     // console.log(res.body.currently);
//     if (err) {
//         console.log('Unable to connect to network');
//     } else if (res.body.error){
//         console.log('Unable to find location');
//     } else {
//         console.log(res.body.daily.data[0].summary+ 'Its is currently  '+ res.body.currently.temperature  +' degrees out there There is  '+res.body.currently.precipProbability  +' %rain out there');
//     }

// });

// Mapbox Code

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/lagos.json?access_token=pk.eyJ1IjoiZGVsYXF1YXNoIiwiYSI6ImNrMzc3YjUyejA4bWUzaWxpdGp1dHdkcWgifQ.A7H97D5M9-CH0CJdsqNO8w';

// request({ url:geocodeURL, json: true}, (err, res) => {
//     // const data = JSON.parse(res);
//     const latitude=res.body.features[0].center[0];
//     const longitude = res.body.features[0].center[1];

// if(err) {
//     console.log('Unable to connecct to network');
// } else if (Response.body.features.length === 0){
//     console.log("Unable to find location");
// } else {
//      console.log(latitude, longitude);
// }
// });


geocode('Ogun', (err, data) => {
    console.log('Error', err);
    console.log('Data', data)
});
const address = process.argv;
    if(!address) {
        console.log("please provide an address");
        } else {
               geocode(address, (err, { latitude, longitude, location })=> {
                if (err) {
                    return console.log (err);
                }

                forecast(latitude, longitude, (err, forecastData) => {
                if (err) {
                    return console.log(err);
                }
                console.log(location);
                console.log(forecastData);
                });
            });
}


// forecast(-75.7088, 44.1545, (err, data) => {
//   console.log('Error', err);
//   console.log('Data', data);
// })
