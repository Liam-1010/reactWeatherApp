import "./styles.css";

export default function Overview() {
  var moment = require("moment"); // require
  var currentDate = moment().format("MMMM Do YYYY, h:mm:ss");

  //console.log(currentDate); // "17/06/2022"

  return (
    <div className="overview">
      <h1 id="city">Manchester</h1>
      <ul>
        <li>
          Last updated : <span id="date">{currentDate}</span>
        </li>
        <li id="description">Broken Clouds</li>
      </ul>
    </div>
  );
}
