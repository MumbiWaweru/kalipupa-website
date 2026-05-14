import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p style={{ marginBottom: '3rem' }}>For bookings, collaborations, or inquiries, reach out to the team.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <FiMapPin style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
              <div>
                <span style={{ fontFamily: 'Bebas Neue', color: 'var(--accent-color)', fontSize: '1.2rem' }}>Location</span>
                <p style={{ color: 'white', margin: 0 }}>Nairobi, Kenya</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <FiPhone style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
              <div>
                <span style={{ fontFamily: 'Bebas Neue', color: 'var(--accent-color)', fontSize: '1.2rem' }}>Phone</span>
                <p style={{ color: 'white', margin: 0 }}>+254 700 000 000</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <FiMail style={{ color: 'var(--primary-color)', fontSize: '1.5rem' }} />
              <div>
                <span style={{ fontFamily: 'Bebas Neue', color: 'var(--accent-color)', fontSize: '1.2rem' }}>Email</span>
                <p style={{ color: 'white', margin: 0 }}>contact@kalipupa.com</p>
              </div>
            </div>
          </div>
        </div>

        <form className="contact-form" style={{ display: 'flex', flexDirection: 'column' }}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required style={{ width: '100%', padding: '1.2rem', background: 'var(--bg-color)', border: '1px solid rgba(197, 160, 89, 0.1)', color: 'white', marginBottom: '1.5rem' }}></textarea>
          <button type="submit" className="btn btn-filled">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
