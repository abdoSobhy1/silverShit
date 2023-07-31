import Btn from "./Btn";
import classes from "./VisaCard.module.css";

import { useState, useEffect } from "react";

const VisaCard = ({ regular, express, stay, dest, index }) => {
  const [isRegular, setIsRegular] = useState(true);
  const [price, setPrice] = useState(regular);
  const handleTypeSwitch = () => {
    setIsRegular((prev) => !prev);
  };
  useEffect(() => {
    const handlePriceChange = () => {
      isRegular ? setPrice(regular) : setPrice(express);
    };
    handlePriceChange();
  }, [isRegular]);
  return (
    <div
      className={`${classes["visa-type"]} ${
        isRegular ? classes.regular : classes.express
      }`}
    >
      <a href="#" className={classes.title}>
        <div>
          <h3>{stay}</h3>
          <p>{dest} Visa</p>
        </div>
      </a>
      <div className={classes.info}>
        <div className={classes.price}>
          <span>$</span>
          <span className="amount" data-regular="225" data-express="295">
            {price}
          </span>
        </div>
        <div className={classes["type-selector"]}>
          <div>
            <span>Regular</span>
          </div>
          <div className={classes.input}>
            <input
              type="checkbox"
              id={`type-switch-${index}`}
              className="type-switch"
              onChange={handleTypeSwitch}
            />
            <label htmlFor={`type-switch-${index}`}></label>
          </div>
          <div>
            <span>Express</span>
          </div>
        </div>
      </div>
      <div className={classes.type}>
        <div className={classes.regular}>
          <ul>
            <li>
              <p>Service Type</p>
              Regular Visa-Single Entry
            </li>
            <li>
              <p>Processing Time</p>
              1-3 working days
            </li>
            <li>
              <p>Validity</p>
              60 days from the date of issue
            </li>
            <li>
              <p>Stay Period</p>
              {stay} from the date of entry
            </li>
          </ul>
        </div>
        <div className={classes.express}>
          <ul>
            <li>
              <p>Service Type</p>
              Express Visa-Single Entry
            </li>
            <li>
              <p>Processing Time</p>
              Within 24 Hours
            </li>
            <li>
              <p>Validity</p>
              60 days from the date of issue
            </li>
            <li>
              <p>Stay Period</p>
              {stay} from the date of entry
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className={classes.button}>
          <Btn className={classes.btn} to="#">
            Apply now
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
