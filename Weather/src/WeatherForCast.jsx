import React, { useState } from 'react';

const WeatherForCast = ({ weatherData, loading, error, fetchWeatherData }) => {
  const [city, setCity] = useState('');

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleFetchWeather = () => {
    fetchWeatherData(city);
  };

  return (
    <>
      <div>
        <div>
          <input 
            placeholder="Enter the name of city..." 
            value={city} 
            onChange={handleCityChange} 
          />
          <button onClick={handleFetchWeather}>Get Weather</button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {weatherData && (
          <div>
            <h2>Weather in {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}</h2>
            <div className="type-temp">
              <div className="type">
                <img 
                  src={weatherData.current.condition.icon} 
                  alt={weatherData.current.condition.text}
                />
                <p>{weatherData.current.condition.text}</p>
              </div>
              <div>
                <p>Temperature: <span>{weatherData.current.temp_c} °C / {weatherData.current.temp_f} °F</span></p>
                <p>Feels Like: <span>{weatherData.current.feelslike_c} °C / {weatherData.current.feelslike_f} °F</span></p>
              </div>
            </div>
            <div className="wind">
              <p className="windSpeed">Wind Speed: <span>{weatherData.current.wind_kph} kph / {weatherData.current.wind_mph} mph</span></p>
              <p className="windDirection">Wind Direction: <span>{weatherData.current.wind_dir}</span></p>
              <p className="windDegree">Wind Degree: <span>{weatherData.current.wind_degree}°</span></p>
            </div>
            <p className="humidity">Humidity: <span>{weatherData.current.humidity} %</span></p>
            <p className="uv">UV Index: <span>{weatherData.current.uv}</span></p>
            <p className="pressure">Pressure: <span>{weatherData.current.pressure_mb} mb / {weatherData.current.pressure_in} in</span></p>
            <p className="visibility">Visibility: <span>{weatherData.current.vis_km} km / {weatherData.current.vis_miles} miles</span></p>
            <p className="lastUpdated">Last Updated: <span>{weatherData.current.last_updated}</span></p>
          </div>
        )}
      </div>
    </>
  );
};

WeatherForCast.displayName = 'WeatherForCast';

export default WeatherForCast;
