const request = require('request');
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2F5bW8xOTkwIiwiYSI6ImNrMjU3NGdicTJnZGYzZHF0ZGJ5aGZmb2IifQ.vT2yM-WkvkGVGNWi2SM8Gw"
request({url: url, json: true }, (error, response) => {
    if (error) {
        console.log("Unable to connect to location services.");
    }
    else if (response.body.features.length === 0) {
        console.log("Unable to find location.")
    }
    else {
        const latitutde = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0]
        console.log(latitutde);
        console.log(longitude);
        console.log(`The latitude is ${latitutde} and the longitude is ${longitude}`)

    }
})