import NavBar from "./NavBar"
import HeroSection from "./HeroSection"
import Experience from "./Experience"
import Projects from "./Project"
import AboutMe from "./Aboutme"
import ContactForm from "./form"
import Footer from "./footer"
import { useNavigate } from "react-router-dom";

function Super() {
  const navigate = useNavigate();
  return (
    <>
      <NavBar navigate={navigate}/>
      <HeroSection />
      <AboutMe />
      <Experience/>
      <Projects />
      <ContactForm />
      <Footer/>
    </>
  );
}

export default Super;