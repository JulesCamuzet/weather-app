import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navlink = (props) => {
  const icon = props.icon;
  const text = props.text;
  const ref = props.ref_;

  const [toggle, setToggle] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === ref) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  }, [location.pathname]);

  return (
    <Link to={ref}>
      <div className={toggle ? "nav-link active" : "nav-link"}>
        {icon}
        <span>{text}</span>
      </div>
    </Link>
  );
};

export default Navlink;
