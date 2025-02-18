import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";

const testimonials = [
  { name: "John Doe", feedback: "Best nutrition advice I've ever received!" },
  { name: "Sarah Smith", feedback: "Helped me achieve my health goals easily." },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimony, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <p>"{testimony.feedback}"</p>
            <h4>- {testimony.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
