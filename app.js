const request = require("postman-request")

const url = "http://api.weatherstack.com/current?access_key=847a77807b906c449a1154dfcfe6645e&query=37.83,-122.42"

request({ url: url, json: true }, (error, response) => {
     console.log(response.body.current)
})