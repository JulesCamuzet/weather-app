import './ChanceOfRain.css'


const ChanceOfRain = () => {

  const RainData = [
    {
      time: "0 AM",
      chances: "44%"
    },
    {
      time: "6 AM",
      chances: "30%"
    },
    {
      time: "0 PM",
      chances: "25%"
    },
    {
      time: "6 PM",
      chances: "69%"
    }
  ]

  return (
    <div className='chance-of-rain'>
      <span className="sidebar-title">Chances of rain</span>
      <div className="rain-chart">
        {
          RainData.map((data) => {
            return (
              <div className="rain-chart-row">
                <span className="rain-chart-label">{data.time}</span>
                <div className="rain-chart-bar-container">
                  <div className="rain-chart-bar" style={{width: data.chances}}></div>
                </div>
                <span className="rain-chart-label">{data.chances}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default ChanceOfRain;