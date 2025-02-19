import React from "react";
import { motion } from "framer-motion";
import "../styles/global.css";
import client1 from "../assets/client1.jpg";
import client2 from "../assets/client2.jpg";
import client3 from "../assets/client3.jpg";
import client4 from "../assets/client4.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The personalized nutrition plan changed my life! I feel healthier and more energetic than ever.",
    img: client1,
    role: "Health Enthusiast",
  },
  {
    name: "David Smith",
    text: "I struggled with my diet for years. Their guidance made everything easier and enjoyable.",
    img: client2,
    role: "Fitness Coach",
  },
  {
    name: "Emily Davis",
    text: "Thanks to this amazing team, I reached my fitness goals faster than I ever imagined!",
    img: client3,
    role: "Athlete",
  },
  {
    name: "Michael Brown",
    text: "Great advice and support! I highly recommend their services to anyone looking to eat healthier.",
    img: client4,
    role: "Business Consultant",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="testimonial-content">
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-info">
                <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
