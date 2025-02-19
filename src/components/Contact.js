import React, { useState } from "react";
import "../styles/global.css";

const ContactUs = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out with any questions or inquiries.</p>

      <button className="contact-btn" onClick={toggleForm}>
        {showForm ? "Close Form" : "Send Message"}
      </button>

      <div className={`contact-form-container ${showForm ? "show" : ""}`}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
