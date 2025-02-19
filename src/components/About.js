import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import expertImage from "../nutrition-expert.jpg"; // Add an expert image

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left: Text Content */}
        <motion.div 
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Our Nutrition Experts</h2>
          <p>
            We are dedicated to helping you achieve optimal health through 
            personalized nutrition plans. Our expert team provides science-backed 
            guidance tailored to your unique needs.
          </p>
          <p>
            Whether you're looking to improve your diet, manage your weight, or 
            enhance your energy levels, we are here to support your journey.
          </p>
          <a href="#services" className="cta-btn">Learn More</a>
        </motion.div>

        {/* Right: Expert Image */}
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={expertImage} alt="Nutrition Expert" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
