import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer"

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
