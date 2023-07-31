import { useState } from "react";
import classes from "./Navigation.module.css";
import logoWhite from "../assets/images/logo-white.png";
import hamStyles from "../assets/hamburgers.module.css";
import Container from "../Components/uiElements/Container";

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNavHandler = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <nav>
      <Container className={classes["nav-container"]}>
        <div className={classes.logo}>
          <a href="/">
            <img src={logoWhite} alt="SilverJarz" />
          </a>
        </div>
        <button
          className={`${hamStyles.hamburger} ${hamStyles["hamburger--slider"]}`}
          type="button"
          onClick={openNavHandler}
        >
          <span className={hamStyles["hamburger-box"]}>
            <span className={hamStyles["hamburger-inner"]}></span>
          </span>
        </button>
        <ul
          className={`${classes["main-menu"]} ${classes.nav} ${
            isNavOpen ? classes.active : ""
          }`}
        >
          <li>
            <a
              href="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="./visas"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              تأشيرات سياحية
            </a>
          </li>
          <li>
            <a
              href="./tickets"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              حجز تذاكر طيران
            </a>
          </li>
          <li>
            <a
              href="./tours"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              جولات سياحية
            </a>
          </li>
          <li>
            <a
              href="./car-rental"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              تأجير سيارات
            </a>
          </li>
          <li>
            <a
              href="./contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              اتصل بنا
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
