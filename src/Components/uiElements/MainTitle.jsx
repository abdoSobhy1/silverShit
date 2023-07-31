import classes from "./MainTitle.module.css";

const MainTitle = (props) => {
  return (
    <div className={classes["main-title"]}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default MainTitle;
