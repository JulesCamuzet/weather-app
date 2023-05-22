import "./MainInformations.css";
import DataContext from "../../../../contexts/DataContext";
import { useContext, useEffect, useState } from "react";


const MainInformations = () => {
  const data = useContext(DataContext);
  return (
    <div className="main-informations">
      <div className="main-informations-sub">
        <span className="location">
          {data.location.name}, {data.location.country}
        </span>
      </div>
      <div className="main-informations-sub">
        <span className="temperature">{data.current.temp_c}° C</span>
        <span className="weather-description">{data.current.condition.text}</span>
      </div>
    </div>
  );
};

export default MainInformations;
