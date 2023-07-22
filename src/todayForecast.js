import "./styles.css";
import weatherIcon from "/public/clear-sky-day.png";

export default function todayForecast() {
  return (
    <div className="row">
      <div className="col-6">
        <div className="d-flex weather-temperature">
          <img src={weatherIcon} alt="sunny" />
          <strong>12</strong>
          <span className="units">
            <a href="#" className="active">
              °C
            </a>{" "}
            |<a href="#">°F</a>
          </span>
        </div>
      </div>
      <div className="col-6" id="stats">
        <ul>
          <li>
            Humidity:
            <span id="humidity"> 99 </span>%
          </li>
          <li>
            Wind:
            <span id="wind"> 1 million </span>
            kmph
          </li>
        </ul>
      </div>
    </div>
  );
}
