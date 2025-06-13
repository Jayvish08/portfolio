import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        const resData = await response.json();
        setMessage(resData.message || 'Form submitted successfully!');
        setFormData({ name: '', email: '', description: '' });
      } else {
        setMessage('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error occurred, please try again!');
    }
  };

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      id="contact"
    >
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        Contact Me
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: { xs: '100%', sm: '400px' }
        }}
      >
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <TextField
          label="Description"
          name="description"
          variant="outlined"
          multiline
          rows={4}
          value={formData.description}
          onChange={handleInputChange}
          fullWidth
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2, backgroundColor: "#393E46" }}
        >
          Submit
        </Button>
      </Box>
      {message && <Alert   icon={<CheckIcon sx={{ mt: 2 }} fontSize="inherit" />} severity="success"><Typography sx={{ mt: 2 }}>{message}</Typography>
</Alert>}
    </Box>
  );
}