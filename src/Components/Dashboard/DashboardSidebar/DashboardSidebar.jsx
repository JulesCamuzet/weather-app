import './DashboardSidebar.css'
import MainInformations from './MainInformations/MainInformations';
import ChanceOfRain from './ChanceOfRain/ChanceOfRain';
import SunriseSunset from './SunriseSunset/SunriseSunset';

const DashboardSidebar = () => {
  return (
    <div className="dashboard-sidebar">
      <MainInformations />
      <ChanceOfRain />
      <SunriseSunset />
    </div>
  )
}

export default DashboardSidebar;