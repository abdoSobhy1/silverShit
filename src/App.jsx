import HeaderSlider from "./Components/HeaderSlider";
import Offers from "./Components/Offers";
import "./App.css";
import AboutSec from "./Components/AboutSec";
import Newsletter from "./Components/Newsletter";

import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <HeaderSlider />
      <Offers />
      <AboutSec />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
