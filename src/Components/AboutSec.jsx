import Container from "./uiElements/Container";
import MainTitle from "./uiElements/MainTitle";
import Btn from "./uiElements/Btn";

import classes from "./AboutSec.module.css";

const AboutSec = () => {
  return (
    <section className={classes.aboutSec}>
      <Container className={classes.aboutCont}>
        <MainTitle>من نحن</MainTitle>
        <div className={classes.info}>
          <h3>الجرز الفضي</h3>
          <p className={classes.desc}>
            تقدم شركة الجرز الفضي للسياحة والسفر العديد من الرحلات والخارجية
            والعديد من الخدمات السياحية والسفرية والترفيهية والترفيهية والترفيه
          </p>
          <div className={classes.buttons}>
            <a className={classes.button}>اقرأ المزيد</a>
            <a className={classes.alt}>اتصل بنا</a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSec;
