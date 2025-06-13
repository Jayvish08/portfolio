import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import icons
import { Box, Typography } from '@mui/material';

export default function ContactMe() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        p: 4,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', textAlign: 'center' }}>
        Contact With Me :
      </Typography>
      <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center' }}>
        {/* Social Media Icons */}
        <a href="https://github.com/Jayvish08" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} color="#333" />
        </a>
        <a href="https://www.linkedin.com/in/jayv08/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} color="#0077B5" />
        </a>
        <a href="https://www.instagram.com/__._jay_._/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#E4405F" />
        </a>
        <a href="https://x.com/JayVishwak84000" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} color="#1DA1F2" />
        </a>
      </Box>
    </Box>
  );
}