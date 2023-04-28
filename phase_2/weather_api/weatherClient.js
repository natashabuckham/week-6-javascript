class weatherClient {
    constructor() {
        this.apiKey = require('../../api_keys/weatherApiKey');
    }

    fetchWeatherData(city) {
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`
        return fetch(apiUrl)
        .then((response) => response.json())
    }
}

// const client = new weatherClient();

// client.fetchWeatherData('London').then((weatherData) => {
//   console.log(`Weather data for ${weatherData.name}:`)
//   console.log(weatherData);
// });

module.exports = weatherClient;
