const WeatherClient = require('./weatherClient')

class Weather {
  constructor(client) {
    this.client = client
    this.weatherData = []

  }

  load(city) {
    return this.client.fetchWeatherData(city)
    .then((data) => {
      const weatherData = {
        place: data.name,
        weather: data.weather[0].main
      }
      this.weatherData.push(weatherData);
    })
  }

  getWeatherData() {
    let cityName = this.weatherData[0].place
    let cityWeather = this.weatherData[0].weather
    return `Weather data for ${cityName}: ${cityWeather}`
  }
}

module.exports = Weather;

// const client = new WeatherClient();
// const weather = new Weather(client);

// weather.load('Bristol');
// // then, after some time
// weather.getWeatherData();

// console.log(`Weather data for ${data.name}:`)
//             console.log(data.weather[0].main)
