import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <div className="header-left" style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem' }}>
            <span className="section-index">05</span>
            <h2 className="section-title-large">Inquiry</h2>
          </div>
          <p className="contact-lead">For bookings, collaborations, or artistic inquiries, reach out to the team.</p>
          
          <div className="info-items">
            <div className="info-item">
              <FiMapPin className="info-icon" />
              <div>
                <span className="info-label">Location</span>
                <p className="info-text">Nairobi, Kenya</p>
              </div>
            </div>
            <div className="info-item">
              <FiPhone className="info-icon" />
              <div>
                <span className="info-label">Phone</span>
                <p className="info-text">+254 700 000 000</p>
              </div>
            </div>
            <div className="info-item">
              <FiMail className="info-icon" />
              <div>
                <span className="info-label">Email</span>
                <p className="info-text">contact@kalipupa.com</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Name / Organization" required />
          <input type="email" placeholder="Electronic Mail" required />
          <textarea placeholder="Your Message" rows="6" required></textarea>
          <button type="submit" className="btn btn-filled">Submit Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
