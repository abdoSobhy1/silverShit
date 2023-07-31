import React from "react";
import Btn from "./uiElements/Btn";
import classes from "./Offer.module.css";

const Offer = (props) => {
  return (
    <div className={classes.promo}>
      <div className={classes["promo-img"]}>
        <a href={props.to}>
          <img src={props.img} alt="Promo" />
        </a>
      </div>
      <div className={classes.info}>
        <div className={classes.title}>
          <h2>{props.title}</h2>

          {props.code && (
            <h3 className={classes.code}>
              كود: <span>{props.code}</span>
            </h3>
          )}
        </div>
        <p className={classes.desc}>{props.desc}</p>
        <Btn className={classes.btn} to={`/tours/${props.id}`}>
          {props.cta}
        </Btn>
      </div>
    </div>
  );
};

export default Offer;
