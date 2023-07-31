import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import Container from "../Components/uiElements/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainer}>
        <div className={classes.top}>
          <div className={classes.menu}>
            <h3 className={classes.title}>القائمة الرئيسية</h3>
            <Link to="/">الرئيسية</Link>
            <Link to="/create-trip">اصنع رحلتك</Link>
            <Link to="/about">من نحن</Link>
            <Link to="/contact">اتصل بنا</Link>
          </div>
          <div className={classes.contact}>
            <h3 className={classes.title}>اتصل بنا</h3>
            <div className={classes.email}>
              <FontAwesomeIcon icon={faEnvelope} />
              <a target="_blank" href="mailto:silverjarz@outlook.com">
                silverjarz@outlook.com
              </a>
            </div>
            <div className={classes.phone}>
              <FontAwesomeIcon icon={faPhoneAlt} />
              <span>01000000000</span>
            </div>
            <div className={classes.address}>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>القاهرة - مصر</span>
            </div>
          </div>
          <div className={classes.location}>
            <h3 className={classes.title}>موقعنا على الخريطة</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1856523705865!2d31.317204215306866!3d30.08886892342716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2f516afbb9%3A0xf970104d0edfceb4!2z2YLYtdixINin2YTYpdiq2K3Yp9iv2YrYqQ!5e0!3m2!1sen!2seg!4v1679746568402!5m2!1sen!2seg"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </Container>
      <div className={classes.bottom}>
        جميع الحقوق محفوظة لشركة الجرز الفضي للسياحة والسفر
        <span className={classes.year}>2023</span>
      </div>
    </footer>
  );
};

export default Footer;
