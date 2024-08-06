import { useEffect } from "react";
import "./App.css";
import "./css/style-switcher.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { setActiveStyle } from "./js/style-switcher";
import { HomeSection } from "./components/HomeSection";
import { AboutSection } from "./components/AboutSection";
import { ServiceSection } from "./components/ServiceSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ContactSection } from "./components/ContactSection";
import { AsideSection } from "./components/AsideSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    const dayNight = document.querySelector(".day-night");
    if (dayNight) {
      const icon = dayNight.querySelector("i");
      const handleDayNightClick = () => {
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
        document.body.classList.toggle("dark");
      };

      if (icon && document.body.classList.contains("dark")) {
        icon.classList.add("fa-sun");
      } else {
        icon.classList.add("fa-moon");
      }

      dayNight.addEventListener("click", handleDayNightClick);

      // Cleanup event listener on component unmount
      return () => {
        dayNight.removeEventListener("click", handleDayNightClick);
      };
    }
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="main-content">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AsideSection />}>
                <Route path="home" element={<HomeSection />} />
                <Route path="about" element={<AboutSection />} />
                <Route path="services" element={<ServiceSection />} />
                <Route path="portfolio" element={<PortfolioSection />} />
                <Route path="contact" element={<ContactSection />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </div>
      <div className="style-switcher">
        <div className="style-switcher-toggler s-icon">
          <i className="fas fa-cog fa-spin"></i>
        </div>
        <div className="day-night s-icon">
          <i className="fas"></i>
        </div>
        <h4>Theme Colors</h4>
        <div className="colors">
          <span
            className="color-1"
            onClick={() => setActiveStyle("color-1")}
          ></span>
          <span
            className="color-2"
            onClick={() => setActiveStyle("color-2")}
          ></span>
          <span
            className="color-3"
            onClick={() => setActiveStyle("color-3")}
          ></span>
          <span
            className="color-4"
            onClick={() => setActiveStyle("color-4")}
          ></span>
          <span
            className="color-5"
            onClick={() => setActiveStyle("color-5")}
          ></span>
        </div>
      </div>
    </>
  );
}

export default App;
