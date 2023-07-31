import React from "react";
import Btn from "./uiElements/Btn";
import Container from "./uiElements/Container";
import classes from "./NewsLetter.module.css";

const Newsletter = () => {
  return (
    <div className={classes.newsletter}>
      <Container className={classes.newsletterCont}>
        <form method="get">
          <input type="email" id="" placeholder="البريد الالكتروني" />
          <button className={classes.btn}>اشترك الان</button>
        </form>
      </Container>
    </div>
  );
};

export default Newsletter;
