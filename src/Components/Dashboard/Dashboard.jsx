import DashboardMain from "./DashboardMain/DashboardMain";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import './Dashboard.css'


const Dashboard = () => {
  return (
    <div className="dashboard">
      <DashboardMain />
      <DashboardSidebar />
    </div>
  )
}


export default Dashboard;