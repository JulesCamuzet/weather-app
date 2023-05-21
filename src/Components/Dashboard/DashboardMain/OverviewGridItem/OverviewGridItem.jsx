import './OverviewGridItem.css'


const OverviewGridItem = (props) => {
  const data = props.data;
  return (
    <div className="overview-grid-item">
      <div className="overview-grid-item-left">
        {data.icon}
      </div>
      <div className="overview-grid-item-right">
        <span className="item-title">{data.title}</span>
        <span className="overview-grid-item-value">{data.data}</span>
      </div>
    </div>
  );
};


export default OverviewGridItem;