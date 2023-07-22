import "./styles.css";
import Search from "./search";
import Overview from "./Overview";
import Forecast from "./todayForecast";
import weekForecast from "./weekForecast";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <Overview />
        <Forecast />
        <weekForecast />
      </div>
    </div>
  );
}
