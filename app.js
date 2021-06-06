const request = require("postman-request");

// const url =
//   "http://api.weatherstack.com/current?access_key=HIDE_YOUR_API_KEYS=37.83,-122.42&units=f";

// request({ url: url, json: true }, (error, response) => {

//   let temp = response.body.current.temperature;
//   let feels = response.body.current.feelslike;
//   let descrip = response.body.current.weather_descriptions[0].toLowerCase();
//     console.log(
//       ` It is currently ${temp} degrees and feels like ${feels} degrees and ${descrip}`
//     );
// });

// Geocoding
//user provides address > convert to lat/long > weather

// let geocodingUrl =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZm9yZW1hbjYxMiIsImEiOiJja3A1d3l5bGwwMmVzMndxZTU3NTNyZXloIn0.NdY_Vj5xN5J09CBqfWNJzA";

// request({ url: geocodingUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to return results");
//   } else if (response.body.error){ 
//      console.log("Can't find location")
// } else {
//     let long = response.body.features[0].center[0];
//     let lat = response.body.features[0].center[1];
//     console.log(
//       `The coordinates for Los Angeles are ${lat} latitude and ${long} longitude`
//     );
//   }
// });


const geocode = (address, callback) => {
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + "Los%20Angeles.json?access_token=pk.eyJ1IjoiZm9yZW1hbjYxMiIsImEiOiJja3A1d3l5bGwwMmVzMndxZTU3NTNyZXloIn0.NdY_Vj5xN5J09CBqfWNJzA"

request({ url: url, json: true}, (error, response) => {
if(error){
  callback("Unable to connect to location services")
}
})

}

geocode("Los Angeles" , (error, data) => {

})