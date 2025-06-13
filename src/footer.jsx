import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import BackToTop from './BackToTop';
export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#333',
        color: '#fff',
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {/* Footer Content */}
      <Typography variant="body2" sx={{ mb: 2 }}>
        © {new Date().getFullYear()} Jay Vishwakarma | All Rights Reserved
      </Typography>
      <Box sx={{ display: 'flex', gap: 3 }}>
        {/* Social Media Icons */}
        <Link href="https://github.com/Jayvish08" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff',
         '&:hover': {
              color: '#FFC1DA', // Custom hover color for GitHub
              transition: 'color 0.3s ease',
            },
 }}>
          <FaGithub size={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/jayv08/" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff',
         '&:hover': {
              color: '#FFC1DA', // Custom hover color for GitHub
              transition: 'color 0.3s ease',
            }, }}>
          <FaLinkedin size={24} />
        </Link>
        <Link href="https://www.instagram.com/__._jay_._/" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff',
         '&:hover': {
              color: '#FFC1DA', // Custom hover color for GitHub
              transition: 'color 0.3s ease',
            }, }}>
          <FaInstagram size={24} />
        </Link>
        <Link href="https://x.com/JayVishwak84000" target="_blank" rel="noopener noreferrer" sx={{ color: '#fff' ,
         '&:hover': {
              color: '#FFC1DA', // Custom hover color for GitHub
              transition: 'color 0.3s ease',
            },}}>
          <FaTwitter size={24} />
        </Link>
      </Box>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Designed & Developed by Jay Vishwakarma
      </Typography>
        <BackToTop/>
    </Box>
  );
}