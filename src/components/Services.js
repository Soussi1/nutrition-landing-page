import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/global.css";

// Service Data
const services = [
  {
    title: "Personalized Diet Plans",
    description: "Tailor-made meal plans based on your lifestyle and goals.",
    image: "/assets/diet-plan.jpg", // Add actual image in public/assets/
  },
  {
    title: "Weight Loss Coaching",
    description: "Step-by-step guidance to help you achieve a healthy weight.",
    image: "/assets/weight-loss.jpg",
  },
  {
    title: "Healthy Lifestyle Consultation",
    description: "Learn how to develop long-term healthy eating habits.",
    image: "/assets/lifestyle.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
