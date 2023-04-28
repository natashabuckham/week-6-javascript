const jestFetchMock = require("jest-fetch-mock");
jestFetchMock.enableMocks();

const weatherClient = require("./weatherClient")
const weather = require("./weather");
const apiKey = require("../../api_keys/weatherApiKey")
const { beforeEach } = require("node:test");

describe("integration of weather app", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("gets weather data from api", () => {
    // in an integration test we want to make sure the code works with real network requests to the api
    // the line below mocks the fetch function and intercepts the api call to return fake data, but it still makes the real request to the api
    fetchMock.mockResponseOnce(JSON.stringify({ weather: [{main: 'Clouds'}], name: 'Bristol' }))
    const mockWeatherClient = new weatherClient(); // this uses the normal  constructor, Jest takes care of creating the mock
    const weatherInstance = new weather(mockWeatherClient);

    weatherInstance.load('Bristol').then(() => {
      expect(weatherInstance.getWeatherData()).toEqual("Weather data for Bristol: Clouds")
      expect(fetchMock).toHaveBeenCalledTimes(1);
      // the line below checks that URL requested is the expected URL
      // fetchMock.mock.calls is an array of all the calls made to the mocked fetch function, each call is an array with the URL being the first element
      expect(fetchMock.mock.calls[0][0]).toBe(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=Bristol&appid=${apiKey}`);
    })
  })
})
