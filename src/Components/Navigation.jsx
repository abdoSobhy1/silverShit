import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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
          <Link to="/">
            <img src={logoWhite} alt="SilverJarz" />
          </Link>
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
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./visas"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              تأشيرات سياحية
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./tickets"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              حجز تذاكر طيران
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./tours"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              جولات سياحية
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./car-rental"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              تأجير سيارات
            </NavLink>
          </li>
          <li>
            <NavLink
              to="./contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? `${classes.active}` : ""
              }
            >
              اتصل بنا
            </NavLink>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Navigation;
