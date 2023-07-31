import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Slide from "./Slide";

import "./CustomSlider.css";
import classes from "./HeaderSlider.module.css";

const PrevArrow = ({ onClick }) => (
  <div className={classes.prev} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronLeft} />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className={classes.next} onClick={onClick}>
    <FontAwesomeIcon icon={faChevronRight} />
  </div>
);

const HeaderSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    prevArrow: <></>,
    nextArrow: <></>,
    pauseOnHover: false,
  };

  const goToPreviousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const controlsRef = useRef(null);

  const [slideControlsStyle, setSlideControlsStyle] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  useEffect(() => {
    let slideControls = controlsRef.current;
    const setPos = () => {
      if (window.innerWidth > 768) {
        const slider = sliderRef.current;
        const activeSlide =
          slider.innerSlider.list.querySelector(".slick-active");
        const activeSlideContent = activeSlide.querySelector(
          "[class*='slide-content']"
        );
        if (activeSlideContent) {
          let SlideContentPosition = activeSlideContent.getBoundingClientRect();
          setSlideControlsStyle({
            top: `${
              SlideContentPosition.top + SlideContentPosition.height / 1.25
            }px`,
            right: `${SlideContentPosition.width / 2 + 20}px`,
          });
        }
      } else {
        setSlideControlsStyle({});
      }
    };

    window.addEventListener("resize", setPos);
    setPos();

    return () => {
      window.removeEventListener("resize", setPos);
    };
  }, [windowWidth]);

  return (
    <div className="landing">
      <Slider {...settings} ref={sliderRef}>
        <Slide
          img="https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1200"
          title="1رحلات خارجية"
          desc="تقدم شركة الجرز الفضي للسياحة والسفر العديد من الرحلات والمقيمين
              في المملكة العمانية"
        />
        <Slide
          img="https://images.unsplash.com/photo-1679471491129-9e2f3ea6ec3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          title="رحلات خارجية2"
          desc="تقدم شركة الجرز الفضي للسياحة والسفر العديد من الرحلات والمقيمين
              في المملكة العمانية"
        />
        <Slide
          img="https://images.unsplash.com/photo-1679443377263-1bc9da36b58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
          title="رحلات خارجية3"
          desc="تقدم شركة الجرز الفضي للسياحة والسفر العديد من الرحلات والمقيمين
              في المملكة العمانية"
        />
        <Slide
          img="https://images.unsplash.com/photo-1679436230537-46111d0c70a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
          title="رحلات خارجية4"
          desc="تقدم شركة الجرز الفضي للسياحة والسفر العديد من الرحلات والمقيمين
              في المملكة العمانية"
        />
      </Slider>
      <div
        className={classes.controls}
        ref={controlsRef}
        style={slideControlsStyle}
      >
        <PrevArrow onClick={goToPreviousSlide} />
        <NextArrow onClick={goToNextSlide} />
      </div>
    </div>
  );
};

export default HeaderSlider;
