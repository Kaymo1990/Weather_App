const request = require('request');
const url = "https://api.darksky.net/forecast/987fdd66a3ad32bfe903507e4776c423/37.8267,-122.4233?units=si"
request({url: url, json: true }, (error, response) => {
    const data = response.body;
    // console.log(data.currently);
    console.log(`${data.daily.data[0].summary} It is current ${data.currently.temperature} degrees out.
    There is a ${data.currently.precipProbability}% chance of rain.`);
})