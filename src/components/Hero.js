import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="transbox"><h1>Your Personalized Nutrition Plan</h1></div>
      <p>Start your journey to a healthier lifestyle with expert guidance.</p>
      <a href="#about" className="cta-btn">Learn More</a>
    </motion.section>
  );
};

export default Hero;
