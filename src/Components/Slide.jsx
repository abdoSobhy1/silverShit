import classes from "./Slide.module.css";
import Btn from "./uiElements/Btn";

const slide = (props) => {
  return (
    <div className={classes.slide}>
      <img src={props.img} className={classes["slide-bg"]} />
      <div className={classes["slide-content"]}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
        <Btn to={props.to} className={classes.btn}>
          احجز الآن
        </Btn>
      </div>
    </div>
  );
};

export default slide;
