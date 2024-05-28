class WeatherAPI {
    constructor() {
        this.baseUrl = "https://api.openweathermap.org/data/2.5/weather";
        this.apiKey = "83110b3aa3c368ae3645771440a05dc9"
    }

    async getWeatherInfo(cityName) {
        const response = await fetch(`${this.baseUrl}?q=${cityName}&units=metric&lang=tr&appid=${this.apiKey}`)
        const data = await response.json();
          return data;
       //console.log(data);
    }
}