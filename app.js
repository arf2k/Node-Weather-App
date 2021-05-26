const request = require("postman-request")

const url = "http://api.weatherstack.com/current?access_key=847a77807b906c449a1154dfcfe6645e&query=37.83,-122.42&units=f"

request({ url: url, json: true }, (error, response) => {
     let temp = response.body.current.temperature
     let feels = response.body.current.feelslike
     console.log(` It is currently ${temp} degrees and feels like ${feels} degrees.` )
})

