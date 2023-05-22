import "./ChanceOfRain.css";
import DataContext from "../../../../contexts/DataContext";
import { useContext } from "react";

const ChanceOfRain = () => {
  const data = useContext(DataContext);

  return (
    <div className="chance-of-rain">
      <span className="sidebar-title">Chances of rain</span>
      <div className="rain-chart">
        {data.forecast.forecastday.map((day, index) => {
          const date = new Date(day.date);
          const options = { weekday: "long" };
           const something = new Intl.DateTimeFormat("en-US", options).format(date)
          return (
            <div key={index} className="rain-chart-row">
              <span className="rain-chart-label">{something}</span>
              <div className="rain-chart-bar-container">
                <div
                  className="rain-chart-bar"
                  style={{ width: day.day.daily_chance_of_rain + "%"}}
                ></div>
              </div>
              <span className="rain-chart-label">{day.day.daily_chance_of_rain}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChanceOfRain;
