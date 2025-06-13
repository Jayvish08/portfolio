// ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  });
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Ensure the backend reads JSON
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const resData = await response.json();
        setMessage('Message sent successfully!');
        // Clear the form after successful submission
        setFormData({ name: '', email: '', description: '' });
      } else {
        setMessage('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred, please try again!');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', width: '300px' }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ padding: '0.5rem', width: '300px' }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <textarea
            name="description"
            placeholder="Your Message"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            style={{ padding: '0.5rem', width: '300px' }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <button type="submit" style={{ padding: '0.5rem 1rem' }}>
            Send Message
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ContactForm;