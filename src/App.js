import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import Footer from "./Components/Footer";
import OurServicesPage from "./Pages/OurServicesPage";
import ContactUsPage from "./Pages/ContactUsPage";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll(".navbar-nav a");

    const onScroll = () => {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offsetTop = sec.offsetTop;
        let offsetHeight = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offsetTop && top < offsetTop + offsetHeight) {
          links.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${id}`) {
              link.classList.add("active");
            }
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pages/about" element={<AboutUsPage />} />
        <Route path="/pages/services" element={<OurServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
