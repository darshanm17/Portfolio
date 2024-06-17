import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_4qikgvv';
    const templateID = 'template_cp4xi6v';
    const userID = 'lLQrkTKQpKkDdpFQ8';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((result) => {
        alert('Message Sent Successfully');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send the message, please try again later.');
      });
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Contact Me</h2>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <button type="submit">Connect</button>
      </form>
    </div>
  );
};

export default ContactForm;
