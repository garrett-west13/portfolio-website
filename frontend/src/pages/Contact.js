import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add your form submission logic here
    console.log(formData);
    alert('Message sent!');
  };

  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      <h2 className="connect-heading mt-5">Connect with Me</h2>
      <div className="social-links">
        <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
