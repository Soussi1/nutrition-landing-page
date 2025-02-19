import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import dietImg from "../assets/diet-plan.jpg";
import weightImg from "../assets/weight-loss.jpg";
import fitnessImg from "../assets/lifestyle.jpg";

const services = [
  {
    title: "Custom Diet Plans",
    desc: "Personalized meal plans for your goals.",
    img: dietImg,
  },
  {
    title: "Weight Management",
    desc: "Guidance for healthy weight control.",
    img: weightImg,
  },
  {
    title: "Fitness Coaching",
    desc: "Nutrition & workouts combined for results.",
    img: fitnessImg,
  },
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
            <img src={service.img} alt={service.title} className="service-img"/>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
