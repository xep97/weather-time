import React, { useState } from 'react';
import { getCityWeather, getCityTime } from '../api';
import './CitySearch.css';

const CitySearch = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const weatherData = await getCityWeather(city);
      const time = getCityTime(weatherData.timezone);
      setWeather({ ...weatherData, time });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="city-search">
      <h1>City Time and Weather</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      {weather && (
        <div className="weather-info">
          <h2>{city}</h2>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Weather: {weather.description}</p>
          <p>Local Time: {weather.time}</p>
        </div>
      )}
    </div>
  );
};

export default CitySearch;