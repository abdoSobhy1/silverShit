import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Offer from "./Offer";
import "./OffersSlider.css";

import offers from "../DummyData/tickets.json";

// const offers = [
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "رحلة شرم الشيخ",
//     code: getRandomNumber(1000, 9999),
//     desc: "تقدم شركة الجرز الفضي للسياحة والسفر العديد من الرحلات",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "رحلة الغردقة",
//     code: getRandomNumber(1000, 9999),
//     desc: "استمتع بأفضل الأوقات في الغردقة مع عروضنا الحصرية",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "جولة النيل",
//     code: getRandomNumber(1000, 9999),
//     desc: "اكتشف جمال النيل الساحر مع جولاتنا المميزة",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "زيارة أبو سمبل",
//     code: getRandomNumber(1000, 9999),
//     desc: "انطلق في رحلة عبر التاريخ واستكشف أبو سمبل الأثرية",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "رحلة الأهرامات",
//     code: getRandomNumber(1000, 9999),
//     desc: "استمتع بجولة لأهرامات الجيزة الرائعة وسط الأهرامات",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "جولة لندن",
//     code: getRandomNumber(1000, 9999),
//     desc: "تعرف على معالم لندن الشهيرة مع جولاتنا السياحية",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "رحلة إسطنبول",
//     code: getRandomNumber(1000, 9999),
//     desc: "تجربة لا تنسى في مدينة إسطنبول الساحرة",
//     cta: "احجز الآن",
//   },
//   {
//     img: getRandomImage(),
//     to: "#",
//     title: "عطلة في باريس",
//     code: getRandomNumber(1000, 9999),
//     desc: "استمتع بأجواء باريس الرومانسية واستكشف أماكنها الساحرة",
//     cta: "احجز الآن",
//   },
// ];

const Offers = () => {
  const [slidesNumber, setSlidesNumber] = useState(3);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });
  useEffect(() => {
    windowWidth > 768 ? setSlidesNumber(3) : setSlidesNumber(1);
  }, [windowWidth]);
  const settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    speed: 500,
    slidesToShow: slidesNumber,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div className="promoSlider">
      <Slider {...settings}>
        {offers.map((offer) => (
          <Offer
            img={offer.imageSrc}
            to={offer.to}
            title={offer.title}
            code="1234"
            key={offer.id}
            desc={offer.description}
            cta="احجز الآن"
            id={offer.id}
          />
        ))}
      </Slider>
    </div>
  );
};

export default Offers;
