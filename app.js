import { request } from "http"

// const request = require('request');
// const url = "https://api.darksky.net/forecast/987fdd66a3ad32bfe903507e4776c423/37.8267,-122.4233?units=si"
// request({url: url, json: true }, (error, response) => {
//     const data = response.body;
//     // console.log(data.currently);
//     console.log(`${data.daily.data[0].summary} It is current ${data.currently.temperature} degrees out.
//     There is a ${data.currently.precipProbability}% chance of rain.`);
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoia2F5bW8xOTkwIiwiYSI6ImNrMjU3NGdicTJnZGYzZHF0ZGJ5aGZmb2IifQ.vT2yM-WkvkGVGNWi2SM8Gw'

    request({url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.')
        }
    })
}

geocode('London', (error, data) => {})
