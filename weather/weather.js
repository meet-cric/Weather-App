const request = require('request');
 var getWeather =(lat,lng,callback)=>{
   request({
     url: `https://api.forecast.io/forecast/72aa53e236a1d261940143c10e273f6c/${lat},${lng}`,
     json: true
   }, (error, response, body) => {
     if (error) {
       callback('Unable to connect to Forecast.io server.');
     } else if (response.statusCode === 400) {
       callback('Unable to fetch weather.');
     } else if (response.statusCode === 200) {
      callback(undefined,{
        temperature:body.currently.temperature,
        apprenttemperature:body.currently.apparentTemperature,
        visibility:body.currently.visibility
      })
     }
   });
 }
module.exports.getWeather=getWeather;
