// API integration for fetching city time and weather using MET Weather API
const BASE_URL = 'https://api.met.no/weatherapi/locationforecast/2.0/compact';
const USER_AGENT = import.meta.env.VITE_MET_USER_AGENT;

export async function getCityWeather(lat, lon) {
  const response = await fetch(`${BASE_URL}?lat=${lat}&lon=${lon}`, {
    headers: {
      'User-Agent': USER_AGENT,
    },
  });
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const data = await response.json();
  const temperature = data.properties.timeseries[0].data.instant.details.air_temperature;
  const description = 'Weather data not provided by MET'; // MET API does not provide weather descriptions
  return {
    temperature,
    description,
  };
}

export function getCityTime(timezone) {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + timezone * 1000);
  return localTime.toLocaleTimeString();
}