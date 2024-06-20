import './App.css'
import WeatherForCastWithData from "./WeatherForCastWithData";
import WeatherForCast from './WeatherForCast';
const WeatherData = WeatherForCastWithData(WeatherForCast);
function App() {

  return ( 
    <>
      <WeatherData></WeatherData>
    </>
  )
}

export default App
