import DashboardMain from "./DashboardMain/DashboardMain";
import DashboardSidebar from "./DashboardSidebar/DashboardSidebar";
import "./Dashboard.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../../services/getData";
import DataContext from "../../contexts/DataContext";

const Dashboard = () => {
  const [data, setData] = useState(false);
  const { city } = useParams();
  console.log(city);

  if (!data) {
    (async () => {
      const newData = await getData(city);
      setData(newData);
    })();
    return (
      <div className="loading">
        <div className="loadingio-spinner-dual-ring-r69mfkuutfh">
          <div className="ldio-0rjg6ovwgsx9">
            <div></div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    console.log(data);
    return (
      <DataContext.Provider value={data}>
        <div className="dashboard">
          <DashboardMain />
          <DashboardSidebar />
        </div>
      </DataContext.Provider>
    );
  }
};

export default Dashboard;
