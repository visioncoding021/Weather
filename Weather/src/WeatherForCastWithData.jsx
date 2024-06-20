import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherForecastWithData = (WeatherForecast) => {
  const WrappedComponent = (props) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchWeatherData = async (city) => {
      setLoading(true);
      try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=829b6789ec684b5188b40829242006&q=${city}&aqi=no`);
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      fetchWeatherData('New Delhi');
    }, []);

    return (
      <WeatherForecast
        weatherData={weatherData}
        loading={loading}
        error={error}
        fetchWeatherData={fetchWeatherData}
        {...props}
      />
    );
  };

  WrappedComponent.displayName = `WeatherForecastWithData(${getDisplayName(WeatherForecast)})`;

  return WrappedComponent;
};

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WeatherForecastWithData;
