import "./MainInformations.css";

const MainInformations = () => {
  return (
    <div className="main-informations">
      <div className="main-informations-sub">
        <span className="location">Toulouse, France</span>
        <span className="hour">09:00 AM</span>
      </div>
      <div className="main-informations-sub">
        <span className="temperature">20°C</span>
        <span className="weather-description">Dramatic Cloudy</span>
      </div>
    </div>
  );
};

export default MainInformations;
