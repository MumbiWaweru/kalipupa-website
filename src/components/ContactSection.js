import React from 'react';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-lead">
            For bookings, collaborations, or inquiries, reach out to the team.
          </p>
          
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
          <div className="form-group">
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn-filled">Send Message</button>
        </form>
      </div>

      <style jsx>{`
        .contact {
          background-color: var(--surface-color);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .contact-lead {
          margin-bottom: 3rem;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .info-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
        }

        .info-icon {
          color: var(--primary-color);
          font-size: 1.5rem;
          margin-top: 0.2rem;
        }

        .info-label {
          font-family: 'Bebas Neue', cursive;
          color: var(--accent-color);
          font-size: 1.2rem;
          letter-spacing: 0.05em;
          display: block;
        }

        .info-text {
          color: var(--text-primary);
          margin: 0;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        input, textarea {
          width: 100%;
          padding: 1.2rem;
          background: var(--bg-color);
          border: 1px solid rgba(197, 160, 89, 0.1);
          color: var(--text-primary);
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          transition: var(--transition);
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          background: var(--surface-color);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
