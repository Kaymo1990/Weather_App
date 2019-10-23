const request = require('request');
const url = "https://api.darksky.net/forecast/987fdd66a3ad32bfe903507e4776c423/37.8267,-122.4233"
request({url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
})