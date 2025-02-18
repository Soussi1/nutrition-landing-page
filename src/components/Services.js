import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const services = [
  { title: "Custom Diet Plans", desc: "Personalized meal plans for your goals." },
  { title: "Weight Management", desc: "Guidance for healthy weight control." },
  { title: "Fitness Coaching", desc: "Nutrition & workouts combined for results." },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            className="service-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
