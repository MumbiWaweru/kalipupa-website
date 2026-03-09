// Enhanced ContactSection - NAIROBI HIPHOP ARTIST CONTACT
import React, { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiMessageSquare, FiUser, FiCheck } from 'react-icons/fi';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message should be at least 10 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FiMail />, title: 'Email', value: 'contact@kalipupa.com', description: 'Send us a message anytime' },
    { icon: <FiPhone />, title: 'Phone', value: '+254 700 000 000', description: 'Call for bookings and inquiries' },
    { icon: <FiMapPin />, title: 'Location', value: 'Nairobi, Kenya', description: 'Based in the heart of Nairobi' }
  ];

  return (
    <>
      <style jsx>{`
        .contact-section {
          position: relative;
          padding: 5rem 0;
          background: #0F0F0F;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2.5rem;
          position: relative;
          padding-bottom: 1.5rem;
        }

        .section-header h2 {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          color: #FFFFFF;
          margin-bottom: 0.75rem;
          position: relative;
          font-weight: 800;
        }

        .section-header h2::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #A855F7, #EC4899);
          border-radius: 2px;
        }

        .section-header p {
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          color: #CCCCCC;
          margin-top: 0.5rem;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .info-card {
          background: rgba(30, 30, 30, 0.9);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(124, 58, 237, 0.2);
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 100%;
        }

        .info-card:hover {
          transform: translateY(-5px);
          border-color: rgba(124, 58, 237, 0.4);
          box-shadow: 0 15px 35px rgba(124, 58, 237, 0.2);
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1.25rem;
        }

        .info-icon {
          font-size: clamp(1.5rem, 3vw, 1.8rem);
          color: #A855F7;
          min-width: 2rem;
          margin-top: 0.2rem;
          flex-shrink: 0;
        }

        .info-content h4 {
          color: #FFFFFF;
          margin-bottom: 0.25rem;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 700;
        }

        .info-content p {
          color: #CCCCCC;
          margin: 0;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          word-wrap: break-word;
        }

        .info-value {
          color: #A855F7;
          font-weight: 600;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
        }

        .social-links {
          display: flex;
          gap: 0.75rem;
          margin-top: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 42px;
          height: 42px;
          background: rgba(124, 58, 237, 0.15);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #A855F7;
          transition: all 0.3s ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
          box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
          flex-shrink: 0;
        }

        .social-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .social-link:hover::before {
          opacity: 0.2;
        }

        .social-link:hover {
          background: rgba(124, 58, 237, 0.2);
          border-color: rgba(124, 58, 237, 0.5);
          color: #C084FC;
          transform: translateY(-4px) scale(1.15);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
        }

        .contact-form {
          background: rgba(30, 30, 30, 0.9);
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid rgba(124, 58, 237, 0.2);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          width: 100%;
        }

        .form-group {
          margin-bottom: 1.25rem;
        }

        .form-label {
          display: block;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
          font-weight: 600;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
        }

        .form-input {
          width: 100%;
          padding: 0.9rem 1rem;
          background: rgba(40, 40, 40, 0.8);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          color: #FFFFFF;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
        }

        .form-input::placeholder {
          color: #AAAAAA;
        }

        .form-textarea {
          width: 100%;
          padding: 0.9rem 1rem;
          background: rgba(40, 40, 40, 0.8);
          border: 1px solid rgba(124, 58, 237, 0.3);
          border-radius: 12px;
          color: #FFFFFF;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          resize: vertical;
          min-height: 120px;
          transition: all 0.3s ease;
        }

        .form-textarea:focus {
          outline: none;
          border-color: #A855F7;
          box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.2);
        }

        .form-error {
          color: #EF4444;
          font-size: clamp(0.75rem, 2vw, 0.85rem);
          margin-top: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .submit-btn {
          width: 100%;
          padding: 1rem;
          background: linear-gradient(135deg, #7C3AED, #A855F7);
          color: #FFFFFF;
          border: none;
          border-radius: 12px;
          font-size: clamp(0.95rem, 2.5vw, 1.1rem);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .submit-btn:hover {
          background: linear-gradient(135deg, #A855F7, #C084FC);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.4);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .success-message {
          background: rgba(34, 197, 94, 0.1);
          border: 1px solid rgba(34, 197, 94, 0.3);
          color: #22C55E;
          padding: 1rem 1.25rem;
          border-radius: 12px;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
        }

        .form-icon {
          font-size: 1.1rem;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 0;
          }

          .contact-container {
            padding: 0 1.25rem;
          }

          .contact-form {
            padding: 1.5rem;
          }

          .social-links {
            justify-content: flex-start;
          }
        }

        /* Small Mobile */
        @media (max-width: 480px) {
          .contact-section {
            padding: 3rem 0;
          }

          .contact-container {
            padding: 0 1rem;
          }

          .info-card {
            padding: 1.25rem;
          }

          .contact-form {
            padding: 1.25rem;
          }

          .form-input,
          .form-textarea {
            padding: 0.8rem 0.9rem;
            font-size: 0.9rem;
          }

          .submit-btn {
            padding: 0.9rem;
          }
        }
      `}</style>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Reach out for bookings, collaborations, or just to say hello</p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)' }}>Contact Information</h3>

              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className="info-item">
                    <div className="info-icon">{info.icon}</div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <div className="info-value">{info.value}</div>
                      <p>{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="info-card">
                <h4 style={{ color: '#FFFFFF', marginBottom: '0.75rem', fontSize: 'clamp(1.1rem, 3vw, 1.2rem)' }}>Follow Me</h4>
                <div className="social-links">
                  <a href="https://instagram.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://facebook.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://soundcloud.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="SoundCloud">
                    <i className="fab fa-soundcloud"></i>
                  </a>
                  <a href="https://spotify.com/kalipupa" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Spotify">
                    <i className="fab fa-spotify"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h3 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)' }}>Send a Message</h3>

              {submitSuccess && (
                <div className="success-message">
                  <FiCheck className="form-icon" />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your full name"
                    />
                    <FiUser style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#AAAAAA' }} />
                  </div>
                  {errors.name && <div className="form-error"><FiMessageSquare /> {errors.name}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Enter your email address"
                    />
                    <FiMail style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#AAAAAA' }} />
                  </div>
                  {errors.email && <div className="form-error"><FiMessageSquare /> {errors.email}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <div style={{ position: 'relative' }}>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="What's this regarding?"
                    />
                    <FiMessageSquare style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#AAAAAA' }} />
                  </div>
                  {errors.subject && <div className="form-error"><FiMessageSquare /> {errors.subject}</div>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                  {errors.message && <div className="form-error"><FiMessageSquare /> {errors.message}</div>}
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FiSend className="form-icon" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="form-icon" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
