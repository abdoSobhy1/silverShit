import { Link } from "react-router-dom";

import classes from "./Btn.module.css";

const Btn = (props) => {
  return (
    <Link to={props.to} className={`${classes.btn} ${props.className}`}>
      {props.children}
    </Link>
  );
};

export default Btn;
