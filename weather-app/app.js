const request = require("request");

const url =
  "https://api.darksky.net/forecast/fdbcf94302cf6429d85052b2c5bbb642/37.8267,-122.4233";

request({ url, json:!false}, (err, res) => {
    // console.log(res.body.currently);
    console.log('Its is currently  '+ res.body.currently.temperature  +'degrees out there')
});
