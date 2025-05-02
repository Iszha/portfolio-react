import React, { useState, useEffect } from 'react';
import { FiSend, FiCoffee, FiMusic, FiWifi, FiCheck } from 'react-icons/fi';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    meetingType: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    error: null
  });
  
  const [inputFocus, setInputFocus] = useState({
    name: false,
    email: false,
    message: false
  });

  const handleFocus = (field) => {
    setInputFocus(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setInputFocus(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleMeetingSelect = (type) => {
    setFormData(prev => ({ ...prev, meetingType: type }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, submitting: true, error: null });
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({ submitted: true, submitting: false, error: null });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '', meetingType: '' });
        setInputFocus({ name: false, email: false, message: false });
        setFormStatus({ submitted: false, submitting: false, error: null });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">Let's discuss your project or just say hello</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Let's Create Together</h3>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              
              <div className="meeting-options">
                <h4>Preferred Meeting Type</h4>
                <div className="meeting-types">
                  <button 
                    type="button"
                    className={`meeting-type ${formData.meetingType === 'coffee' ? 'active' : ''}`}
                    onClick={() => handleMeetingSelect('coffee')}
                  >
                    <FiCoffee className="meeting-icon" />
                    <span>Coffee Chat</span>
                  </button>
                  
                  <button 
                    type="button"
                    className={`meeting-type ${formData.meetingType === 'creative' ? 'active' : ''}`}
                    onClick={() => handleMeetingSelect('creative')}
                  >
                    <FiMusic className="meeting-icon" />
                    <span>Creative Talk</span>
                  </button>
                  
                  <button 
                    type="button"
                    className={`meeting-type ${formData.meetingType === 'virtual' ? 'active' : ''}`}
                    onClick={() => handleMeetingSelect('virtual')}
                  >
                    <FiWifi className="meeting-icon" />
                    <span>Virtual Meet</span>
                  </button>
                </div>
              </div>
              
              <div className="contact-availability">
                <h4>Current Availability</h4>
                <div className="availability-indicator available">
                  <div className="indicator-dot"></div>
                  <span>Available for new projects</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formStatus.submitted ? (
              <div className="form-success">
                <div className="success-icon">
                  <FiCheck />
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className={`form-group ${inputFocus.name ? 'focused' : ''}`}>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={() => handleBlur('name')}
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                  <div className="input-border"></div>
                </div>
                
                <div className={`form-group ${inputFocus.email ? 'focused' : ''}`}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => handleBlur('email')}
                    required
                  />
                  <label htmlFor="email">Your Email</label>
                  <div className="input-border"></div>
                </div>
                
                <div className={`form-group ${inputFocus.message ? 'focused' : ''}`}>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={() => handleBlur('message')}
                    rows="5"
                    required
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                  <div className="input-border"></div>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                  <FiSend className="send-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
