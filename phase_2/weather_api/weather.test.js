const { beforeEach } = require('node:test');
const Weather = require('./weather');
const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

describe('Weather class', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('fetches weather for a given city using the client', () => {
    const mockClient = {
      fetchWeatherData: jest.fn() // a jest mock function
    };

    mockClient.fetchWeatherData.mockResolvedValueOnce({
      weather: [{main: 'Clouds'}], name: 'Bristol' // the structure of the json has to match the real one because the fetchWeatherData function is looking for data.weather[0].main
    });

    const weather = new Weather(mockClient);
    weather.load('Bristol').then(() => {
      expect(mockClient.fetchWeatherData).toHaveBeenCalledWith('Bristol');
      const weatherData = weather.getWeatherData();
      expect(weatherData).toEqual("Weather data for Bristol: Clouds")
    })

  });
})
