import classes from "./SideBar.module.css";

const sideBar = (props) => {
  return <aside className={classes.sidebar}>{props.children}</aside>;
};

export default sideBar;
