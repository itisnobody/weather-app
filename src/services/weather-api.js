export default class WeatherApi {

  _apiBase = 'https://api.openweathermap.org/data/2.5/weather?';
  _apiKey ='3368f164e11bc9bacfae44ccf3464a68';

  async getResource (value) {
    const res = await fetch(`${this._apiBase}${value}&units=metric&appid=${this._apiKey}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${value}, received ${res.status}`);
    }

    return res.json();
  }

  getCity = async cityName => {
    const weather = await this.getResource(`q=${cityName}`);
    return this._transformData(weather);
  }

  _transformData = data => {
    return {
      id: data.id,
      cityName: data.name,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      temp: Math.floor(data.main.temp),
      temp_min: Math.floor(data.main.temp_min),
      temp_max: Math.floor(data.main.temp_max)
    };
  };
};
