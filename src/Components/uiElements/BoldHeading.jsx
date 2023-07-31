import classes from "./BoldHeading.module.css";

const BoldHeading = ({ text, bold }) => {
  return (
    <h2 className={classes["main-heading"]}>
      {text} <span className={classes.bold}>{bold}</span>
    </h2>
  );
};

export default BoldHeading;
