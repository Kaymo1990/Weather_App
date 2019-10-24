const request = require('request');
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2F5bW8xOTkwIiwiYSI6ImNrMjU3NGdicTJnZGYzZHF0ZGJ5aGZmb2IifQ.vT2yM-WkvkGVGNWi2SM8Gw"
request({url: url, json: true }, (error, response) => {
    const data = response.body;
    console.log(data[2]);
})